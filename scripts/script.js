$(document).ready(function () {

  });

function ZeroFirstFormat(value)
{
    if (value < 10)
    {
        value = '0' + value;
    }
    return value;
};


function DateTime()
{
    const time = new Date();
    let hour = time.getHours();
    const min = ZeroFirstFormat(time.getMinutes());
    const prepand = (hour >= 12)? 'PM' : 'AM';
    hour = ZeroFirstFormat((hour >= 13) ? hour - 12: hour);
    return `${hour}:${min} ${prepand}`;
};

setInterval(function () 
{
    document.getElementById('time').innerHTML = DateTime();
}, 1000);



$('a[href^="#"').on('click', function()
{
    let href = $(this).attr('href');
    $('html, body').animate(
    {
        scrollTop: $(href).offset().top
    }, 1600);
    return false;
});

$(function()
{
    var typed = new Typed('.txt-type', 
    {
        strings: ['startups…', 'brands…', 'businesses…', 'enterprises…', 'you…'],
        typeSpeed: 80,
        backDelay: 3000,
        backSpeed: 40,
        loop: true,
        autoInsertCss: false
    });
});


$(function()
{
    $(window).on('scroll resize', function()
    {
        const bar = $(window).scrollTop() / ($(document).height() - $(window).height());
        $('.page-progress').css(
            {
                'height':(100 * bar | 0) + '%'
            });
        $('div')[0].value = bar;
    });
});


$(function()
{
    $('.header-navbar-menu-btn').click(function()
    {
        $(this).toggleClass('active');
        $('.header-nav').slideToggle(300);
    })
});



$('.form-btn').on('click', function()
{
    $('.success').css('display', 'block');
});

$('.close-btn').on('click', function()
{
    $('.success').css('display', 'none');
});

$('.modal-close-btn').on('click', function()
{
    $('.success').css('display', 'none');
});

$(function () {
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                lettersonly: true
            },
            email: {
                required: {
                    depends: function () {
                        $(this).val($.trim($(this).val()));
                        return true;
                    }
                },
                customemail: true
            },
            message: {
                maxlength: 10
            }
        },
        messages: {
            name: {
                required: "enter your name"
            },
            email: {
                required: "email is required",
            }
        }
    });
});

// $.extend($.validator.messages(), {
//     minlength: $.validator.format("enter at least {0} characters"),
//     maxlength: $.validator.format("enter no more than {0} characters"),
//     email: "invalid email",
//     required: "field is required",
// });

$('#contact-form').submit(() => {
    $('.form-success').click();
});