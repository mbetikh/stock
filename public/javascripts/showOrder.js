$(document).ready(function(){

$('body').on('click', '#editData', function () {
    window.location.href='/order/editOrder/'+$(this).val();
  });



$('body').on('click', '#show', function () {
  window.location.href='/order/viewOrderItem/'+$(this).val();
  });

    $('[data-toggle="tooltip"]').tooltip();   



  $("#form").validate({

    rules : {
      iditem_type:{
        required: true,
      },
      getiteme:{
        required: true,
      }
    },
    messages: {
      iditem_type: {
        required: "الرجاء إدخال نوع السلعة",
      },
       
       getiteme: {
        required: "الرجاء ادخال اسم السلعة",
      }

      
    }
    ,

    errorPlacement: function(label, element) {
        label.addClass('arrow');
        label.insertAfter(element);
    },
    wrapper: 'span'
 
  }); 

       $("#department").on("change", function () {
    var id = $(this).val();
    
    $('#empl').empty();
    if(id != "")
    {

       $.get('/order/getEmployee/'+id,function(result){ 
       // alert(result[0].name);
       //  $('#empl').append("<option value = '"+""+"'  >"+"طلب الموظف"+"</option>");

        for ( var i = 0; i < result.length;  i++ ) {
        // alert(result[i].name);
          $('#empl').append("<option value = '"+result[i].idemployee+"'>"+result[i].name+"</option>");
        }
    });

   // alert("id : "+id);
    }
  });


  $('body').on('click', '#delete1', function () {
   $('#confdelete').val($(this).val());
  });
  
  $('body').on('click', '#confdelete', function () {
    $.get('/order/deleteOrderAccepted/'+$(this).val(),function(result){
     window.location.href='/order/showOrder';
     });
  });

 $('body').on('click', '#delete2', function () {

   $('#confback').val($(this).val());
  });
  
  $('body').on('click', '#confback', function () {
    $.get('/order/deleteOrderNotAccepted/'+$(this).val(),function(result){
     window.location.href='/order/showOrder';
     });
  });


$('body').on('click','#item', function () {
  //alert($(this).val());
  //  $('#confdelete').val($(this).val());
  $('#idorder').val($(this).val());
  });
  
 
  

  $("#iditem_type").on("change", function () {
    var id = $(this).val();
   // alert(id);
    $('#getiteme').empty();
   // alert(id);
    if(id!=-1){
      $.get('/order/getitem/'+id,function(result){ 
        //option(value="-1", selected="selected")
        $('#getiteme').append("<option value = '"+""+"'  >"+"إسم السلــعة"+"</option>");

        for ( var i = 0; i < result.length;  i++ ) {
          //alert(result[i].iditem);
          $('#getiteme').append("<option value = '"+result[i].item_info_id+"'>"+result[i].name+"</option>");
        }
    //input#reminder.form-control(type='text', name='phoneNumber',placeholder="المتـبقي" , style='width: 200px;',value="hellow world")
      });
    }
  });

  $("#getiteme").on("change", function () {
   
  var f = $(idorder).val(); 
 // alert(f);
   var id = $(this).val();  
    if(id!=-1){
      $.get('/order/getreminder/'+id +'/'+f,function(result){ 
       $('#reminder').val(result[0][0].remainder);
       if(result[1][0] !=  undefined)
       {
   //  alert("true");
     
       }
       else
       {
     //  alert("false");


       }
      });
    }

  });






 

//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$('.btn-number').click(function(e){
  e.preventDefault();

  fieldName = $(this).attr('data-field');
  type      = $(this).attr('data-type');
  var input = $("input[name='"+fieldName+"']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    if(type == 'minus') {

      if(currentVal > input.attr('min')) {
        input.val(currentVal - 1).change();
      } 
      if(parseInt(input.val()) == input.attr('min')) {
        $(this).attr('disabled', true);
      }

    } else if(type == 'plus') {
      if(currentVal < input.attr('max')) {
        input.val(currentVal + 1).change();
      }
      if(parseInt(input.val()) == input.attr('max')) {
        $(this).attr('disabled', true);
      }

    }
  } else {
    input.val(0);
  }
});
$('.input-number').focusin(function(){
 $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {

  minValue =  parseInt($(this).attr('min'));
  maxValue =  parseInt($(this).attr('max'));
  valueCurrent = parseInt($(this).val());

  name = $(this).attr('name');
  if(valueCurrent >= minValue) {
    $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
  } else {
    alert('Sorry, the minimum value was reached');
    $(this).val($(this).data('oldValue'));
  }
  if(valueCurrent <= maxValue) {
    $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
  } else {
    alert('Sorry, the maximum value was reached');
    $(this).val($(this).data('oldValue'));
  }


});

$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
             (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
             (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
               return;
             }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
        }







      });


// code for table viewOrderItem
$("#mytable #checkall").click(function () {
        if ($("#mytable #checkall").is(':checked')) {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });
    
    $("[data-toggle=tooltip]").tooltip();







  









// end 
});


