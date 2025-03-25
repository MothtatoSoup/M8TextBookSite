"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: maddy
      Date:   

      Filename: js06a.js
 */

window.addEventListener("load", function(){
      let orderForm = document.forms.orderForm;
      let model = orderForm.elements.model;

      // Select Model selection list when form opens
      model.focus();

      // Calculate the cost o fthe ordr
      calcOrder();

      function calcOrder(){
            //Determine the selected model
            let mIndex = model.selectedIndex;
            let mValue = model.options[mIndex].value;

            //Determine the selected quantity
            let qIndex = orderForm.elements.qty.selectedIndex;
            let quantity = orderForm.elements.qty[qIndex].value;

            //Model cost = model cost * quantity
            let modelCost = mValue*quantity;
            orderForm.elements.modelCost.value = modelCost;
      }
});

