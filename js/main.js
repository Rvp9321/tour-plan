$( document ).ready(function() {
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
  
  // Обработка (валидация) форм
  /* $(".form").each(function() {
    $(this).validate({
      messages: {
        name: {
          required: "Укажите имя",
          minlength: "имя должно быть не короче 3-х букв"
        },
        phone: {
          required: "Обязательное поле",
        },
      },
    }); */

  /* if (jquery.validate.min.js) {
  console.log('jquery-ui is loaded successfully') 
  }

  if (jQuery().main.js) {
    console.log("Делаем что-либо, если плагин загружен")
  } else {
    console.log("Плагин не загружен")
  } */

  // Маска для поля ввода номера телефона
  // $('input[name="phone"]').mask("+7(999) 999-9999");

  //инициализация анимации
  AOS.init();

});