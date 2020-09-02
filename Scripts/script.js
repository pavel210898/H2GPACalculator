$(document).ready(function(){
  var input= $(".form-control");
   var point= $("#exampleInputPoint");
   var errorCom= $(".error");
   var submit= $(".calculate");
   var reset= $(".reset");
   var resultTxt1= $(".resultTxt1");
   var resultTxt2= $(".resultTxt2");
   var resultTxt3= $(".resultTxt3");
   var result= $(".resultDiv");


   submit.click(function(){
        if(input.val()==""){
            errorCom.addClass("dBlock")
        }else{
            errorCom.removeClass("dBlock");
        }
   });


 submit.click(function(){
        let num1 = document.getElementsByName("num1")[0].value;
        let num2 = document.getElementsByName("num2")[0].value;
        let num3 = document.getElementsByName("num3")[0].value;
        let num4 = document.getElementsByName("num4")[0].value;
        let num5 = document.getElementsByName("num5")[0].value;
        let num6 = document.getElementsByName("num6")[0].value;
        let num7 = document.getElementsByName("num7")[0].value;
        let sum = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5) + Number(num6) + Number(num7);
        let total= sum/7;


    var user=  $("#exampleInputName").val();

    result.addClass("dBlock");

    resultTxt1.text("Congratulation " + user);

    if (total >= 3.00) {
      resultTxt2.text("You Get 1st Class Result");
    }else if( total < 3.00 && total >2.00){
      resultTxt2.text("You Get 2nd Class Result");
    }else if( total <=2.00){
      resultTxt2.text("You Get 3rd Class Result");
    }else{
      resultTxt2.text("Opps Sorry You Are Failed");
    }

    resultTxt3.text("Your total GPA is " + total);

})  


reset.click(function(){
     errorCom.removeClass("dBlock");
   });

 });
