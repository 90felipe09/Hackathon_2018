function printarGrafico() {
  $(document).ready(function() {
    var checked = [];
    $.each($("input[name='Instituto']:checked"), function() {
      checked.push($(this).val());
    });
    svg = document.querySelector("#svg");
    grafico = document.querySelector("#graphList");
    while (grafico.firstChild) {
      grafico.removeChild(grafico.firstChild);
    };
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    };
    for (var i = 0; i < checked.length; i++) {
      var institutoLi = document.createElement("li");
      institutoLi.textContent = checked[i];
      institutoLi.classList.add("js-graphItem");
      institutoLi.setAttribute("data-val", "10");
      institutoLi.setAttribute("data-color", "#3f871d");
      grafico.appendChild(institutoLi);

      $.getScript("js/graficos.js")
        .done(function(script, textStatus) {
          console.log(textStatus);
        })
        .fail(function(jqxhr, settings, exception) {
          $("div.log").text("Triggered ajaxError handler.");
        });
    };
  });
};


var consultar = document.querySelector(".buscar")
consultar.addEventListener("click", printarGrafico);