 // a클릭시 부드럽게 이동
 $('a').click(function() {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

// 퀵메뉴
$('.quick_menu li a').click(function() {
    // 버튼 hover 이벤트
    return false
    $(this).parent().addClass('on');
    $(this).parent().siblings().removeClass('on');
});
// target 위치 표시와, 이동  
var sections = $('.target'),
    nav = $('.quick_menu'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('on');
            sections.removeClass('active');

            $(this).addClass('on');
            nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('on');
        }
    });
});

nav.find('a').on('click', function() {
    var $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top 
    }, 500);

    return false;
});


// 원하는 위치에서 스크롤 이벤트
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 520) {
        $('.quick_menu').addClass("fixed");
    } else {
        $('.quick_menu').removeClass("fixed");
    }
})