function printarGrafico() {
  $(document).ready(function() {
    var checked = [];
    var colors = ["#8C5091", "#F8AFFF", "#719155", "#98DE62", "#3F5866", "#81b6d4", "#FFC882", "#e2953c", "#eceb7d", "#8C5091", "#F8AFFF"];
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
      institutoLi.setAttribute("data-val", (i + 1) * 10);
      institutoLi.setAttribute("data-color", colors[i]);
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
console.log(poli.orcamentos[0].gastoTotal);
console.log(fflch.orcamentos[0].gastoTotal);
console.log(poli.orcamentos[0].gastoTotal);