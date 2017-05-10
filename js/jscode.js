function AddToCart(item)
{
	//var ProductArray = ["Mist Twist", "Water", "Cookies", "Chocolate", "Chicken", "Garlic", "Onions", "Tomato", "Sugar", "Flour", "Paper Towel", "Toilet Paper"];
	
	var ProductPrice = [4.99, 3.99, 3.49, 3.99, 12.99, 0.50, 0.79, 0.99, 2.99, 1.49, 6.99, 8.99];
	
	var displayMistTwist = document.getElementById("displayCountMT");.
	var displayWater = document.getElementById("displayCountWater");
	var displayCookies = document.getElementById("displayCountCookies");
	var displayChocolate = document.getElementById("displayCountChoc");
	var displayChicken = document.getElementById("displayCountChick");
	var displayGarlic = document.getElementById("displayCountGar");
	var displayOnions = document.getElementById("displayCountOnion");
	var displayTomato = document.getElementById("displayCountTom");
	var displaySugar = document.getElementById("displayCountSug");
	var displayFlour = document.getElementById("displayCountFlour");
	var displayPaperTowel = document.getElementById("displayCountPT");
	var displayToiletPaper = document.getElementById("displayCountTP");
	
	
	displayMistTwist.innerHTML = countMT;
	displayWater.innerHTML = countWater;
	displayCookies.innerHTML = countCookies;
	displayChocolate.innerHTML = countChoc;
	displayChicken.innerHTML = countChick;
	displayGarlic.innerHTML = countGar;
	displayOnions.innerHTML = countOnion;
	displayTomato.innerHTML = countTom;
	displaySugar.innerHTML = countSug;
	displayFlour.innerHTML = countFlour;
	displayPaperTowel.innerHTML = countPT;
	displayToiletPaper.innerHTML = countTP;

	
	var displayWaterTotal = document.getElementById("MistTwist");
	displayMTTotal.innerHTML = parseInt(countWater) * ProductPrice[0];
	
	var displayMTTotal = document.getElementById("Water");
	displayMTTotal.innerHTML = parseInt(countMT) * ProductPrice[1];
	
	var displayCookiesTotal = document.getElementById("Cookies");
	displayMTTotal.innerHTML = parseInt(countCookies) * ProductPrice[2];
	
	var displayChocolateTotal = document.getElementById("Chocolate");
	displayMTTotal.innerHTML = parseInt(countChoc) * ProductPrice[3];
	
	var displayChickenTotal = document.getElementById("Chicken");
	displayMTTotal.innerHTML = parseInt(countChick) * ProductPrice[4];
	
	var displayGarlicTotal = document.getElementById("Garlic");
	displayMTTotal.innerHTML = parseInt(countGar) * ProductPrice[5];
	
	var displayOnionsTotal = document.getElementById("Onions");
	displayMTTotal.innerHTML = parseInt(countOnion) * ProductPrice[6];
	
	var displayTomatoTotal = document.getElementById("Tomato");
	displayMTTotal.innerHTML = parseInt(countTom) * ProductPrice[7];
	
	var displaySugarTotal = document.getElementById("Sugar");
	displayMTTotal.innerHTML = parseInt(countSug) * ProductPrice[8];
	
	var displayFlourTotal = document.getElementById("Flour");
	displayMTTotal.innerHTML = parseInt(countFlour) * ProductPrice[9];
	
	var displayPaperTowelTotal = document.getElementById("PaperTowel");
	displayMTTotal.innerHTML = parseInt(countPT) * ProductPrice[10];

	var displayToiletPaperTotal = document.getElementById("ToiletPaper");
	displayMTTotal.innerHTML = parseInt(countTP) * ProductPrice[11];	



	var displayTotal = document.getElementById("Total");
	displayTotal.innerHTML = (parseInt(countMT) * ProductPrice[0]) + (parseInt(countWater) * ProductPrice[1]) + (parseInt(countCookies) * ProductPrice[2]) + 
		(parseInt(countChoc) * ProductPrice[3]) + (parseInt(countChick) * ProductPrice[4]) + (parseInt(countGar) * ProductPrice[5]) + 
		(parseInt(countOnion) * ProductPrice[6]) + (parseInt(countTom) * ProductPrice[7]) + (parseInt(countSug) * ProductPrice[8]) +
		(parseInt(countFlour) * ProductPrice[9]) + (parseInt(countPT) * ProductPrice[10]) + (parseInt(countTP) * ProductPrice[11]);

	
}
