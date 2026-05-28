// Shared components, icons, and theme system for the Stack prototype.

// ── Theme definitions ──────────────────────────────────────────────
const THEMES = {
  sage: {
    label: 'Sage',
    bg:      '#F3F2EC',
    surface: '#FFFFFF',
    surface2:'#E9E7DE',
    ink:     '#161814',
    ink2:    '#4A4D44',
    muted:   '#8C8E84',
    line:    '#E3E1D7',
    primary: '#1F4D3F',
    primaryInk: '#FFFFFF',
    accent:  '#D9543A',
    chip:    '#E9E7DE',
  },
  terracotta: {
    label: 'Terracotta',
    bg:      '#FAF6F0',
    surface: '#FFFFFF',
    surface2:'#F1ECE2',
    ink:     '#1F1A14',
    ink2:    '#534B40',
    muted:   '#928879',
    line:    '#EAE3D5',
    primary: '#B5462E',
    primaryInk: '#FFFFFF',
    accent:  '#2E6E5B',
    chip:    '#F1ECE2',
  },
  slate: {
    label: 'Slate',
    bg:      '#F4F4F5',
    surface: '#FFFFFF',
    surface2:'#EAEAEC',
    ink:     '#0A0A0B',
    ink2:    '#3F3F46',
    muted:   '#8A8A91',
    line:    '#E4E4E7',
    primary: '#0A0A0B',
    primaryInk: '#FFFFFF',
    accent:  '#F0B400',
    chip:    '#EAEAEC',
  },
  cobalt: {
    label: 'Cobalt',
    bg:      '#F2F3F7',
    surface: '#FFFFFF',
    surface2:'#E6E8F1',
    ink:     '#0B1530',
    ink2:    '#3A4368',
    muted:   '#8088A4',
    line:    '#DEE1EC',
    primary: '#2647C5',
    primaryInk: '#FFFFFF',
    accent:  '#FF9F1C',
    chip:    '#E6E8F1',
  },
};

const FONTS = {
  geist: {
    label: 'Geist',
    sans: "'Geist', ui-sans-serif, system-ui, sans-serif",
    display: "'Geist', ui-sans-serif, system-ui, sans-serif",
    mono: "'Geist Mono', ui-monospace, monospace",
    displayWeight: 600,
    displayTracking: '-0.02em',
  },
  jakarta: {
    label: 'Jakarta',
    sans: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
    display: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
    mono: "'Geist Mono', ui-monospace, monospace",
    displayWeight: 700,
    displayTracking: '-0.025em',
  },
  editorial: {
    label: 'Editorial',
    sans: "'Manrope', ui-sans-serif, system-ui, sans-serif",
    display: "'Instrument Serif', 'Newsreader', Georgia, serif",
    mono: "'Geist Mono', ui-monospace, monospace",
    displayWeight: 400,
    displayTracking: '-0.01em',
  },
};

// ── Icons ──────────────────────────────────────────────────────────
const Icon = {
  chevL: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  chevR: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  chevD: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  search: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  bag: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 8h14l-1 11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  pin: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 22s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12Z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8"/></svg>,
  star: (p) => <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l3 7 7.5.7-5.7 5 1.7 7.3L12 18l-6.5 4 1.7-7.3-5.7-5L9 9z"/></svg>,
  clock: (p) => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  plus: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>,
  minus: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>,
  home: (p, active) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9Z" stroke="currentColor" strokeWidth={active?2.2:1.7} fill={active?'currentColor':'none'} opacity={active?0.95:1}/></svg>,
  receipt: (p, active) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" stroke="currentColor" strokeWidth={active?2.2:1.7} fill={active?'currentColor':'none'}/><path d="M9 8h6M9 12h6M9 16h4" stroke={active?'#fff':'currentColor'} strokeWidth="1.6" strokeLinecap="round"/></svg>,
  people: (p, active) => <svg width="24" height="22" viewBox="0 0 24 22" fill="none" {...p}><circle cx="9" cy="7" r="3.2" stroke="currentColor" strokeWidth={active?2.2:1.7} fill={active?'currentColor':'none'}/><circle cx="17" cy="8.5" r="2.6" stroke="currentColor" strokeWidth={active?2.2:1.7} fill={active?'currentColor':'none'}/><path d="M3 19c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5" stroke="currentColor" strokeWidth={active?2.2:1.7} strokeLinecap="round" fill="none"/><path d="M15 19c0-2.4 1.7-4.4 4-4.4s4 2 4 4.4" stroke="currentColor" strokeWidth={active?2.2:1.7} strokeLinecap="round" fill="none"/></svg>,
  user: (p, active) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth={active?2.2:1.7} fill={active?'currentColor':'none'}/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth={active?2.2:1.7} strokeLinecap="round" fill="none"/></svg>,
  check: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  close: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  bike: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><circle cx="5.5" cy="17" r="3.5" stroke="currentColor" strokeWidth="1.7"/><circle cx="18.5" cy="17" r="3.5" stroke="currentColor" strokeWidth="1.7"/><path d="M5.5 17l4-7h7l2 7M13 6h2l1.5 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  sparkle: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></svg>,
  repeat: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 4v4h-4M21 12a9 9 0 0 1-15 6.7L3 16M3 20v-4h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

// ── App header (status-bar safe top bar inside the device) ─────────
function ScreenHeader({ theme, left, title, right, sub, transparent = false }) {
  return (
    <div style={{
      paddingTop: 54,
      paddingLeft: 16, paddingRight: 16, paddingBottom: 10,
      display: 'flex', flexDirection: 'column', gap: 4,
      background: transparent ? 'transparent' : theme.bg,
      position: 'relative', zIndex: 4,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 32 }}>
        <div style={{ width: 64, display: 'flex', alignItems: 'center', gap: 6 }}>{left}</div>
        {title && <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink, letterSpacing: '-0.01em' }}>{title}</div>}
        <div style={{ width: 64, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6 }}>{right}</div>
      </div>
      {sub}
    </div>
  );
}

// ── Round icon button ──────────────────────────────────────────────
function IconButton({ children, onClick, theme, size = 36, variant = 'ghost' }) {
  const bg = variant === 'ghost'
    ? 'transparent'
    : variant === 'solid' ? theme.surface : theme.surface2;
  const border = variant === 'outline' ? `1px solid ${theme.line}` : 'none';
  const shadow = variant === 'solid' ? '0 1px 2px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)' : 'none';
  return (
    <button onClick={onClick} className="tap" style={{
      width: size, height: size, borderRadius: size/2,
      background: bg, color: theme.ink,
      border, boxShadow: shadow, cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 0,
    }}>{children}</button>
  );
}

// ── Avatar (initials) ──────────────────────────────────────────────
function Avatar({ name, color = '#666', size = 28, ring }) {
  const initials = name.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: size/2, background: color,
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Geist', system-ui, sans-serif",
      fontSize: Math.round(size * 0.38), fontWeight: 600, letterSpacing: '-0.02em',
      boxShadow: ring ? `0 0 0 2px ${ring}` : 'none',
      flexShrink: 0,
    }}>{initials}</div>
  );
}

// ── Bottom tab bar ─────────────────────────────────────────────────
function TabBar({ active, onChange, theme, cartCount = 0 }) {
  const tabs = [
    { id: 'home',   label: 'Browse',  Icon: Icon.home },
    { id: 'orders', label: 'Orders',  Icon: Icon.receipt },
    { id: 'group',  label: 'Group',   Icon: Icon.people },
    { id: 'me',     label: 'Me',      Icon: Icon.user },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      paddingBottom: 22, paddingTop: 6,
      background: theme.surface,
      borderTop: `1px solid ${theme.line}`,
      display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start',
      zIndex: 30,
    }}>
      {tabs.map(t => {
        const isActive = active === t.id;
        return (
          <button key={t.id} onClick={() => onChange(t.id)} className="tap" style={{
            background: 'transparent', border: 0, cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            padding: '6px 12px 4px',
            color: isActive ? theme.primary : theme.muted,
            position: 'relative',
          }}>
            {t.Icon({}, isActive)}
            <span style={{
              fontFamily: "'Geist', system-ui, sans-serif",
              fontSize: 10.5, fontWeight: isActive ? 600 : 500,
              letterSpacing: '0.01em',
            }}>{t.label}</span>
            {t.id === 'group' && cartCount > 0 && (
              <div style={{
                position: 'absolute', top: 2, right: 8,
                minWidth: 16, height: 16, borderRadius: 8, padding: '0 4px',
                background: theme.accent, color: '#fff',
                fontSize: 9.5, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxSizing: 'border-box',
              }}>{cartCount}</div>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ── Primary CTA button ─────────────────────────────────────────────
function PrimaryButton({ children, onClick, theme, full = false, size = 'lg', leading, trailing, style = {} }) {
  const h = size === 'sm' ? 40 : size === 'md' ? 48 : 54;
  const fs = size === 'sm' ? 14 : size === 'md' ? 15 : 16;
  return (
    <button onClick={onClick} className="tap" style={{
      height: h, borderRadius: h/2,
      background: theme.primary, color: theme.primaryInk,
      border: 0, cursor: 'pointer', padding: '0 22px',
      width: full ? '100%' : undefined,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      fontFamily: "'Geist', system-ui, sans-serif",
      fontSize: fs, fontWeight: 600, letterSpacing: '-0.01em',
      boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 6px 18px rgba(0,0,0,0.10)',
      ...style,
    }}>
      {leading}
      {children}
      {trailing}
    </button>
  );
}

// ── Chip (segmented) ───────────────────────────────────────────────
function Chip({ label, active, onClick, theme }) {
  return (
    <button onClick={onClick} className="tap" style={{
      height: 34, padding: '0 14px', borderRadius: 17,
      background: active ? theme.ink : theme.chip,
      color: active ? theme.bg : theme.ink2,
      border: 0, cursor: 'pointer',
      fontFamily: "'Geist', system-ui, sans-serif",
      fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em',
      whiteSpace: 'nowrap', flexShrink: 0,
    }}>{label}</button>
  );
}

// ── Banner: active group order ─────────────────────────────────────
function GroupBanner({ theme, font, members, deadline, onTap }) {
  const joined = members.filter(m => m.joined);
  return (
    <div onClick={onTap} className="tap" style={{
      margin: '4px 16px 0',
      borderRadius: 22,
      background: theme.ink, color: theme.bg,
      padding: '16px 18px',
      display: 'flex', flexDirection: 'column', gap: 12,
      cursor: 'pointer',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* accent bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: theme.accent }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 7, height: 7, borderRadius: 4, background: theme.accent, boxShadow: `0 0 0 4px ${theme.accent}25` }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.78 }}>
            Live group order
          </span>
        </div>
        <span style={{ fontFamily: font.mono, fontSize: 11, opacity: 0.6 }}>closes {deadline}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{
            fontFamily: font.display, fontWeight: font.displayWeight, fontSize: 22,
            letterSpacing: font.displayTracking, lineHeight: 1.1,
          }}>Sweetgreen, Tuesday</div>
          <div style={{ fontSize: 12.5, opacity: 0.65 }}>
            {joined.length} of {members.length} teammates have ordered
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          {joined.slice(0, 4).map((m, i) => (
            <div key={m.id} style={{ marginLeft: i === 0 ? 0 : -8 }}>
              <Avatar name={m.name} color={m.color} size={26} ring={theme.ink} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Restaurant card ────────────────────────────────────────────────
function RestaurantCard({ r, theme, font, onClick }) {
  return (
    <div onClick={onClick} className="tap" style={{
      cursor: 'pointer',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{
        position: 'relative', borderRadius: 18, overflow: 'hidden',
        aspectRatio: '16 / 10', background: theme.surface2,
      }}>
        <img src={r.img} alt={r.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {r.tag && (
          <div style={{
            position: 'absolute', top: 10, left: 10,
            background: theme.bg, color: theme.ink,
            padding: '5px 9px', borderRadius: 999,
            fontSize: 10.5, fontWeight: 600, letterSpacing: '0.02em',
          }}>{r.tag}</div>
        )}
        <div style={{
          position: 'absolute', bottom: 10, right: 10,
          background: 'rgba(0,0,0,0.7)', color: '#fff',
          padding: '5px 9px', borderRadius: 999,
          display: 'flex', alignItems: 'center', gap: 4,
          fontSize: 11, fontWeight: 500,
        }}>
          <Icon.clock /> {r.eta}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
          <div style={{
            fontFamily: font.display, fontWeight: font.displayWeight,
            fontSize: 17, letterSpacing: font.displayTracking,
            color: theme.ink, lineHeight: 1.2,
          }}>{r.name}</div>
          <div style={{ fontSize: 12.5, color: theme.muted }}>{r.cuisine} · {r.fee} fee</div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          color: theme.ink, fontSize: 13, fontWeight: 600,
          flexShrink: 0,
        }}>
          <Icon.star style={{ color: theme.accent }} />
          {r.rating.toFixed(1)}
        </div>
      </div>
    </div>
  );
}

// ── Stepper ────────────────────────────────────────────────────────
function Stepper({ value, onChange, theme, min = 1 }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center',
      background: theme.surface, border: `1px solid ${theme.line}`,
      borderRadius: 999, padding: 4, gap: 4,
    }}>
      <button className="tap" onClick={() => onChange(Math.max(min, value - 1))} style={{
        width: 34, height: 34, borderRadius: 17, border: 0,
        background: theme.chip, color: theme.ink, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}><Icon.minus /></button>
      <div style={{
        minWidth: 28, textAlign: 'center',
        fontFamily: "'Geist', system-ui, sans-serif",
        fontSize: 16, fontWeight: 600, color: theme.ink,
        fontVariantNumeric: 'tabular-nums',
      }}>{value}</div>
      <button className="tap" onClick={() => onChange(value + 1)} style={{
        width: 34, height: 34, borderRadius: 17, border: 0,
        background: theme.ink, color: theme.primaryInk, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}><Icon.plus /></button>
    </div>
  );
}

// ── Option row (radio/checkbox styled) ─────────────────────────────
function OptionRow({ label, sub, price, selected, onClick, theme, font, multi = false }) {
  return (
    <button onClick={onClick} className="tap" style={{
      width: '100%', textAlign: 'left',
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '14px 16px',
      background: 'transparent', border: 0, cursor: 'pointer',
      borderBottom: `1px solid ${theme.line}`,
    }}>
      <div style={{
        width: 22, height: 22,
        borderRadius: multi ? 6 : 11,
        border: selected ? 0 : `1.6px solid ${theme.line}`,
        background: selected ? theme.primary : 'transparent',
        color: theme.primaryInk,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        {selected && <Icon.check />}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, color: theme.ink, fontWeight: 500 }}>{label}</div>
        {sub && <div style={{ fontSize: 12.5, color: theme.muted, marginTop: 1 }}>{sub}</div>}
      </div>
      {price !== undefined && (
        <div style={{
          fontFamily: font.mono, fontSize: 13, color: theme.ink2,
        }}>{price >= 0 ? '+' : '−'} ${Math.abs(price).toFixed(2)}</div>
      )}
    </button>
  );
}

// ── Section label ──────────────────────────────────────────────────
function SectionLabel({ children, theme, font, right }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '0 20px', marginBottom: 10,
    }}>
      <div style={{
        fontFamily: font.display, fontWeight: font.displayWeight,
        fontSize: 18, letterSpacing: font.displayTracking,
        color: theme.ink,
      }}>{children}</div>
      {right}
    </div>
  );
}

Object.assign(window, {
  THEMES, FONTS, Icon,
  ScreenHeader, IconButton, Avatar, TabBar, PrimaryButton, Chip,
  GroupBanner, RestaurantCard, Stepper, OptionRow, SectionLabel,
});
