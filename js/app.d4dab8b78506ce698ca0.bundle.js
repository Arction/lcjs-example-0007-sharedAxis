(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,t,y)=>{const l=y(809),{lightningChart:s,ColorPalettes:i,ColorRGBA:r,SolidFill:o,SolidLine:x,emptyLine:a,AxisTickStrategies:S,LegendBoxBuilders:n,UIOrigins:d,Themes:c}=l,k=i.arction(10),g=[6,9,0].map(k),u=[g[0],g[1]].map((e=>new o({color:e}))),m=u.map((e=>new x({fillStyle:e,thickness:2}))),T=u.map((e=>e.setA(100))),p=new o({color:g[2].setA(100)}),A=m,h=new x({fillStyle:new o({color:r(255,255,255,100)}),thickness:2}),w=new o({color:g[2].setA(100)}),M=new Date(2018,1,5),C=s().ChartXY({}).setPadding({right:50}).setTitle("Unit production comparison").setFittingRectangleStrokeStyle(h).setZoomingRectangleFillStyle(w),O=C.getDefaultAxisX().setOverlayStyle(p).setNibOverlayStyle(p).setTickStrategy(S.DateTime,(e=>e.setDateOrigin(M))),f=C.getDefaultAxisY().setStrokeStyle(m[0]).setOverlayStyle(T[0]).setNibOverlayStyle(T[0]).setTickStrategy(S.Numeric,(e=>e.setMajorTickStyle((e=>e.setGridStrokeStyle(a))).setMinorTickStyle((e=>e.setGridStrokeStyle(a))))),F=C.addAxisY(!1).setTitle("No of units produced").setStrokeStyle(m[1]).setOverlayStyle(T[1]).setNibOverlayStyle(T[1]).setTickStrategy(S.Numeric,(e=>e.setMajorTickStyle((e=>e.setGridStrokeStyle(a))).setMinorTickStyle((e=>e.setGridStrokeStyle(a))))),N=C.addSplineSeries({xAxis:O,yAxis:f}).setName("TechComp").setStrokeStyle(A[0]).setPointFillStyle((()=>A[0].getFillStyle())),R=C.addSplineSeries({xAxis:O,yAxis:F}).setName("UniTek").setStrokeStyle(A[1]).setPointFillStyle((()=>A[1].getFillStyle())),b=864e5;N.add([{x:0,y:352},{x:1,y:352},{x:2,y:352},{x:3,y:358},{x:4,y:400},{x:5,y:400},{x:6,y:400},{x:7,y:400},{x:8,y:426},{x:9,y:390},{x:10,y:390},{x:11,y:390},{x:12,y:390},{x:13,y:360},{x:14,y:360},{x:15,y:360},{x:16,y:500},{x:17,y:500},{x:18,y:500},{x:19,y:600}].map((e=>({x:e.x*b*7,y:e.y})))),R.add([{x:0,y:235},{x:1,y:235},{x:2,y:335},{x:3,y:335},{x:4,y:490},{x:5,y:490},{x:6,y:490},{x:7,y:492},{x:8,y:550},{x:9,y:550},{x:10,y:600},{x:11,y:600},{x:12,y:900},{x:13,y:900},{x:14,y:900},{x:15,y:850},{x:16,y:1e3},{x:17,y:1200},{x:18,y:1200},{x:19,y:1300}].map((e=>({x:e.x*b*7,y:e.y})))),f.setInterval(N.getYMin()-10,N.getYMax()+10,!0,!0),F.setInterval(R.getYMin()-10,R.getYMax()+10,!0,!0),C.setAutoCursor((e=>{e.setResultTableAutoTextStyle(!0).setTickMarkerXAutoTextStyle(!0).setTickMarkerYAutoTextStyle(!0)})),C.addLegendBox(n.HorizontalLegendBox).setAutoDispose({type:"max-width",maxWidth:.8}).add(C);const v=(e,t,y,l)=>e.addRow(t.getName()).addRow(O.formatValue(y)).addRow("Units: "+Math.floor(l));N.setCursorResultTableFormatter(v),R.setCursorResultTableFormatter(v)}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);