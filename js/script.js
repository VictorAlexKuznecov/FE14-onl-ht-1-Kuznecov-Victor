// Плавная прокрутка до элемента

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

//burger

$(document).ready(function() {
    $('.heder__burger').click(function(event){
        $('.heder__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    });
    $(".header__menu-link").click(function () {
    $(".heder__burger,.header__menu").removeClass("active");
    $("body").toggleClass("lock");
  });

//slider

$(function(){
    $('.carousel') .slick({
        arrows: false,
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,

    });
});
