(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,i)=>{const a=i(89),{lightningChart:n,ColorPalettes:s,ColorRGBA:l,SolidFill:y,SolidLine:r,emptyLine:o,AxisTickStrategies:m,LegendBoxBuilders:g,UIOrigins:T,Themes:x}=a,w=s.arction(10),S=[6,9,0].map(w),d=[S[0],S[1]].map((e=>new y({color:e}))),D=d.map((e=>new r({fillStyle:e,thickness:2}))),c=d.map((e=>e.setA(100))),k=new y({color:S[2].setA(100)}),u=D,h=new r({fillStyle:new y({color:l(255,255,255,100)}),thickness:2}),p=new y({color:S[2].setA(100)}),A=n({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:x[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setPadding({right:50}).setTitle("Unit production comparison").setFittingRectangleStrokeStyle(h).setZoomingRectangleFillStyle(p),R=A.getDefaultAxisX().setOverlayStyle(k).setNibOverlayStyle(k).setTickStrategy(m.DateTime).setInterval({start:new Date(2018,1,5).getTime(),end:new Date(2018,1,24).getTime()}),M=A.getDefaultAxisY().setStrokeStyle(D[0]).setOverlayStyle(c[0]).setNibOverlayStyle(c[0]).setTickStrategy(m.Numeric,(e=>e.setMajorTickStyle((e=>e.setGridStrokeStyle(o))).setMinorTickStyle((e=>e.setGridStrokeStyle(o))))),b=A.addAxisY(!1).setTitle("No of units produced").setStrokeStyle(D[1]).setOverlayStyle(c[1]).setNibOverlayStyle(c[1]).setTickStrategy(m.Numeric,(e=>e.setMajorTickStyle((e=>e.setGridStrokeStyle(o))).setMinorTickStyle((e=>e.setGridStrokeStyle(o))))),v=A.addSplineSeries({xAxis:R,yAxis:M}).setName("TechComp").setStrokeStyle(u[0]).setPointFillStyle((()=>u[0].getFillStyle())),C=A.addSplineSeries({xAxis:R,yAxis:b}).setName("UniTek").setStrokeStyle(u[1]).setPointFillStyle((()=>u[1].getFillStyle())),U=[{x:new Date(2018,1,5).getTime(),y:352},{x:new Date(2018,1,6).getTime(),y:352},{x:new Date(2018,1,7).getTime(),y:352},{x:new Date(2018,1,8).getTime(),y:358},{x:new Date(2018,1,9).getTime(),y:400},{x:new Date(2018,1,10).getTime(),y:400},{x:new Date(2018,1,11).getTime(),y:400},{x:new Date(2018,1,12).getTime(),y:400},{x:new Date(2018,1,13).getTime(),y:426},{x:new Date(2018,1,14).getTime(),y:390},{x:new Date(2018,1,15).getTime(),y:390},{x:new Date(2018,1,16).getTime(),y:390},{x:new Date(2018,1,17).getTime(),y:390},{x:new Date(2018,1,18).getTime(),y:360},{x:new Date(2018,1,19).getTime(),y:360},{x:new Date(2018,1,20).getTime(),y:360},{x:new Date(2018,1,21).getTime(),y:500},{x:new Date(2018,1,22).getTime(),y:500},{x:new Date(2018,1,23).getTime(),y:500},{x:new Date(2018,1,24).getTime(),y:600}],f=[{x:new Date(2018,1,5).getTime(),y:235},{x:new Date(2018,1,6).getTime(),y:235},{x:new Date(2018,1,7).getTime(),y:335},{x:new Date(2018,1,8).getTime(),y:335},{x:new Date(2018,1,9).getTime(),y:490},{x:new Date(2018,1,10).getTime(),y:490},{x:new Date(2018,1,11).getTime(),y:490},{x:new Date(2018,1,12).getTime(),y:492},{x:new Date(2018,1,13).getTime(),y:550},{x:new Date(2018,1,14).getTime(),y:550},{x:new Date(2018,1,15).getTime(),y:600},{x:new Date(2018,1,16).getTime(),y:600},{x:new Date(2018,1,17).getTime(),y:900},{x:new Date(2018,1,18).getTime(),y:900},{x:new Date(2018,1,19).getTime(),y:900},{x:new Date(2018,1,20).getTime(),y:850},{x:new Date(2018,1,21).getTime(),y:1e3},{x:new Date(2018,1,22).getTime(),y:1200},{x:new Date(2018,1,23).getTime(),y:1200},{x:new Date(2018,1,24).getTime(),y:1300}];v.add(U),C.add(f),M.setInterval({start:v.getYMin()-10,end:v.getYMax()+10,animate:!0}),b.setInterval({start:C.getYMin()-10,end:C.getYMax()+10,animate:!0}),A.setAutoCursor((e=>{e.setResultTableAutoTextStyle(!0).setTickMarkerXAutoTextStyle(!0).setTickMarkerYAutoTextStyle(!0)})),A.addLegendBox(g.HorizontalLegendBox).setAutoDispose({type:"max-width",maxWidth:.8}).add(A);const F=(e,t,i,a)=>e.addRow(t.getName()).addRow(R.formatValue(i)).addRow("Units: "+Math.floor(a));v.setCursorResultTableFormatter(F),C.setCursorResultTableFormatter(F)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);