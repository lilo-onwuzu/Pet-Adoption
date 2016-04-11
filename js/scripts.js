functions
prototypes

$(document).ready(function(){
  $("button .adopt").click(function(){
    $("#form-adopt").toggle();
  });

  $("#form-adopt").submit(function(event){
    event.preventDefault();

    var inputName = $("input#name").val();
    var inputAddress = $("input#address").val();
    var inputPhone = $("input#phone").val();
    var inputEmail = $("input#email").val();

    $("#output").show();
    $(".danger").show();
  });

});
