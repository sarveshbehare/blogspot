document.querySelector("h1").style.color="white";

$(".boxes").mouseover(function(){
    // console.log("haha");
    $(this).children(".options").addClass("hid");
    $(this).addClass("enlarge");
});

$(".boxes").mouseout(function(){
    $(this).children(".options").removeClass("hid");
    $(this).removeClass("enlarge");
});

$(".boxes").click(function(){
    var indx = $(this).attr("id");
    var i = indx.slice(5,indx.length);
    // console.log(i);
    window.location.href = "/viewblog?index=" + i;
});
