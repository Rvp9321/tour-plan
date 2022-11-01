$(document).ready(function () {
  const hotelSwiper = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    effect: "cube",

  });

  const reviewsSwiper = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  var menuButton = document.querySelector('.navbar__menu-button')
  menuButton.addEventListener('click', function() {
    console.log('Клик по кнопке меню');
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');

  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close")
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  document.body.addEventListener('keyup', function (e) {
    var key = e.keyCode;

    if (key == 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    };
  }, false);
    
  function openModal() {
    var targetModal = $(this).attr("data-href"); // взять у этого (this) элемента аттрибут data-href 
    // var modalOverlay = $(".modal__overlay");
    // var modalDialog = $(".modal__dialog");
    // modalOverlay.addClass('modal__overlay--visible');
    // modalDialog.addClass('modal__dialog--visible');
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible"); // обращаемся к элементу, который имеет идентификатор, кторый хранится в targetModal
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) { // event - это на случай если крестик оформлен как... 
    event.preventDefault(); // ...ссылка с href="#" и по клику перекидывает на верх страницы
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };
  

});