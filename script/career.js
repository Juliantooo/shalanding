$(document).ready(() => {
    setTimeout(() => {
        $('.hidden-position').each((i) => {
            setTimeout(() => {
                $('.hidden-position').eq(i).addClass('show-position');
            }, 500 * (i + 1));
        })
    }, 400);
})