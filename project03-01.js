/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Rebecca Mehling
      Date: 03/22/2023  

      Filename: project03-01.js
*/

//Declare Variable for Menu Items 
let menuItems = document.getElementsByClassName("menuItem");

//Run Contents of Menu
for (let i = 0; i< menuItems.length; i++) {
      menuItems[i].addEventListener("click", calcTotal);
}

//Function to Calculate Total 
function calcTotal() {
      let orderTotal = 0; //initial value or Order Total
      for (let i = 0; i < menuItems.length; i++) {

            //Test if Menu Item is checked
            if (menuItems[i].checked) {       
                  
                //If true, add price of item to order total  
                orderTotal += Number(menuItems[i].value);
            }
      }

      //Change Total as menu items are checked
      let billTotal = formatCurrency(orderTotal)
      document.getElementById("billTotal").innerHTML = billTotal;           
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 } 