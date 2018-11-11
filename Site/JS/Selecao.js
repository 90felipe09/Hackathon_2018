function printarGrafico() {
  $(document).ready(function() {
    var checked = [];
    var filtro = [];
    var colors = ["#8C5091", "#F8AFFF", "#719155", "#98DE62", "#3F5866", "#81b6d4", "#FFC882", "#e2953c", "#eceb7d", "#8C5091", "#F8AFFF"];
    $.each($("input[name='Instituto']:checked"), function() {
      checked.push($(this).val());
    });
    var filtro = $("input[name='Informações']:checked").val().toLowerCase();
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
      console.log(institutos[i]);
      institutoLi.classList.add("js-graphItem");
      institutoLi.setAttribute("data-val", 10);
      institutoLi.setAttribute("data-color", colors[i]);
      grafico.appendChild(institutoLi);

      $.getScript("js/graficos.js")
        .done(function(script, textStatus) {
          console.log(textStatus);
        })
        .fail(function(jqxhr, settings, exception) {
          $("div.log").text("Triggered ajaxError handler.");
        });
      $("html, body").animate({
        scrollTop: document.body.scrollHeight
      }, "slow");
      content = document.querySelector(".content");

      /* Seção do Entenda Mais*/

      /*

      tituloGastos = document.createElement("h");
      tituloGastos.textContent = "Gastos";
      tituloArrecadacao = document.createElement("h");
      tituloArrecadacao.textContent = "Arrecadação";
      tituloAnos = document.createElement("h");
      tituloAnos.textContent = "Arrecadação";
      pArrecadacao = documento.createElement("p");
      pGastos = documento.createElement("p");
      pAnos = documento.createElement("p");
      frase = ""
      */


    };
  });
};
string = "institutos[0].orcamentos[0].gastoTotal"
var myObject = window[string];

var consultar = document.querySelector(".buscar");
consultar.addEventListener("click", printarGrafico);