// All 6 screens. Each takes { ctx } with theme/font/navigation/state.

// ═══════════════════════════════════════════════════════════════════
// 1. HOME / BROWSE
// ═══════════════════════════════════════════════════════════════════
function HomeScreen({ ctx }) {
  const { theme, font, go, setActiveTab } = ctx;
  const [cat, setCat] = React.useState('all');

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 18, paddingBottom: 100 }}>
      <ScreenHeader
        theme={theme}
        left={
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: theme.muted, fontSize: 12 }}>
            <Icon.pin /> <span style={{ color: theme.ink2, fontWeight: 500 }}>HQ · 5th floor</span>
          </div>
        }
        right={
          <React.Fragment>
            <IconButton theme={theme} variant="outline" onClick={() => go('cart')}>
              <Icon.bag />
            </IconButton>
          </React.Fragment>
        }
        sub={
          <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 13, color: theme.muted, fontWeight: 500 }}>Tuesday lunch</div>
            <div style={{
              fontFamily: font.display, fontWeight: font.displayWeight,
              fontSize: 32, letterSpacing: font.displayTracking,
              color: theme.ink, lineHeight: 1.05,
            }}>
              What's the team<br/>eating today?
            </div>
          </div>
        }
      />

      <GroupBanner
        theme={theme} font={font}
        members={TEAMMATES}
        deadline="11:45 AM"
        onTap={() => { setActiveTab('group'); go('cart'); }}
      />

      {/* Search */}
      <div style={{ padding: '4px 16px 0' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          height: 46, padding: '0 16px',
          background: theme.surface, border: `1px solid ${theme.line}`,
          borderRadius: 23, color: theme.muted,
        }}>
          <Icon.search />
          <span style={{ fontSize: 14, color: theme.muted }}>Search dishes, restaurants…</span>
        </div>
      </div>

      {/* Category chips */}
      <div className="scroll" style={{
        display: 'flex', gap: 8, overflowX: 'auto',
        padding: '0 16px', scrollSnapType: 'x mandatory',
      }}>
        {CATEGORIES.map(c => (
          <Chip key={c.id} label={c.label} active={cat === c.id} onClick={() => setCat(c.id)} theme={theme} />
        ))}
      </div>

      {/* Featured strip */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <SectionLabel theme={theme} font={font}
          right={<span style={{ fontSize: 12.5, color: theme.muted }}>5 nearby</span>}>
          Restaurants delivering now
        </SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '0 16px' }}>
          {RESTAURANTS.map(r => (
            <RestaurantCard key={r.id} r={r} theme={theme} font={font}
              onClick={() => go('menu')} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// 2. RESTAURANT MENU
// ═══════════════════════════════════════════════════════════════════
function MenuScreen({ ctx }) {
  const { theme, font, go, back } = ctx;
  const [activeSection, setActiveSection] = React.useState('signature');
  const r = MENU.restaurant;

  return (
    <div className="fade-in" style={{ paddingBottom: 110 }}>
      {/* Hero image with overlaid controls */}
      <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
        <img src={r.img} alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.55) 100%)',
        }} />
        <div style={{
          position: 'absolute', top: 54, left: 16, right: 16,
          display: 'flex', justifyContent: 'space-between',
        }}>
          <button onClick={back} className="tap" style={{
            width: 38, height: 38, borderRadius: 19, border: 0, cursor: 'pointer',
            background: 'rgba(255,255,255,0.92)', color: theme.ink,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(10px)',
          }}><Icon.chevL /></button>
          <button onClick={() => go('cart')} className="tap" style={{
            width: 38, height: 38, borderRadius: 19, border: 0, cursor: 'pointer',
            background: 'rgba(255,255,255,0.92)', color: theme.ink,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><Icon.bag /></button>
        </div>
      </div>

      {/* Restaurant info card overlapping hero */}
      <div style={{
        margin: '-32px 16px 0',
        background: theme.surface, borderRadius: 22,
        padding: '18px 18px 16px',
        boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 8px 28px rgba(0,0,0,0.06)',
        display: 'flex', flexDirection: 'column', gap: 10,
        position: 'relative', zIndex: 2,
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <div style={{
              fontFamily: font.display, fontWeight: font.displayWeight,
              fontSize: 26, letterSpacing: font.displayTracking,
              color: theme.ink, lineHeight: 1.05,
            }}>{r.name}</div>
            <div style={{ fontSize: 13, color: theme.muted, marginTop: 4 }}>{r.cuisine}</div>
          </div>
          <div style={{
            background: theme.chip, color: theme.ink,
            padding: '5px 10px', borderRadius: 999,
            display: 'flex', alignItems: 'center', gap: 4,
            fontSize: 12.5, fontWeight: 600,
          }}>
            <Icon.star style={{ color: theme.accent }} /> {r.rating}
            <span style={{ color: theme.muted, fontWeight: 500 }}>· {r.reviews}</span>
          </div>
        </div>
        <div style={{ height: 1, background: theme.line, margin: '4px 0' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 12.5, color: theme.ink2 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <Icon.clock /> {r.eta}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <Icon.bike /> {r.fee} fee
          </span>
          <span style={{ color: theme.primary, fontWeight: 600, marginLeft: 'auto' }}>Open · until 4 PM</span>
        </div>
      </div>

      {/* Sticky-ish category nav */}
      <div className="scroll" style={{
        display: 'flex', gap: 6, overflowX: 'auto',
        padding: '18px 16px 8px',
      }}>
        {MENU.sections.map(s => (
          <Chip key={s.id} label={s.label}
            active={activeSection === s.id}
            onClick={() => setActiveSection(s.id)} theme={theme} />
        ))}
      </div>

      {/* Menu sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 6 }}>
        {MENU.sections.map(s => (
          <div key={s.id}>
            <SectionLabel theme={theme} font={font}>{s.label}</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {s.items.map((it, idx) => (
                <MenuItemRow key={it.id} item={it} theme={theme} font={font}
                  divider={idx < s.items.length - 1}
                  onClick={() => go('item')} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating "view group order" CTA */}
      <div style={{
        position: 'absolute', left: 16, right: 16, bottom: 88,
        zIndex: 25,
      }}>
        <button onClick={() => go('cart')} className="tap" style={{
          width: '100%', height: 56, borderRadius: 28,
          background: theme.ink, color: theme.bg,
          border: 0, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 12px 0 20px',
          boxShadow: '0 6px 24px rgba(0,0,0,0.25)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex' }}>
              {TEAMMATES.filter(m => m.joined).slice(0, 3).map((m, i) => (
                <div key={m.id} style={{ marginLeft: i === 0 ? 0 : -10 }}>
                  <Avatar name={m.name} color={m.color} size={26} ring={theme.ink} />
                </div>
              ))}
            </div>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Group order · 4 items</span>
          </div>
          <div style={{
            background: theme.accent, color: '#fff',
            padding: '8px 14px', borderRadius: 20,
            fontSize: 13, fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            $60.15 <Icon.chevR />
          </div>
        </button>
      </div>
    </div>
  );
}

function MenuItemRow({ item, theme, font, divider, onClick }) {
  return (
    <div onClick={onClick} className="tap" style={{
      display: 'flex', gap: 14, padding: '14px 20px',
      cursor: 'pointer', position: 'relative',
    }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{
            fontSize: 15.5, fontWeight: 600, color: theme.ink,
            letterSpacing: '-0.01em',
          }}>{item.name}</div>
          {item.tag && (
            <div style={{
              fontSize: 9.5, fontWeight: 700, letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: theme.accent,
              background: `${theme.accent}15`,
              padding: '2px 6px', borderRadius: 4,
            }}>{item.tag}</div>
          )}
        </div>
        <div style={{ fontSize: 12.5, color: theme.muted, lineHeight: 1.4, textWrap: 'pretty' }}>
          {item.desc}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
          <span style={{ fontFamily: font.mono, fontSize: 13, color: theme.ink, fontWeight: 500 }}>
            ${item.price.toFixed(2)}
          </span>
          {item.kcal && (
            <span style={{ fontSize: 11.5, color: theme.muted }}>· {item.kcal} kcal</span>
          )}
        </div>
      </div>
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <img src={item.img} alt={item.name} style={{
          width: 88, height: 88, borderRadius: 14, objectFit: 'cover', display: 'block',
        }} />
        <div style={{
          position: 'absolute', bottom: -6, right: -6,
          width: 30, height: 30, borderRadius: 15,
          background: theme.surface, color: theme.ink,
          border: `1px solid ${theme.line}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        }}><Icon.plus /></div>
      </div>
      {divider && (
        <div style={{
          position: 'absolute', bottom: 0, left: 20, right: 20, height: 1,
          background: theme.line,
        }} />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// 3. ITEM DETAIL
// ═══════════════════════════════════════════════════════════════════
function ItemScreen({ ctx }) {
  const { theme, font, go, back } = ctx;
  const it = ITEM_DETAIL;
  const [size, setSize] = React.useState('reg');
  const [protein, setProtein] = React.useState('chicken');
  const [addons, setAddons] = React.useState(['avocado']);
  const [dressing, setDressing] = React.useState('balsamic');
  const [qty, setQty] = React.useState(1);

  const computed = (() => {
    let total = it.price;
    total += it.sizes.find(s => s.id === size).delta;
    total += it.protein.find(p => p.id === protein).delta;
    total += addons.reduce((sum, id) => sum + it.addons.find(a => a.id === id).delta, 0);
    return total * qty;
  })();

  return (
    <div className="fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Hero */}
      <div style={{ position: 'relative', height: 320, flexShrink: 0 }}>
        <img src={it.img} alt={it.name} style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
        }} />
        <div style={{
          position: 'absolute', top: 54, left: 16, right: 16,
          display: 'flex', justifyContent: 'space-between',
        }}>
          <button onClick={back} className="tap" style={{
            width: 38, height: 38, borderRadius: 19, border: 0, cursor: 'pointer',
            background: 'rgba(255,255,255,0.94)', color: theme.ink,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><Icon.chevL /></button>
        </div>
        <div style={{
          position: 'absolute', bottom: -22, left: 20, right: 20,
          background: theme.bg, color: theme.ink,
          borderRadius: 16, padding: '8px 14px',
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 11.5, fontWeight: 500,
          width: 'fit-content',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}>
          <Icon.sparkle style={{ color: theme.accent }} />
          Ordered 38× this month by your team
        </div>
      </div>

      {/* Content */}
      <div className="scroll" style={{
        flex: 1, overflow: 'auto',
        background: theme.bg,
        paddingTop: 36, paddingBottom: 100,
      }}>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{
            fontFamily: font.display, fontWeight: font.displayWeight,
            fontSize: 28, letterSpacing: font.displayTracking,
            color: theme.ink, lineHeight: 1.05,
          }}>{it.name}</div>
          <div style={{ fontSize: 13.5, color: theme.muted, lineHeight: 1.5, textWrap: 'pretty' }}>
            {it.desc}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
            <span style={{
              fontFamily: font.mono, fontSize: 15, fontWeight: 500, color: theme.ink,
            }}>${it.price.toFixed(2)}</span>
            <span style={{ fontSize: 12.5, color: theme.muted }}>· {it.kcal} kcal · 12g protein</span>
          </div>
        </div>

        {/* Customization cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 22 }}>
          <CustomCard theme={theme} font={font}
            label="Size" required={true}>
            {it.sizes.map(s => (
              <OptionRow key={s.id} label={s.label} selected={size === s.id}
                onClick={() => setSize(s.id)}
                price={s.delta !== 0 ? s.delta : undefined}
                theme={theme} font={font} />
            ))}
          </CustomCard>

          <CustomCard theme={theme} font={font}
            label="Protein" required={true}>
            {it.protein.map(p => (
              <OptionRow key={p.id} label={p.label} selected={protein === p.id}
                onClick={() => setProtein(p.id)}
                price={p.delta !== 0 ? p.delta : undefined}
                theme={theme} font={font} />
            ))}
          </CustomCard>

          <CustomCard theme={theme} font={font}
            label="Add-ons" sub="Pick any">
            {it.addons.map(a => (
              <OptionRow key={a.id} label={a.label} selected={addons.includes(a.id)}
                multi
                onClick={() => setAddons(addons.includes(a.id)
                  ? addons.filter(x => x !== a.id)
                  : [...addons, a.id])}
                price={a.delta}
                theme={theme} font={font} />
            ))}
          </CustomCard>

          <CustomCard theme={theme} font={font}
            label="Dressing">
            {it.dressing.map(d => (
              <OptionRow key={d.id} label={d.label} selected={dressing === d.id}
                onClick={() => setDressing(d.id)}
                theme={theme} font={font} />
            ))}
          </CustomCard>

          {/* Quantity */}
          <div style={{
            margin: '4px 16px 0',
            background: theme.surface, borderRadius: 18,
            padding: '16px 18px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: theme.ink }}>Quantity</div>
              <div style={{ fontSize: 12, color: theme.muted, marginTop: 2 }}>
                For you only
              </div>
            </div>
            <Stepper value={qty} onChange={setQty} theme={theme} />
          </div>
        </div>
      </div>

      {/* Sticky add-to-cart */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '12px 16px 22px',
        background: `linear-gradient(180deg, transparent 0%, ${theme.bg} 22%)`,
        zIndex: 30,
      }}>
        <PrimaryButton theme={theme} full
          onClick={() => go('cart')}
          trailing={
            <span style={{
              fontFamily: font.mono, fontSize: 14.5, fontWeight: 500,
              marginLeft: 'auto',
            }}>${computed.toFixed(2)}</span>
          }>
          Add to group order
        </PrimaryButton>
      </div>
    </div>
  );
}

function CustomCard({ label, sub, required, children, theme, font }) {
  return (
    <div style={{
      margin: '0 16px',
      background: theme.surface, borderRadius: 18,
      overflow: 'hidden',
    }}>
      <div style={{
        padding: '14px 16px 8px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      }}>
        <div style={{
          fontSize: 14, fontWeight: 600, color: theme.ink, letterSpacing: '-0.01em',
        }}>{label}</div>
        {required ? (
          <div style={{
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em',
            textTransform: 'uppercase', color: theme.muted,
          }}>Required</div>
        ) : sub ? (
          <div style={{ fontSize: 12, color: theme.muted }}>{sub}</div>
        ) : null}
      </div>
      <div>{children}</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// 4. CART / GROUP CHECKOUT
// ═══════════════════════════════════════════════════════════════════
function CartScreen({ ctx }) {
  const { theme, font, go, back } = ctx;
  const joined = TEAMMATES.filter(m => m.joined);
  const subtotal = joined.reduce((s, m) => s + m.price, 0);
  const delivery = 2.49;
  const tip = 6.00;
  const total = subtotal + delivery + tip;

  return (
    <div className="fade-in" style={{ paddingBottom: 110, height: '100%' }}>
      <ScreenHeader
        theme={theme}
        left={<IconButton theme={theme} variant="outline" onClick={back}><Icon.chevL /></IconButton>}
        title="Group order"
        right={<IconButton theme={theme} variant="ghost"><Icon.close /></IconButton>}
        sub={
          <div style={{ marginTop: 8 }}>
            <div style={{
              fontFamily: font.display, fontWeight: font.displayWeight,
              fontSize: 28, letterSpacing: font.displayTracking,
              color: theme.ink, lineHeight: 1.05,
            }}>Sweetgreen · Tue lunch</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, color: theme.muted, fontSize: 12.5 }}>
              <Icon.clock /> Closes 11:45 AM · arrives ~12:30 PM
            </div>
          </div>
        }
      />

      {/* Members + their items */}
      <div style={{ padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {TEAMMATES.map(m => (
          <div key={m.id} style={{
            background: theme.surface, borderRadius: 16,
            padding: '14px 16px',
            display: 'flex', alignItems: 'center', gap: 12,
            opacity: m.joined ? 1 : 0.6,
          }}>
            <Avatar name={m.name} color={m.color} size={36} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: theme.ink }}>
                {m.name}{m.id === 'me' && (
                  <span style={{ fontSize: 11, color: theme.muted, marginLeft: 6, fontWeight: 500 }}>(host)</span>
                )}
              </div>
              {m.joined ? (
                <div style={{ fontSize: 12.5, color: theme.muted, marginTop: 1,
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {m.item} · {m.sub}
                </div>
              ) : (
                <div style={{ fontSize: 12.5, color: theme.muted, marginTop: 1 }}>
                  Hasn't ordered yet — nudge?
                </div>
              )}
            </div>
            {m.joined ? (
              <div style={{
                fontFamily: font.mono, fontSize: 13, color: theme.ink, fontWeight: 500,
              }}>${m.price.toFixed(2)}</div>
            ) : (
              <button className="tap" style={{
                background: theme.chip, color: theme.ink,
                border: 0, height: 30, borderRadius: 15,
                padding: '0 12px', cursor: 'pointer',
                fontSize: 12, fontWeight: 600,
              }}>Remind</button>
            )}
          </div>
        ))}
      </div>

      {/* Add another item */}
      <div style={{ padding: '4px 16px 12px' }}>
        <button onClick={() => go('menu')} className="tap" style={{
          width: '100%', height: 50,
          background: 'transparent', border: `1.5px dashed ${theme.line}`,
          borderRadius: 14, cursor: 'pointer',
          color: theme.ink2, fontSize: 13.5, fontWeight: 500,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          <Icon.plus /> Add another item for you
        </button>
      </div>

      {/* Delivery + payment */}
      <div style={{ padding: '4px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <InfoRow theme={theme} font={font}
          label="Deliver to" value="HQ · 5th floor lounge"
          sub="Drop at front desk, will pick up" />
        <InfoRow theme={theme} font={font}
          label="Payment" value="Team card · •• 4421"
          sub="Split equally across joined members" />
      </div>

      {/* Totals */}
      <div style={{
        margin: '16px 16px 0',
        background: theme.surface, borderRadius: 18,
        padding: '16px 18px',
        display: 'flex', flexDirection: 'column', gap: 8,
      }}>
        {[
          ['Subtotal (4 items)', subtotal],
          ['Delivery', delivery],
          ['Tip', tip],
        ].map(([l, v]) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between',
            fontSize: 13.5, color: theme.ink2 }}>
            <span>{l}</span>
            <span style={{ fontFamily: font.mono, color: theme.ink2 }}>${v.toFixed(2)}</span>
          </div>
        ))}
        <div style={{ height: 1, background: theme.line, margin: '4px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ fontSize: 14, color: theme.ink, fontWeight: 600 }}>Total</span>
          <span style={{
            fontFamily: font.display, fontWeight: font.displayWeight,
            fontSize: 22, letterSpacing: font.displayTracking, color: theme.ink,
          }}>${total.toFixed(2)}</span>
        </div>
        <div style={{ fontSize: 11.5, color: theme.muted, marginTop: 2 }}>
          ≈ ${(total/joined.length).toFixed(2)} per person
        </div>
      </div>

      {/* Sticky CTA */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '12px 16px 22px',
        background: `linear-gradient(180deg, transparent 0%, ${theme.bg} 22%)`,
        zIndex: 30,
      }}>
        <PrimaryButton theme={theme} full onClick={() => go('tracking')}>
          Place group order · ${total.toFixed(2)}
        </PrimaryButton>
      </div>
    </div>
  );
}

function InfoRow({ label, value, sub, theme, font }) {
  return (
    <div style={{
      background: theme.surface, borderRadius: 16,
      padding: '14px 16px',
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11.5, color: theme.muted, fontWeight: 500,
          letterSpacing: '0.04em', textTransform: 'uppercase' }}>{label}</div>
        <div style={{ fontSize: 14, color: theme.ink, fontWeight: 500, marginTop: 2 }}>{value}</div>
        {sub && <div style={{ fontSize: 12, color: theme.muted, marginTop: 2 }}>{sub}</div>}
      </div>
      <div style={{ color: theme.muted }}><Icon.chevR /></div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// 5. ORDER TRACKING / CONFIRMATION
// ═══════════════════════════════════════════════════════════════════
function TrackingScreen({ ctx }) {
  const { theme, font, go } = ctx;
  const steps = [
    { id: 'placed',    label: 'Order placed',        time: '11:42 AM', done: true },
    { id: 'cooking',   label: 'Restaurant cooking',  time: '11:48 AM', done: true, active: false },
    { id: 'pickup',    label: 'Picked up by Marcus', time: '12:12 PM', done: false, active: true },
    { id: 'delivered', label: 'Delivered to HQ',     time: 'ETA 12:28 PM', done: false },
  ];

  return (
    <div className="fade-in" style={{ paddingBottom: 100 }}>
      <ScreenHeader theme={theme}
        left={<IconButton theme={theme} variant="outline" onClick={() => go('home')}><Icon.close /></IconButton>}
        right={<button className="tap" style={{
          height: 32, padding: '0 12px', borderRadius: 16,
          background: theme.chip, color: theme.ink,
          border: 0, cursor: 'pointer',
          fontSize: 12.5, fontWeight: 600,
        }}>Help</button>}
      />

      {/* Hero ETA */}
      <div style={{ padding: '0 20px 16px' }}>
        <div style={{
          fontSize: 13, color: theme.muted, fontWeight: 500,
          letterSpacing: '0.04em', textTransform: 'uppercase',
        }}>Arrives in</div>
        <div style={{
          fontFamily: font.display, fontWeight: font.displayWeight,
          fontSize: 64, letterSpacing: font.displayTracking,
          color: theme.ink, lineHeight: 1, marginTop: 6,
        }}>16 min</div>
        <div style={{ fontSize: 14, color: theme.ink2, marginTop: 8 }}>
          On the way to <span style={{ color: theme.ink, fontWeight: 600 }}>HQ · 5th floor</span>
        </div>
      </div>

      {/* Map placeholder */}
      <div style={{
        margin: '0 16px',
        height: 180, borderRadius: 20, overflow: 'hidden',
        background: theme.surface2,
        position: 'relative',
      }}>
        <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke={theme.line} strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="400" height="180" fill={theme.surface2}/>
          <rect width="400" height="180" fill="url(#grid)"/>
          {/* roads */}
          <path d="M 0 70 Q 150 70 200 100 T 400 130" stroke={theme.line} strokeWidth="14" fill="none" strokeLinecap="round"/>
          <path d="M 60 0 L 80 180" stroke={theme.line} strokeWidth="10" fill="none" strokeLinecap="round"/>
          <path d="M 280 0 L 300 180" stroke={theme.line} strokeWidth="8" fill="none" strokeLinecap="round"/>
          {/* route */}
          <path d="M 60 60 Q 150 60 200 100 T 350 90" stroke={theme.primary} strokeWidth="3"
            fill="none" strokeLinecap="round" strokeDasharray="0" />
          {/* restaurant pin */}
          <circle cx="60" cy="60" r="8" fill={theme.surface} stroke={theme.ink} strokeWidth="2.5"/>
          {/* current location of courier */}
          <circle cx="220" cy="105" r="14" fill={theme.accent} fillOpacity="0.2"/>
          <circle cx="220" cy="105" r="7" fill={theme.accent} stroke="#fff" strokeWidth="2.5"/>
          {/* destination */}
          <path d="M 350 80 L 358 100 L 342 100 Z" fill={theme.primary}/>
          <circle cx="350" cy="80" r="4" fill={theme.primary}/>
        </svg>
      </div>

      {/* Courier card */}
      <div style={{
        margin: '12px 16px 0',
        background: theme.surface, borderRadius: 18,
        padding: '14px 16px',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <Avatar name="Marcus C" color="#3D8BFD" size={44} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: theme.ink }}>Marcus C.</div>
          <div style={{ fontSize: 12.5, color: theme.muted, marginTop: 2 }}>
            On bike · <Icon.star style={{ color: theme.accent, display:'inline-block', verticalAlign: '-1px' }} /> 4.9 · 1,240 trips
          </div>
        </div>
        <IconButton theme={theme} variant="outline" size={40}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 5a2 2 0 0 1 2-2h2.5L9 7l-2 1.5a14 14 0 0 0 6.5 6.5L15 13l4 1.5V17a2 2 0 0 1-2 2A14 14 0 0 1 3 5Z" stroke="currentColor" strokeWidth="1.7"/>
          </svg>
        </IconButton>
      </div>

      {/* Timeline */}
      <div style={{ padding: '20px 16px 0' }}>
        <SectionLabel theme={theme} font={font}>Progress</SectionLabel>
        <div style={{
          background: theme.surface, borderRadius: 18,
          padding: '6px 18px',
        }}>
          {steps.map((s, i) => (
            <div key={s.id} style={{
              display: 'flex', gap: 14, padding: '14px 0',
              position: 'relative',
              borderBottom: i < steps.length - 1 ? `1px solid ${theme.line}` : 'none',
            }}>
              <div style={{ position: 'relative', width: 22, display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 11,
                  background: s.done ? theme.primary : s.active ? theme.surface : theme.surface2,
                  border: s.active ? `2px solid ${theme.primary}` : s.done ? 'none' : `1.5px solid ${theme.line}`,
                  color: theme.primaryInk,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 1,
                }}>
                  {s.done && <Icon.check />}
                  {s.active && <div style={{ width: 8, height: 8, borderRadius: 4, background: theme.primary }} />}
                </div>
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute', top: 22, left: '50%', transform: 'translateX(-50%)',
                    width: 2, height: 'calc(100% - 4px)',
                    background: s.done ? theme.primary : theme.line,
                  }} />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 14, fontWeight: s.active ? 600 : 500,
                  color: s.done || s.active ? theme.ink : theme.muted,
                }}>{s.label}</div>
                <div style={{
                  fontFamily: font.mono, fontSize: 11.5,
                  color: s.active ? theme.primary : theme.muted, marginTop: 2,
                }}>{s.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order summary preview */}
      <div style={{ padding: '20px 16px 0' }}>
        <SectionLabel theme={theme} font={font}
          right={<span onClick={() => go('cart')} style={{ fontSize: 12.5, color: theme.primary, fontWeight: 600, cursor: 'pointer' }}>View receipt</span>}>
          What's coming
        </SectionLabel>
        <div style={{
          background: theme.surface, borderRadius: 18,
          padding: '14px 16px',
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {TEAMMATES.filter(m => m.joined).map(m => (
            <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Avatar name={m.name} color={m.color} size={26} />
              <div style={{ flex: 1, fontSize: 13, color: theme.ink }}>
                {m.item} <span style={{ color: theme.muted }}>· {m.sub}</span>
              </div>
              <div style={{ fontFamily: font.mono, fontSize: 12, color: theme.muted }}>
                ${m.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// 6. PAST ORDERS / REORDER
// ═══════════════════════════════════════════════════════════════════
function OrdersScreen({ ctx }) {
  const { theme, font, go } = ctx;
  return (
    <div className="fade-in" style={{ paddingBottom: 100 }}>
      <ScreenHeader theme={theme}
        left={<div style={{ fontSize: 12.5, color: theme.muted, fontWeight: 500 }}>Past 30 days</div>}
        right={
          <button className="tap" style={{
            height: 32, padding: '0 12px', borderRadius: 16,
            background: theme.chip, color: theme.ink,
            border: 0, cursor: 'pointer',
            fontSize: 12.5, fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 4,
          }}>Filter <Icon.chevD /></button>
        }
        sub={
          <div style={{ marginTop: 8, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{
              fontFamily: font.display, fontWeight: font.displayWeight,
              fontSize: 32, letterSpacing: font.displayTracking,
              color: theme.ink, lineHeight: 1.05,
            }}>Past orders</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <div style={{
                fontFamily: font.mono, fontSize: 18, fontWeight: 500, color: theme.ink,
              }}>$241.45</div>
              <div style={{ fontSize: 10.5, color: theme.muted, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                team spend
              </div>
            </div>
          </div>
        }
      />

      {/* This week summary */}
      <div style={{
        margin: '8px 16px 12px',
        background: theme.ink, color: theme.bg,
        borderRadius: 18, padding: '16px 18px',
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        <div style={{ fontSize: 11.5, opacity: 0.65, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          This week
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {[
            ['Orders', '4'],
            ['Joined', '12 ppl'],
            ['Avg time', '24 min'],
          ].map(([l, v]) => (
            <div key={l} style={{ flex: 1 }}>
              <div style={{
                fontFamily: font.display, fontWeight: font.displayWeight,
                fontSize: 22, letterSpacing: font.displayTracking,
              }}>{v}</div>
              <div style={{ fontSize: 11, opacity: 0.6, marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Orders list */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {PAST_ORDERS.map(o => (
          <div key={o.id} className="tap" onClick={() => go('tracking')} style={{
            background: theme.surface, borderRadius: 18,
            padding: 14, cursor: 'pointer',
            display: 'flex', gap: 14,
          }}>
            <img src={o.img} alt={o.rest} style={{
              width: 64, height: 64, borderRadius: 14, objectFit: 'cover', flexShrink: 0,
            }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
              <div style={{
                fontSize: 11.5, color: theme.muted, letterSpacing: '0.02em',
              }}>{o.when}</div>
              <div style={{
                fontSize: 15, fontWeight: 600, color: theme.ink, letterSpacing: '-0.01em',
              }}>{o.rest}</div>
              <div style={{ fontSize: 12, color: theme.muted, marginTop: 1,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {o.items} items · {o.members.length} teammates
              </div>
            </div>
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between',
            }}>
              <div style={{ fontFamily: font.mono, fontSize: 13, color: theme.ink, fontWeight: 500 }}>
                ${o.total.toFixed(2)}
              </div>
              <button className="tap" onClick={(e) => { e.stopPropagation(); go('menu'); }} style={{
                background: theme.chip, color: theme.ink,
                border: 0, height: 28, borderRadius: 14,
                padding: '0 10px', cursor: 'pointer',
                fontSize: 11.5, fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 4,
              }}>
                <Icon.repeat /> Reorder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  HomeScreen, MenuScreen, ItemScreen, CartScreen, TrackingScreen, OrdersScreen,
});
