// jQuery を使ったハンバーガーメニュー切り替え
$(function () {
    $('#hamburger').on('click', function () {
        $('#nav-menu').toggleClass('active');
    });
});


$(document).ready(function () {
    // 1秒後に h1 要素をフェードイン
    setTimeout(function () {
        $(".hero-text h1").fadeIn(1000); // 1000 = 1秒かけてフェードイン
    }, 1000); // 表示開始まで1秒待つ
});
