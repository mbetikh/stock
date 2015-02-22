$(document).ready(function(){

  $('body').on('click', '#view', function () {
    window.location.href='/supplier/editsupplier/'+$(this).val();
  });

  $('body').on('click', '#delete', function () {
  	$('#confdelete').val($(this).val());
  });
  
  $('body').on('click', '#confdelete', function () {
  	$.get('/supplier/delete/'+$(this).val(),function(result){
  		window.location.href='/supplier';
	   })
  });
});