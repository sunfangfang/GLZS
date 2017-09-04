/**
 * Created by y on 2016/8/10.
 */
window.onload=function(){
    var myChart1 = echarts.init(document.getElementById('mx1'));
    var myChart2 = echarts.init(document.getElementById('cjl1'));
    var myChart3 = echarts.init(document.getElementById('mx2'));
    var myChart4 = echarts.init(document.getElementById('cjl2'));
    var myChart5 = echarts.init(document.getElementById('mx3'));
    var myChart6 = echarts.init(document.getElementById('cjl3'));
    var myChart7 = echarts.init(document.getElementById('mx4'));
    var myChart8 = echarts.init(document.getElementById('cjl4'));
    var drawChart=function(name,text,dataX,nameY,setdata){
        option = {
            title : {
                text: text
            },
            tooltip : {
                trigger: 'axis'
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: false},
                    dataView : {show: false, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: false},
                    saveAsImage : {show: false}
                }
            },
            calculable : false,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : dataX
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value}'+nameY
                    }
                }
            ],
            series : [
                {
                    type:'line',
                    data:setdata
                }
            ]
        };
        // 为echarts对象加载数据
        name.setOption(option);
    };
    drawChart(myChart1,'实收明细:(单位:元)',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"万",[11,11,15,13,12,13,10,11,11,15,13,12,13,10,11,11,15,13,12,13,10,11,11,15,13,12,13,10,11,11]);
    drawChart(myChart2,'成交量:(单位:人)',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"万",[11,11,15,13,12,13,10,11,11,15,13,12,13,10,11,11,15,13,12,13,10,11,11,15,13,12,13,10,11,11]);
    drawChart(myChart3,'实收明细:(单位:元)',["周一","周二","周三","周四","周五","周六","周日"],"万",[11,11,15,13,12,13,10]);
    drawChart(myChart4,'成交量:(单位:人)',["周一","周二","周三","周四","周五","周六","周日"],"万",[11,11,15,13,12,13,10]);
    drawChart(myChart5,'实收明细:(单位:元)',[1,2,3,4,5,6,7,8,9,10,11,12],"万",[11,11,15,13,12,13,10,11,11,15,13,12]);
    drawChart(myChart6,'成交量:(单位:人)',[1,2,3,4,5,6,7,8,9,10,11,12],"万",[11,11,15,13,12,13,10,11,11,15,13,12]);
    drawChart(myChart7,'实收明细:(单位:元)',[2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],"万",[10,11,11,15,13,12,13,10,11,11]);
    drawChart(myChart8,'成交量:(单位:人)',[2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],"万",[10,11,11,15,13,12,13,10,11,11]);
};
window.onresize=function(){
    drawChart(myChart1,'实收明细:(单位:元)',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"万",[11,11,15,13,12,13,10,11,11,15,13,12,13,10,11,11,15,13,12,13,10,11,11,15,13,12,13,10,11,11]);
    drawChart(myChart2,'成交量:(单位:人)',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"万",[11,11,15,13,12,13,10,11,11,15,13,12,13,10,11,11,15,13,12,13,10,11,11,15,13,12,13,10,11,11]);
    drawChart(myChart3,'实收明细:(单位:元)',["周一","周二","周三","周四","周五","周六","周日"],"万",[11,11,15,13,12,13,10]);
    drawChart(myChart4,'成交量:(单位:人)',["周一","周二","周三","周四","周五","周六","周日"],"万",[11,11,15,13,12,13,10]);
    drawChart(myChart5,'实收明细:(单位:元)',[1,2,3,4,5,6,7,8,9,10,11,12],"万",[11,11,15,13,12,13,10,11,11,15,13,12]);
    drawChart(myChart6,'成交量:(单位:人)',[1,2,3,4,5,6,7,8,9,10,11,12],"万",[11,11,15,13,12,13,10,11,11,15,13,12]);
    drawChart(myChart7,'实收明细:(单位:元)',[2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],"万",[10,11,11,15,13,12,13,10,11,11]);
    drawChart(myChart8,'成交量:(单位:人)',[2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],"万",[10,11,11,15,13,12,13,10,11,11]);
};
