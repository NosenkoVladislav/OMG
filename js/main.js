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


$('#contactUsPop').find('form').submit(function (e) {
    e.preventDefault();
    let err = [];
    formValidation();

    if(err.length === 0) {
        var fd = new FormData( this );
        $.ajax({
            url: 'index.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: fd,
            success: function(msg){
                $.magnificPopup.close();
            }
        });
        //TODO clear all form fields
        //TODO ajax request to submit
    }
});

$('#vacancyForm').submit(function (e) {
    e.preventDefault();
    let err = [];
    formValidation();

    if(err.length === 0) {
        var fd = new FormData( this );
        $.ajax({
            url: 'vacancy.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: fd,
            success: function(msg){
                $.magnificPopup.close();
            }
        });
        //TODO clear all form fields
        //TODO ajax request to submit
    }
});

function formValidation(err) {
    let fields = $(this).find('input');
    for( let i = 0; i < fields.length; i++) {
        if(!fields[i].value) {
            $(fields[i]).addClass('err');
            err.push(fields[i])
        } else {
            $(fields[i]).removeClass('err');
            err = $.grep(err, fields[i])
        }
    }
}

$('.mfp-close').click(function () {
    $.magnificPopup.close();
})

$('.menu_btn').click(function () {
    $('.nav_menu--mob').addClass('open')
    $('body').css('overflow','hidden')
})

$('.menu_close').click(function () {
    $('.nav_menu--mob').removeClass('open')
    $('body').css('overflow','visible')
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
//stategy mediabuing video prod

//case filtration
function caseFilration() {
    let allowed = ['videoProd', 'mediaBuying', 'strategy'];

    $('.tag').click(function () {
        var tagID = $(this)[0].id;
        if($.inArray(tagID, allowed) !== -1) {
            if($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                filterAimation();
            } else {
                $(this).addClass('selected');
                filterAimation();
            }
        }
    })
}

function filterAimation() {
    $('.cases_gallery').animate({
        opacity: 0
    },300, function () {
        $(this).animate({
            opacity: 1
        },300)
    })
}


caseFilration();



AOS.init();