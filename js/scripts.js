// functions
// prototypes
function set(){
var inputName = $("input#name").val();
var inputAddress = $("input#address").val();
var inputPhone = $("input#phone").val();
var inputEmail = $("input#email").val();
}
function reset(){
$("input#name").val("");
$("input#address").val("");
$("input#phone").val("");
$("input#email").val("");
}
function resetPet(){
$("input#pet-name").val("");
$("input#type").val("");
$("input#age").val("");
$("input#weight").val("");
}

$(document).ready(function(){
  $(".dog1").click(function(){
    $("#form-adopt").toggle();
    $("#form-adopt").submit(function(event){
      event.preventDefault();
      set();
      $("#output").show();
      $(".new-dog1").show();
      $(".dog1").hide();
      reset();
    });
  });

  $(".dog2").click(function(){
    $("#form-adopt").toggle();
    $("#form-adopt").submit(function(event){
      event.preventDefault();
      set();
      $("#output").show();
      $(".new-dog2").show();
      $(".dog2").hide();
      reset();
    });
  });

  $(".cat1").click(function(){
    $("#form-adopt").toggle();
    $("#form-adopt").submit(function(event){
      event.preventDefault();
      set();
      $("#output").show();
      $(".new-cat1").show();
      $(".cat1").hide();
      reset();
    });
  });

  $(".cat2").click(function(){
    $("#form-adopt").toggle();
    $("#form-adopt").submit(function(event){
      event.preventDefault();
      set();
      $("#output").show();
      $(".new-cat2").show();
      $(".cat2").hide();
      reset();
    });
  });

  $(".animal").click(function(){
    $("#form-adopt").toggle();
    $("#form-adopt").submit(function(event){
      event.preventDefault();
      set();
      $("#output").show();
      $(".new-animal").show();
      $(".animal").hide();
      reset();
    });
  });

  $("#pet-entry").submit(function(event){
    var inputPetName = $("input#pet-name").val();
    var inputType = $("input#type").val();
    var inputAge = $("input#age").val();
    var inputWeight = $("input#weight").val();
    resetPet();
    });

});
