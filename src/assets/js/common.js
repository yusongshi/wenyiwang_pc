$(".includebottombox .includebottom ul.ib1 li.t").each(function(index){
    $(this).click(function(){
        $(".includebottombox .blackcover").show();
    });
});
$(".includebottombox .blackcover .openlist img.close").click(function(){
    $(".includebottombox .blackcover").hide();
})