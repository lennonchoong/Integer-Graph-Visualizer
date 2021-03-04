(this.webpackJsonpsandpit=this.webpackJsonpsandpit||[]).push([[0],{17:function(t,e,i){},20:function(t,e,i){"use strict";i.r(e);var a=i(1),n=i.n(a),r=i(10),s=i.n(r),h=(i(17),i(8)),c=i.n(h),l=i(11),u=i(2),p=i(3),o=i(6),d=i(5),b=i(4),f=i(12),j=i(0),g=function(t){Object(d.a)(i,t);var e=Object(b.a)(i);function i(){var t;return Object(u.a)(this,i),(t=e.call(this)).canvasRef=n.a.createRef(),t}return Object(p.a)(i,[{key:"calculateBarWidth",value:function(t){return.6*t/this.props.numArr.length}},{key:"calculateBarMargins",value:function(t){return.4*t/(this.props.numArr.length+1)}},{key:"calculateScaledUnitHeight",value:function(t){return t/Math.max.apply(Math,Object(f.a)(this.props.numArr))}},{key:"initializeDimensions",value:function(){this.width=parseFloat(this.props.graphWidth),this.height=parseFloat(this.props.graphHeight),this.unitHeight=this.calculateScaledUnitHeight(.85*this.height),this.barMargin=this.calculateBarMargins(.95*this.width),this.barWidth=this.calculateBarWidth(.95*this.width)}},{key:"drawAxes",value:function(t,e){this.ctx.fillStyle="#e5c07b",this.ctx.fillRect(20,.05*t,1.5,.9*t),this.ctx.fillRect(20,.95*t,.95*e,1.5)}},{key:"drawDisplayNumbers",value:function(t,e){this.ctx.font="20px Montserrat",this.ctx.fillStyle="#abb2bf",this.ctx.textAlign="center",this.ctx.fillText(t,e+this.barMargin+this.barWidth/2,.95*this.height+25)}},{key:"drawBarGraph",value:function(){var t=this;this.drawAxes(this.height,this.width);for(var e,i,a,n,r=this.props.numArr,s=20,h=0;h<r.length;h++){var c=s+this.barMargin,l=.05*this.height+(.9*this.height-r[h]*this.unitHeight),u=r[h]*this.unitHeight;e=c,i=l,a=this.barWidth,n=u,t.ctx.fillStyle="#E06C75",t.ctx.fillRect(e,i,a,n),this.drawDisplayNumbers(r[h],s),s+=this.barMargin+this.barWidth}}},{key:"drawLineGraph",value:function(){var t=this;this.drawAxes(this.height,this.width);for(var e,i,a,n=this.props.numArr,r=function(e,i){t.ctx.fillStyle="#98c379",t.ctx.beginPath(),t.ctx.arc(e,i,5,0,2*Math.PI),t.ctx.fill()},s=function(e,i,a,n){t.ctx.strokeStyle="#61afef",t.ctx.setLineDash([]),t.ctx.lineWidth=1.5,t.ctx.moveTo(e,i),t.ctx.lineTo(a,n),t.ctx.stroke()},h=20,c=[20,.95*this.height],l=0;l<n.length;l++){var u=h+this.barMargin+this.barWidth/2,p=.05*this.height+.9*this.height,o=.05*this.height+(.9*this.height-this.props.numArr[l]*this.unitHeight);e=u,i=p,a=o,t.ctx.strokeStyle="#abb2bf",t.ctx.setLineDash([12,4]),t.ctx.beginPath(),t.ctx.moveTo(e,a),t.ctx.lineTo(e,i),t.ctx.stroke(),r(u,o),s(c[0],c[1],u,o),this.drawDisplayNumbers(n[l],h),c[0]=u,c[1]=o,h+=this.barMargin+this.barWidth}}},{key:"componentDidMount",value:function(){this.canvas=this.canvasRef.current,this.ctx=this.canvas.getContext("2d")}},{key:"getSnapshotBeforeUpdate",value:function(){this.initializeDimensions(),this.canvas.height=this.height,this.canvas.width=this.width,"bar"===this.props.type?this.drawBarGraph():"line"===this.props.type&&this.drawLineGraph()}},{key:"render",value:function(){return Object(j.jsx)("canvas",{ref:this.canvasRef})}}]),i}(a.Component),v=(i(9),function(t){Object(d.a)(i,t);var e=Object(b.a)(i);function i(t){var a;return Object(u.a)(this,i),(a=e.call(this,t)).graphBodyRef=n.a.createRef(),a.state={type:"bar"},a}return Object(p.a)(i,[{key:"componentDidMount",value:function(){this.setState({numArr:this.props.numArr}),this.setState({graphHeight:getComputedStyle(this.graphBodyRef.current).height}),this.setState({graphWidth:getComputedStyle(this.graphBodyRef.current).width})}},{key:"switchToBar",value:function(){this.setState({type:"bar"})}},{key:"switchToLine",value:function(){this.setState({type:"line"})}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"graph-wrapper",children:[Object(j.jsxs)("div",{className:"graph-top-header",children:[Object(j.jsx)("div",{className:"back-btn",onClick:function(){return t.props.handleBackBtn()},children:"Back"}),Object(j.jsxs)("div",{className:"inline-wrapper",children:[Object(j.jsx)("div",{className:"graph-title",children:this.props.title}),Object(j.jsxs)("div",{className:"toggle-view",children:[Object(j.jsx)("div",{className:"toggle-btn bar-btn",onClick:function(){return t.switchToBar()},children:"Bar"}),Object(j.jsx)("div",{className:"toggle-btn line-btn",onClick:function(){return t.switchToLine()},children:"Line"})]})]})]}),Object(j.jsx)("div",{ref:this.graphBodyRef,className:"graph-body",children:Object(j.jsx)(g,{graphWidth:this.state.graphWidth,graphHeight:this.state.graphHeight,type:this.state.type,numArr:this.state.numArr})})]})}}]),i}(a.Component)),x=function(t){Object(d.a)(i,t);var e=Object(b.a)(i);function i(){return Object(u.a)(this,i),e.apply(this,arguments)}return Object(p.a)(i,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"form-wrapper",children:[Object(j.jsx)("div",{className:"form-title",children:"Graph Chart Visualizer"}),Object(j.jsxs)("div",{className:"input-wrapper",children:[Object(j.jsx)("label",{className:"text-label",children:"Chart Title:"}),Object(j.jsx)("input",{type:"text",className:"title-input",onChange:function(e){return t.props.handleTitleInput(e)}})]}),Object(j.jsxs)("div",{className:"input-wrapper",children:[Object(j.jsx)("label",{className:"text-label",children:"Manual Input:"}),Object(j.jsx)("input",{type:"text",className:"manual-input",placeholder:"Ex. 1, 2, 3, 4",onChange:function(e){return t.props.handleManualInput(e)}})]}),Object(j.jsx)("div",{className:"text-span",children:Object(j.jsx)("span",{children:"Or"})}),Object(j.jsxs)("div",{className:"input-wrapper",children:[Object(j.jsx)("input",{type:"file",id:"files",className:"hidden",onChange:function(e){return t.props.handleFileInput(e)}}),Object(j.jsx)("label",{className:"csv-input",for:"files",children:"Select .csv or .txt file"})]}),Object(j.jsx)("div",{id:"create-chart",className:"input-wrapper",onClick:function(){return t.props.submitInfo()},children:Object(j.jsx)("span",{children:"Create Chart"})}),Object(j.jsx)("div",{className:"text-span",children:Object(j.jsx)("span",{id:"error-msg",ref:this.props.errorMsg})})]})}}]),i}(a.Component),m=function(t){Object(d.a)(i,t);var e=Object(b.a)(i);function i(){var t;return Object(u.a)(this,i),(t=e.call(this)).errorMsg=n.a.createRef(),t.state={title:"",displayChart:!1},t.handleFileInput=t.handleFileInput.bind(Object(o.a)(t)),t.handleManualInput=t.handleManualInput.bind(Object(o.a)(t)),t.handleTitleInput=t.handleTitleInput.bind(Object(o.a)(t)),t.handleBackBtn=t.handleBackBtn.bind(Object(o.a)(t)),t.submitInfo=t.submitInfo.bind(Object(o.a)(t)),t}return Object(p.a)(i,[{key:"handleTitleInput",value:function(t){var e=t.target.value;this.setState({title:e})}},{key:"handleManualInput",value:function(t){var e=t.target.value;this.setState({numArr:this.parseNumbers(e)})}},{key:"handleBackBtn",value:function(){this.setState({displayChart:!1})}},{key:"handleFileInput",value:function(t){var e=this;t.preventDefault();var i=new FileReader;i.onload=function(){var t=Object(l.a)(c.a.mark((function t(i){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=i.target.result,e.setState({numArr:e.parseNumbers(a.split("\n").join(", ")),displayChart:!0});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i.readAsText(t.target.files[0])}},{key:"parseNumbers",value:function(t){var e=this;return t.split(",").map((function(t){return t.replace(/\s/g,"")})).filter((function(t){return e.checkInteger(t)})).map((function(t){return parseInt(t)}))}},{key:"checkInteger",value:function(t){return!isNaN(t)&&""!==t&&Number.isInteger(parseFloat(t))}},{key:"submitInfo",value:function(){""===this.state.title?this.errorMsg.current.innerText="Empty chart title":this.state.numArr&&0!==this.state.numArr.length?(this.errorMsg.current.innerText="",this.setState({displayChart:!0})):this.errorMsg.current.innerText="Invalid or empty input data"}},{key:"render",value:function(){return this.state.displayChart?Object(j.jsx)("div",{className:"app-wrapper",children:Object(j.jsx)(v,{title:this.state.title,numArr:this.state.numArr,handleBackBtn:this.handleBackBtn})}):Object(j.jsx)("div",{className:"app-wrapper",children:Object(j.jsx)(x,{handleTitleInput:this.handleTitleInput,handleManualInput:this.handleManualInput,handleFileInput:this.handleFileInput,submitInfo:this.submitInfo,errorMsg:this.errorMsg})})}}]),i}(a.Component);s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))},9:function(t,e,i){}},[[20,1,2]]]);
//# sourceMappingURL=main.44141890.chunk.js.map