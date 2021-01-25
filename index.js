function call()
{
  var c=parseInt(pizza.value)*parseInt(qty.value)

  result.innerHTML="Pizza Name: "+pizza.options[pizza.selectedIndex].text +
  "<br> Price: &#8377; " +pizza.value+
  "<br> Quantity: "+qty.value+
  "<br> Amount: &#8377; " +c;

  pimg.src=pizza.options[pizza.selectedIndex].text+".jpeg"

}
