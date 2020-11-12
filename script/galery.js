$(document).ready(() => {
    setTimeout(() => {
        $('.hidden-galery').each((i) => {
            setTimeout(() => {
                $('.hidden-galery').eq(i).addClass('show-galery');
            }, 500 * (i + 1));
        })
    }, 800);
})