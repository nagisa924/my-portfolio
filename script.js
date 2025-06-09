// jQuery を使ったハンバーガーメニュー切り替え
$(function () {
    $('#hamburger').on('click', function () {
        $('#nav-menu').toggleClass('active');
    });
});


$(document).ready(function () {
    // 1秒後にメッセージをフェードイン表示
    setTimeout(() => {
        $(".hero").css({
            transform: "translate(-50%, -50%) scale(1)",
            opacity: 1
        });
    }, 1000);
});
