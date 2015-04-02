
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

  // $("[data-toggle=popover]").popover();
  $('#idstock').on('input', function(){
    //if($('#idstock').val().length >=3 ) 
    {
      $.get('/employee/searchEmployee/'+$('#idstock').val(),function(result){
        var type=['root','admin','user'];
        $('#employee').empty();
        $('.pagination').hide();
          for(key in result){
            $('#employee').append('<tr><td >'+result[key].empname+'</td><td >'+result[key].email+'</td><td >'+result[key].phoneNumber+'</td><td>'+type[result[key].level]+'</td><td>'+result[key].dname+'</td><td><a class="btn btn-primary btn-xs" href= "/employee/editemployee/'+result[key].idemployee+'"><span class="glyphicon glyphicon-floppy-saved"></span></a></td><td><button class="btn btn-danger btn-xs" href= "#del"  data-toggle="modal" value='+result[key].idemployee+'><span class="glyphicon glyphicon-trash"></button></span></td>');
            }
          // $("[data-toggle=popover]").popover();
        });
      }

  });
});

       // 
      //                                   </a></td><td width="3%"><input type ="button" class="btn.btn-danger.btn-xs" id = "dlte" href="del", data-toggle="modal" , value='+e.idemployee+'> <span class="glyphicon.glyphicon-trash"> </span></td></tr>');
         //          