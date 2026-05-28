# Stack Team Lunch Design Template

This repo is the design source of truth consumed by `../design-system-mcp`.

It contains:

- `tokens.json` derived from the Claude Design theme/font system.
- React/TSX components in `src/components`.
- Generated prop contracts next to each component.
- Machine-readable metadata next to each component.
- Raw Claude Design handoff files in `handoffs/`.

The imported handoff is from:

```txt
https://api.anthropic.com/v1/design/h/3VYdB6fCUrAvZSYVmj8nzg?open_file=index.html
```

The bundle README instructed agents to read the chat transcript and `project/index.html`, then follow imports. The intent is a mobile-first office team lunch ordering product named **Stack** with browse, menu, item customization, group cart, tracking, past orders, and profile surfaces. The requested aesthetic is clean, minimal, modern, with color-theme and font-pairing tweaks.

## Development

```sh
npm install
npm run generate:contracts
npm run build
npm run prepare:githooks
```

Commit after every design-system change. The MCP server returns this repo's resolved commit SHA in every response.
