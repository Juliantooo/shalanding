
$(document).ready(() => {
    $(window).scroll(() => {
        var wScroll = $(this).scrollTop();
        if (wScroll > $('.categories-blog-list').offset().top - 500) {
            setTimeout(() => {
                $('.hidden-article').each((i) => {
                    setTimeout(() => {
                        $('.hidden-article').eq(i).addClass('show-article');
                    }, 400 * (i + 1));
                })
            }, 400);
        }
    })
})