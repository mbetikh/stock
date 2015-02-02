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
    url: '/department/edit',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Enter username',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال اسم القسم';
    }
  });
});