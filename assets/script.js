var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']

function timeBlocks(hour, todo = ""){
    var currentHour = new Date().getHours();
    var ppf = 'future';
    if (currentHour > hour + 9)ppf = 'past';
    if (currentHour === hour + 9)ppf = 'present';
    var hourTitle = hours[hour];
    var todo = localStorage.getItem(hourTitle);
    $('.container').append( $(`
    <div class="row time-block">
        <div class="hour col-1">${hourTitle}</div>
        <textarea name="" id="${hourTitle}" cols="30" rows="4" class="description col-9 ${ppf}">${todo || ""}</textarea>
        <button class="btn saveBtn col-1">💾</button>
    </div>
        `))
}
for(var i = 0; i < 9; i++){
    timeBlocks(i)
}



var btn = document.querySelectorAll(".saveBtn")


for(var i = 0; i < btn.length; i++){
btn[i].addEventListener("click", clickSave)
}

function clickSave(event){

var todoValue = event.target.parentNode.children[1].value
var key = event.target.parentNode.children[1].id

console.log("Value Key", todoValue, key)

localStorage.setItem(todoValue, key)


}