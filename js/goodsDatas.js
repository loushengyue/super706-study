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

    var shopCartDatas1 = autoCreateModule (option_HisensTV, 10);
    var commonDatasGuide = autoCreateModule (common_datas_guide, 1);
    var topNavDatas = autoCreateModule (option_topNavDatas, 1);
    var searchNavDatas = autoCreateModule (option_searchNavDatas, 1);
    var subMeunDatas = autoCreateModule (option_subMeun, 1);
    var headerNavDatas = autoCreateModule (option_headerNav, 1);


    if (!window.localStorage.getItem('isCreateGoods')) {
        window.localStorage.clear();
        window.localStorage.setItem('isCreateGoods', 'true');
        createStorage (shopCartDatas1);
        createStorage (commonDatasGuide);
        createStorage (topNavDatas);
        createStorage (searchNavDatas);
        createStorage (subMeunDatas);
        createStorage (headerNavDatas);

        console.log('New localStorage msg has been created!')
    }







    function createStorage (arr) {
        for (var i = 0, l = arr.length; i < l; i++) {
            var key = arr[i].id;
            var str = JSON.stringify(arr[i]);
            window.localStorage.setItem(key, str)
        }
    }

    function autoCreateModule (options, times = 1) {
        if (typeof options == 'object') {
            return new CreateModule (options, times);
        } else if (typeof options == 'array') {
           var _res = [];
           for (var i = 0, l = options.length; i < l; i++) {
               var _opt = new CreateModule (options[i], 1);
               _res.push(_opt[0]);
           }
           return _res; 
        }
    }
});