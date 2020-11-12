$(document).ready(() => {
    setTimeout(() => {
        $('.hidden-related').each((i) => {
            setTimeout(() => {
                $('.hidden-related').eq(i).addClass('show-related');
            }, 500 * (i + 1));
        })
        $('.hidden-heading').each((j) => {
            setTimeout(() => {
                $('.hidden-heading').eq(j).addClass('related-heading');
            }, 500 * (j + 1));
        })
    }, 500);
})