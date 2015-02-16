$(document).ready(function(){
	

	$('body').on('click', '#left', function () {
       var age = prompt("what's your age ? ");
      
       if(age<15)
       {
        //console.log("you still young hahahah");
        alert("you still young hahahah");
       }
       else
       {
       var x =confirm("welcome my frind");
       alert(x+"  confirm");
       }
  });


	$('body').on('click', '#middle', function () {
     alert( plus(2,3))
  });

  $('body').on('click', '#right', function () {
      alert("right");
  });


  var plus =function(a,b){

     var z=a+b;
      return z;
  }






});