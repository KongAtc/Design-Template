// Stack — Team Lunch · main app

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "sage",
  "font": "geist"
}/*EDITMODE-END*/;

// Simple "Me" placeholder — not a focus screen, but the tab needs to land somewhere.
function MeScreen({ ctx }) {
  const { theme, font } = ctx;
  return (
    <div className="fade-in" style={{ paddingBottom: 100 }}>
      <ScreenHeader theme={theme}
        sub={
          <div style={{
            fontFamily: font.display, fontWeight: font.displayWeight,
            fontSize: 32, letterSpacing: font.displayTracking,
            color: theme.ink, lineHeight: 1.05, marginTop: 8,
          }}>You</div>
        }
      />
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{
          background: theme.surface, borderRadius: 20, padding: '20px 18px',
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <Avatar name="Alex Park" color="#FF7A59" size={56} />
          <div>
            <div style={{ fontSize: 18, fontWeight: 600, color: theme.ink, letterSpacing: '-0.01em' }}>Alex Park</div>
            <div style={{ fontSize: 12.5, color: theme.muted, marginTop: 2 }}>Design team · alex@company.co</div>
          </div>
        </div>
        {[
          ['Saved restaurants', '12'],
          ['Default address', 'HQ · 5th floor'],
          ['Payment method', 'Team card ·· 4421'],
          ['Dietary notes', 'No shellfish'],
          ['Notifications', 'On'],
        ].map(([l, v]) => (
          <div key={l} style={{
            background: theme.surface, borderRadius: 16,
            padding: '14px 16px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ fontSize: 14, color: theme.ink, fontWeight: 500 }}>{l}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: theme.muted, fontSize: 13 }}>
              {v} <Icon.chevR />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const theme = THEMES[t.theme] || THEMES.sage;
  const font = FONTS[t.font] || FONTS.geist;

  // Navigation: stack of screens
  const [stack, setStack] = React.useState(['home']);
  const [tab, setTab] = React.useState('home');
  const screen = stack[stack.length - 1];

  const go = React.useCallback((s) => {
    setStack(prev => [...prev, s]);
  }, []);

  const back = React.useCallback(() => {
    setStack(prev => prev.length > 1 ? prev.slice(0, -1) : prev);
  }, []);

  const setActiveTab = React.useCallback((newTab) => {
    setTab(newTab);
    // Each tab resets to its root screen.
    if (newTab === 'home')   setStack(['home']);
    if (newTab === 'orders') setStack(['orders']);
    if (newTab === 'group')  setStack(['cart']);
    if (newTab === 'me')     setStack(['me']);
  }, []);

  const ctx = { theme, font, go, back, setActiveTab };

  // Choose body bg per screen: item detail uses bg, others use bg too.
  const bodyBg = theme.bg;

  // Number of items in active group order for tab badge
  const cartCount = TEAMMATES.filter(m => m.joined).length;

  // Render
  let body = null;
  if (screen === 'home')     body = <HomeScreen ctx={ctx} />;
  if (screen === 'menu')     body = <MenuScreen ctx={ctx} />;
  if (screen === 'item')     body = <ItemScreen ctx={ctx} />;
  if (screen === 'cart')     body = <CartScreen ctx={ctx} />;
  if (screen === 'tracking') body = <TrackingScreen ctx={ctx} />;
  if (screen === 'orders')   body = <OrdersScreen ctx={ctx} />;
  if (screen === 'me')       body = <MeScreen ctx={ctx} />;

  // Hide bottom tab bar on item/tracking which have their own bottom CTA / chrome
  const hideTabBar = screen === 'item';

  return (
    <div style={{
      fontFamily: font.sans, color: theme.ink,
    }}>
      <IOSDevice width={402} height={874}>
        <div style={{
          height: '100%', position: 'relative',
          background: bodyBg,
          fontFamily: font.sans,
        }}>
          {/* Scroll container for screen content */}
          <div className="scroll" style={{
            height: '100%', overflow: 'auto',
            paddingBottom: hideTabBar ? 0 : 0,
          }} key={screen /* re-mount on screen change for fade-in */}>
            {body}
          </div>
          {!hideTabBar && (
            <TabBar active={tab} onChange={setActiveTab} theme={theme} cartCount={cartCount} />
          )}
        </div>
      </IOSDevice>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio label="Palette" value={t.theme}
          options={Object.keys(THEMES).map(k => ({ value: k, label: THEMES[k].label }))}
          onChange={(v) => setTweak('theme', v)} />
        <ThemePreview themes={THEMES} />

        <TweakSection label="Typography" />
        <TweakRadio label="Font pairing" value={t.font}
          options={Object.keys(FONTS).map(k => ({ value: k, label: FONTS[k].label }))}
          onChange={(v) => setTweak('font', v)} />
        <FontPreview fonts={FONTS} active={t.font} />

        <TweakSection label="Jump to screen" />
        <ScreenJumper screen={screen} go={(s) => setStack([s])} setActiveTab={setActiveTab} />
      </TweaksPanel>
    </div>
  );
}

// ── Tweaks helper components ──────────────────────────────────────
function ThemePreview({ themes }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6,
      padding: '2px 0',
    }}>
      {Object.entries(themes).map(([k, th]) => (
        <div key={k} style={{
          height: 28, borderRadius: 6, overflow: 'hidden',
          display: 'flex', border: '1px solid rgba(0,0,0,0.08)',
        }}>
          <div style={{ flex: 1, background: th.primary }} />
          <div style={{ flex: 1, background: th.bg }} />
          <div style={{ flex: 1, background: th.accent }} />
        </div>
      ))}
    </div>
  );
}

function FontPreview({ fonts, active }) {
  const f = fonts[active];
  return (
    <div style={{
      padding: '8px 10px', borderRadius: 8,
      background: 'rgba(0,0,0,0.04)',
      display: 'flex', flexDirection: 'column', gap: 4,
    }}>
      <div style={{ fontFamily: f.display, fontSize: 18, fontWeight: f.displayWeight, letterSpacing: f.displayTracking, lineHeight: 1.1 }}>
        Harvest Bowl
      </div>
      <div style={{ fontFamily: f.sans, fontSize: 11, opacity: 0.65 }}>
        Wild rice, roasted chicken, sweet potato.
      </div>
      <div style={{ fontFamily: f.mono, fontSize: 10.5, opacity: 0.7 }}>$13.95 · 705 kcal</div>
    </div>
  );
}

function ScreenJumper({ screen, go, setActiveTab }) {
  const opts = [
    ['home',     'Browse',   'home'],
    ['menu',     'Menu',     'home'],
    ['item',     'Item',     'home'],
    ['cart',     'Cart',     'group'],
    ['tracking', 'Tracking', 'home'],
    ['orders',   'Past',     'orders'],
    ['me',       'Profile',  'me'],
  ];
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4,
    }}>
      {opts.map(([id, label, tab]) => (
        <button key={id} onClick={() => { setActiveTab(tab); go(id); }} style={{
          padding: '6px 4px', borderRadius: 6,
          background: screen === id ? '#29261b' : 'rgba(0,0,0,0.04)',
          color: screen === id ? '#fff' : '#29261b',
          border: 0, cursor: 'pointer',
          fontSize: 10.5, fontWeight: 600,
          fontFamily: 'inherit',
        }}>{label}</button>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
