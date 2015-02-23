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
              
              $('#getiteme').append("<option value = '"+result[i].supplier_idsupplier+"'>"+result[i].name+"</option>");
          }
          
        });
      
      } 
  });

  $("#Eitem").click( function(){       
    var length = $('#iditem_type > option').length;
    var vd = length + 1;
    var valu = $("#Name").val(); 
    $('#iditem_type').append("<option value = '"+length+"'>"+valu+"</option>");
    $('#iditem_type').val(length);
    $.get('/item/getitem/',function(result1){
      for ( var i = 0; i < result1.length;  i++ ) {
        
        $('#getiteme').append("<option value = '"+result1[i].idsupplier+"'>"+result1[i].name+"</option>");
      }
    });
  
   });
  $("#newsupp").click( function(){
    $.get('/item/getitem/',function(result1){
      for ( var i = 0; i < result1.length;  i++ ) {
        $('#getiteme').append("<option value = '"+result1[i].idsupplier+"'>"+result1[i].name+"</option>");
      }
  });

 });   
});