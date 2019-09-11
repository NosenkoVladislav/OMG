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

// $('#doNotClick').click(function () {
//     $('.case_box').addClass('active')
// })

$('.menu_btn').click(function () {
    $('.nav_menu--mob').addClass('open')
})

$('.menu_close').click(function () {
    $('.nav_menu--mob').removeClass('open')
})

function doNotClick() {
    $(document).click(function (ev) {
        if(ev.target.id === 'doNotClick') {
            showCaseItem();
        } else {
            $('.case_box').removeClass('active')
            $('.case_item').each(function () {
                $(this).removeClass('active')
            })
        }
    })
}

function showCaseItem() {
    var caseItem = Math.floor((Math.random() * 3) + 1);
    console.log(caseItem)
    $('.case_box').addClass('active')
    $('.case_item--' + caseItem).addClass('active')
}

doNotClick()


function targetedScroll(id) {
    // scrollTop is either the top offset of the element whose id is passed, or 0
    var scrollTop = id ? $('#' + id).offset().top : 0;

    $('body,html').animate({
        scrollTop: scrollTop,
    }, 500);
}

$('.to_top').on('click', function(event) {
    event.preventDefault();
    targetedScroll('pageTop');
});
