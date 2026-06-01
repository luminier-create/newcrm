// app.jsx — shell, navigation, router, tweaks
const { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakColor } = window;
const { Icon: I_a } = window;

const NAV = [
  { group: "개요", items: [
    { id: "dashboard", label: "대시보드", icon: "dashboard" },
  ]},
  { group: "영업", items: [
    { id: "clients",  label: "고객사",      icon: "clients",  count: "284" },
    { id: "invoices", label: "인보이스",    icon: "invoice",  count: "7" },
    { id: "products", label: "제품",        icon: "product",  count: "126" },
    { id: "shipping", label: "운송 요율",    icon: "ship" },
  ]},
  { group: "업무", items: [
    { id: "todo",     label: "할 일",       icon: "todo",     count: "5" },
    { id: "calendar", label: "캘린더",      icon: "calendar" },
    { id: "projects", label: "프로젝트",     icon: "gantt" },
    { id: "wiki",     label: "위키 & 자료",  icon: "wiki" },
  ]},
];

const CRUMB = {
  dashboard: "대시보드", clients: "영업 / 고객사", invoices: "영업 / 인보이스",
  products: "영업 / 제품", shipping: "영업 / 운송 요율",
  todo: "업무 / 할 일", calendar: "업무 / 캘린더", projects: "업무 / 프로젝트", wiki: "업무 / 위키 & 자료",
};

const ACCENTS = {
  Slate:  "0.52 0.075 250",
  Sage:   "0.52 0.06 158",
  Clay:   "0.55 0.07 42",
  Plum:   "0.50 0.07 322",
  Mono:   "0.48 0 0",
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "regular",
  "accent": "Slate",
  "annotations": true,
  "collapsed": false
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [screen, setScreen] = React.useState("dashboard");
  const go = (s) => { setScreen(s); document.querySelector(".canvas")?.scrollTo(0, 0); };

  // apply tweaks to <body>
  React.useEffect(() => {
    const dmap = { regular: "regular", compact: "compact", comfy: "comfortable" };
    document.body.dataset.density = dmap[t.density] || "regular";
    document.body.dataset.annotations = t.annotations ? "on" : "off";
    document.body.dataset.sidebar = t.collapsed ? "collapsed" : "open";
    const a = ACCENTS[t.accent] || ACCENTS.Slate;
    const r = document.documentElement.style;
    r.setProperty("--accent", `oklch(${a})`);
    r.setProperty("--accent-bg", `oklch(${a} / 0.10)`);
    r.setProperty("--accent-line", `oklch(${a} / 0.40)`);
  }, [t]);

  const Screen = {
    dashboard: window.Dashboard, clients: window.Clients, invoices: window.Invoices,
    products: window.Products, shipping: window.Shipping, todo: window.Todo,
    calendar: window.Calendar, projects: window.Projects, wiki: window.Wiki,
  }[screen];

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="mark">N</div>
          <div>
            <div className="name">NOVA TRADE</div>
            <div className="sub">고객관리 · 와이어프레임</div>
          </div>
        </div>
        <nav className="nav">
          {NAV.map((g, gi) => (
            <div key={gi}>
              <div className="nav-group-label">{g.group}</div>
              {g.items.map(it => (
                <div key={it.id} className={"nav-item" + (screen === it.id ? " active" : "")} onClick={() => go(it.id)}>
                  <span className="ic">{React.createElement(I_a[it.icon])}</span>
                  <span className="lbl">{it.label}</span>
                  {it.count && <span className="count">{it.count}</span>}
                </div>
              ))}
            </div>
          ))}
        </nav>
        <div className="sidebar-foot">
          <span className="avatar">JP</span>
          <div className="who"><b>박지원</b><span>영업 · APAC</span></div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <span className="crumb"><b>{CRUMB[screen]}</b></span>
          <div className="search">
            <I_a.search className="ic" />
            <input placeholder="고객사, 인보이스, 제품 검색…" />
          </div>
          <span className="cur-pill"><I_a.flag className="ic" />환율 · 2026-06-01</span>
          <button className="tb-btn"><I_a.bell className="ic" /></button>
          <button className="tb-btn"><I_a.plus className="ic" /></button>
        </header>
        <div className="canvas">
          {Screen ? <Screen go={go} /> : <div className="screen">Not found</div>}
        </div>
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection label="레이아웃" />
        <TweakRadio label="밀도" value={t.density} options={["compact", "regular", "comfy"]} onChange={v => setTweak("density", v)} />
        <TweakToggle label="사이드바 접기" value={t.collapsed} onChange={v => setTweak("collapsed", v)} />
        <TweakToggle label="주석 표시" value={t.annotations} onChange={v => setTweak("annotations", v)} />
        <TweakSection label="강조색" />
        <TweakRadio label="컬러" value={t.accent} options={["Slate", "Sage", "Clay", "Plum", "Mono"]} onChange={v => setTweak("accent", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
