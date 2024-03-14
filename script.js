console.log("This file is connected");

const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    circle.addEventListener('click', () => {

        const infoId = circle.getAttribute('data-info');
        
        document.querySelectorAll('.songMetadata').forEach(el => el.style.display = 'none');

       
        if (circle.classList.contains('expanded')) {
           
            circle.classList.remove('expanded');
        } else {
            circles.forEach(c => c.classList.remove('expanded'));

            circle.classList.add('expanded');

            document.querySelectorAll(`.${infoId}`).forEach(el => el.style.display = 'block');
        }
        
    });
});


$('.diamond').each(function(){
    $(this).data('originalTop', $(this).position().top);
    $(this).data('originalLeft', $(this).position().left);
});

function moveCloser(){
    var topPos = $(this).position().top;
    var leftPos = $(this).position().left;
    $('.diamond').css('top', topPos);
    $('.diamond').css('left', leftPos);
}

function moveAway(){
    $('.diamond').each(function(){
        var originalTop = $(this).data('originalTop');
        var originalLeft = $(this).data('originalLeft');
        $(this).css('top', originalTop);
        $(this).css('left', originalLeft);
    });
}

$('.circle').hover(moveCloser, moveAway);


document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    circles.forEach(circle => {

        const randomTop = Math.random() * (windowHeight - circle.offsetHeight);
        const randomLeft = Math.random() * (windowWidth - circle.offsetWidth);


        circle.style.position = 'absolute'; 
        circle.style.top = `${randomTop}px`;
        circle.style.left = `${randomLeft}px`;
    });
});

