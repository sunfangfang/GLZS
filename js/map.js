/**
 * Created by y on 2016/8/12.
 */
window.onload=function(){
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{b}"
        },
        series : [
            {
                name: 'Map',
                type: 'map',
                mapLocation: {
                    x : 'left',
                    y : 'top',
                    height : 500
                },
                selectedMode: 'multiple',
                itemStyle: {
                    normal: {
                        borderWidth:2,
                        borderColor:'#fff',
                        color: '#f0f0f0',
                        label: {
                            show: false
                        }
                    },
                    emphasis: {                 // 也是选中样式
                        borderWidth:2,
                        borderColor:'#fff',
                        color: '#b3d6f4',
                        label: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                },
                data:[
                    {
                        name: '广东',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '湖北',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '四川',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '河南',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '辽宁',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '江苏',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '浙江',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '北京',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#ffb52a'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '天津',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#9fc869'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    }
                ],
                markPoint : {
                    symbolSize: 5,
                    itemStyle : {
                        normal:{
                            color:'#f13d00',
                            label: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                    fontSize:8
                                },
                                formatter: function (params,ticket,callback) {//格式化展现（标签+值）
                                    return params.name;
                                }
                            }
                        }
                    },
                    data : [
                        {name : '天津', value : 350},
                        {name : '上海', value : 103},
                        {name: "武汉", value: 273},
                        {name: "沈阳", value: 50},
                        {name: "苏州", value: 50},
                        {name: "成都", value: 58},
                        {name: "杭州", value: 84},
                        {name: "北京", value: 79}
                    ]
                },
                geoCoord: {
                    '上海': [121.4648,31.2891],
                    '天津': [117.4219,39.4189],
                    "沈阳":[123.38,41.8],
                    "苏州":[120.62,31.32],
                    "武汉":[114.31,30.52],
                    "成都":[104.06,30.67],
                    "北京":[116.46,39.92],
                    "杭州":[120.19,30.26]
                }
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
window.onresize=function(){
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{b}"
        },
        series : [
            {
                name: 'Map',
                type: 'map',
                mapLocation: {
                    x : 'left',
                    y : 'top',
                    height : 500
                },
                selectedMode: 'multiple',
                itemStyle: {
                    normal: {
                        borderWidth:2,
                        borderColor:'#fff',
                        color: '#f0f0f0',
                        label: {
                            show: false
                        }
                    },
                    emphasis: {                 // 也是选中样式
                        borderWidth:2,
                        borderColor:'#fff',
                        color: '#b3d6f4',
                        label: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                },
                data:[
                    {
                        name: '广东',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '湖北',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '四川',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '河南',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '辽宁',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '江苏',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '浙江',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#b3d6f4'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '北京',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#ffb52a'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    },
                    {
                        name: '天津',
                        value: Math.round(Math.random()*1000),
                        itemStyle: {
                            normal: {
                                color: '#9fc869'
                            },
                            emphasis: {                 // 也是选中样式
                                borderWidth:5,
                                borderColor:'yellow',
                                color: '#cd5c5c'
                            }
                        }
                    }
                ],
                markPoint : {
                    symbolSize: 5,
                    itemStyle : {
                        normal:{
                            color:'#f13d00',
                            label: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                    fontSize:8
                                },
                                formatter: function (params,ticket,callback) {//格式化展现（标签+值）
                                    return params.name;
                                }
                            }
                        }
                    },
                    data : [
                        {name : '天津', value : 350},
                        {name : '上海', value : 103},
                        {name: "武汉", value: 273},
                        {name: "沈阳", value: 50},
                        {name: "苏州", value: 50},
                        {name: "成都", value: 58},
                        {name: "杭州", value: 84},
                        {name: "北京", value: 79}
                    ]
                },
                geoCoord: {
                    '上海': [121.4648,31.2891],
                    '天津': [117.4219,39.4189],
                    "沈阳":[123.38,41.8],
                    "苏州":[120.62,31.32],
                    "武汉":[114.31,30.52],
                    "成都":[104.06,30.67],
                    "北京":[116.46,39.92],
                    "杭州":[120.19,30.26]
                }
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
