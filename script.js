console.log("This file is connected");

const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    circle.addEventListener('click', () => {

        const infoId = circle.getAttribute('data-info');
        const infoElement = document.querySelector(`.${infoId}`);

        // Check if the clicked circle is already expanded
        if (circle.classList.contains('expanded')) {
            // Unexpand the clicked circle
            circle.classList.remove('expanded');
        } else {
            // Remove expanded class from any other circle that might have it
            circles.forEach(c => c.classList.remove('expanded'));
            // Expand the clicked circle
            circle.classList.add('expanded');
        }
        
        if (infoElement.style.display === 'none' || !infoElement.style.display) {
            // Hide all info elements first
            document.querySelectorAll('.songMetadata').forEach(el => el.style.display = 'none');
            // Show the corresponding info element
            infoElement.style.display = 'block';
        } else {
            infoElement.style.display = 'none';
        }
    });
});

// Store the original positions of the diamonds
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
        // Generate random positions within the window bounds
        const randomTop = Math.random() * (windowHeight - circle.offsetHeight);
        const randomLeft = Math.random() * (windowWidth - circle.offsetWidth);

        // Apply the random positions to each circle
        circle.style.position = 'absolute'; // Ensure the circles are positioned absolutely
        circle.style.top = `${randomTop}px`;
        circle.style.left = `${randomLeft}px`;
    });
});

