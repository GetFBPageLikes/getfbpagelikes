$(function () {
    $("#navbar a").click(function () {
        alert("Clicked the " + $(this).attr("id") + " button.");
	window.location = 'index.cgi?' + $(this.attr("id");
        });
});

function doNothing() {}
