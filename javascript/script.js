document.addEventListener('DOMContentLoaded', () => {
  const homeShopContainer = document.querySelector('.home-shop-swiper');
  const homeShopPagination = document.querySelector('.home-shop-pagination');
  const homeShopPrev = document.querySelector('.swiper-button-prev-custom');
  const homeShopNext = document.querySelector('.swiper-button-next-custom');
  let homeShopSwiper = null;

  const testimonialsContainer = document.querySelector('.testimonials-swiper');
  const testimonialsPagination = document.querySelector('.testimonials-pagination');
  const testimonialsPrev = testimonialsContainer?.querySelector('.swiper-button-prev');
  const testimonialsNext = testimonialsContainer?.querySelector('.swiper-button-next');
  let testimonialsSwiper = null;

  const mobileQuery = window.matchMedia('(max-width: 1023px)');

  function createMobileSwiper(container, options) {
    if (!container || container.swiper) return null;
    return new Swiper(container, options);
  }

  function createHomeShopSwiper() {
    if (!homeShopContainer || homeShopSwiper) return;

    homeShopSwiper = createMobileSwiper(homeShopContainer, {
      slidesPerView: 1.15,
      spaceBetween: 16,
      loop: false,
      watchOverflow: true,
      pagination: {
        el: homeShopPagination,
        clickable: true,
      },
      navigation: {
        prevEl: homeShopPrev,
        nextEl: homeShopNext,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });

    homeShopPagination?.classList.remove('hidden');
  }

  function destroyHomeShopSwiper() {
    if (!homeShopSwiper) return;
    homeShopSwiper.destroy(true, true);
    homeShopSwiper = null;
    homeShopPagination?.classList.add('hidden');
  }

  function createTestimonialsSwiper() {
    if (!testimonialsContainer || testimonialsSwiper) return;

    testimonialsSwiper = createMobileSwiper(testimonialsContainer, {
      slidesPerView: 1.05,
      spaceBetween: 18,
      loop: false,
      watchOverflow: true,
      pagination: {
        el: testimonialsPagination,
        clickable: true,
      },
      navigation: {
        prevEl: testimonialsPrev,
        nextEl: testimonialsNext,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
      },
    });

    testimonialsPagination?.classList.remove('hidden');
  }

  function destroyTestimonialsSwiper() {
    if (!testimonialsSwiper) return;
    testimonialsSwiper.destroy(true, true);
    testimonialsSwiper = null;
    testimonialsPagination?.classList.add('hidden');
  }

  function handleMobileSwipers() {
    if (mobileQuery.matches) {
      createHomeShopSwiper();
      createTestimonialsSwiper();
    } else {
      destroyHomeShopSwiper();
      destroyTestimonialsSwiper();
    }
  }

  handleMobileSwipers();
  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener('change', handleMobileSwipers);
  } else if (mobileQuery.addListener) {
    mobileQuery.addListener(handleMobileSwipers);
  }

  const instaSwiperContainer = document.querySelector('.instaSwiper');
  if (instaSwiperContainer) {
    createMobileSwiper(instaSwiperContainer, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          spaceBetween: 20,
        },
      },
    });
  }

  const menuToggler = document.getElementById('menuToggler');
  const navbarMenu = document.getElementById('navbarMenu');

  if (menuToggler && navbarMenu) {
    menuToggler.addEventListener('click', (e) => {
      e.stopPropagation();
      navbarMenu.classList.toggle('hidden');
    });
  }

  document.querySelectorAll('.dropdown-parent').forEach((parent) => {
    const btn = parent.querySelector('.dropdown-toggle-btn');
    const submenu = parent.querySelector('.submenu');
    const arrow = parent.querySelector('.bi-chevron-down');

    if (!btn || !submenu || !arrow) return;

    btn.addEventListener('click', (e) => {
      if (window.innerWidth < 1280) {
        e.preventDefault();
        e.stopPropagation();

        document.querySelectorAll('.submenu').forEach((sub) => {
          if (sub !== submenu) sub.classList.add('hidden');
        });

        document.querySelectorAll('.bi-chevron-down').forEach((arr) => {
          if (arr !== arrow) arr.classList.remove('rotate-180');
        });

        submenu.classList.toggle('hidden');
        arrow.classList.toggle('rotate-180');
      }
    });
  });

  document.addEventListener('click', () => {
    if (window.innerWidth < 1280) {
      navbarMenu?.classList.add('hidden');
      document.querySelectorAll('.submenu').forEach((sub) => sub.classList.add('hidden'));
      document.querySelectorAll('.bi-chevron-down').forEach((arr) => arr.classList.remove('rotate-180'));
    }
  });
});
 var swiper = new Swiper(".mySwiper", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  document.getElementById("scroll-to-top").addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // smooth scroll
        });
      });

       