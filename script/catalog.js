$(document).ready(() => {
    setTimeout(() => {
        $('.hidden-catalog').each((i) => {
            setTimeout(() => {
                $('.hidden-catalog').eq(i).addClass('show-catalog');
            }, 500 * (i + 1));
        })
    }, 800);
})