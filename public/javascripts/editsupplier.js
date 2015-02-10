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
    url: '/supplier/edit',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Enter username',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال اسم المورد';
    }
  });
    $('#companyName').editable({
    url: '/supplier/edit',
    type: 'text',
    pk: 1,
    name: 'companyName',
    title: 'Enter companyName',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال اسم الشركة';
    }
  });
    $('#Email').editable({
    url: '/supplier/edit',
    type: 'text',
    pk: 1,
    name: 'Email',
    title: 'Enter Email',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال البريد الالكتروني';
    }
  });
    $('#mobail').editable({
    url: '/supplier/edit',
    type: 'text',
    pk: 1,
    name: 'mobail',
    title: 'Enter mobail',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال رقم العاتف';
    }
  });
});