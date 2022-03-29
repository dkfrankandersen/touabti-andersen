$("#danish").click(function() {
    $("#danish").attr('id','notactive')  
    $(".fr, :lang(fr)").fadeOut('slow');
    $(".en, :lang(en)").fadeOut('slow');
    $(".da, :lang(da)").fadeIn('slow'); 
});

$("#english").click(function() {
    $("#english").attr('id','notactive')  
    $(".da, :lang(da)").fadeOut('slow');
    $(".fr, :lang(fr)").fadeOut('slow');
    $(".en, :lang(en)").fadeIn('slow'); 
});

$("#french").click(function() {
    $("#french").attr('id','notactive')  
    $(".da, :lang(da)").fadeOut('slow');
    $(".en, :lang(en)").fadeOut('slow');
    $(".fr, :lang(fr)").fadeIn('slow');
});