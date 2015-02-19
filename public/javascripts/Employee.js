$(document).ready(function(){
  // $('body').on('click', '#view', function () {
  //   window.location.href='/department/editdep/'+$(this).val();
  // });
  $('body').on('click','#dlte',function () {
  	$('#confdlte').val($(this).val());
  });
  
  $('body').on('click','#confdlte',function () {
 
  	$.get('/employee/deleteEmp/'+$(this).val(),function(result){
  		window.location.href='/employee';
	})
  });
});