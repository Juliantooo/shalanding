
//Index

$(document).ready(() => {

    $('.owl-carousel-1').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            1000: {
                items: 1
            }
        }
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsive: {
            1000: {
                items: 2
            }
        }
    })
    $('.owl-dots').css('margin-top', '30px')
    $('.owl-item img').css('width', '80px')
    $('.owl-item img').css('height', '80px')

    const headerContent = document.getElementsByClassName('header-content')[0]
    const hiddenText = document.getElementsByClassName('hidden-text')

    headerContent.classList.replace('header-hidden', 'header-visible')

    for (const el of hiddenText) {
        setTimeout(() => {
            el.classList.replace('hidden-text', 'show-text')
        }, 2200);
    }
    $(window).scroll(() => {
        var wScroll = $(this).scrollTop();
        if (wScroll > $('.about-section').offset().top - 370) {
            setTimeout(() => {
                $('.hidden-about').each((i) => {
                    setTimeout(() => {
                        $('.hidden-about').eq(i).addClass('show-about');
                    }, 400 * (i + 1));
                })
            }, 400);
        }

        if (wScroll > $('.visi-misi').offset().top - 350) {
            setTimeout(() => {
                $('.hidden-misi').each((i) => {
                    setTimeout(() => {
                        $('.hidden-misi').eq(i).addClass('show-misi');
                    }, 500 * (i + 1));
                })
            }, 400);
        }

        if (wScroll > $('.benefit-section').offset().top - 350) {
            setTimeout(() => {
                $('.hidden-box').each((i) => {
                    setTimeout(() => {
                        $('.hidden-box').eq(i).addClass('show-box');
                    }, 500 * (i + 1));
                })
            }, 400);
        }

        if (wScroll > $('.company-structure-section').offset().top - 350) {
            setTimeout(() => {
                $('.hidden-structure').each((i) => {
                    setTimeout(() => {
                        $('.hidden-structure').eq(i).addClass('show-structure');
                    }, 500 * (i + 1));
                })
            }, 400);
        }

        if (wScroll > $('.company-achive-section').offset().top - 380) {
            setTimeout(() => {
                $('.hidden-achive').each((i) => {
                    setTimeout(() => {
                        $('.hidden-achive').eq(i).addClass('show-achive');
                    }, 500 * (i + 1));
                })
            }, 400);
        }

        if (wScroll > $('.heading-services').offset().top - 160) {
            setTimeout(() => {
                $('.hidden-services1').each((i) => {
                    setTimeout(() => {
                        $('.hidden-services1').eq(i).addClass('show-services');
                    }, 500 * (i + 1));
                })
            }, 400);
        }

        if (wScroll > $('.services-2').offset().top - 200) {
            setTimeout(() => {
                $('.hidden-services2').each((i) => {
                    setTimeout(() => {
                        $('.hidden-services2').eq(i).addClass('show-services');
                    }, 500 * (i + 1));
                })
            }, 400);
        }

        if (wScroll > $('.services-3').offset().top - 200) {
            setTimeout(() => {
                $('.hidden-services3').each((i) => {
                    setTimeout(() => {
                        $('.hidden-services3').eq(i).addClass('show-services');
                    }, 500 * (i + 1));
                })
            }, 400);
        }

        if (wScroll > $('.our-clinet-section').offset().top - 300) {
            setTimeout(() => {
                $('.hidden-client').each((i) => {
                    setTimeout(() => {
                        $('.hidden-client').eq(i).addClass('show-client');
                    }, 500 * (i + 1));
                })
            }, 400);
        }


        if (wScroll > $('.our-app-section').offset().top - 300) {
            setTimeout(() => {
                $('.hidden-tryapp').each((i) => {
                    setTimeout(() => {
                        $('.hidden-tryapp').eq(i).addClass('show-tryapp');
                    }, 500 * (i + 1));
                })
            }, 400);
        }
    })

})