// screen-projects.jsx — Gantt + Wiki
const { Icon: I_g, PH: PH_g, PageHead: PHd_g, Card: Card_g, Seg: Seg_g, PROJECTS, WIKI } = window;

function Projects({ go }) {
  const months = ["3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  return (
    <div className="screen">
      <PHd_g title="프로젝트" desc="고객사 과제 및 주문 파이프라인 — 간트 타임라인">
        <Seg_g opts={["간트", "보드"]} value={"간트"} onChange={() => {}} />
        <button className="btn primary"><I_g.plus className="ic" />새 프로젝트</button>
      </PHd_g>

      <Card_g pad={false}>
        {/* timeline header */}
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", borderBottom: "1px solid var(--line)" }}>
          <div className="anno" style={{ padding: "12px 16px", borderRight: "1px solid var(--line)" }}>프로젝트</div>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${months.length}, 1fr)` }}>
            {months.map((m, i) => <div key={i} className="anno" style={{ padding: "12px 8px", textAlign: "center", borderRight: i < months.length - 1 ? "1px solid var(--line)" : "none" }}>{m}</div>)}
          </div>
        </div>
        {/* rows */}
        {PROJECTS.map((p, ri) => (
          <div key={ri} style={{ display: "grid", gridTemplateColumns: "240px 1fr", borderBottom: "1px solid var(--line)", alignItems: "center" }}>
            <div style={{ padding: "12px 16px", borderRight: "1px solid var(--line)" }}>
              <div className="fw-600" style={{ fontSize: 12.5 }}>{p.name}</div>
              <div className="anno mt-8">{p.owner} · {p.phase}</div>
            </div>
            <div style={{ position: "relative", height: 56, display: "grid", gridTemplateColumns: `repeat(${months.length}, 1fr)` }}>
              {months.map((_, i) => <div key={i} style={{ borderRight: i < months.length - 1 ? "1px solid var(--line)" : "none" }}></div>)}
              <div style={{
                position: "absolute", top: 14, height: 26,
                left: `calc(${(p.start / months.length) * 100}% + 6px)`,
                width: `calc(${(p.span / months.length) * 100}% - 12px)`,
                background: "var(--accent-bg)", border: "1px solid var(--accent-line)", borderRadius: 5,
                display: "flex", alignItems: "center", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: p.pct + "%", background: "var(--accent)", opacity: 0.22 }}></div>
                <span className="mono" style={{ fontSize: 10, padding: "0 8px", position: "relative", color: "var(--ink-2)", whiteSpace: "nowrap" }}>{p.pct}% · {p.phase}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="card-b"><div className="anno">바 드래그로 일정 조정 · 의존관계(→) · 마일스톤(◆ 배송일, 결제 마감) · 오늘 선</div></div>
      </Card_g>
    </div>
  );
}

function Wiki({ go }) {
  const ic = { Folder: "pkg", Doc: "doc", Sheet: "doc" };
  return (
    <div className="screen">
      <PHd_g title="위키 & 자료" desc="공유 지식 베이스 — Google Drive 문서 · 시트 · 폴더 링크">
        <button className="btn"><I_g.link className="ic" />Drive 항목 연결</button>
        <button className="btn primary"><I_g.plus className="ic" />새 페이지</button>
      </PHd_g>

      <div className="card" style={{ marginBottom: 14 }}>
        <div className="card-b flex center wrap" style={{ gap: 10 }}>
          <div className="search" style={{ margin: 0, width: 280 }}><I_g.search className="ic" /><input placeholder="위키 · 문서 · 첨부파일 검색…" /></div>
          {["전체", "컴플라이언스", "제품", "계약", "물류"].map((f, i) => (
            <span key={i} className="chip" style={i === 0 ? { borderColor: "var(--accent-line)", color: "var(--accent)", background: "var(--accent-bg)" } : null}>{f}</span>
          ))}
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {WIKI.map((w, i) => (
          <div className="card" key={i}>
            <div className="card-b">
              <div className="flex between center">
                <span className="ph" style={{ width: 40, height: 40, padding: 0 }}>
                  {React.createElement(I_g[ic[w.kind]], { className: "ic", style: { fontSize: 18, color: "var(--ink-2)" } })}
                </span>
                <span className="chip flag"><I_g.link className="ic" style={{ fontSize: 11 }} />{w.src}</span>
              </div>
              <div className="fw-600 mt-12">{w.title}</div>
              <div className="anno mt-8">{w.kind} · {w.items}</div>
              <div className="flex between center mt-12">
                <span className="anno">{w.upd} 업데이트</span>
                <a className="btn sm ghost" style={{ color: "var(--accent)" }}>열기<I_g.external className="ic" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="anno mt-12">클릭 시 Drive 미리보기 임베드 · 권한 배지 · 고객사별 문서 선반</div>
    </div>
  );
}
window.Projects = Projects; window.Wiki = Wiki;
