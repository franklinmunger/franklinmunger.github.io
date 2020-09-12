$(document).ready(function(){
    // $("#name-title").html("🙏🏿");
    console.log('Hello world');

    $( "#projects-link" ).click(function() {
        $('html, body').animate({scrollTop: $('#projects').offset().top},
            1000);
    });
    
    $("#profile-picture").click(function(){
        // Change src attribute of image
        const image1 = "https://i.imgur.com/ZiaWCXz.jpg";
        
        const image2 = "https://westernmustangs.ca/images/2014/10/7//Ademiden_Toniwa_cropped.jpg?width=300";
        
        $(this).attr("src", $(this).attr("src") === image1 ? image2 : image1);
    });

});