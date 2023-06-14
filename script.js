
    /*=========================
               OWL
      ==========================*/
    $("#owl-demo").owlCarousel({ autoPlay: 7e3, stopOnHover: !0, navigation: !1, paginationSpeed: 1e3, goToFirstSpeed: 2e3, singleItem: !0, autoHeight: !0 }),

    /*=========================
           Volta ao topo
      =========================*/
    $(window).on("scroll", function () {
        $(this).scrollTop() > 100 ?
            $(".back_top").fadeIn() : $(".back_top").fadeOut()
    }),
    $(".back_top").click(function () { return $("html, body").animate({ scrollTop: 0 }, 1e3), !1 });
/*=========================
        Dark Menu
    =========================*/
$('#chk').change(function () {
    if ($(this).is(':checked')) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});
