$(document).ready(function(){
    // $("#name-title").html("🙏🏿");
    console.log('Hello world');

    $( "#projects-link" ).click(function() {
        $('html, body').animate({scrollTop: $('#projects').offset().top},
            1000);
    });
    
    $( "#profile-picture" ).click(function() {
        
        const originalImage = "https://i.imgur.com/rBkFyvz.jpg";
        
        const secondImage = "https://westernmustangs.ca/images/2014/10/7//Ademiden_Toniwa_cropped.jpg?width=300";
        
        const currentImage =  $("#profile-picture").attr("src");
        
        
        $("#profile-picture").attr("src", currentImage === originalImage ? secondImage : originalImage);
    });

});