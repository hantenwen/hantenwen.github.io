$(document).ready(function () {
    var h_pos = $("#horizontal").offset().top;
    var hframe_h = $("#hframe").height();
    var winh = $(window).height();
    var max_scroll = $(document).height() - $(window).height();
    var max_w = $("#horizontal").width() - $(window).width();

    $(window).on("resize", function () {
        h_pos = $("#horizontal").offset().top;
        hframe_h = $("#hframe").height();
        winh = $(window).height();
        max_scroll = $(document).height() - $(window).height();
        max_w = $("#horizontal").width() - $(window).width();
    });

    $(window).scroll(function () {
        var current_pos = $(window).scrollTop();
        if (current_pos > h_pos && current_pos < h_pos + hframe_h - winh) {
            var new_left = -1 * max_w * ((current_pos - h_pos) / (hframe_h - winh));
            $("#horizontal").css({
                left: new_left
            });
        }
    });
});
