$(document).ready(function(){
    $("#logo").click(function(){
        alert("this logo is just a demo");
    
    });
    $("#side-links").click(function(){
        alert("this is a dummy link , it doesn't take u anywhere!")

    });
    $("#close").click(function(){
        $("#side-bar").hide();
    });
    $("main-color").css("color" ,"white")
    if ($("#main-title").css("color")=="white") {
        $(this).css("color","red");
    };
    $("#anime-link").hover(function(){
        $("#sub-anime-links").toggle()
    });
    $("#manga-link").hover(function(){
        $("#sub-manga-links").toggle();
    });
    $("#news-link").hover(function(){
        $("#sub-news-links").toggle();
    });
    $("#img1",).hover(function(){
        $("#text1").slideToggle(500);
    });
    $("#img2",).hover(function(){
        $("#text2").slideToggle(500);
    });
    $("#img3",).hover(function(){
        $("#text3").slideToggle(500);
    });
    $("#img4",).hover(function(){
        $("#text4").slideToggle(500);
    });
    $("#img5",).hover(function(){
        $("#text5").slideToggle(500);
    });
    $("#img6",).hover(function(){
        $("#text6").slideToggle(500);
    });
    $("#img7",).hover(function(){
        $("#text7").slideToggle(500);
    });
    $("#img8",).hover(function(){
        $("#text8").slideToggle(500);
    });
    $("#img9",).hover(function(){
        $("#text9").slideToggle(500);
    });
    $("#img10",).hover(function(){
        $("#text10").slideToggle(500);
    });


});
