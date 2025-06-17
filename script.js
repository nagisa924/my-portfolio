 <script>
        $(document).ready(function () {
            $('#js-hamburger').on('click', function () {
                // console.log("ハンバーガーメニューがクリック");
                $('#header__nav').toggleClass('open');
                $('#js-hamburger').toggleClass('open');
                $('.header__nav-list').toggleClass('open');

                // console.log("ナビゲーションのクラス:", $("#header__nav").attr("class"));
                // console.log("ハンバーガーのクラス:", $("#js-hamburger").attr("class"));

            });
        });
    </script>



$(document).ready(function () {
    setTimeout(function () {
        $(".hero-text h1").fadeIn(1000);
    }, 1000);
});
