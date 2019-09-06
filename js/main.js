$('.wedo_slider').on('init afterChange', function (event, slick, currentSlide, nextSlide) {
    let cur = slick.currentSlide,
        all = slick.slideCount;

    if(cur === all-1) {
        $('#wSl_next').addClass('disabled')
    } else if( cur === 0){
        $('#wSl_prev').addClass('disabled')
    } else {
        $('#wSl_prev').removeClass('disabled');
        $('#wSl_next').removeClass('disabled');
    }

    $('#wSl_cur').text('0'+(cur + 1));
    $('#wSl_all').text('0'+all);

});

function sliderInit(slider) {
    $(slider).slick({
        infinite: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false
    })
}

function sliderControl(element,direction) {
    $(element).slick('slick' + direction);
}

sliderInit('.wedo_slider');

$('#wSl_prev').click(function () {
    sliderControl('.wedo_slider','Prev')
})

$('#wSl_next').click(function () {
    sliderControl('.wedo_slider','Next')
})


$('.contactUsPop').click(function () {
    $.magnificPopup.open({
        items: {
            src: '#contactUsPop'
        },
        modal: false,
        type: 'inline',
        removalDelay: 0,
        mainClass: 'mfp-fade',
        closeOnBgClick: true,
        showCloseBtn: false,
        focus: $('input[name="nameOrMail"]')
    })
});

$('.vacancyPop').click(function () {
    $.magnificPopup.open({
        items: {
            src: '#vacancyPopup'
        },
        modal: false,
        type: 'inline',
        removalDelay: 0,
        mainClass: 'mfp-fade',
        closeOnBgClick: true,
        showCloseBtn: false,
        focus: $('input[name="name"]')
    })
});

$('.caseInWork').click(function () {
    $.magnificPopup.open({
        items: {
            src: '#caseInWork'
        },
        modal: false,
        type: 'inline',
        removalDelay: 0,
        mainClass: 'mfp-fade',
        closeOnBgClick: true,
        showCloseBtn: false
    })
});

$('.form').submit(function (e) {
    e.preventDefault();
    let fields = $(this).find('input');
    let err = [];
    for( let i = 0; i < fields.length; i++) {
        if(!fields[i].value) {
            $(fields[i]).addClass('err');
            err.push(fields[i])
        } else {
            $(fields[i]).removeClass('err');
            err = $.grep(err, fields[i])
        }
    }

    if(err.length === 0) {
        $(this).submit();
        //TODO clear all form fields
        //TODO ajax request to submit
    }
});

$('.mfp-close').click(function () {
    $.magnificPopup.close();
})

$('#doNotClick').click(function () {
    $('.case_box').addClass('active')
})