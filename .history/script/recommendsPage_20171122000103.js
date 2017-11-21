$(document).ready(function () {
    $("img").click(function () {
        var t = $(this).attr("src");
        $(".body").html("<img src='" + t + "' class='modal-img'>");
        $("#myModal").();
    });
});