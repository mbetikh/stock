$(document).ready(function(){

	 $('body').on('click', '#delete', function () {
	  console.log($(this).val());
    $('#confdelete').val($(this).val());
  });
  
  $('body').on('click', '#confdelete', function () {
    

   
   // $.get('/order/delete/'+$(this).val(),function(result){
      //window.location.href='/order/showOrder';
  })
  });




	});