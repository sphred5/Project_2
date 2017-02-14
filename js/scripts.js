var Drink;
var Size;
var Quantity;


function price_calc(Size, Quantity) {
  var price;
  var tax = .08;
  if (Size == 16){
    price = 5;
  }else if (Size == 20){
    price = 6;
  }else {
    price = 4;
  }
  var totalPrice = (price * Quantity) + price * tax;
  
  // toFixed(number) : returns the interger with (number) decimal places.
  return totalPrice.toFixed(2);
}
var inventory = {
  "Lager" : 640,
  "Pale Ale" : 640,
  "IPA" : 640,
  "Stout": 640
}
