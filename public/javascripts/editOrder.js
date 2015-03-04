$(document).ready(function(){
  /* disabled  editable*/
  var defaults = {
        disabled: true,
      };
  $.extend($.fn.editable.defaults, defaults);
  $('#enable').click(function() {
    $('#user .editable').editable('toggleDisabled');
  }); 
  
  $('#name').editable({
    url: '/order/editOrder',
    type: 'select',
    source:'/order/getEmployee',
    pk: 1,
    name: 'name',
    title: 'Enter Employe',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال اسم المورد';
    }
  });

   $('#name2').editable({
    url: '/order/editOrderr',
    type: 'select',
    source:'/order/getEmployee',
    pk: 1,
    name: 'name',
    title: 'Enter Employe',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال اسم المورد';
    }
  });


       $('#te').editable({
      url: '/order/edittt',
      type: 'text',
      pk: 1,
      name: 'te',
      title: 'Enter username',
      success: function (res, newValue){
        return res.msg;
      }
      
     });

});