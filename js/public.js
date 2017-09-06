$(function(){
    $('#user').focus(function(){
        if(!$(this).val()==''){
            $(this).val('');
        }
    });
    $('#user').blur(function(){
        if($(this).val()==''){
            $(this).val('笔记本低价8折起 仅剩2小时');
        }
    });

    var warp=0;
    $('.menu').click(function(){
        warp++;
        if(warp==2){
            $('.menu ').find('.submeun').css('display','none');
            warp=0;
        }else{
            $('.menu ').find('.submeun').css('display','block');
        }
    });

    $('#preferentialSelect').change(function (e) {
        $(this).css('color', '#2d2d2d');
    })

});
