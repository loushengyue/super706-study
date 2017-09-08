$(function(){
    var menuAll = $('.menu h1');
    var body = $('body');

    menuAllEvent ();

	var guideNode = $('#guide');
	var guides = getMsgByRegExtId ('guideDatas');
	disposGuides (guides);

	var topNavNode = $('#topNav');
	var topNavDatas = getMsgByRegExtId ('topNav');
	var topNavDatasStr = disposUlLiA (topNavDatas);
	topNavNode.html('').html(topNavDatasStr);

	var searchNavNode = $('#searchNav');
	var _searchNavDatas = getMsgByRegExtId ('searchNav');
	var _searchNavDatasStr = disposUlLiA (_searchNavDatas);
	searchNavNode.html('').html(_searchNavDatasStr);

	var subMeunNode = $('#subMeun');
	var _subMeunDatas = getMsgByRegExtId ('subMeun');
	disposSubMenu (_subMeunDatas);

	var headerNavNode = $('#headerNav');
	var _headerNavDatas = getMsgByRegExtId ('headerNav');
	var _headerNavDatasStr = disposUlLiA (_headerNavDatas);
	headerNavNode.html('').html(_headerNavDatasStr);

	function disposSubMenu (_subMeunDatas) {
		var datas = _subMeunDatas[0].datas;
		var _str = '';
		for (var i = 0, l = datas.length; i < l; i++) {
			_str += '<li><h2><a href="' + datas[i].link + '">' + datas[i].title + '</a></h2><p>';
			for (var x = 0, n = datas[i].lists.length; x < n; x++) {
				_str += '<a href="' + datas[i].lists[x].url + '">' + datas[i].lists[x].name + '</a>/';
			}
			_str = _str.replace(/\/$/, '');
			_str += '</p></li>';
		}
		subMeunNode.html('').html(_str);
	}

	function disposUlLiA (data) {
		var datas = data[0].datas;
		var _str = '';
		for (var i = 0, l = datas.length; i < l; i++) {
			_str += '<li><a href="' + datas[i].link + '">' + datas[i].name + '</a></li>';
		}
		return _str;
	}

	function disposGuides (guides) {
		var datas = guides[0].datas;
		var _str = '';
		for (var i = 0, l = datas.length; i < l; i++) {
			_str += '<li><dl><dt>' + datas[i].title + '</dt>';
			for (var x = 0, n = datas[i].lists.length; x < n; x++) {
				_str += '<dd>' + datas[i].lists[x].name + '</dd>';
			}
			_str += '</dl></li>';
		}
		guideNode.html('').html(_str);
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

    function menuAllEvent () {
        var isMenuAllOpen = false;
        menuAll.click(function(e){
            e.stopPropagation();
            if(isMenuAllOpen){
                $(this).next().css('display','none');
                isMenuAllOpen = false;
            }else{
                $(this).next().css('display','block');
                isMenuAllOpen = true;
            }
        });
        menuAll.next().click(function (e) {
            e.stopPropagation();
        });
        body.click(function () {
            if (isMenuAllOpen) {
                menuAll.trigger('click');
            }
        });
    }

});
