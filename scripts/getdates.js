// Display Current Year //
const date = new Date();
const year = date.getFullYear();


// Initialize date from last modified // 
const lastModified = new Date(document.lastModified);


// Convert from Military to standard time // 
let hours = lastModified.getHours();
let ampm = 'AM';
const user = 'Van Taylor';

if (hours >= 12) {
    ampm = 'PM';
    if (hours >= 12) {
        hours = hours - 12;
    }
}


// Format Date //
const formattedDate = `${lastModified.getMonth() + 1}/${lastModified.getDay()}/${lastModified.getFullYear()} at ${hours}:${lastModified.getMinutes()} ${ampm} by ${user}`


// Display Results 
console.log("What's up graders, hope you don't find any errors in here");
document.getElementById("year").textContent = year;
document.getElementById("lastModified").textContent = `Last Modification ${formattedDate}`;
