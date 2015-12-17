(function() {
  var form = document.querySelector("form");
  var elements = document.querySelectorAll(".counter");
  var area = form.querySelector(".contact-info-wrap");
  var template = document.querySelector("#contact-template").innerHTML;
  var number = 0;
  var div = 0;


  for (var i = 0; i < elements.length; i++) {
    initNumberField(elements[i]);
  }



  function initNumberField(parent) {
    var input = parent.querySelector("input");
    var minus = parent.querySelector(".counter__btn--minus");
    var plus = parent.querySelector(".counter__btn--plus");
    var min = parseInt(input.getAttribute('min')) || 0;
    var max = parseInt(input.getAttribute('max'));
    var x;

    //дополнительное задание от наставника =)
    if (min>max) {
      x = min;
      min = Math.min(max,min);
      max = Math.max(max,x);
    }


    minus.addEventListener('click', function(){
      changeNumber(false);
    });

    plus.addEventListener('click', function(){
      changeNumber(true);
    });

    function changeNumber(operation) {
      var value = parseInt(input.value);
      var result;
      if (operation) {
        result = value + 1;
        if (!isNaN(max)){
          result = Math.min(result, max);
        }
      }  else {
        result = value - 1;
        result = Math.max(result, min);
      }
      input.value = result;
    }
  }



  var currentFieldsNumber = 2;
  var amount = document.getElementById("amount-persons");
  var amauntValue = amount.value;

  console.log(amount);

  amount.addEventListener("change", function(){
    debugger;
    var fieldsNumber = parseInt(amount.value);
    if (fieldsNumber > currentFieldsNumber) {
      for (var i= currentFieldsNumber; i < (fieldsNumber - 1); i++)
        //function x() {fieldsNumber = fieldsNumber - 1}
        addFields();

    } else {
      for (var i= currentFieldsNumber; i  > (fieldsNumber + 1); i--)
       // function y() {fieldsNumber = fieldsNumber + 1}
        removeFields();
    }
    currentFieldsNumber = parseInt(amount.value);
  });


  function addFields(templateElement) {
    debugger;
    var templateElement = document.createElement("div");
    templateElement.classList.add("contact-info");
    templateElement.innerHTML = template;
    area.appendChild(templateElement);
    console.log(templateElement);
  }


  function removeFields(templateElement) {
    debugger;
    var templateElement = document.querySelector(".contact-info");
    console.log(templateElement);
    templateElement.parentNode.removeChild(templateElement);
  }

  // function contact(number) {
  //   var info = new ContactInfo();

  //   var templateElement = document.createElement("div");
  //   templateElement.classList.add("contact-info");
  //   templateElement.innerHTML = html;

  //   area.appendChild(templateElement)

  //   templateElement.querySelector(".counter__btn--minus").addEventListener("click",function(event) {
  //     event.preventDefault();
  //     removeContact(templateElement);
  //   });
  // }


  // function removeContact(templateElement) {
  //   queue = queue.filter(function(element){
  //     return element.templateElement !=templateElement;
  //   });
  //   templateElement.parentNode.removeChild(templateElement);
  // }


})();








