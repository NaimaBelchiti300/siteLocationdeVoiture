$(document).ready(function () {

   
    $( ".img_container img :first-child").addClass("active")
    $("#burger_menu").click(function(){
        $("#scrolling_menu").slideToggle();
        $("#burger_menu").toggleClass("bg-color-white");
        $("#burger_menu div").toggleClass("bg-color-black");

    });





    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() == $(document).height()){
            $(".toBeFaded").fadeIn(2000);
        }
    })
    $(".arrow_left").click(function(){




        var nbrImgs=$(this).parent().find(".img_container img").length;

        var counter=$(this).parent().find(".img_container img.active").index();
        var leftValue=counter * -100;

        if(counter >  0){
            $(this).parent().find(".img_container img").removeClass("active");
            $(this).parent().find(".img_container img").eq(counter - 1 ).addClass("active");
            leftValue+=100;
            $(this).parent().find(".img_container ").animate({left : leftValue + "%"}, 1000);
 
        }








        

    });

    $(".arrow_rigth").click(function(){
        var nbrImgs=$(this).parent().find(".img_container img").length;

        var counter=$(this).parent().find(".img_container img.active").index();
        var leftValue=counter * -100;

        if(counter < nbrImgs - 1){
            $(this).parent().find(".img_container img").removeClass("active");
            $(this).parent().find(".img_container img").eq(counter + 1 ).addClass("active");
            leftValue-=100;
            $(this).parent().find(".img_container ").animate({left : leftValue + "%"}, 1000);
            counter++

        }

    })
























});