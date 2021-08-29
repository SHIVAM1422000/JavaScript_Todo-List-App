//checking off todos
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
 
});



$("ul").on("click","span",function() {
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
      
    });
   event.stopPropagation();
});




$("input").on("keypress",function(){
    if(event.which===13){
       var newItem = $(this).val();
       $("ul").append("<li><span><i></i></span> "+  newItem+" </li>");
    $("input").val("");
    $("#bottomPart i").addClass("fa fa-trash");
    }
})

$("input").on("keypress",function(){
    if(event.which===13){
        $(this).toggleClass("inputEdit");
       
    }
});


