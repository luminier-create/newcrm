// screen-work.jsx — To-Do (kanban + list) and Calendar
const { Icon: I_w, PH: PH_w, StatusChip: SC_w, PageHead: PHd_w, Card: Card_w, Seg: Seg_w, TODOS } = window;

function Todo({ go }) {
  const [view, setView] = React.useState("보드");
  const cols = [
    { k: "할 일", items: TODOS.filter(t => !t.done).slice(0, 3) },
    { k: "진행 중", items: TODOS.filter(t => !t.done).slice(3, 5) },
    { k: "고객사 대기", items: TODOS.filter(t => !t.done).slice(2, 3) },
    { k: "완료", items: TODOS.filter(t => t.done) },
  ];
  return (
    <div className="screen">
      <PHd_w title="할 일" desc="고객사 · 딜과 연결된 영업 후속 조치">
        <Seg_w opts={["보드", "리스트"]} value={view} onChange={setView} />
        <button className="btn primary"><I_w.plus className="ic" />새 할 일</button>
      </PHd_w>

      {view === "보드" ? (
        <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", alignItems: "start" }}>
          {cols.map((c, ci) => (
            <div key={ci} className="card" style={{ background: "var(--panel-2)" }}>
              <div className="card-h" style={{ background: "transparent" }}>
                <h3>{c.k}</h3><span className="ch-right mono muted" style={{ fontSize: 11 }}>{c.items.length}</span>
              </div>
              <div className="card-b" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {c.items.map((t, i) => (
                  <div key={i} className="card" style={{ padding: 12, background: "var(--panel)" }}>
                    <div className="flex between center"><span className="anno">{t.cli.split(" ")[0]}</span><SC_w s={t.pr === "low" ? "low-pr" : t.pr} /></div>
                    <div className="mt-8" style={{ fontSize: 12.5, opacity: t.done ? 0.5 : 1, textDecoration: t.done ? "line-through" : "none" }}>{t.t}</div>
                    <div className="flex center mt-12" style={{ gap: 6 }}>
                      <I_w.clock className="ic muted" style={{ fontSize: 13 }} />
                      <span className="anno">{t.due}</span>
                      <span className="avatar" style={{ width: 20, height: 20, fontSize: 9, marginLeft: "auto" }}>JP</span>
                    </div>
                  </div>
                ))}
                <button className="btn sm ghost" style={{ justifyContent: "center" }}><I_w.plus className="ic" />추가</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Card_w pad={false}>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th style={{ width: 36 }}></th><th>할 일</th><th>고객사</th><th>우선순위</th><th>마감</th><th>담당자</th></tr></thead>
              <tbody>
                {TODOS.map((t, i) => (
                  <tr key={i}>
                    <td><span style={{ width: 15, height: 15, border: "1.5px solid var(--line-2)", borderRadius: 4, display: "inline-block", background: t.done ? "var(--accent)" : "transparent" }}></span></td>
                    <td style={{ textDecoration: t.done ? "line-through" : "none", color: t.done ? "var(--ink-3)" : "var(--ink)" }}>{t.t}</td>
                    <td className="muted">{t.cli}</td>
                    <td><SC_w s={t.pr === "low" ? "low-pr" : t.pr} /></td>
                    <td className="muted">{t.due}</td>
                    <td className="muted">박지원</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card_w>
      )}
    </div>
  );
}

function Calendar({ go }) {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const events = {
    3: [["통화 — Sakura", "ok"]], 4: [["INV-0148 마감", "bad"]], 9: [["배송 — Dubai", "warn"]],
    11: [["Meridian 리뷰", "ok"]], 17: [["박람회", ""]], 18: [["박람회", ""]], 23: [["Q3 예측", "warn"]], 27: [["EU 서류 마감", "bad"]],
  };
  return (
    <div className="screen">
      <PHd_w title="캘린더" desc="배송 · 결제 마감일 · 고객사 미팅">
        <Seg_w opts={["월", "주", "일정"]} value={"월"} onChange={() => {}} />
        <button className="btn primary"><I_w.plus className="ic" />새 일정</button>
      </PHd_w>

      <div className="flex center" style={{ gap: 12, marginBottom: 12 }}>
        <button className="btn sm"><I_w.chevron className="ic" style={{ transform: "rotate(180deg)" }} /></button>
        <b style={{ fontSize: 15 }}>2026년 6월</b>
        <button className="btn sm"><I_w.chevron className="ic" /></button>
        <div className="flex center" style={{ marginLeft: "auto", gap: 12 }}>
          {[["미팅", "ok"], ["배송", "warn"], ["결제", "bad"]].map((l, i) => (
            <span className="flex center anno" key={i} style={{ gap: 5 }}>
              <span className="dot" style={{ width: 8, height: 8, borderRadius: 2, background: l[1] === "ok" ? "var(--ok)" : l[1] === "warn" ? "var(--warn)" : "var(--bad)" }}></span>{l[0]}
            </span>
          ))}
        </div>
      </div>

      <Card_w pad={false}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
          {days.map(d => <div key={d} className="anno" style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)", borderRight: "1px solid var(--line)", textAlign: "right" }}>{d}</div>)}
          {Array.from({ length: 35 }).map((_, i) => {
            const day = i - 5; const valid = day >= 1 && day <= 30;
            const ev = events[day] || [];
            return (
              <div key={i} style={{ minHeight: 92, padding: 8, borderBottom: "1px solid var(--line)", borderRight: "1px solid var(--line)", background: valid ? "var(--panel)" : "var(--panel-2)" }}>
                <div className="mono" style={{ fontSize: 11, color: day === 1 ? "var(--accent)" : "var(--ink-3)", fontWeight: day === 1 ? 700 : 400 }}>{valid ? day : ""}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 6 }}>
                  {ev.map((e, j) => (
                    <div key={j} style={{ fontSize: 10.5, padding: "2px 6px", borderRadius: 3, borderLeft: "2px solid " + (e[1] === "ok" ? "var(--ok)" : e[1] === "warn" ? "var(--warn)" : e[1] === "bad" ? "var(--bad)" : "var(--line-2)"), background: "var(--panel-2)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e[0]}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Card_w>
    </div>
  );
}
window.Todo = Todo; window.Calendar = Calendar;
