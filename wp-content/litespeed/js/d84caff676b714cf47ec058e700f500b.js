(function($) {
    'use strict';
    $(document).on('ready', function() {
        const getHeaderId = document.getElementById("navbar");
        if (getHeaderId) {
            window.addEventListener('scroll', event => {
                const height = 10;
                const {
                    scrollTop
                } = event.target.scrollingElement;
                document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height)
            })
        }
        const getBannerId = document.getElementById("topBanner");
        if (getBannerId) {
            window.addEventListener('scroll', event => {
                const height = 500;
                const {
                    scrollTop
                } = event.target.scrollingElement;
                document.querySelector('#topBanner').classList.toggle('hidden', scrollTop >= height)
            })
        }
        const getId = document.getElementById("backtotop");
        if (getId) {
            const topbutton = document.getElementById("backtotop");
            topbutton.onclick = function(e) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            };
            window.onscroll = function() {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    topbutton.style.opacity = "1"
                } else {
                    topbutton.style.opacity = "0"
                }
            }
        }
        $('.masonry-grid').masonry({
            itemSelector: '.masonry-grid-item'
        });
        const getPreloaderId = document.getElementById('preloader');
        if (getPreloaderId) {
            getPreloaderId.style.display = 'none'
        }
        const getAboutId = document.getElementById("banner-three-area");
        if (getAboutId) {
            document.querySelector('.banner-three-area').addEventListener('mousemove', function(e) {
                var wx = window.innerWidth;
                var wy = window.innerHeight;
                var x = e.pageX - this.offsetLeft;
                var y = e.pageY - this.offsetTop;
                var newx = x - wx / 2;
                var newy = y - wy / 2;
                document.querySelectorAll('.banner-shape').forEach(function(element) {
                    var speed = element.getAttribute('data-speed');
                    if (element.getAttribute('data-revert')) {
                        speed *= -0.8
                    }
                    TweenMax.to(element, 1, {
                        x: (1 - newx * speed),
                        y: (1 - newy * speed)
                    })
                })
            })
        }
        document.addEventListener("DOMContentLoaded", function() {
            var listItems = document.querySelectorAll(".accordion .accordion-item");
            listItems.forEach(function(item) {
                item.addEventListener("click", function() {
                    var activeItems = document.querySelectorAll(".accordion .accordion-item.active");
                    activeItems.forEach(function(activeItem) {
                        activeItem.classList.remove("active")
                    });
                    this.classList.add("active")
                })
            })
        });
        var elements = document.querySelectorAll("[data-background]");
        elements.forEach(function(element) {
            var backgroundValue = element.getAttribute("data-background");
            element.style.backgroundImage = "url(" + backgroundValue + ")"
        })
    });
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function($scope) {
            var swiper = new Swiper(".partner-slide", {
                spaceBetween: 24,
                centeredSlides: !1,
                loop: !1,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: !1,
                },
                preventClicks: !1,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    340: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                    1440: {
                        slidesPerView: 5,
                    },
                },
            });
            $('.owl-panther-slider').owlCarousel({
                loop: !0,
                margin: 20,
                nav: !1,
                dots: !1,
                autoplay: !0,
                smartSpeed: 1000,
                autoplayHoverPause: !0,
                responsive: {
                    0: {
                        items: 2,
                    },
                    576: {
                        items: 3,
                    },
                    768: {
                        items: 4,
                    },
                    992: {
                        items: 5,
                    },
                    1200: {
                        items: 6,
                    },
                    1440: {
                        items: 6,
                    }
                }
            });
            var swiper = new Swiper(".testomonial-slide", {
                slidesPerView: 1,
                spaceBetween: 50,
                centeredSlides: !1,
                preventClicks: !0,
                autoHeight: !0,
                loop: !0,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: !1,
                    pauseOnMouseEnter: !0,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 4,
                    },
                    1600: {
                        slidesPerView: 4.5,
                    },
                }
            });
            var smoothSwiper = new Swiper(".banner-slide-1", {
                slidesPerView: 1,
                spaceBetween: 0,
                space: 0,
                centeredSlides: !1,
                preventClicks: !0,
                loop: !0,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: !1,
                    pauseOnMouseEnter: !1,
                },
                speed: 18000,
                direction: 'horizontal',
                zoom: !0,
                keyboard: {
                    enabled: !0,
                    onlyInViewport: !1,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    340: {
                        slidesPerView: 1,
                    },
                    450: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    800: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 2.5,
                    },
                    1440: {
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 3,
                    },
                    1881: {
                        slidesPerView: 4,
                    },
                }
            });
            var smoothSwiper = new Swiper(".banner-slide-2", {
                slidesPerView: 1,
                spaceBetween: 0,
                space: 0,
                centeredSlides: !1,
                preventClicks: !0,
                loop: !0,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: !1,
                    pauseOnMouseEnter: !1,
                },
                speed: 18000,
                direction: 'horizontal',
                zoom: !0,
                keyboard: {
                    enabled: !0,
                    onlyInViewport: !1,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    370: {
                        slidesPerView: 1.5,
                    },
                    450: {
                        slidesPerView: 1,
                    },
                    450: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    800: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 2.5,
                    },
                    1440: {
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 3.5,
                    },
                }
            });
            var smoothSwiper = new Swiper(".banner-slide-3", {
                slidesPerView: 1,
                spaceBetween: 0,
                space: 0,
                centeredSlides: !1,
                preventClicks: !0,
                loop: !0,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: !1,
                    pauseOnMouseEnter: !1,
                },
                speed: 18000,
                direction: 'horizontal',
                zoom: !0,
                keyboard: {
                    enabled: !0,
                    onlyInViewport: !1,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    450: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 2.5,
                    },
                    1440: {
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 4,
                    },
                }
            });
            var swiper = new Swiper(".movies-slide", {
                slidesPerView: 1,
                spaceBetween: 24,
                centeredSlides: !1,
                loop: !1,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: !1,
                },
                navigation: {
                    nextEl: ".next",
                    prevEl: ".prev",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                    1440: {
                        slidesPerView: 5,
                    },
                },
            });
            var swiper = new Swiper(".testomonial-slide-two", {
                slidesPerView: 1,
                spaceBetween: 50,
                centeredSlides: !1,
                preventClicks: !0,
                loop: !0,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: !1,
                    pauseOnMouseEnter: !0,
                },
                navigation: {
                    nextEl: ".prev",
                    prevEl: ".next",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                    1440: {
                        slidesPerView: 2,
                    },
                    1600: {
                        slidesPerView: 2,
                    },
                }
            });
            if ("IntersectionObserver" in window) {
                let counterObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            let counter = entry.target;
                            let target = parseInt(counter.innerText);
                            let step = target / 200;
                            let current = 0;
                            let timer = setInterval(function() {
                                current += step;
                                counter.innerText = Math.floor(current);
                                if (parseInt(counter.innerText) >= target) {
                                    clearInterval(timer)
                                }
                            }, 10);
                            counterObserver.unobserve(counter)
                        }
                    })
                });
                let counters = document.querySelectorAll(".counter");
                counters.forEach(function(counter) {
                    counterObserver.observe(counter)
                })
            }
            var swiper = new Swiper(".reviews-slide", {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: !1,
                preventClicks: !0,
                loop: !0,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: !1,
                    pauseOnMouseEnter: !0,
                },
                navigation: {
                    nextEl: ".prev2",
                    prevEl: ".next2",
                },
            });
            var swiper = new Swiper(".explore-speeds-slide", {
                slidesPerView: 1,
                spaceBetween: 24,
                centeredSlides: !1,
                preventClicks: !0,
                loop: !0,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 4,
                    },
                    1600: {
                        slidesPerView: 5,
                    },
                }
            });
            var swiper = new Swiper(".explore-speeds-slide", {
                slidesPerView: 1,
                spaceBetween: 24,
                centeredSlides: !1,
                preventClicks: !0,
                loop: !0,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 4,
                    },
                    1600: {
                        slidesPerView: 5,
                    },
                }
            });
            var SwiperTraveler = new Swiper(".ott-platform-slider", {
                loop: !0,
                slidesPerView: 1,
                effect: "fade",
                speed: 1000,
                autoHeight: !0,
                autoplay: !1,
                navigation: {
                    nextEl: ".button-next",
                    prevEl: ".button-prev",
                },
            });
            var smoothSwiper = new Swiper(".ott-platform-movies-1", {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: !1,
                preventClicks: !0,
                loop: !0,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: !1,
                    pauseOnMouseEnter: !1,
                },
                speed: 18000,
                direction: 'horizontal',
                zoom: !0,
                keyboard: {
                    enabled: !0,
                    onlyInViewport: !1,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    340: {
                        slidesPerView: 1,
                    },
                    450: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    800: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 2.5,
                    },
                    1440: {
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 3,
                    },
                    1881: {
                        slidesPerView: 4,
                    },
                }
            });
            var smoothSwiper = new Swiper(".ott-platform-movies-2", {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: !1,
                preventClicks: !0,
                loop: !0,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: !1,
                    pauseOnMouseEnter: !1,
                },
                speed: 18000,
                direction: 'horizontal',
                zoom: !0,
                keyboard: {
                    enabled: !0,
                    onlyInViewport: !1,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    370: {
                        slidesPerView: 1.5,
                    },
                    450: {
                        slidesPerView: 1,
                    },
                    450: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    800: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 2.5,
                    },
                    1440: {
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 3.5,
                    },
                }
            });
            $('.owl-movie-slider').owlCarousel({
                loop: !0,
                margin: 20,
                nav: !1,
                dots: !1,
                autoplay: !0,
                smartSpeed: 8000,
                autoplayHoverPause: !0,
                responsive: {
                    0: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    },
                    1200: {
                        items: 5,
                    }
                }
            });
            var SwiperTraveler = new Swiper(".movie-home-slider", {
                loop: !0,
                slidesPerView: 1,
                effect: "fade",
                speed: 1000,
                autoHeight: !0,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: !1,
                },
                navigation: {
                    nextEl: ".button-next",
                    prevEl: ".button-prev",
                },
                pagination: {
                    el: ".movie-home-slider-pagination",
                    clickable: !0,
                },
            });
            var SwiperTraveler = new Swiper(".all-movies-slider", {
                loop: !0,
                spaceBetween: 25,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: !1,
                },
                navigation: {
                    prevEl: ".movies-button-prev",
                    nextEl: ".movies-button-next",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    },
                    1600: {
                        slidesPerView: 5
                    },
                }
            });
            var SwiperTraveler = new Swiper(".mh-movies-slider", {
                loop: !0,
                spaceBetween: 1,
                centeredSlides: !0,
                autoplay: !1,
                pagination: {
                    el: ".mh-movies-pagination",
                    clickable: !0,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 5
                    },
                    1200: {
                        slidesPerView: 5
                    },
                }
            });
            $('.popup-video').magnificPopup({
                disableOn: 320,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            });
            $('.masonry-grid').masonry({
                itemSelector: '.masonry-grid-item'
            })
        })
    })
}(jQuery));