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



  var currentFieldsNumber = 0;
  var amaunt = document.getElementById("amount-persons");
  var amauntValue = amaunt.value;

  console.log(amaunt);

  amaunt.addEventListener("change", function(){
    debugger;
    var fieldsNumber = parseInt(input.value);
    if (fieldsNumber > currentFieldsNumber) {
      for (var i= currentFieldsNumber; i < (fieldsNumber - 1); i++)
        addFields();

    } else {
      for (var i= currentFieldsNumber; i  > (fieldsNumber + 1); i--)
        removeFields();
    }
    currentFieldsNumber = parseInt(input.value);
  });


  function addFields(templateElement) {
    var templateElement = document.createElement("div");
    templateElement.classList.add("contact-info");
    templateElement.innerHTML = html;
    area.appendChild(templateElement);
  }


  function removeFields(templateElement) {
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








