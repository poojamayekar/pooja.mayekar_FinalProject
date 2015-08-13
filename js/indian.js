$(document).ready(function(){
    $("#flip").click(function(){
        $("#my").slideToggle("slow");
    });
});

/* tooltip */

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/* Rating */
$(document).ready(function(){
    $("#rate").click(function(){
        $("#hide").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#rate1").click(function(){
        $("#hide1").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#rate2").click(function(){
        $("#hide2").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#rate3").click(function(){
        $("#hide3").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#rate4").click(function(){
        $("#hide4").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#rate5").click(function(){
        $("#hide5").slideToggle("slow");
    });
});


/* appetizers */
$(function(){
$('.panel').hover(function(){
        $(this).find('.panel-footer').slideDown(250);
    },function(){
        $(this).find('.panel-footer').slideUp(250); 
    });
})

