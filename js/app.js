'use strict'
 let hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ',"Total: "];

function randomCookie(min, max) {
  return Math.floor(Math.random() * (max - min) + min);  
}

 function getCookiesEachHour(name, min, max, avgCookie){
  let arrayCookie = [];
   let total = 0;
   let currentCount = 0;
  for(let i=0; i<hours.length-1 ;i++){
    currentCount = randomCookie(min,max); 
    arrayCookie.push(`${hours[i]} ${currentCount} cookies`);

    total += currentCount;
    //console.log(total);
 }

    arrayCookie.push(`Total: ${total} cookies`);
    console.log(arrayCookie);

    // bug was in this line
 return [name, arrayCookie];
}



let seattle = getCookiesEachHour("Seattle", 23, 65, 6.3);
//console.log(seattle[0])

let India = getCookiesEachHour("India", 3, 24,1.2);

let NewYork = getCookiesEachHour("NewYork",11,38,2.3);

let Paris = getCookiesEachHour("Paris",20,38,2.3);

let London = getCookiesEachHour("London",2,16,4.6);

console.log(seattle[1]);
console.log(India[1]);
console.log(NewYork[1]);
console.log(Paris[1]);
console.log(London[1]);


function makeCookieUl(Locations){
  const createUl = document.createElement('ul');
}

function makeCookieH2(Locations){

  const div = document.getElementById('div');

  const createArticle = document.createElement('article');
  let store = Locations[0];
  createArticle.setAttribute("id", store);


  div.appendChild(createArticle);
  const h2 = document.createElement('h2');
  h2.textContent = Locations[0];
  createArticle.appendChild(h2);
}

function makeCookieLi(Locations){
  let store = Locations[0];
   const article = document.getElementById(store);
  const ul = document.createElement("ul")
  article.appendChild(ul);
  for(let i = 0; i < Locations[1].length; i++){
    const li = document.createElement('li');
    li.textContent = Locations[1][i];
    ul.appendChild(li);
  }

}
makeCookieH2(seattle)
makeCookieLi(seattle)
makeCookieH2(India)
makeCookieLi(India)
makeCookieH2(NewYork)
makeCookieLi(NewYork)
makeCookieH2(Paris)
makeCookieLi(Paris)
makeCookieH2(London)
makeCookieLi(London)