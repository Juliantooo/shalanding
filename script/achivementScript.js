$(document).ready(() => {
    setTimeout(() => {
        $('.hidden-card').each((i) => {
            setTimeout(() => {
                $('.hidden-card').eq(i).addClass('show-card');
            }, 500 * (i + 1));
        })
    }, 1300);
})