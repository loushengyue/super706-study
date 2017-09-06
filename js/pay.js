$(function(){
    $('.payment_code li').eq(5).find('input').css('border','none');
    var mi=0;
    $('.btn_pay').click(function(){
        mi++
        if(mi==1){
            $('.pay_failure').css('display','block');
        }else{
            $('.pay_success').css('display','block');
            mi=0;
        }
    })
    /*pc 端支付点击事件*/
    $('.pay_failure .remove_go').click(function(){
        $('.pay_failure').css('display','none')
    });
    $('.pay_success .remove_go').click(function(){
        $('.pay_success').css('display','none')
    });
    /*pc 端 弹窗 关闭事件*/
    $(function(){
        $('.pay_submit').click(function(){
            if(!$('.payment_code li').eq(5).find('input').val()==""){
                $('.payment_code li').eq(5).find('input').focus()
            }else{
                $('.payment_code li').eq(0).find('input').focus()
            }
        })
    })

    var num;
    $('.payment_code li input').keyup(function(e){
        if(e.keyCode >= 48 && e.keyCode <= 57|| e.keyCode >=96 && e.keyCode <=105 || e.keyCode == 8){
            var index=$(this).parent().index()
            switch(e.keyCode){
                case 48:
                    num = 0;
                    break;
                case 49:
                    num=1;
                    break
                case 50:
                    num = 2
                    break;
                case 51:
                    num = 3
                    break;
                case 52:
                    num = 4
                    break;
                case 53:
                    num = 5
                    break;
                case 54:
                    num = 6
                    break;
                case 55:
                    num = 7
                    break;
                case 56:
                    num = 8
                    break;
                case 57:
                    num = 9
                    break;
                case 96:
                    num = 0;
                    break;
                case 97:
                    num = 1;
                    break;
                case 98:
                    num = 2
                    break;
                case 99:
                    num = 3
                    break;
                case 100:
                    num = 4
                    break;
                case 101:
                    num = 5
                    break;
                case 102:
                    num = 6
                    break;
                case 103:
                    num = 7
                    break;
                case 104:
                    num = 8
                    break;
                case 105:
                    num = 9
                    break;
            }
            if(!$('.payment_code li').eq(index).find('input').val()==""){
                $('.payment_code li').eq(index).find('input').val(num)
                index++;
                $('.payment_code li').eq(index).find('input').focus()
            }

            //按下删除键   keyCode键码数
            if(e.keyCode == 8){
                index = $(this).parent().index()
                if(!$('.payment_code li').eq(index-1).find('input').val()==""){
                    $('.payment_code li').eq(index-1).find('input').focus()
                    if(index==0){
                        $('.payment_code li').eq(0).find('input').val("")
                        $('.payment_code li').eq(index).find('input').focus()
                    }
                }
            }
        }else{
            $('.payment-code li').eq(0).find('input').val("")
            return;
        }
    })

    function Twindow(){

        var b=document.getElementById("put1").value;
        var c=document.getElementById("put2").value;
        var d=document.getElementById("put3").value;
        var e=document.getElementById("put4").value;
        var f=document.getElementById("put5").value;
        var g=document.getElementById("put6").value;

        if(b==""||c==""||d==""||e==""||f==""||g==""){
            alert("请完善密码！否则无法支付");
            return false;
        }else{
            return true;
        }
    }

})