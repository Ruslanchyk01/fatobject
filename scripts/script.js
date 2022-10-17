function ZeroFirstFormat(value)
{
    if (value < 10)
    {
        value = '0' + value;
    }
    return value;
}


function DateTime()
{
    const time = new Date();
    let hour = time.getHours();
    const min = ZeroFirstFormat(time.getMinutes());
    const prepand = (hour >= 12)? 'PM' : 'AM';
    hour = ZeroFirstFormat((hour >= 12) ? hour - 12: hour);
    return `${hour}:${min} ${prepand}`;
}

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

const time = new Date().toLocaleString('uk-UA', {timeZone: "Europe/Kiev"});
console.log(time);