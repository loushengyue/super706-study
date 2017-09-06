$(function(){
    var setModule = function (module, n) {
        this.res = [];
        this._id = module.id;
        for (var i = 0; i < n; i++) {
            this._module = this.cloneObj(module);
            this._module.id = this._id + '_' +  (i + 1);
            this.res.push(this._module);
        }
        return this.res;
    };
    setModule.prototype.cloneObj = function (obj) {
        if (typeof obj != 'object') {
            return obj;
        }
        this._obj = {};
        for(var key in obj) {
            this._obj[key] = obj[key];
        }
        return this._obj;
    };

    var _obj1 = {
        id : 'HisenseTV',
        isChecked : false,
        imgSrc : 'img/shop_cart_01.png',
        title : 'Hisense/海信LED234567网络高清 内置无线网',
        support : '支持7天无理由退货',
        property : ['颜色：黑色', '功率：200v'],
        price : '399.90',
        count : '1',
        subtotal : '399.90'
    };

    var _obj2 = {
        id : 'TCLTV',
        isChecked : false,
        imgSrc : 'img/shop_cart_01.png',
        title : 'TCL/王牌LED234567网络高清 内置无线网',
        support : '支持7天无理由退货',
        property : ['颜色：黑色', '功率：100w'],
        price : '599.90',
        count : '1',
        subtotal : '599.90'
    };



    var goods = [{
        id : '001',
        isChecked : false,
        imgSrc : 'img/shop_cart_01.png',
        title : 'Hisense/海信LED234567网络高清 内置无线网',
        support : '支持7天无理由退货',
        property : ['颜色：黑色', '功率：200v'],
        price : '399.90',
        count : '1',
        subtotal : '399.90'
    }, {
        id : '007',
        isChecked : false,
        imgSrc : 'img/shop_cart_01.png',
        title : 'Hisense/海信LED234567网络高清 内置无线网',
        support : '支持7天无理由退货',
        property : ['颜色：黑色', '功率：200v'],
        price : '399.90',
        count : '1',
        subtotal : '399.90'
    }, {
        id : '010',
        isChecked : false,
        imgSrc : 'img/shop_cart_01.png',
        title : 'Hisense/海信LED234567网络高清 内置无线网',
        support : '支持7天无理由退货',
        property : ['颜色：黑色', '功率：200v'],
        price : '399.90',
        count : '1',
        subtotal : '399.90'
    }, {
        id : '011',
        isChecked : false,
        imgSrc : 'img/shop_cart_01.png',
        title : 'Hisense/海信LED234567网络高清 内置无线网',
        support : '支持7天无理由退货',
        property : ['颜色：黑色', '功率：200v'],
        price : '399.90',
        count : '1',
        subtotal : '399.90'
    }, {
        id : '015',
        isChecked : false,
        imgSrc : 'img/shop_cart_01.png',
        title : 'Hisense/海信LED234567网络高清 内置无线网',
        support : '支持7天无理由退货',
        property : ['颜色：黑色', '功率：200v'],
        price : '399.90',
        count : '1',
        subtotal : '399.90'
    }];

    function setSessionStorage (arr) {
        for (var i = 0, l = arr.length; i < l; i++) {
            var _str = JSON.stringify(arr[i]);
            var _key = arr[i].id;
            window.sessionStorage.setItem(_key, _str);
        }
    }
    //setSessionStorage (goods);

    var testArr = new setModule (_obj1, 10);
    var testArr2 = new setModule (_obj2, 10);
    console.log(testArr);
    console.log(testArr2);
    window.sessionStorage.clear();
    setSessionStorage (testArr);
    setSessionStorage (testArr2);
});