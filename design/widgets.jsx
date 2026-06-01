// widgets.jsx — shared wireframe widgets
const { useState } = React;

const PH = ({ label, h = 120, style }) => (
  <div className="ph" style={{ height: h, ...style }}>{label}</div>
);

const Bars = ({ data, hl }) => (
  <div className="bars">
    {data.map((d, i) => (
      <div key={i} className={"bar" + (i === hl ? " hl" : "")} style={{ height: d.v + "%" }}>
        <span className="cap">{d.l}</span>
      </div>
    ))}
  </div>
);

const StatusChip = ({ s }) => {
  const map = {
    active:{c:"ok",t:"활성"}, paid:{c:"ok",t:"결제됨"}, sent:{c:"warn",t:"발송됨"},
    overdue:{c:"bad",t:"연체"}, draft:{c:"",t:"초안"}, lead:{c:"warn",t:"잠재고객"},
    "on-hold":{c:"",t:"보류"}, in:{c:"ok",t:"재고 있음"}, low:{c:"warn",t:"부족"},
    out:{c:"bad",t:"품절"}, high:{c:"bad",t:"높음"}, med:{c:"warn",t:"보통"}, "low-pr":{c:"",t:"낮음"},
  };
  const m = map[s] || { c:"", t:s };
  return <span className={"chip " + m.c}><span className="dot"></span>{m.t}</span>;
};

const PageHead = ({ title, desc, children }) => (
  <div className="page-head">
    <div>
      <h1>{title}</h1>
      {desc && <div className="desc">{desc}</div>}
    </div>
    <div className="right">{children}</div>
  </div>
);

const Card = ({ title, right, children, pad = true, foot }) => (
  <div className="card">
    {title && (
      <div className="card-h">
        <h3>{title}</h3>
        {right && <div className="ch-right">{right}</div>}
      </div>
    )}
    <div className="card-b" style={pad ? null : { padding: 0 }}>{children}</div>
    {foot}
  </div>
);

const Seg = ({ opts, value, onChange }) => (
  <div className="seg">
    {opts.map(o => (
      <button key={o} className={o === value ? "on" : ""} onClick={() => onChange(o)}>{o}</button>
    ))}
  </div>
);

const CC = ({ c }) => <span className="cc">{c}</span>;

Object.assign(window, { PH, Bars, StatusChip, PageHead, Card, Seg, CC });
