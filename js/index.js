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

    // banner图
    slidebanner({
        contain1:'#banners',
        contain2:'#banners ul',
        btn:'#banBtn',
        sldir:['.btn_pre','.btn_nex'],
        auto:true
    });

    //$('.recommond>li').warp('<b></b>');

    //$('.guide>dt').warpInner('<b></b>')
})