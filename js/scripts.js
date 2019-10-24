$(document).ready(function(){
$("#agein").click(function(){

  var age = prompt("enter your age here");
  console.log(age);


  $("#ageout").text(age);
if(age<18){
  $("#underage").show();
} else if
  (age>=18) {
$("#ofage").show();
} else {
  alert("that's enough, young man")
}

});
});
