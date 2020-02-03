var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var months =['January', 'February', 'March', 'April','May','June','July','August','September','October','November','December'];
var monthYear = document.getElementById("monthYear");
showCalendar(currentMonth,currentYear)

document.getElementById('ch').innerText = months[currentMonth] + ' '+ currentYear;
function showCalendar(month,year){

    var firstDay = new Date(year,month).getDay();
    var daysinMonth = 32-new Date(year,month,32).getDate();
    
    var table = document.getElementById('calbody');
    table.innerHTML ="";
    monthYear.innerHTML = months[month]+ " " + year;
var date = 1;
for(var i=0; i<6; i++){
    var row = document.createElement('tr')
    for(var j=0;j<7; j++){
        var cell = document.createElement('td')
        if(i===0 && j < firstDay){
            var cellText = document.createTextNode("");
            cell.appendChild(cellText)
            row.appendChild(cell);
            date--;
        }
        else if(date > daysinMonth){
            break;
        }
        else{
            var cellText = document.createTextNode(date)
            cell.appendChild(cellText)
            row.appendChild(cell);
            cell.setAttribute('id',date);
            
        }
        date++;
        cell.setAttribute('class', month+1);
    }
    table.appendChild(row);
}
}
function previous(){
    currentYear = (currentMonth ===0)? currentYear-1:currentYear;
    currentMonth = currentMonth===0?11:currentMonth-1;
    showCalendar(currentMonth,currentYear)
}
function next(){
    currentYear= currentMonth ===11?currentYear+1:currentYear
    currentMonth = (currentMonth+1) %12;
    showCalendar(currentMonth,currentYear)

}
var jan15 = document.createElement('p');
jan15.innerHTML = "<a href='https://www.eventbrite.ca/e/machine-learning-with-js-tickets-87016403405?aff=ebdssbdestsearch'>Machine Learning with JS</a>";
document.getElementById('15').appendChild(jan15);

for(var i=1;i<32;i++){
var opt = document.createElement('option');
opt.innerHTML = i;
document.getElementById('date').appendChild(opt);
}


function addevent(){
    var addDay = document.getElementById('date').value;
var addtitle = document.getElementById('title').value;
var addlink = document.getElementById('link').value;

    var idcell = document.getElementById(addDay);
    var parag = document.createElement("p");
    parag.innerHTML = "<a href='"+addlink+"'>"+addtitle+"</a>";
    idcell.appendChild(parag);

}