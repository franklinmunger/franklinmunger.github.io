$(document).ready(function(){
    // $("#name-title").html("🙏🏿");
    console.log('Hello world');

    $( "#projects-link" ).click(function() {
        $('html, body').animate({scrollTop: $('#projects').offset().top},
            1000);
    });

});