'use strElemict'
 let hoursOpen = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];

//====================================================================
//create constrElemuctor to make our store object
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
    }
  
 //=======================================================================

 CookieStand.prototype.salesFigures = function(){

  for(let i=0; i<hoursOpen.length;i++){

   let avgCookiePerHour = Math.random()*(this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);
    
    this.cookieStandSales.push(`${avgCookiePerHour}`);

    this.dailySalesTotals = avgCookiePerHour + this.dailySalesTotals;
 }
  console.log(this.cookieStandSales)
 }
//============================================================================

//// Create the new store instances
let Seattle = new CookieStand("Seattle", 23, 65, 6.3);
let Tokyo = new CookieStand("Tokyo", 3, 24,1.2);
let Dubai = new CookieStand("Dubai",11,38,2.3);
let Paris = new CookieStand("Paris",20,38,2.3);
let Lima = new CookieStand("Lima",2,16,4.6);


Seattle.salesFigures();
Tokyo.salesFigures();
Dubai.salesFigures();
Paris.salesFigures();
Lima.salesFigures();

//================================================================

function makeCookieDiv(CookieStand){

  const div = document.getElementById('div');

  const createArticle = document.createElement('article');
    let store = CookieStand.name;
  createArticle.setAttrElemibute("id", store);

  div.appendChild(createArticle);
  const h2 = document.createElement('h2');
  h2.textContent = CookieStand.name;
  createArticle.appendChild(h2);
}

//==================================================================
// create header row with hours

function addTableHeader() {
 
  const table = document.getElementById('table');

  const thElem = document.createElement('th');
  const trElem = document.createElement('tr');

  table.appendChild(trElem);
  thElem.textContent = "Locations";
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

//=======================================================================
 function addTableBody(CookieStand){
  const body = document.getElementById('table');
  
    
    const trElem = document.createElement('tr');
    body.appendChild(trElem);

    const locationTd = document.createElement('td');
    locationTd.textContent = CookieStand.location;

    trElem.appendChild(locationTd);
    for (let j=0; j < CookieStand.cookieStandSales.length; j++ ){

      const td = document.createElement('td');
      td.textContent = CookieStand.cookieStandSales[j];
      trElem.appendChild(td);
    }
    const td = document.createElement('td');
    td.textContent = CookieStand.dailySalesTotals;
    trElem.appendChild(td);
  }
  
 //========================================================================

addTableHeader();
addTableBody(Seattle);
addTableBody(Tokyo);
addTableBody(Dubai);
addTableBody(Paris);
addTableBody(Lima);