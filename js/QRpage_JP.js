$('.quick_menu a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 0;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});


$(function(){
    var fixScroll = 0;
    $(window).scroll(function(event){
        var COFFILM = $("#COFFILM").outerHeight();
        var IMPAPER =  $("#IMPAPER").outerHeight();
        var IMBIO =  $("#IMBIO").outerHeight();
        var IMMONO =  $("#IMMONO").outerHeight();

        var scroll = $(this).scrollTop();
        if (scroll < COFFILM){
            $(".COFFILM").addClass("active");
        }
        else {
            $(".COFFILM").removeClass("active");
        }
        fixScroll = scroll;

        var scroll = $(this).scrollTop();
        if (scroll > IMPAPER){
            $(".IMPAPER").addClass("active");
        }
        else {
            $(".IMPAPER").removeClass("active");
        }
        fixScroll = scroll;

        var scroll = $(this).scrollTop();
        if (scroll > IMBIO){
            $(".IMBIO").addClass("active");
        }
        else {
            $(".IMBIO").removeClass("active");
        }
        fixScroll = scroll;

        var scroll = $(this).scrollTop();
        if (scroll > IMMONO){
            $(".IMMONO").addClass("active");
        }
        else {
            $(".IMMONO").removeClass("active");
        }

        fixScroll = scroll;
    });
});