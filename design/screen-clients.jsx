// screen-clients.jsx — list + detail (master/detail)
const { Icon: I_c, PH: PH_c, StatusChip: SC_c, PageHead: PH2_c, Card: Card_c, Seg: Seg_c, CC: CC_c, CLIENTS, INVOICES: INV_c, curFmt: cf_c } = window;

function Clients({ go }) {
  const [sel, setSel] = React.useState(null);
  if (sel) return <ClientDetail c={sel} back={() => setSel(null)} go={go} />;

  return (
    <div className="screen">
      <PH2_c title="고객사" desc="31개국 284개 거래처">
        <button className="btn"><I_c.filter className="ic" />필터</button>
        <button className="btn primary"><I_c.plus className="ic" />신규 고객사</button>
      </PH2_c>

      <div className="card" style={{ marginBottom: 14 }}>
        <div className="card-b flex center wrap" style={{ gap: 10 }}>
          <div className="search" style={{ margin: 0, width: 260 }}>
            <I_c.search className="ic" /><input placeholder="이름, ID, 국가 검색…" />
          </div>
          {["전체", "활성", "잠재고객", "보류"].map((f, i) => (
            <span key={i} className={"chip" + (i === 0 ? " flag" : "")} style={i === 0 ? { borderColor: "var(--accent-line)", color: "var(--accent)", background: "var(--accent-bg)" } : null}>{f}</span>
          ))}
          <span className="anno" style={{ marginLeft: "auto" }}>filter chips · 담당자 · 지역 · 통화</span>
        </div>
      </div>

      <Card_c pad={false}>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>고객사</th><th>국가</th><th>담당자</th><th>상태</th>
                <th className="num">미수 채권</th><th>거래 시작</th><th></th>
              </tr>
            </thead>
            <tbody>
              {CLIENTS.map(c => (
                <tr key={c.id} onClick={() => setSel(c)} style={{ cursor: "pointer" }}>
                  <td>
                    <div className="flex center" style={{ gap: 10 }}>
                      <span className="avatar" style={{ width: 26, height: 26 }}>{c.name[0]}</span>
                      <div>
                        <div className="fw-600">{c.name}</div>
                        <div className="anno">{c.id} · {c.tags.join(", ")}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="flex center" style={{ gap: 6 }}><CC_c c={c.cc} />{c.city}</span></td>
                  <td className="muted">{c.owner}</td>
                  <td><SC_c s={c.status} /></td>
                  <td className="num">{c.ar ? cf_c(c.ar, c.cur) : "—"} {c.ar ? <span className="muted">{c.cur}</span> : null}</td>
                  <td className="muted">{c.since}</td>
                  <td><I_c.chevron className="ic muted" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card_c>
      <div className="anno mt-12">284건 중 8건 표시 · 페이지네이션 + 페이지 크기 선택</div>
    </div>
  );
}

function ClientDetail({ c, back, go }) {
  const [tab, setTab] = React.useState("개요");
  const inv = INV_c.filter(v => v.client === c.name);
  return (
    <div className="screen">
      <div className="flex center" style={{ gap: 8, marginBottom: 14 }}>
        <button className="btn sm ghost" onClick={back}><I_c.chevron className="ic" style={{ transform: "rotate(180deg)" }} />고객사</button>
        <span className="anno">/ {c.id}</span>
      </div>

      <div className="flex center" style={{ gap: 16, marginBottom: 18 }}>
        <span className="avatar" style={{ width: 52, height: 52, fontSize: 20, borderRadius: 10 }}>{c.name[0]}</span>
        <div>
          <h1 style={{ margin: 0, fontSize: 22 }}>{c.name}</h1>
          <div className="flex center mt-8" style={{ gap: 10 }}>
            <CC_c c={c.cc} /><span className="muted">{c.city}</span>
            <SC_c s={c.status} /><span className="anno">담당 · {c.owner} · {c.since}년부터</span>
          </div>
        </div>
        <div className="right" style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button className="btn"><I_c.edit className="ic" />수정</button>
          <button className="btn primary" onClick={() => go("invoices")}><I_c.invoice className="ic" />인보이스 발행</button>
        </div>
      </div>

      <div className="kpis" style={{ gridTemplateColumns: "repeat(4,1fr)", marginBottom: 16 }}>
        {[["미수 채권", c.ar ? cf_c(c.ar, c.cur) : "—"], ["누적 거래액", "$184,200"], ["평균 결제일수", "34"], ["진행 주문", "2"]].map((k, i) => (
          <div className="kpi" key={i}><div className="k-lbl">{k[0]}</div><div className="k-val" style={{ fontSize: 22 }}>{k[1]}</div></div>
        ))}
      </div>

      <div className="tabs" style={{ marginBottom: 16 }}>
        {["개요", "인보이스", "주문", "연락처", "자료", "활동"].map(t => (
          <button key={t} className={t === tab ? "on" : ""} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>

      {tab === "개요" && (
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <Card_c title="회사 정보">
            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[["상호", c.name], ["국가", c.city + " · " + c.cc], ["기본 통화", c.cur], ["결제 조건", "Net 30"], ["사업자/VAT 번호", "—"], ["인코텅즈", "FOB Busan"]].map((f, i) => (
                <div className="field" key={i}><label>{f[0]}</label><div className="inp">{f[1]}</div></div>
              ))}
            </div>
          </Card_c>
          <Card_c title="주요 연락처">
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["구매 담당", "물류", "재무/결제"].map((r, i) => (
                <div className="flex center" key={i} style={{ gap: 10 }}>
                  <span className="avatar">{r[0]}</span>
                  <div style={{ flex: 1 }}><div className="fw-600">담당자명</div><div className="anno">{r} · email · phone</div></div>
                  <I_c.more className="ic muted" />
                </div>
              ))}
            </div>
          </Card_c>
          <Card_c title="배송 주소"><div className="sk w-90"></div><div className="sk w-75 mt-8"></div><div className="sk w-60 mt-8"></div></Card_c>
          <Card_c title="메모" right={<span className="anno-tag">rich text</span>}><PH_c label="메모 / 미팅 로그" h={92} /></Card_c>
        </div>
      )}

      {tab === "인보이스" && (
        <Card_c pad={false}>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>인보이스</th><th>상태</th><th className="num">금액</th><th>발행일</th><th>마감일</th></tr></thead>
              <tbody>
                {(inv.length ? inv : INV_c.slice(0, 2)).map(v => (
                  <tr key={v.id} onClick={() => go("invoices")} style={{ cursor: "pointer" }}>
                    <td className="mono">{v.id}</td><td><SC_c s={v.status} /></td>
                    <td className="num">{cf_c(v.total, v.cur)} <span className="muted">{v.cur}</span></td>
                    <td className="muted">{v.issued}</td><td className="muted">{v.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card_c>
      )}

      {["주문", "연락처", "자료", "활동"].includes(tab) && (
        <PH_c label={tab + " — 테이블 / 타임라인 placeholder"} h={220} />
      )}
    </div>
  );
}
window.Clients = Clients;
