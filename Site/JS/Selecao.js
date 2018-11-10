function getCheckedInstituto() {
  $(document).ready(function() {

    $("button").click(function() {

      var checked = [];

      $.each($("input[name='Instituto']:checked"), function() {
        favorite.push($(this).val());
      });
      alert("My favourite sports are: " + favorite.join(", "));
    });
  });

}
getCheckedInstituto();