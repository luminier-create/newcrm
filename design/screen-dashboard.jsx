// screen-dashboard.jsx
const { Icon, PH, Bars, StatusChip, PageHead, Card, Seg, CC, INVOICES, TODOS, curFmt } = window;

function Dashboard({ go }) {
  const [range, setRange] = React.useState("This quarter");
  return (
    <div className="screen">
      <PageHead title="대시보드" desc="영업 현황 — 해외 고객사, 미수금 및 파이프라인">
        <Seg opts={["이번 달", "이번 분기", "올해"]} value={range} onChange={setRange} />
        <button className="btn"><Icon.download className="ic" />내보내기</button>
      </PageHead>

      <div className="kpis">
        {[
          { l:"미수 채권", v:"$74,180", d:"전분기 대비 +8.2%", up:true, note:"6개 통화 · USD 환산" },
          { l:"연체", v:"$21,300", d:"인보이스 3건", up:false },
          { l:"활성 고객사", v:"142", d:"신규 +5", up:true },
          { l:"파이프라인 가치", v:"$96,400", d:"진행 11건", up:true },
        ].map((k,i)=>(
          <div className="kpi" key={i}>
            <div className="k-lbl">{k.l}</div>
            <div className="k-val">{k.v}</div>
            <div className={"k-delta " + (k.up?"up":"down")}>
              {k.up ? "▲" : "▼"} {k.d}
            </div>
            {k.note && <div className="anno" style={{marginTop:6}}>{k.note}</div>}
          </div>
        ))}
      </div>

      <div className="grid mt-16" style={{ gridTemplateColumns: "1.6fr 1fr" }}>
        <Card title="월별 매출" right={<span className="anno-tag">chart slot</span>}>
          <Bars hl={5} data={[
            {l:"1월",v:48},{l:"2월",v:62},{l:"3월",v:55},{l:"4월",v:78},{l:"5월",v:70},{l:"6월",v:88},
          ]}/>
          <div className="anno mt-24" style={{marginTop:30}}>annotation · 통화별 누적(USD / JPY / KRW), 호버 = 세부 툴팁</div>
        </Card>

        <Card title="지역별 미수금" right={<span className="anno-tag">donut slot</span>}>
          <div className="flex center" style={{ gap: 16 }}>
            <PH label={"donut\nchart"} h={140} style={{ width: 140, flex: "none", borderRadius: "50%" }} />
            <div style={{ flex: 1, display:"flex", flexDirection:"column", gap:10 }}>
              {[["동아시아","42%"],["EU & 영국","28%"],["북미","18%"],["중동","12%"]].map((r,i)=>(
                <div className="flex between center" key={i}>
                  <span className="flex center" style={{gap:8}}>
                    <span style={{width:9,height:9,borderRadius:2,background:"var(--fill-2)",border:"1px solid var(--line-2)"}}></span>
                    {r[0]}
                  </span>
                  <span className="mono muted">{r[1]}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div className="grid mt-16" style={{ gridTemplateColumns: "1.4fr 1fr" }}>
        <Card title="최근 인보이스" pad={false}
          right={<button className="btn sm ghost" onClick={()=>go("invoices")}>전체 보기<Icon.chevron className="ic"/></button>}>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>인보이스</th><th>고객사</th><th>상태</th><th className="num">금액</th><th>마감일</th></tr></thead>
              <tbody>
                {INVOICES.slice(0,5).map(v=>(
                  <tr key={v.id} onClick={()=>go("invoices")} style={{cursor:"pointer"}}>
                    <td className="mono">{v.id}</td>
                    <td><span className="flex center" style={{gap:6}}><CC c={v.cc}/>{v.client}</span></td>
                    <td><StatusChip s={v.status}/></td>
                    <td className="num">{curFmt(v.total, v.cur)} <span className="muted">{v.cur}</span></td>
                    <td className="muted">{v.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="오늘 할 일"
          right={<button className="btn sm ghost" onClick={()=>go("todo")}>할 일<Icon.chevron className="ic"/></button>}>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {TODOS.filter(t=>!t.done).slice(0,5).map((t,i)=>(
              <div className="flex center" key={i} style={{gap:10}}>
                <span style={{width:15,height:15,border:"1.5px solid var(--line-2)",borderRadius:4,flex:"none"}}></span>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:12.5,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{t.t}</div>
                  <div className="anno">{t.cli}</div>
                </div>
                <StatusChip s={t.pr==="low"?"low-pr":t.pr}/>
                <span className="mono muted" style={{fontSize:11}}>{t.due}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
window.Dashboard = Dashboard;
