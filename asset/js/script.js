
var swiper = new Swiper(".mySwiper-hero", {
    slidesPerView: "auto",
    centeredSlides: true,
    effect: "fade",
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    spaceBetween: 0,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

var swiper = new Swiper(".mySwiper-equip", {
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 0,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
            slidesPerView: "auto",
            spaceBetween: 30,
        }
    }
});

var swiper = new Swiper(".mySwiper-surgeon", {
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        592: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        414: {
            slidesPerView: 1.5
        }
    }
});

var swiper = new Swiper(".mySwiper-review", {
    // 기본 설정 (모바일 등 작은 화면)
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // 반응형 지점 설정
    breakpoints: {
        // 화면 너비가 592px 이상일 때
        592: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.notice .swiper', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, //자동 재생 여부
    loop: true	//반복 재생 여부
});



$(function () {
    $(".lumbar").addClass("solution-on").find(".solution-tab-body").show();

    $(".solution-list-ontitle").click(function () {
        // 1. 클릭한 h2(타이틀)의 바로 위 부모인 .solution-off를 찾습니다.
        // (ex: 내가 lumbar를 클릭했으면 lumbar 클래스가 있는 div가 선택됨)
        var $myParent = $(this).parent(".solution-off");

        // 2. [형제 제외 처리] 
        // 내 부모($myParent)와 같은 레벨에 있는 다른 .solution-off 형제들을 찾습니다.
        // 그리고 그 안의 내용을 닫고(slideUp), 활성화 클래스(solution-on)를 뺍니다.
        $myParent.siblings(".solution-off").removeClass("solution-on")
            .find(".solution-tab-body").slideUp();

        // 3. [내 거 처리]
        // 내 부모에는 활성화 클래스를 토글하고, 내 본문은 엽니다.
        $myParent.toggleClass("solution-on");
        $(this).next(".solution-tab-body").slideToggle();
    });
});


$(document).ready(function () {
    $('.aniview').AniView({
        animateClass: 'animated', // Animate.css 3.7.0 클래스명
        offset: 0.3,             // 0.1(10%) ~ 0.5(50%) 추천. 요소가 화면에 얼마나 보일 때 시작할지 결정
        textInput: false         // 기본값
    });
});


$('.close-btn').on('click', function () {
    $('.modal').hide();
});