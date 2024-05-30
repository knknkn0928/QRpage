var tabBtn = $("#tab-btn > ul > li");
var tabCont = $("#tab-cont > div");

tabCont.hide().eq(0).show();

tabBtn.click(function(){
  var target = $(this);
  var index = target.index();
  tabBtn.removeClass("active");
  target.addClass("active");

  tabCont.css("display","none");
  tabCont.eq(index).css("display","block");
});

