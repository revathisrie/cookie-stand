'use strict'
 let hoursOpen = ['6am ','7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];

//====================================================================


let listCookieStands = [];

//create constuctor to make our store object
function CookieStand(location, minCustPerHour, maxCustPerHour, avgCookiePerSale){
    // create all dynamic properties
    this.location = location;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiePerSale = avgCookiePerSale;
    //empty array to push sales figures into
    this.cookieStandSales = [];
    //create day totals counter value
    this.dailySalesTotals = 0;
    listCookieStands.push(this);
    this.salesFigures();
  }
  
 //=======================================================================

//creating function to generate random num and push to empty array
 CookieStand.prototype.salesFigures = function(){

  for(let i=0; i<hoursOpen.length;i++){

   let avgCookiePerHour = Math.random()*(this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);
    
    this.cookieStandSales.push(avgCookiePerHour);

    this.dailySalesTotals = avgCookiePerHour + this.dailySalesTotals;
 }
  //console.log(this.cookieStandSales)
 }
//============================================================================

//// Create the new store instances
let Seattle = new CookieStand("Seattle", 23, 65, 6.3);
let Tokyo = new CookieStand("Tokyo", 3, 24,1.2);
let Dubai = new CookieStand("Dubai",11,38,2.3);
let Paris = new CookieStand("Paris",20,38,2.3);
let Lima = new CookieStand("Lima",2,16,4.6);

//==================================================================
// create header row with hours

function addTableHeader() {
 
  const table = document.getElementById('table');
  const thElem = document.createElement('th');
  const trElem = document.createElement('tr');

  table.appendChild(trElem);
  thElem.textContent = 'Locations';
  trElem.appendChild(thElem);
  for (let i = 0; i < hoursOpen.length; i++) {
    const th = document.createElement('th');
    th.textContent = hoursOpen[i];
    trElem.appendChild(th);
  }
  const th = document.createElement('th');
  th.textContent = 'Location Total';
  trElem.appendChild(th);
}
  
 //========================================================================


 function addTableRow(rowName, hourlySales){
    const table = document.getElementById('table');
    const trElem = document.createElement('tr');
    trElem.setAttribute("id", rowName)
    table.appendChild(trElem);
    let sumOfHourlyTotals = 0;

    // Adding first columen in the row which is typically rowName / location
    const rowNameTd = document.createElement('td');
    rowNameTd.textContent = rowName;
    trElem.appendChild(rowNameTd);

    // Adding hourly totals to the row.
    for (let j=0; j < hourlySales.length; j++ ){
      const td = document.createElement('td');
      td.textContent = hourlySales[j];
      trElem.appendChild(td);
      sumOfHourlyTotals = sumOfHourlyTotals + hourlySales[j];
    }

    // Adding sum of hourly totals to the row.
    const td = document.createElement('td');
    td.textContent = sumOfHourlyTotals;
    trElem.appendChild(td);
  }
  
 //========================================================================



addTableHeader();
addTableRow(Seattle.location, Seattle.cookieStandSales);
addTableRow(Tokyo.location, Tokyo.cookieStandSales);
addTableRow(Dubai.location, Dubai.cookieStandSales);
addTableRow(Paris.location, Paris.cookieStandSales);
addTableRow(Lima.location, Lima.cookieStandSales);

addTableTotals(listCookieStands);


//-------------------------------------------------------------------------------------//

function removeRowByIdIfExists(id) {
  // remove current totals
  let hourlyTotalsRow = document.getElementById(id);
  if(hourlyTotalsRow)
    hourlyTotalsRow.parentNode.removeChild(hourlyTotalsRow);
}

function addTableTotals(arrayCookieStands){

removeRowByIdIfExists("Hourly Totals");

let hourlyTotals = []
for(let i=0 ; i < hoursOpen.length; i++){
  let hourlyTotal =0;
  for(let j=0 ; j<arrayCookieStands.length; j++ ){
    hourlyTotal = hourlyTotal + arrayCookieStands[j].cookieStandSales[i];
  }
  hourlyTotals.push(hourlyTotal);
  console.log(hoursOpen[i] + " : " + hourlyTotal);
}
addTableRow("Hourly Totals", hourlyTotals);
}
//-------------------------------------------------------------------------------------//


//event listeners call back function
function addNewStore(event){
  // prevents page from refreshing upon event
  event.preventDefault();

  //assigning new value to property assigned to current property; (target) is the form; minCustPerHour is set in HTML input tag;
  var newMinCustPerHour = event.target.minCustPerHour.value;
  var newMaxCustPerHour = event.target.maxCustPerHour.value;
  var newAvgCookiePerSale = event.target.avgCookiePerSale.value;
  var newLocation = event.target.location.value;
  
  console.log(newMinCustPerHour);
  console.log(newMaxCustPerHour);
  console.log(newAvgCookiePerSale);
  console.log(newLocation);


  // make new instance by passing in new arguements
 let newStore = new CookieStand(newLocation, newMinCustPerHour, newMaxCustPerHour, newAvgCookiePerSale);
 addTableRow(newStore.location, newStore.cookieStandSales);
 addTableTotals(listCookieStands);
}

//add event listener, listening for event, put at bottom for code readability
storeForm.addEventListener('submit', addNewStore);

