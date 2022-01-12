$('.mouse-paralax').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.mouse-paralax-item-').css(
        'transform',
        'translate(-'+ x * 40 +'px, -' + y * 40 + 'px)'
    );

    $('.mouse-paralax-item').css(
        'transform',
        'translate('+ x * 40 +'px, ' + y * 40 + 'px)'
    );

});