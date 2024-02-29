console.log("This file is connected");









function moveCloser(){
    var topPos = $(this).position().top;
    var leftPos = $(this).position().left;
    $('.diamond').css('top', topPos);
    $('.diamond').css('left', leftPos);
}



function moveAway(){
    $('.diamond').each(function(){

    });
}

$('.circle').hover(moveCloser, moveAway);


