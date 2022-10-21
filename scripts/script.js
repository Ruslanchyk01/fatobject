$(document).ready(function () 
{

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
    hour = ZeroFirstFormat((hour >= 12) ? hour - 12: hour);
    if(hour === '00')
    {
        hour = 12;
    }
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

$(window).on('scroll resize', function()
{
    const bar = $(window).scrollTop() / ($(document).height() - $(window).height());
    $('.page-progress').css(
        {
            'height':(100 * bar | 0) + '%'
        });
    $('div')[0].value = bar;
});


$(function()
{

$('.header-nav-menu-btn, .menu-logo-frame, .header-nav-link').click(function()
{
    if($(window).width() > 767)
    {
        return false;
    }
    $('.header-nav-menu-btn').toggleClass('active');
    $('.header-bar-bg, .header-nav').css('height', '100vh');
    $('.header-bar-bg, .header-nav').slideToggle(200);

    if($('.header-nav-menu-btn').hasClass('active'))
    {
        $('.menu-logo-frame').css('display', 'block').fadeOut(0).fadeIn(400);
    }
    else
    {
        $('.menu-logo-frame').css('display', 'none');
    }
});

// $(window).resize(function()
// {
//     if($(window).width > 767)
//     {
//         $('.header-nav').slideToggle(200);
//         $('.header-bar-bg, .menu-logo-frame').slideToggle(200);
//     }
// });
});

$(function Valid(event) 
{   
    $.validator.addMethod('lettersOnly', function(value, element) 
    {
        return this.optional(element) || /^(?!\s*$)[\/ A-Za-zА-Яа-я/Ёё/Її/Іі/Єє]+$/i.test(value);
    }, 'Leters only please');
    
    $.validator.addMethod('customEmail', function(value, element) 
    {
        return this.optional(element) ||
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
            .test(value);
    }, 'Invalid email');

    $('#contact-form').validate(
    {
        rules: 
        {
            name:
            {
                required: true,
                lettersOnly: true
            },
            email:
            {
                required: true,
                customEmail: true
            },
            message:
            {
                maxlength: 100
            }
        },
        messages:
        {
            name:
            {
                required: 'Please, enter your name'
            },
            email:
            {
                required: 'Please, enter your email',
            }
        },
        submitHandler: function()
            {
                $('.form-btn').val('Please wait...');
                setTimeout(function()
                {
                    $('.success').css('display', 'block');
                    $('#contact-form').hide();
                }, 1000);
            }
    });
    
    return false;
});


$.extend($.validator.messages,
{
    minlength: $.validator.format('enter at least {0} characters'),
    maxlength: $.validator.format('enter no more than {0} characters'),
    email: 'Invalid email',
    required: 'Field is required',
});


        
$('.close-btn, .modal-close-btn').click(function()
{
    $('.success').css('display', 'none');
    location.reload();
});
