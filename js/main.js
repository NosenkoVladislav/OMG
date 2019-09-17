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
        removalDelay: 300,
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
        removalDelay: 300,
        mainClass: 'mfp-fade',
        closeOnBgClick: true,
        showCloseBtn: false
    })
});


$('#contactUsPop').find('form').submit(function (e) {
    e.preventDefault();
    let err = [];

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

    if(err.length === 0) {
        var fd = new FormData( this );
        $.ajax({
            url: 'contactUs.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: fd,
            removalDelay: 300,
            success: function(msg){
                $.magnificPopup.open({
                    items: {
                        src: '#confirmPopup'
                    },
                    modal: false,
                    type: 'inline',
                    removalDelay: 300,
                    mainClass: 'mfp-fade',
                    closeOnBgClick: true,
                    showCloseBtn: false,
                    disableOn: 400
                })
            }
        });
        //TODO clear all form fields
    }
});


$('#vacancyForm').submit(function (e) {
    e.preventDefault();
    let err = [];
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
    if(err.length === 0) {
        var fd = new FormData( this );
        $.ajax({
            url: 'vacancy.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: fd,
            success: function(msg){
                $.magnificPopup.open({
                    items: {
                        src: '#confirmPopup'
                    },
                    modal: false,
                    type: 'inline',
                    removalDelay: 300,
                    mainClass: 'mfp-fade',
                    closeOnBgClick: true,
                    showCloseBtn: false,
                    disableOn: 400
                })
            }
        });
        //TODO clear all form fields
    }
});

$('.mfp-close').click(function () {
    $.magnificPopup.close();
    $('html').css('overflow','visible')
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

function cursorCustom() {
    const body = document.querySelector('body');
    const cursor = document.createElement('div');
    cursor.setAttribute('id','cursor');
    cursor.classList.add('Cursor');
    body.prepend(cursor);
    const amount = 15;
    const sineDots = Math.floor(amount * 0.5);
    const width = 20;
    const idleTimeout = 150;
    let lastFrame = 0;
    let mousePosition = {x: 0, y: 0};
    let dots = [];
    let timeoutID;
    let idle = false;

    class Dot {
        constructor(index = 0) {
            this.index = index;
            this.anglespeed = 0.05;
            this.x = 0;
            this.y = 0;
            this.scale = 1 - 0.05 * index;
            this.range = width / 2 - width / 2 * this.scale + 2;
            this.limit = width * 0.75 * this.scale;
            this.element = document.createElement("span");
            TweenMax.set(this.element, {scale: this.scale});
            cursor.appendChild(this.element);
        }

        lock() {
            this.lockX = this.x;
            this.lockY = this.y;
            this.angleX = Math.PI * 2 * Math.random();
            this.angleY = Math.PI * 2 * Math.random();
        }

        draw(delta) {
            if (!idle || this.index <= sineDots) {
                TweenMax.set(this.element, {x: this.x, y: this.y});
            } else {
                this.angleX += this.anglespeed;
                this.angleY += this.anglespeed;
                this.y = this.lockY + Math.sin(this.angleY) * this.range;
                this.x = this.lockX + Math.sin(this.angleX) * this.range;
                TweenMax.set(this.element, {x: this.x, y: this.y});
            }
        }
    }

    function init() {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove);
        // hoverButton = new HoverButton("button");
        // eslint-disable-next-line no-ne
        // lastFrame += new Date();
        buildDots();
        render();
    }

    /*function limit(value, min, max) {
        return Math.min(Math.max(min, value), max);
    }*/

    function startIdleTimer() {
        timeoutID = setTimeout(goInactive, idleTimeout);
        idle = false;
    }

    function resetIdleTimer() {
        clearTimeout(timeoutID);
        startIdleTimer();
    }

    function goInactive() {
        idle = true;
        for (let dot of dots) {
            dot.lock();
        }
    }

    function buildDots() {
        for (let i = 0; i < amount; i++) {
            let dot = new Dot(i);
            dots.push(dot);
        }
    }

    const onMouseMove = event => {
        mousePosition.x = event.clientX - width / 2;
        mousePosition.y = event.clientY - width / 2;
        resetIdleTimer();
    };

    const onTouchMove = () => {
        mousePosition.x = event.touches[0].clientX - width / 2;
        mousePosition.y = event.touches[0].clientY - width / 2;
        resetIdleTimer();
    };

    const render = timestamp => {
        const delta = timestamp - lastFrame;
        positionCursor(delta);
        lastFrame = timestamp;
        requestAnimationFrame(render);
    };

    const positionCursor = delta => {
        let x = mousePosition.x;
        let y = mousePosition.y;
        dots.forEach((dot, index, dots) => {
            let nextDot = dots[index + 1] || dots[0];
        dot.x = x;
        dot.y = y;
        dot.draw(delta);
        if (!idle || index <= sineDots) {
            const dx = (nextDot.x - dot.x) * 0.35;
            const dy = (nextDot.y - dot.y) * 0.35;
            x += dx;
            y += dy;
        }
    });
    };

    init();

}


cursorCustom();