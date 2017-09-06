/**
 * Created by Administrator on 2017/6/30.
 */

var ali;
  ali.style.transition='.5s';
  $(ali).animate({'left':100},1000,'easy-in');
  var ali=4;
  var num=0;
  var cloneali=$(ali).eq(0).clone;
 $(ul).append(cloneali);
  var index=0;
  setInterval(function(){
      index++;
      num=$(ali).positioin().left()/$(ali).width();
      if(num==ali){
          $(ali).css('left',0);
          index=0;
      }
  },1000);

  var str='<td colspan="6">'+
'<label for="">'
'<input type="checkbox" name="" id="">'
'<span class="proprietary">金正自营</span>'
'</label>'
'</td>'
var str='<td colspan="6"><label for=""><input type="checkbox" name="" id=""><span class="proprietary">金正自营</span></label></td>';
  localStorage.setItem('key','str');

  window.onload=function(){
      var cont=localStorage.getItem(key);
      $('ul').append(cont);
  }