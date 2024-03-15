$(document).ready(function(){
    var imagePaths = [
        './img/bexco1.jpg',
        './img/bexco2.jpg',
        './img/bexco3.jpg',
        './img/bexco4.jpg'
    ];
    var interval = 5000;
    function changeBackgroundImage() {
        var page1 = document.querySelector('.page1');
        var randomIndex = Math.floor(Math.random() * imagePaths.length);
        var randomImagePath = imagePaths[randomIndex];
        page1.classList.add('change');
        setTimeout(function() {
            page1.style.backgroundImage = 'url("' + randomImagePath + '")';
            page1.classList.remove('change');
            }, 500);
    };
    setInterval(changeBackgroundImage, interval);


    $('.nav li').hover(function(){
        $(this).find('.lnb').stop(true).slideDown();
    }, function(){
        $(this).find('.lnb').stop(true).slideUp();
    });

    $('.ham').click(function(){
        $('.ham-lnb').css('right','0');
    });

    $('.ham-X').click(function(){
        $('.ham-lnb').css('right','-36%');
    });

    // const hamburgerBtn = document.querySelector('.ham');
    // const hambergerC = document.querySelector('.ham-lnb .ham-wrap .ham-X');
    // const menu = document.querySelector('.ham-lnb');

    // hamburgerBtn.addEventListener('click', () => {
    // if (menu.style.right === '-36%') {
    //     menu.style.right = '0';
    // } else {
    //     menu.style.right = '-36%';
    // }
    // });

    // hambergerC.addEventListener('click', () => {
    // if (menu.style.right === '0') {
    //     menu.style.right = '-36%';
    // } else {
    //     menu.style.right = '0';
    // }
    // });


    AOS.init({
        duration: 1200,
    })

    
});
