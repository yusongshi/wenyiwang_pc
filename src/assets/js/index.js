jQuery(".slideBox").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});

$(".fupiao .phone").mouseenter(function(){
    $(".fupiao .phone .out").show();
}).mouseout(function(){
    $(".fupiao .phone .out").hide();
});

$(".fupiao .ewm").mouseenter(function(){
    $(".fupiao .ewm .out").css("display","flex");
}).mouseout(function(){
    $(".fupiao .ewm .out").hide();
});
$(".fupiao .close").click(function(){
    $(".fupiao").hide();
});
$(".fupiao .totop").click(function(){
    document.body.scrollTop=document.documentElement.scrollTop=0;
});