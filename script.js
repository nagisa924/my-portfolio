// jQuery を使ったハンバーガーメニュー切り替え
$('.hamburger').on('click', function () {
    $('.header__nav-list').toggleClass('active');
});



$(document).ready(function () {
    setTimeout(function () {
        $(".hero-text h1").fadeIn(1000);
    }, 1000);
});
