/**
 * Created by y on 2016/8/15.
 */
$(function(){
    $(window).resize(function() {
        CCH();
        CYH();
    });
//    产品分析
    function CCH() {
        var CH=$(window).height();
        var aa=parseInt(CH) -71;
        $(".jt_contr").css("height", aa);
    }
//    首页
    function CYH() {
        var sjh=$(window).height();
        var csj= parseInt(sjh) -245;
        $(".cy_div").css("height", csj);
    }
    CCH();
    CYH();


//    选中状态，页面跳转
    $(".h_nav li a").click(function(){
        $(".h_nav li a").removeClass("tit_sel");
        $(this).addClass("tit_sel");
    });

    $("#btn1").click(function(){
        $(this).addClass("btn1a");
        $(".btn2b").removeClass("btn2a");
        $(".jt_contr2").hide();
        $(".jt_contr1").show();
    });
    $("#btn2").click(function(){
        $(this).addClass("btn2a");
        $(".btn1a").removeClass("btn1a");
        $(".jt_contr1").hide();
        $(".jt_contr2").show();
    });

//    进度条
    var cicle = function(text,lName,rName,textIn) {
        var oTx = $(text);
        var b_l_a = $(lName);
        var b_r_a = $(rName);
        var t_In=$(textIn);
        var cicleTransform = function(num, old_num) {
            var c_num = num;
            if(c_num > 50) {
                b_r_a.css({
                    "transform": "rotate(45deg)",
                    "transition": "transform 1s linear"
                });
                setTimeout(function() {
                    b_l_a.css({
                        "transform": "rotate(" + (((c_num-50)/100*360)-135) + "deg)",
                        "transition": "transform 1s linear"
                    });
                },1000);
            } else {
                if(old_num > 50) {
                    setTimeout(function() {
                        b_r_a.css({
                            "transform": "rotate(" + ((c_num/100*360)-135) + "deg)",
                            "transition": "transform 1s linear"
                        });
                    },1000);
                    b_l_a.css({
                        "transform": "rotate(-135deg)",
                        "transition": "transform 1s linear"
                    });
                } else {
                    b_r_a.css({
                        "transform": "rotate(" + ((c_num/100*360)-135) + "deg)",
                        "transition": "transform 1s linear"
                    });
                }

            }
        }
        var setnum = function(num) {
            oTx.text(num + "%");
        };
        var getnum = function() {
            return parseInt(oTx.text());
        };


        var num = parseInt($.trim( $(t_In).val() ));
        if(num>=0 && num <= 100){
            cicleTransform(num, getnum());
            setnum(num);
        }else{
            //alert("输入100以内的数值！");
        }




    };
    cicle(".tx1",".lName1",".rName1","#inp1");
    cicle(".tx2",".lName2",".rName2","#inp2");
    cicle(".tx3",".lName3",".rName3","#inp3");
    cicle(".tx4",".lName4",".rName4","#inp4");
});
