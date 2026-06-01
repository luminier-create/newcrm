// icons.jsx — minimal stroke icons for the wireframe
const _I = (paths, vb) => (props) => (
  <svg viewBox={vb || "0 0 24 24"} width="1em" height="1em" fill="none"
       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
       strokeLinejoin="round" {...props}>{paths}</svg>
);

const Icon = {
  dashboard: _I(<><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></>),
  clients:   _I(<><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 6.2a3 3 0 0 1 0 5.6"/><path d="M17.5 20a5.5 5.5 0 0 0-3-4.9"/></>),
  invoice:   _I(<><path d="M6 2.5h9l4 4V21l-2-1.2L15 21l-2-1.2L11 21l-2-1.2L7 21 5 19.8V4.5z"/><path d="M9 9h7M9 12.5h7M9 16h4"/></>),
  product:   _I(<><path d="M12 2.6 4 6.6v8.8l8 4 8-4V6.6z"/><path d="M4 6.6l8 4 8-4M12 10.6V19"/></>),
  ship:      _I(<><path d="M3 13h18l-1.6 5.2a2 2 0 0 1-1.9 1.3H6.5a2 2 0 0 1-1.9-1.3z"/><path d="M5 13V8.5L12 6l7 2.5V13"/><path d="M12 6V3.5"/></>),
  todo:      _I(<><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M8 12l2.5 2.5L16 9"/></>),
  calendar:  _I(<><rect x="3.5" y="4.5" width="17" height="16" rx="2"/><path d="M3.5 9h17M8 2.5v4M16 2.5v4"/></>),
  gantt:     _I(<><path d="M3 5h9M3 12h13M3 19h7"/><rect x="3" y="3.5" width="3" height="3" rx="1" opacity="0"/></>),
  wiki:      _I(<><path d="M5 3.5h11l3 3V20.5H5z"/><path d="M16 3.5v3h3"/><path d="M8 11h8M8 14.5h8M8 8h4"/></>),
  search:    _I(<><circle cx="11" cy="11" r="6.5"/><path d="m20 20-3.6-3.6"/></>),
  plus:      _I(<><path d="M12 5v14M5 12h14"/></>),
  filter:    _I(<><path d="M3 5h18l-7 8v6l-4-2v-4z"/></>),
  download:  _I(<><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16"/></>),
  bell:      _I(<><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M9.5 19a2.5 2.5 0 0 0 5 0"/></>),
  chevron:   _I(<><path d="m9 6 6 6-6 6"/></>),
  chevDown:  _I(<><path d="m6 9 6 6 6-6"/></>),
  more:      _I(<><circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/></>),
  external:  _I(<><path d="M14 4h6v6M20 4l-9 9M18 13v6H5V6h6"/></>),
  arrowUp:   _I(<><path d="M12 19V5M6 11l6-6 6 6"/></>),
  arrowDown: _I(<><path d="M12 5v14M6 13l6 6 6-6"/></>),
  edit:      _I(<><path d="M4 20h4l10-10-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></>),
  doc:       _I(<><path d="M6 2.5h8l4 4V21H6z"/><path d="M14 2.5v4h4M9 12h6M9 15.5h6"/></>),
  link:      _I(<><path d="M10 13a4 4 0 0 0 6 .5l2-2a4 4 0 0 0-5.7-5.7L11 7"/><path d="M14 11a4 4 0 0 0-6-.5l-2 2A4 4 0 0 0 11.7 18L13 17"/></>),
  flag:      _I(<><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></>),
  clock:     _I(<><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></>),
  pkg:       _I(<><path d="M12 2.6 4 6.6v8.8l8 4 8-4V6.6z"/><path d="M4 6.6l8 4 8-4"/></>),
};

window.Icon = Icon;
