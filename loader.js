$(Document).ready(function(){
    $(".modal").modal();
    $(".parallax").parallax();
    $(".sidenav").sidenav();
    $(".slider").slider({ full_width: true });
    $(".parallax").parallax;
    
});

function toggleModel(){
    var instance = M.model.getInstance($('#modal3'))
    instance.open()
}