$(document).ready(function(){
  $('body').on('click', '#view', function () {
    window.location.href='/department/editdep/'+$(this).val();
  });
});