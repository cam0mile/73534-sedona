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
      if (input == document.querySelector("#amount-persons")) {
        removeFields();
      }
    });

    plus.addEventListener('click', function(){
      changeNumber(true);
      if (input == document.querySelector("#amount-persons")) {
        addFields();
      }
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

    function removeFields() {
      if (input.value > 0) {
        var children = area.children;
        var lastChildNumber = children.length - 1;
        area.removeChild(children[lastChildNumber]);
      } else {
        input.value = 1;
      }
    }

    function addFields() {
      var number = Number(input.value);

      var html = Mustache.render(template, {
        "number": number
      });

      var templateElement = document.createElement("div");
      templateElement.classList.add("contact-info");
      templateElement.innerHTML = html;

      area.appendChild(templateElement);
    }
  }

})();








