import { existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, join, relative } from "node:path";
import * as docgen from "react-docgen-typescript";

type ContractProp = {
  name: string;
  type: string;
  required: boolean;
  description: string;
  defaultValue: string | null;
};

type Contract = {
  componentName: string;
  source: string;
  props: Record<string, ContractProp>;
};

const root = process.cwd();
const componentsDir = join(root, "src", "components");
const tsconfigPath = join(root, "tsconfig.json");

const parserOptions: docgen.ParserOptions = {
  savePropValueAsString: true,
  shouldExtractValuesFromUnion: true,
  shouldRemoveUndefinedFromOptional: true,
  propFilter(prop) {
    return !prop.parent || !prop.parent.fileName.includes("node_modules/@types/react");
  }
};

const parser = existsSync(tsconfigPath)
  ? docgen.withCustomConfig(tsconfigPath, parserOptions)
  : docgen.withCompilerOptions({ jsx: 4, esModuleInterop: true }, parserOptions);

function findComponentFiles(dir: string): string[] {
  if (!existsSync(dir)) {
    return [];
  }

  return readdirSync(dir).flatMap((entry) => {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      return findComponentFiles(fullPath);
    }

    return fullPath.endsWith(".tsx") && !fullPath.endsWith(".stories.tsx")
      ? [fullPath]
      : [];
  });
}

function normalizeType(prop: docgen.PropItem): string {
  if (Array.isArray(prop.type.value)) {
    return prop.type.value.map((item) => item.value).join(" | ");
  }

  return prop.type.name;
}

function buildContract(filePath: string): Contract | null {
  const docs = parser.parse(filePath);
  if (docs.length === 0) {
    return null;
  }

  const expectedName = basename(filePath, ".tsx");
  const component = docs.find((doc) => doc.displayName === expectedName) ?? docs[0];
  const props = Object.fromEntries(
    Object.entries(component.props)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([name, prop]) => [
        name,
        {
          name,
          type: normalizeType(prop),
          required: prop.required,
          description: prop.description || "",
          defaultValue: prop.defaultValue?.value ?? null
        }
      ])
  );

  return {
    componentName: component.displayName,
    source: relative(root, filePath),
    props
  };
}

const contracts = findComponentFiles(componentsDir)
  .map((filePath) => ({ filePath, contract: buildContract(filePath) }))
  .filter((result): result is { filePath: string; contract: Contract } => Boolean(result.contract));

for (const { filePath, contract } of contracts) {
  const outputPath = join(dirname(filePath), `${contract.componentName}.contract.json`);
  writeFileSync(outputPath, `${JSON.stringify(contract, null, 2)}\n`);
}

console.log(`Generated ${contracts.length} component contract${contracts.length === 1 ? "" : "s"}.`);
