$(document).ready(function () {
    $("ul").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 500);
    });

    $(window).scroll(() => {
        if ($(this).scrollTop() > 90) {
            $('ul').css({
                "margin-top": "0"
            }); 
        }
        else {
            $('ul').css({
                "margin-top": "13em"
            }); 
        }
    })
});
