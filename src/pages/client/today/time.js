// function Time() {

//     // Creating object of the Date class
    
//     var date = new Date();
    
//     // Get current hour
    
//     var hour = date.getHours();
    
//     // Get current minute
    
//     var minute = date.getMinutes();
    
// // Get current second

// var second = date.getSeconds();

// // Variable to store AM / PM

// var period = "";

// // Assigning AM / PM according to the current hour

// if (hour >= 12) {

// period = "PM";

// } else {

// period = "AM";

// }
// if (hour === 0) {

//     hour = 12;
    
//     } else {
    
//     if (hour > 12) {
    
//     hour = hour - 12;
    
//     }
    
//     }
    
//     // Updating hour, minute, and second
    
//     // if they are less than 10
    
//     hour = update(hour);
    
//     minute = update(minute);
    
//     second = update(second);
//     // eslint-disable-next-line no-unused-vars
//     // var nickname = "hi";
//     // if (nickname !== null) 
//       document.getElementById("digital-clock").innerHTML = hour + " : " + minute + " : " + second + " " + period;

// // Set Timer to 1 sec (1000 ms)

// setTimeout(Time, 1000);

// }
// function update(t) {

//     if (t < 10) {
    
//     return "0" + t;
    
//     }
    
//     else {
    
//     return t;
    
//     }
    
//     }
    
//     Time();

// // Function to update time elements if they are less than 10

// // Append 0 before time elements if they are less than 10
window.onload = function() {
function Dong_ho() {
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    var Giay_hien_tai = new Date().getSeconds();
    if(gio)
    gio.innerHTML = Gio_hien_tai;
    if(phut)
    phut.innerHTML = Phut_hien_tai;
    if(giay)
    giay.innerHTML = Giay_hien_tai;
}
var Dem_gio = setInterval(Dong_ho, 1000);
}
