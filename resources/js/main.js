$(document).ready(function(){



    /* STICKY MENU*/
    $(".js_services_section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        }else {
            $("nav").removeClass("sticky");
        }
    });


    /* Mix It Up */
    var mixer = mixitup('.container');
});