function getChecked(nome) {
  $(document).ready(function() {

    $("button").click(function() {

      var checked = [];

      $.each($("input[name='%s']:checked", % nome), function() {
        favorite.push($(this).val());
      });
      alert("My favourite sports are: " + favorite.join(", "));
    });
  });

}

getChecked('sport');