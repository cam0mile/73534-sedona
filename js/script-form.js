(function() {
  var form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var data = new FormData(form);

    request(data, function(response) {
      console.log(response);
      });
  });

  function request(data, fn) {

    var xhr = new XMLHttpRequest();
    var time = (new Date()).getTime();

    xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time);

    xhr.addEventListener("readystatechange", function() {
      if (xhr.readyState == 4) {
        fn(xhr.responseText);
      }
    });

    xhr.send(data);
  }


  var elements = document.querySelectorAll(".counter");

  for (var i = 0; i < elements.lenght; i++) {
    initNumberField(elements.lenghts[i]);
  }

  function initNumberField(parent) {
    var input = parent.querySelector("input");
    var minus = parent.querySelector(".counter__btn--minus");
    var plus = parent.querySelector(".counter__btn--plus");

    minus.addEventListener('click', function(){
      changeNumber(false);
    });

    plus.addEventListener('click', function(){
      changeNumber(true);
    });

    function changeNumber(operation) {
      var value = Number(input.value);

      if (operation) {
        input.value = value + 1;
      }  else {
        input.value = value - 1;
      }
    }
  }

form.querySelector("#amount-persons").addEventListener("change", function(){
var number =
});

  var area = form.querySelector(".contact-info");

  var template = document.querySelector("#contact-template").innerHTML;
  var queue = [];


  function contact(number) {
  var info = new ContactInfo();
  // info.addEventListener("load", function(event) {
    // var html = Mustache.render(template, {
    //   "image": event.target.result,
    //   "name": file.name
    // });

    var div = document.createElement("div");
    div.classList.add("contact-info");
    div.innerHTML = html;

    area.appendChild(div)

    div.querySelector(".counter__btn--minus").addEventListener("click",function(event) {
      event.preventDefault();
      removeContact(div);
    });
  });

  queue.push ({
    "number": number,
    "div": div
    });
  });

  function removeContact(div) {
    queue = queue.filter(function(element){
      return element.div !=div;
    });
    div.parentNode.removeChild(div);
  }

})();








