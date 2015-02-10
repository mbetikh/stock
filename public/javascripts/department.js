$(document).ready(function(){
  $('body').on('click', '#view', function () {
    window.location.href='/department/editdep/'+$(this).val();
  });

  $('body').on('click', '#delete', function () {
  	$('#confdelete').val($(this).val());
  });
  
  $('body').on('click', '#confdelete', function () {

  	$.get('/department/delete/'+$(this).val(),function(result){
  		window.location.href='/department';
	})
  });
});