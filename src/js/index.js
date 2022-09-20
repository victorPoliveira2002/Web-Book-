const swiper = new Swiper('.swiper', {
    spaceBetween: 10,       // Espaço entre cada slide
    slidesPerView: 3,       // Meu preview sempre vai exivir 3 imagens
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});