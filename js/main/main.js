$(function () {
  $(window).on("load",()=>{
    $(".preloader").hide();
  })
  // Slider
  $(".banner-slider").slick({
    arrows: true,
    dots: true,
    dotsClass: "slick-dots",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:
      '<img class="arrow prev" src="./assets/images/icon/chevron-left.svg" alt="">',
    nextArrow:
      '<img class="arrow next" src="./assets/images/icon/chevron-right.svg" alt="">',
  });
  $(".testimonial-slider").slick({
    arrows: true,
    dots: true,
    dotsClass: "slick-dots",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:
    '<img class="arrow prev" src="./assets/images/icon/chevron-left.svg" alt="">',
   nextArrow:
    '<img class="arrow next" src="./assets/images/icon/chevron-right.svg" alt="">',
  });
  $(".products-slider").slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,

        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".products-page-slider").slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:
      '<img class="arrow prev" src="./assets/images/icon/left-arrow.png" alt="">',
    nextArrow:
      '<img class="arrow next" src="./assets/images/icon/right-arrow.png" alt="">',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".gallery-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".gallery-slider-2").slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".brands-slider").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".menu-icon").click(function () {
    $(".general-header").addClass("active");
    $(".overlay").addClass("active");
  });
  $(".overlay").click(function () {
    $(".general-header").removeClass("active");
    $(".overlay").removeClass("active");
    $(".products-filter").hide();
  });
  $(".filter-btn").click(function(){
    $(".products-filter").show();
    $(".overlay").addClass("active");
  })
  // Fancybox
  $("[data-fancybox]").fancybox({
    buttons: ["close"],
    wheel: false,
    transitionEffect: "slide",
    loop: true,
    toolbar: false,
    clickContent: false,
  });
  $(function () {
    var parent = document.querySelector(".range-slider");
    if (!parent) return;

    var rangeS = parent.querySelectorAll("input[type=range]"),
      numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function (el) {
      el.oninput = function () {
        var slide1 = parseFloat(rangeS[0].value),
          slide2 = parseFloat(rangeS[1].value);

        if (slide1 > slide2) {
          [slide1, slide2] = [slide2, slide1];
        }

        numberS[0].value = slide1;
        numberS[1].value = slide2;
      };
    });

    numberS.forEach(function (el) {
      el.oninput = function () {
        var number1 = parseFloat(numberS[0].value),
          number2 = parseFloat(numberS[1].value);

        if (number1 > number2) {
          var tmp = number1;
          numberS[0].value = number2;
          numberS[1].value = tmp;
        }

        rangeS[0].value = number1;
        rangeS[1].value = number2;
      };
    });
  });
  const imgs = document.querySelectorAll(".img-select a");
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage() {
    const displayWidth = document.querySelector(
      ".img-showcase img:first-child"
    ).clientWidth;

    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }

  window.addEventListener("resize", slideImage);
  $(window).on("scroll",function(){
if($(this).scrollTop()>=120){
  $(".back-to-top").addClass("show");
  $(".back-to-top").click(function(){
    $(window).scrollTop(0)
  })
}else{
  $(".back-to-top").removeClass("show");
}
  })
  $(document).ready(function() {
    $('.count').counterUp({
      delay: 10,
      time: 1000
    });
  });
  AOS.init();
});
