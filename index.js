
$(window).scroll(function () {
    const $title = $(".title");
    const $items = $(".items");
    console.log($(window).scrollTop());
    console.log($title.offset().top);
    if ($(window).scrollTop() >1) {
        $title.addClass("active");
        $items.addClass("active");
        // $('.title').stop(true).animate({top:'-170px'},170,);
        // $('.items').stop(true).animate({top:'-230px'},220,);
    } else {
        $title.removeClass("active");
        $items.removeClass("active");
        // $('.title').stop(true).animate({top:'0px'},100);
        // $('.items').stop(true).animate({top:'0px'},160);
    }
});
