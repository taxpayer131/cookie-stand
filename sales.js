// declare literal object for each store location
var firstPike = {
  minCust: 23,
  maxCust: 65,
  cookiePerSale: 6.3,
  }

var seaTac = {
minCust: 3,
maxCust: 24,
cookiePerSale: 1.2,
  }

var seaCent = {
minCust: 11,
maxCust: 38,
cookiePerSale: 3.7,
  }

var capHill = {
  minCust: 20,
  maxCust: 38,
  cookiePerSale: 2.3,
  }

var alki = {
  minCust: 23,
  maxCust: 65,
  cookiePerSale: 6.3,
  }

//method of the object to generate a random number of customers per hour
function randNumCust(minCust, maxCust)  {
  Math.floor(Math.random() * (maxCust - minCust) + minCust

}

randNumCust()
