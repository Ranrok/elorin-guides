/* Elorin docs - boss guide page (Nex). Browser-loaded: no imports, no export. */
function BossGuideScreen({ onNavigate }) {
  const { SidebarNav, InfoBox, Callout, StepList, GearGrid, InventoryGrid, DataTable, VideoEmbed, Figure, Accordion, Badge, Tag, ItemChip } = window.ElorinRSPSDesignSystem_44a46d;

  const gear = [
    { name: 'Torva full helm' }, { name: 'Amulet of fury' }, { name: 'Zaryte bow' }, { name: 'Torva platebody' },
    { name: 'Elysian spirit shield' }, null, { name: 'Torva platelegs' }, { name: "Barrows gloves" },
    { name: 'Primordial boots' }, { name: 'Ring of life' }, null, { name: 'Ava device' },
  ];
  const inv = [
    { name: 'Saradomin brew', qty: 6 }, { name: 'Super restore', qty: 4 }, { name: 'Ranging potion', qty: 2 },
    { name: 'Shark', qty: 3 }, { name: 'Rune pouch' }, { name: 'Zaryte bow' }, { name: 'Blood rune', qty: 500 },
  ];
  const cols = [
    { key: 'item', label: 'Item' },
    { key: 'qty', label: 'Qty', align: 'right' },
    { key: 'rate', label: 'Rate', align: 'right', rarityKey: 'rarity' },
  ];
  const rows = [
    { item: 'Blood rune', qty: '120 – 240', rate: '1/3', rarity: 'common' },
    { item: 'Death rune', qty: '80 – 150', rate: '1/3', rarity: 'common' },
    { item: 'Zarosian insignia', qty: '1', rate: '1/24', rarity: 'uncommon' },
    { item: 'Ancient emblem', qty: '1', rate: '1/86', rarity: 'uncommon' },
    { item: 'Virtus mask', qty: '1', rate: '1/645', rarity: 'rare' },
    { item: 'Nexling', qty: '1', rate: '1/500', rarity: 'very-rare' },
    { item: 'Torva platebody', qty: '1', rate: '1/860', rarity: 'mega-rare' },
    { item: 'Zaryte bow', qty: '1', rate: '1/1200', rarity: 'mega-rare' },
  ];

  return (
    <div className="el-page" style={{ display: 'grid', gridTemplateColumns: 'var(--sidebar-w) minmax(0,1fr)', gap: 40, paddingBlock: 40 }}>
      <div>
        <SidebarNav
          current="Nex"
          categories={[
            { label: 'Getting started', items: [{ label: 'Starting out', href: '#', onClick: onNavigate }, { label: 'Money making', href: '#' }, { label: 'Daily loop', href: '#' }] },
            { label: 'Bosses', items: [{ label: 'Nex', href: '#' }, { label: 'Corporeal Beast', href: '#' }, { label: 'Elorin Wyrm', href: '#' }, { label: 'Chaos Elemental', href: '#' }] },
            { label: 'Raids', items: [{ label: 'Vault of Elorin', href: '#' }, { label: 'Hard mode', href: '#' }] },
            { label: 'Skilling', items: [{ label: 'Fastest 99 Slayer', href: '#' }, { label: 'Runecrafting', href: '#' }] },
          ]}
        />
      </div>
      <div>
        <span className="el-label">[ boss guide &middot; god wars dungeon ]</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 320px', gap: 32, alignItems: 'start', marginTop: 12 }}>
          <div>
            <h1><span className="el-metal-silver">Nex</span></h1>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16 }}>
              <Badge tone="elite" bar>Elite</Badge>
              <Tag tone="blue" diamond>Team of 2 to 4</Tag>
              <Tag tone="gold" diamond>2011 drop table</Tag>
            </div>
            <p style={{ marginTop: 20, maxWidth: '70ch' }}>
              Four phases, one prayer switch per phase, and a blood sacrifice that will kill anyone
              standing still. Duo is the sweet spot: fast enough for 12 kills an hour, slow enough
              that one death does not end the trip.
            </p>
            <Callout tone="danger" title="Hardcore">
              Death inside the prison is permanent for hardcore accounts and the gravestone does
              not spawn. Bank your gear before you enter.
            </Callout>
          </div>
          <InfoBox
            kind="Boss"
            title="Nex"
            rows={[
              { label: 'Combat', value: '1001' },
              { label: 'Hitpoints', value: '5000' },
              { label: 'Weakness', value: 'Magic' },
              { label: 'Attack styles', value: 'All four' },
              { label: 'Killcount', value: '40 any GWD' },
              { label: 'Revision', value: '2011' },
            ]}
            footer={<><Tag tone="mega-rare" diamond>Torva 1/860</Tag><Badge tone="gold">Duo</Badge></>}
          />
        </div>

        <h2 style={{ marginTop: 48 }}>The fight</h2>
        <div style={{ marginTop: 20 }}>
          <StepList steps={[
            { title: 'Smash the ice barrier', body: <p>Four minions guard the entrance. Kill the mage first, she heals the rest.</p> },
            { title: 'Phase one: Smoke', body: <p>Protect from Missiles. Stay out of the smoke cloud; it drains Prayer twice as fast as the hit itself.</p> },
            { title: 'Phase two: Shadow', body: <p>Protect from Melee and keep moving. She marks a target with a blood sacrifice every 20 seconds.</p> },
            { title: 'Phase three: Blood', body: <p>Kill the blood reaver before the heal lands. Ranged only, since melee pulls the reaver onto your partner.</p> },
            { title: 'Phase four: Ice', body: <p>Protect from Magic. Break the ice prison on your partner immediately or they take the full special.</p> },
          ]} />
        </div>

        <h2 style={{ marginTop: 48 }}>Recommended setup</h2>
        <p style={{ marginTop: 12, maxWidth: '70ch' }}>
          Bring <ItemChip name="Saradomin brew" qty={6} /> over food, since the damage comes in bursts.
          A <ItemChip name="Ring of life" rarity="rare" /> is worth the slot on your first ten kills.
        </p>
        <div className="el-preset" style={{ marginTop: 20 }}>
          <GearGrid label="Gear" slots={gear} />
          <InventoryGrid label="Inventory" items={inv} />
        </div>

        <h2 style={{ marginTop: 48 }}>Drop table</h2>
        <div style={{ marginTop: 20 }}>
          <DataTable caption="Nex, 2011 drop table per kill" maxHeight={340} columns={cols} rows={rows} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 48 }}>
          <VideoEmbed caption="Nex duo, full run" />
          <Figure caption="Ancient prison, north entry" />
        </div>

        <div style={{ marginTop: 32 }}>
          <Accordion title="Solo method" tag="Advanced">
            <p>
              Possible from Ranged 95 with a Zaryte bow and a full inventory of brews. Expect eight
              minutes a kill and no room for a mistake on the blood phase.
            </p>
          </Accordion>
          <Accordion title="Min-cash setup" tag="Optional">
            <p>Karil top and skirt, rune crossbow, broad bolts. Slower, but nothing in the setup is worth losing.</p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { BossGuideScreen });
