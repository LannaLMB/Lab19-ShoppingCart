function AddToCart(item)
{
	var ProductArray = ["Mist Twist", "Water", "Cookies", "Chocolate", "Chicken", "Garlic", "Onions", "Tomato", "Sugar", "Flour", "Paper Towel", "Toilet Paper"];
	
	var ProductPrice = [4.99, 3.99, 3.49, 3.99, 12.99, 0.50, 0.79, 0.89, 2.99, 1.49, 6.99, 8.99];
	
	

		for (var i in cart)
		{
			if (cart[i].name == name)
			{
				cart[i].count++; return;
			}
		}
		
		var Item = new Item(name, cost, count);
		cart.push(item);
		saveCart();
}
	
	
	document.getElementById("item").innerHTML=ProductPrice;
	
	
}
