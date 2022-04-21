var hours = ['9AM', '10Am', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM']

function timeBlocks(hour, todo = ""){
    var currentHour = new Date().getHours() - 11;
    var ppf = 'future';
    if (currentHour > hour + 10)ppf = 'past';
    if (currentHour === hour + 10)ppf = 'present';
    var hourTitle = hours[hour];
    var todo = localStorage.getItem(hourTitle);
    $('.container').append( $(`
    `))
}