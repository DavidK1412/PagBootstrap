/*NAVBAR*/ 
//Menu, esconder
$(document).ready(function(){
    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showing");
    })
})
//Efecto scroll
$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }else{
        $('nav').removeClass('black');
    }
})
/*FINAL NAVBAR*/ 
