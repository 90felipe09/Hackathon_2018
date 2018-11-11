function printarGrafico() {
  $(document).ready(function() {

    var checked = [];
    $.each($("input[name='Instituto']:checked"), function() {
      checked.push($(this).val());
    });
    console.log(checked);
  });
};


var consultar = document.querySelector(".buscar")
consultar.addEventListener("click", printarGrafico);