$(document).ready(function(){
  // $('body').on('click', '#viewo', function () {
  //   window.location.href='/item/additemw/'+$(this).val();
  
  // });
  $("#iditem_type").on("change", function () {
      var id = $(this).val();
      $('#getiteme').empty();
      if(id!=-1){
        $.get('/item/getitem/'+id,function(result){ 
        
          for ( var i = 0; i < result.length;  i++ ) {
              alert(id);
              $('#getiteme').append("<option value = '"+result[i].supplier_idsupplier+"'>"+result[i].name+"</option>");
          }
          
        });
      
      } 
  });

  $("#Eitem").click( function(){       
     // alert("mohAMED");
    var length = $('#iditem_type > option').length;
    var valu = $("#Name").val(); 
    $('#iditem_type').append("<option value = '"+length+"'>"+valu+"</option>");
    $('#iditem_type').val(length);
    $.get('/item/getitem/',function(result1){
      for ( var i = 0; i < result1.length;  i++ ) {
        $('#getiteme').append("<option value = '"+result1[i].supplier_idsupplier+"'>"+result1[i].name+"</option>");
      }
    });
  
   });
  

});