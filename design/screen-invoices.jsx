// screen-invoices.jsx — list + invoice builder/detail
const { Icon: I_v, PH: PH_v, StatusChip: SC_v, PageHead: PHd_v, Card: Card_v, Seg: Seg_v, CC: CC_v, INVOICES: INV_v, curFmt: cf_v } = window;

function Invoices({ go }) {
  const [open, setOpen] = React.useState(null);
  const [tab, setTab] = React.useState("All");
  if (open) return <InvoiceDetail v={open} back={() => setOpen(null)} />;

  const tabs = ["All", "Draft", "Sent", "Overdue", "Paid"];
  const counts = { All: INV_v.length, Draft: 1, Sent: 2, Overdue: 2, Paid: 2 };
  const tabLbl = { All: "전체", Draft: "초안", Sent: "발송됨", Overdue: "연체", Paid: "결제됨" };

  return (
    <div className="screen">
      <PHd_v title="인보이스" desc="다통화 · 제품 및 운송료 자동 합산">
        <button className="btn"><I_v.download className="ic" />CSV 내보내기</button>
        <button className="btn primary" onClick={() => setOpen({ id: "INV-2026-0149", client: "신규 고객사", cc: "—", cur: "USD", status: "draft", items: 0 })}><I_v.plus className="ic" />인보이스 발행</button>
      </PHd_v>

      <div className="kpis" style={{ gridTemplateColumns: "repeat(4,1fr)", marginBottom: 16 }}>
        {[["미결제", "$74,180", "USD 환산"], ["연체", "$21,300", "인보이스 3건"], ["이번 달 수금", "$11,720", ""], ["평균 결제일수", "31", "전체 고객사"]].map((k, i) => (
          <div className="kpi" key={i}><div className="k-lbl">{k[0]}</div><div className="k-val" style={{ fontSize: 22 }}>{k[1]}</div>{k[2] && <div className="anno mt-8">{k[2]}</div>}</div>
        ))}
      </div>

      <div className="tabs" style={{ marginBottom: 14 }}>
        {tabs.map(t => (
          <button key={t} className={t === tab ? "on" : ""} onClick={() => setTab(t)}>
            {tabLbl[t]} <span className="mono muted" style={{ fontSize: 10 }}>{counts[t]}</span>
          </button>
        ))}
        <div className="flex center" style={{ marginLeft: "auto", gap: 8, paddingBottom: 6 }}>
          <div className="search" style={{ margin: 0, width: 200, padding: "5px 10px" }}><I_v.search className="ic" /><input placeholder="인보이스 / 고객사 검색" /></div>
        </div>
      </div>

      <Card_v pad={false}>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr><th>인보이스</th><th>고객사</th><th>상태</th><th className="num">합계</th><th>통화</th><th>발행일</th><th>마감일</th><th></th></tr>
            </thead>
            <tbody>
              {INV_v.filter(v => tab === "All" || v.status === tab.toLowerCase()).map(v => (
                <tr key={v.id} onClick={() => setOpen(v)} style={{ cursor: "pointer" }}>
                  <td className="mono fw-600">{v.id}</td>
                  <td><span className="flex center" style={{ gap: 6 }}><CC_v c={v.cc} />{v.client}</span></td>
                  <td><SC_v s={v.status} /></td>
                  <td className="num fw-600">{cf_v(v.total, v.cur)}</td>
                  <td className="mono muted">{v.cur}</td>
                  <td className="muted">{v.issued}</td>
                  <td className="muted">{v.due}</td>
                  <td><I_v.chevron className="ic muted" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card_v>
    </div>
  );
}

function InvoiceDetail({ v, back }) {
  const lines = [
    { sku: "PRD-GS-200", name: "Gochujang Paste 200g", qty: 600, unit: 3.20, wt: 0.24 },
    { sku: "PRD-SS-500", name: "Sesame Oil 500ml", qty: 200, unit: 7.90, wt: 0.62 },
    { sku: "PRD-RM-300", name: "Ramen Variety 300g", qty: 1200, unit: 2.10, wt: 0.34 },
  ];
  const sub = lines.reduce((s, l) => s + l.qty * l.unit, 0);
  const wt = lines.reduce((s, l) => s + l.qty * l.wt, 0);
  const ship = 1840;
  const tax = 0;
  const total = sub + ship + tax;
  const cur = v.cur || "USD";

  return (
    <div className="screen">
      <div className="flex center" style={{ gap: 8, marginBottom: 14 }}>
        <button className="btn sm ghost" onClick={back}><I_v.chevron className="ic" style={{ transform: "rotate(180deg)" }} />인보이스</button>
        <span className="anno">/ {v.id}</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button className="btn"><I_v.doc className="ic" />PDF 미리보기</button>
          <button className="btn"><I_v.download className="ic" />PDF 다운로드</button>
          <button className="btn primary"><I_v.invoice className="ic" />발행 & 전송</button>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1fr 320px", alignItems: "start" }}>
        {/* left: builder */}
        <div className="grid" style={{ gap: 16 }}>
          <Card_v title="인보이스 기본 정보">
            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
              <div className="field"><label>고객사</label><div className="inp">{v.client}</div></div>
              <div className="field"><label>인보이스 번호</label><div className="inp mono">{v.id}</div></div>
              <div className="field"><label>상태</label><div className="inp"><SC_v s={v.status} /></div></div>
              <div className="field"><label>발행일</label><div className="inp ph-inp">2026-06-01</div></div>
              <div className="field"><label>마감일</label><div className="inp ph-inp">2026-07-01 (Net 30)</div></div>
              <div className="field"><label>통화</label>
                <div className="inp flex between center">{cur} <I_v.chevDown className="ic muted" /></div>
              </div>
            </div>
            <div className="anno mt-12">통화 드롭다운: KRW · JPY · USD · EUR — 변경 시 저장된 환율로 합계 재계산</div>
          </Card_v>

          <Card_v title="품목" pad={false}
            right={<button className="btn sm"><I_v.plus className="ic" />제품 추가</button>}>
            <div className="tbl-wrap">
              <table className="tbl">
                <thead><tr><th>SKU</th><th>제품</th><th className="num">수량</th><th className="num">단가</th><th className="num">중량</th><th className="num">금액</th></tr></thead>
                <tbody>
                  {lines.map((l, i) => (
                    <tr key={i}>
                      <td className="mono muted">{l.sku}</td>
                      <td>{l.name}</td>
                      <td className="num">{l.qty.toLocaleString()}</td>
                      <td className="num">{cf_v(l.unit, cur)}</td>
                      <td className="num muted">{(l.qty * l.wt).toFixed(0)} kg</td>
                      <td className="num fw-600">{cf_v(l.qty * l.unit, cur)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="mono muted">SHIP</td>
                    <td><span className="flex center" style={{ gap: 6 }}><I_v.ship className="ic muted" />운송비 — 동아시아, {wt.toFixed(0)} kg <span className="anno-tag">요율표 자동 적용</span></span></td>
                    <td className="num">1</td><td className="num muted">—</td><td className="num muted">{wt.toFixed(0)} kg</td>
                    <td className="num fw-600">{cf_v(ship, cur)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card_v>
        </div>

        {/* right: summary + PDF preview */}
        <div className="grid" style={{ gap: 16 }}>
          <Card_v title="합계">
            {[["소계 (제품)", cf_v(sub, cur)], ["총 중량", wt.toFixed(0) + " kg"], ["운송비", cf_v(ship, cur)], ["세금 / 관세", cf_v(tax, cur)]].map((r, i) => (
              <div className="flex between" key={i} style={{ padding: "7px 0", borderBottom: "1px solid var(--line)" }}>
                <span className="muted">{r[0]}</span><span className="mono">{r[1]}</span>
              </div>
            ))}
            <div className="flex between center" style={{ paddingTop: 12 }}>
              <span className="fw-600">합계</span>
              <span style={{ fontSize: 20, fontWeight: 700 }} className="mono">{cf_v(total, cur)} <span className="muted" style={{ fontSize: 12 }}>{cur}</span></span>
            </div>
          </Card_v>
          <Card_v title="PDF 미리보기" right={<span className="anno-tag">template</span>}>
            <PH_v label={"A4 인보이스 PDF\n로고 · 헤더 · 표 · 합계 · 은행정보"} h={300} />
          </Card_v>
        </div>
      </div>
    </div>
  );
}
window.Invoices = Invoices;
