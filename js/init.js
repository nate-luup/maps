$(document).ready(function () {
    var headerSize = 70;
    // Anchor scroll
    $("a").each(function () {
        if ($(this).attr("href").substr(0, 1) === "#") {
            $(this).on("click", function (e) {
                e.preventDefault();
                var id = $(this).attr("href");
                if ($(id).length == 0) {
                    return;
                }
                $("html,body").animate({scrollTop: parseInt($(id).offset().top) - headerSize}, 200);
                window.location.hash = $(this).attr("href");
            });
        }
    });
    if (window.location.hash) {
        var id = window.location.hash;
        setTimeout(function () {
            if ($(id).length == 0) {
                return;
            }
            $("html,body").animate({scrollTop: parseInt($(id).offset().top) - headerSize}, 0);
        }, 1);
    }
});