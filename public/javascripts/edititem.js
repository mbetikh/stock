$(document).ready(function(){
  $('body').on('click', '#view', function () {
    window.location.href='/item/edititem/'+$(this).val();
  });

$('body').on('click', '#delete', function () {
    $('#confdelete').val($(this).val());
    console.log($('#confdelete').val($(this).val()));
  });
  
  $('body').on('click', '#confdelete', function () {
    $.get('/item/delete1/'+$(this).val(),function(result){
      window.location.href='/item';
     })
  });

var defaults = {
        disabled: true,
      };
  $.extend($.fn.editable.defaults, defaults);
  $('#enable').click(function() {
    $('#user .editable').editable('toggleDisabled');
  }); 
  $('#name').editable({
    url: '/item/edits',
    type: 'select',
    source: '/item/showsu',
    pk: 1,
    name: 'name',
    title: 'Enter name supplier',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال اسم المورد';
    }
  });
    $('#Name').editable({
    url: '/item/editinfo',
    type: 'text',
    pk: 1,
    name: 'Name',
    title: 'Enter Name',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال اسم الصنف';
    }
  });
    $('#quantity').editable({
    url: '/item/edit',
    type: 'text',
    pk: 1,
    name: 'quantity',
    title: 'Enter quantity',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال الكمية';
    }
  });
    $('#remainder').editable({
    url: '/item/edit',
    type: 'text',
    pk: 1,
    name: 'remainder',
    title: 'Enter remainder',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال المتبقي';
    }
  });
  $('#description').editable({
  url: '/item/edit',
  type: 'textarea',
  pk: 1,
  name: 'description',
  title: 'Enter description',
  validate: function(v) {
    if(!v) return 'الرجاء ادخال الوصف';
  }
});
  
});