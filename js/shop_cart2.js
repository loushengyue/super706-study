$(function(){
    var goodList = $('#goodList');
    var HisensTV = 'HisensTV';
    var priceTotal = $('#priceTotal');
    var checkAll = $('.check-all');
    var goodLists;
    initHtml (function () {
        goodLists = $('#goodList tr[data-id^=HisensTV]');

        calTotalPrice();
        checkAllEvent ();
        checkOneEvent ();
    });


    function checkOneEvent () {
        goodLists.each(function (i) {
            var _vm = $(this);
            _vm.find('.check-one').bind('click', function () {
                calTotalPrices ()
            });
        });
    }

    function calTotalPrices () {
        var _subtotal = 0;
        goodLists.each(function () {
            var isChecked = $(this).find('.check-one').prop('checked');
            if (isChecked) {
                var subtotal = $(this).find('.subtotal').text().replace('¥', '');
                _subtotal += Number(subtotal);
            }
        });
        priceTotal.text(_subtotal.toFixed(2));
    }

    function checkAllEvent () {
        checkAll.click(function () {
            var _ggg = getMsgByRegExtId (HisensTV);
            var _isChecked = $(this).prop('checked');
            for (var i = 0, l = _ggg.length; i < l; i++){
                _ggg[i].checked = _isChecked ? true : false;
            }
            createStorage (_ggg);
            calTotalPrice()
        });
    }
    function calTotalPrice() {
        var _ggg = getMsgByRegExtId (HisensTV);
        var _total = 0;
        for (var i = 0, l = _ggg.length; i < l; i++) {
            if (_ggg[i].checked) {
                _total += Number(_ggg[i].subtotal);
            }
        }
        _total = _total.toFixed(2);
        priceTotal.text(_total);
    }
    function initHtml (callback) {
        var ggg = getMsgByRegExtId (HisensTV);
        var goodsStr = createHtmlForGoods (ggg);
        var firstTr = goodList.find('tr').eq(0).get(0);
        goodList.html('');
        goodList.append(firstTr);
        goodList.append(goodsStr);
        callback();
    }
    function createHtmlForGoods (goods) {
        if (goods.length == 0) {
            return;
        }
        var str = '';
        for (var i = 0, l = goods.length; i < l; i++) {
            var _str = '<tr data-id="' + goods[i].id + '">'
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
    function getMsgByRegExtId (id) {
        var reg = new RegExp(id);
        var res = [];
        for (var key in window.localStorage) {
            if (reg.test(key)) {
                var obj = JSON.parse(window.localStorage.getItem(key));
                res.push(obj)
            }
        }
        return res;
    }
    function createStorage (arr) {
        for (var i = 0, l = arr.length; i < l; i++) {
            var key = arr[i].id;
            var str = JSON.stringify(arr[i]);
            window.localStorage.setItem(key, str)
        }
    }
});