$(function(){

        $.each(provinceList,function(i,item){
            $('#province').append('<option value="'+item.name+'">'+item.name+'</option>');
        });
        $('#province').change(function(){
            var province=$(this).val();
            $('#city :gt(0)').remove();
            $.each(provinceList,function(i,item){
                if(province==item.name){
                    $.each(item.cityList,function(key,val){
                        $('#city').append('<option value="'+val.name+'">'+val.name+'</option>');
                    })
                }
            })
        })


//  加入购物车
    $('.buy-now').find('a').eq(1).click(function(){
        var src=$('.tb-booth').find('img').attr('src');
        var num=$('.pro-num').val();
       var str='<tr>'+
        '<td>'+
        '<label onclick="checkone(this)">'+
        '<input type="checkbox" name="" class="check-one check"/>'+
        ' </label>'+
        '<div class="choose-img">'+
        '<a href="###"><img src="'+src+'" alt="'+src+'"/></a>'+
        '</div>'+
        '<h3>Hisense/海信LED234567网络高清 内置无线网</h3>'+
        '<p class="support">支持7天无理由退货</p>'+
        '</td>'+
        '<td>'+
        '<p>颜色：黑色</p>'+
        '<p>功率：200v</p>'+
        '</td>'+
        '<td class="price">¥399.90</td>'+
        '<td class="count">'+
        '<span class="reduce"></span>'+
        '<input type="text" name="" value="'+num+'" class="count-input" maxlength="2"/>'+
        '<span class="add"></span>'+
        '<input type="hidden"  class="max-count" value="5" />'+
        '</td>'+
        '<td class="subtotal">¥399.90</td>'+
        '<td>'+
        '<p class="delete">删除</p>'+
        '<p>到货通知</p>'+
        '<p>移到我的关注</p>'+
        '</td>'+
        '</tr>';

    });

})
