$(window).on('load', function () {
    fullPage();
});

function fullPage() {
    let currentSection = 0;
    const $sections = $('.section'); // 모든 섹션 요소
    const $menu =  $('.quick_menu > li'); // 메뉴 항목
    const $footer = $('footer'); // 페이지 하단 영역
    let menuHeight = $('header').height(); // 상단 메뉴 높이
    const numSections = $sections.length; // 섹션의 개수

    //메뉴 클릭 이벤트 핸들러
    function clickHandler(e, targetSectionIndex) {
        e.preventDefault();
        const offset = $sections.eq(targetSectionIndex).offset().top;
        currentSection = targetSectionIndex;
        // 해당 섹션으로 스크롤 이동
        $('html,body').animate({ scrollTop: offset - menuHeight }, 500);
    }

    // 섹션 스크롤 함수
    function scrollToSection(sectionIndex) {
        const targetPosition = sectionIndex === numSections ? $footer.offset().top : $sections.eq(sectionIndex).offset().top;
        //특정 섹션으로 스크롤 이동
        $('html, body').animate({
            scrollTop: targetPosition - menuHeight
        }, 500, function () {
            isScrolling = false;
        });
    }

    // 메뉴 클릭 이벤트 핸들러
    $menu.children('a').on('click', function (e) {
        const targetSectionIndex = $sections.index($($(this).attr('href')));
        clickHandler(e, targetSectionIndex);
    });

    // // 마우스 휠 이벤트 핸들러
    // $(window).on('wheel', handleScroll);

    // 스크롤 이벤트 핸들러를 통해 활성 메뉴 업데이트
    $(window).scroll(function(){
        let scltop = $(window).scrollTop() + menuHeight;
        $.each($sections, function(idx, item){
            let targetTop = $(this).offset().top;
            if (targetTop <= scltop) {
                $menu.removeClass('active');
                $menu.eq(idx).addClass('active');
            }
        })
        if (Math.round( $(window).scrollTop()) == $(document).height() - $(window).height()) {
            $menu.last().addClass('active').siblings().removeClass('active');
        }
    }).scroll();
}