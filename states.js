var pages = ["about", "design", "coding", "contact"];
var colors = ["#f86869", "#669766", "#66a2d7", "#f5e066"];
function show(id) {
    for (var i = 0; i < pages.length; i++) {
        if (pages[i] == id) {
            $('path').css({
               fill: colors[i] 
            });
            $('#' + id + "-page").css({
                display: 'block'
            });
            $('#' + id + "-page").animate({left:"8px", right:"8px"}, 500);
        }else if($('#' + pages[i] + "-page").css('display') == 'block'){
            $('#' + pages[i] + "-page").animate({left:"-105%", right:"105%"}, 500, function(){$(this).css({display: 'none'});});
        }
    }
}
