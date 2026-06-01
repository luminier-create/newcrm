// screen-shipping.jsx — weight × region rate table
const { Icon: I_s, PH: PH_s, PageHead: PHd_s, Card: Card_s, Seg: Seg_s, RATES, curFmt: cf_s } = window;

function Shipping({ go }) {
  const cols = [["≤ 0.5 kg", "w0"], ["≤ 1 kg", "w1"], ["≤ 2 kg", "w2"], ["≤ 5 kg", "w5"]];
  return (
    <div className="screen">
      <PHd_s title="운송 요율" desc="무게×지역 요율표 — 인보이스 운송비 라인에 자동 반영">
        <button className="btn"><I_s.download className="ic" />요율표 가져오기</button>
        <button className="btn primary"><I_s.plus className="ic" />지역 추가</button>
      </PHd_s>

      <div className="grid" style={{ gridTemplateColumns: "1fr 300px", alignItems: "start" }}>
        <Card_s title="요율 매트릭스 (USD)" pad={false}
          right={<span className="anno-tag">editable cells</span>}>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>지역 / 무게 구간</th>
                  {cols.map(c => <th key={c[1]} className="num">{c[0]}</th>)}
                  <th className="num">+ kg당</th><th>리드타임</th>
                </tr>
              </thead>
              <tbody>
                {RATES.map((r, i) => (
                  <tr key={i}>
                    <td className="fw-600">{r.region}</td>
                    {cols.map(c => <td key={c[1]} className="num">{cf_s(r[c[1]], "USD")}</td>)}
                    <td className="num muted">{cf_s(Math.round(r.w5 / 5), "USD")}</td>
                    <td className="muted">{r.lead}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card_s>

        <div className="grid" style={{ gap: 16 }}>
          <Card_s title="작동 방식">
            <ol style={{ margin: 0, paddingLeft: 18, fontSize: 12.5, lineHeight: 1.7, color: "var(--ink-2)" }}>
              <li>인보이스 품목 중량 합산</li>
              <li>고객사 국가 → 지역 매칭</li>
              <li>중량 → 근접 구간 (또는 kg당)</li>
              <li>운송비 라인 자동 추가</li>
            </ol>
            <div className="anno mt-12">인보이스별 수동 조정 가능 · 고정요금 & 무료배송 규칙 토글</div>
          </Card_s>
          <Card_s title="운송사" right={<span className="anno-tag">integration</span>}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["DHL Express", "FedEx Intl", "EMS / 우체국"].map((c, i) => (
                <div className="flex between center" key={i}>
                  <span className="flex center" style={{ gap: 8 }}><span className="ph" style={{ width: 26, height: 26, padding: 0 }}></span>{c}</span>
                  <span className="chip ok"><span className="dot"></span>연동됨</span>
                </div>
              ))}
            </div>
            <div className="anno mt-12">송장번호 동기화 → 인보이스 · 주문에 표시</div>
          </Card_s>
        </div>
      </div>

      <Card_s title="요금 계산기" right={<span className="anno-tag">live preview</span>}>
        <div className="flex center wrap" style={{ gap: 14 }}>
          <div className="field" style={{ minWidth: 160 }}><label>도착지</label><div className="inp flex between center">Japan — 동아시아 <I_s.chevDown className="ic muted" /></div></div>
          <div className="field" style={{ minWidth: 120 }}><label>총 중량</label><div className="inp">3.6 kg</div></div>
          <div className="field" style={{ minWidth: 120 }}><label>운송사</label><div className="inp flex between center">EMS <I_s.chevDown className="ic muted" /></div></div>
          <div style={{ marginLeft: "auto", textAlign: "right" }}>
            <div className="anno">예상 운송비</div>
            <div style={{ fontSize: 24, fontWeight: 700 }} className="mono">$58.00</div>
          </div>
        </div>
      </Card_s>
    </div>
  );
}
window.Shipping = Shipping;
