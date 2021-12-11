let navBar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.add('active')
}

document.querySelector('#nav-close').onclick = () =>{
    navBar.classList.remove('active')
}

window.onscroll = () => {
    navBar.classList.remove('active');
}

let searchBtn = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchBtn.classList.add('active')
}

document.querySelector('#close-search').onclick = () =>{
    searchBtn.classList.remove('active')
}

window.onscroll = () => {
    searchBtn.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () => {
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


var swiper = new Swiper(".product-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      spaceBetween: 20,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      spaceBetween: 20,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      },
  });


  var swiper = new Swiper(".blogs-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      spaceBetween: 10,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });

  var swiper = new Swiper(".clients-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
          },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
  });