$(function(){

    var goods = [];
    goods = getGoodsFromStorage();
    function getGoodsFromStorage () {
        var _goods = [];
        for (var i = 0, l = localStorage.length; i < l; i++) {
            var _key = 'HisensTV_' + (i + 1);
            var obj = JSON.parse(window.localStorage.getItem(_key));
            _goods.push(obj);
        }
        return _goods;
    }

    var goodList = $('#goodList');
    function createHtmlForGoods () {
        var str = '';
        for (var i = 0, l = goods.length; i < l; i++) {
            var _str = '<tr>'
                +'<td>'
                +'<label for="">'
                +'<input type="checkbox" name="" aaaaaaaa class="check-one check"/>'
                +'</label>'
                +'<div class="choose-img">'
                +'<a href="###"><img src="' + goods[i].imgSrc + '" alt="shop_cart_01.png"/></a>'
                +'</div>'
                +'<h3>' + goods[i].title +'</h3>'
                +'<p class="support">' + goods[i].support + '</p>'
                +'</td>'
                +'<td>bbbbbbbbbbbb</td>'
                +'<td class="price">¥' + goods[i].price +'</td>'
                +'<td class="count">'
                +'<span class="reduce"></span>'
                +'<input type="text" name="" value="'+ goods[i].count + '" class="count-input" maxlength="2"/>'
                +'<span class="add"></span>'
                +'<input type="hidden"  class="max-count" value="5" />'
                +'</td>'
                +'<td class="subtotal">¥' + goods[i].subtotal + '</td>'
                +'<td>'
                +'<p class="delete">删除</p>'
                +'<p>到货通知</p>'
                +'<p>移到我的关注</p>'
                +'</td>'
                +'</tr>';
            var checked = goods[i].checked ? 'checked' : '';
            var type = '';
            for (var j = 0, n = goods[i].typle.length; j < n; j++) {
                type += '<p>' + goods[i].typle[j]+ '</p>'
            }
            _str = _str.replace(/aaaaaaaa/g, checked)
                        .replace(/bbbbbbbbbbbb/g, type);

            str += _str;
        }
        return str;
    }
    var goodsStr = createHtmlForGoods ();
    goodList.append(goodsStr)
});