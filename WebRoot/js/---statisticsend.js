	var data = {
				labels : ["5月1日","5月2日","5月3日","5月4日","5月5日","5月6日","5月7日","5月8日","5月9日","5月10日","5月11日","5月12日","5月13日","5月14日","5月15日","5月16日","5月17日","5月18日","5月19日"],
				datasets : [
					{
						lineItemName : "test1",
						fillColor : "rgba(220,220,220,0.5)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						data : [65,59,90,81,56,55,40,2,34,55,67,88,99,23,43,65,55,33,17]
					}
					/*
					,
					{
						lineItemName : "test2",
						fillColor : "rgba(151,187,205,0.5)",
						strokeColor : "rgba(151,187,205,1)",
						pointColor : "rgba(151,187,205,1)",
						pointStrokeColor : "#fff",
						data : [28,48,40,19,96,27,100]
					}
					*/
				]
			};
			
			var defaults = {    
							    scaleStartValue :null,     // Y 轴的起始值
							    scaleLineColor : "rgba(0,0,0,.1)",    // Y/X轴的颜色
							    scaleLineWidth : 1,        // X,Y轴的宽度
							    scaleShowLabels : true,    // 刻度是否显示标签, 即Y轴上是否显示文字   
							    scaleLabel : "<%=value%>", // Y轴上的刻度,即文字  
							    scaleFontFamily : "'Arial'",  // 字体  
							    scaleFontSize : 14,        // 文字大小 
							    scaleFontStyle : "normal",  // 文字样式  
							    scaleFontColor : "#666",    // 文字颜色  
							    scaleShowGridLines : false,   // 是否显示网格  
							    scaleGridLineColor : "rgba(0,0,0,.05)",   // 网格颜色
							    scaleGridLineWidth : 2,      // 网格宽度  
							    bezierCurve : true,         // 是否使用贝塞尔曲线? 即:线条是否弯曲     
							    pointDot : true,             // 是否显示点数  
							    pointDotRadius : 8,          // 圆点的大小  
							    pointDotStrokeWidth : 1,     // 圆点的笔触宽度, 即:圆点外层边框大小 
							    datasetStroke : true,        // 数据集行程
							    datasetStrokeWidth : 2,      // 线条的宽度, 即:数据集
							    datasetFill : false,         // 是否填充数据集 
							    animation : true,            // 是否执行动画  
							    animationSteps : 60,          // 动画的时间   
							    animationEasing : "easeOutQuart",    // 动画的特效   
							    onAnimationComplete : null ,   // 动画完成时的执行函数   
							    };
			var chartLine = null;
			window.onload = function(){			
				var ctx = document.getElementById("myChart").getContext("2d");
				chartLine = new Chart(ctx).Line(data,defaults);
				
				initEvent(chartLine, clickCall);
			}
			
			function clickCall(evt) {
				var point = chartLine.getPointSingleAtEvent(evt);
				
				if ( point !== null )
					alert( point.label + ": " + point.lineItemName + " ____ " + point.value);
			}
			
			function initEvent(chart, handler) {
				var method = handler;
				var eventType = "click";
				var node = chart.chart.canvas;
								
				if (node.addEventListener) {
					node.addEventListener(eventType, method);
				} else if (node.attachEvent) {
					node.attachEvent("on" + eventType, method);
				} else {
					node["on" + eventType] = method;
				}
			}