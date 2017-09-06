$(function () {

    var CreateModule = function (option, n) {
        this._arr = [];
        this._id = option.id;
        for (var i = 0; i < n; i++) {
            this._option = this.cloneObj(option);
            this._option.id = this._id + '_' + (i + 1);
            this._arr.push(this._option);
        }
        return this._arr;
    };
    CreateModule.prototype.cloneObj = function (obj) {
        if (typeof obj != 'object') {
            return obj;
        }
        this.newObj = {};
        for (var key in obj) {
            this.newObj[key] = obj[key]
        }
        return this.newObj;
    };

    var option = {
        id : 'HisensTV',
        checked : true,
        imgSrc : 'img/shop_cart_01.png',
        title : '1Hisense/海信LED234567网络高清 内置无线网',
        support : '支持7天无理由退货',
        typle : ['颜色：黑色', '功率：200w'],
        price : '399.00',
        count : '1',
        subtotal : '399.00'
    };
    var option2 = {
        id : 'TCLTV',
        checked : true,
        imgSrc : 'img/shop_cart_01.png',
        title : '1Hisense/海信LED234567网络高清 内置无线网',
        support : '支持7天无理由退货',
        typle : ['颜色：黑色', '功率：200w'],
        price : '399.00',
        count : '1',
        subtotal : '399.00'
    };

    var goods = new CreateModule (option, 10);
    var goods2 = new CreateModule (option2, 10);

    if (!window.localStorage.getItem('isCreateGoods')) {
        window.localStorage.clear();
        window.localStorage.setItem('isCreateGoods', 'true');
        createStorage (goods);
        createStorage (goods2);
    }

    function createStorage (arr) {
        for (var i = 0, l = arr.length; i < l; i++) {
            var key = arr[i].id;
            var str = JSON.stringify(arr[i]);
            window.localStorage.setItem(key, str)
        }
    }
});