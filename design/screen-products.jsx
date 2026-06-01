// screen-products.jsx — catalog / inventory
const { Icon: I_p, PH: PH_p, StatusChip: SC_p, PageHead: PHd_p, Card: Card_p, Seg: Seg_p, PRODUCTS, curFmt: cf_p } = window;

function Products({ go }) {
  const [view, setView] = React.useState("테이블");
  return (
    <div className="screen">
      <PHd_p title="제품" desc="카탈로그 및 재고 — 단위중량이 운송비 계산의 기준">
        <Seg_p opts={["테이블", "그리드"]} value={view} onChange={setView} />
        <button className="btn"><I_p.download className="ic" />가져오기</button>
        <button className="btn primary"><I_p.plus className="ic" />신규 제품</button>
      </PHd_p>

      <div className="kpis" style={{ gridTemplateColumns: "repeat(4,1fr)", marginBottom: 16 }}>
        {[["활성 SKU", "126"], ["재고 부족", "8"], ["품절", "3"], ["카테고리", "11"]].map((k, i) => (
          <div className="kpi" key={i}><div className="k-lbl">{k[0]}</div><div className="k-val" style={{ fontSize: 22 }}>{k[1]}</div></div>
        ))}
      </div>

      <div className="card" style={{ marginBottom: 14 }}>
        <div className="card-b flex center wrap" style={{ gap: 10 }}>
          <div className="search" style={{ margin: 0, width: 240 }}><I_p.search className="ic" /><input placeholder="SKU 또는 제품명 검색…" /></div>
          {["전체 카테고리", "Sauce", "Oil", "Grain", "Noodle", "Snack"].map((f, i) => (
            <span key={i} className="chip" style={i === 0 ? { borderColor: "var(--accent-line)", color: "var(--accent)", background: "var(--accent-bg)" } : null}>{f}</span>
          ))}
        </div>
      </div>

      {view === "테이블" ? (
        <Card_p pad={false}>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>SKU</th><th>제품</th><th>카테고리</th><th className="num">단위중량</th><th className="num">재고</th><th className="num">단가</th><th>상태</th></tr></thead>
              <tbody>
                {PRODUCTS.map(p => (
                  <tr key={p.sku}>
                    <td className="mono muted">{p.sku}</td>
                    <td><span className="flex center" style={{ gap: 10 }}>
                      <span className="ph" style={{ width: 30, height: 30, padding: 0, flex: "none", fontSize: 0 }}></span>{p.name}
                    </span></td>
                    <td className="muted">{p.cat}</td>
                    <td className="num">{p.weight}</td>
                    <td className="num">{p.stock.toLocaleString()}</td>
                    <td className="num fw-600">{cf_p(p.price, p.cur)}</td>
                    <td><SC_p s={p.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card_p>
      ) : (
        <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {PRODUCTS.map(p => (
            <div className="card" key={p.sku}>
              <div className="card-b">
                <PH_p label="제품 사진" h={120} />
                <div className="fw-600 mt-12">{p.name}</div>
                <div className="anno mt-8">{p.sku} · {p.cat} · {p.weight}</div>
                <div className="flex between center mt-12">
                  <span className="mono fw-600">{cf_p(p.price, p.cur)}</span>
                  <SC_p s={p.status} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="anno mt-12">재고 셀: 인라인 편집 · 재주문 임계값 배지 · 행 클릭 → 고객사별 가격 티어 포함 상세</div>
    </div>
  );
}
window.Products = Products;
