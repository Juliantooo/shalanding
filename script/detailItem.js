$(document).ready(() => {
    setTimeout(() => {
        $('.hidden-detail').each((i) => {
            setTimeout(() => {
                $('.hidden-detail').eq(i).addClass('show-detail');
            }, 500 * (i + 1));
        }, 400)
    })
    setTimeout(() => {
        $('.hidden-detail-image').addClass('show-detail-image');
    }, 1000);

})