/*
$(function () {

    $('#clock-b').countdown('2021/1/1').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<div class="holder m-2"><span class="h1 font-weight-bold">%D</span> Day%!d</div>'
            + '<div class="holder m-2"><span class="h1 font-weight-bold">%H</span> Hr</div>'
            + '<div class="holder m-2"><span class="h1 font-weight-bold">%M</span> Min</div>'
            + '<div class="holder m-2"><span class="h1 font-weight-bold">%S</span> Sec</div>'));
    });

});



$('#clock').countdown({since: '2017/01/23',
    format: 'YOWDHMS', description: 'Since New Year'});

 */


$(body).onload(function() {
    var currentDate = new Date();
    $('div#clock').countdown(15 * 24 * 60 * 60 * 1000 + currentDate.valueOf(), function(event) {
        $this = $(this);
        switch(event.type) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "weeks":
            case "daysLeft":
                $this.find('span#'+event.type).html(event.value);
                break;
            case "finished":
                $this.fadeTo('slow', .5);
                break;
        }
    });
});