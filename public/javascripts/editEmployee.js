  $(document).ready(function(){
    var defaults = {
          disabled: true,
    };
  $.resul=new Array();


    $.extend($.fn.editable.defaults, defaults);
    $('#enable').click(function() {
      $('#user .editable').editable('toggleDisabled');
    }); 
    
    $('#name').editable({
      url: '/employee/edit',
      type: 'text',
      pk: 1,
      name: 'name',
      title: 'Enter employee name',
      validate: function(v) {
        if(!v) return 'الرجاء ادخال اسم الموظف';
      }
    });
    $('#phoneNumber').editable({
      url: '/employee/edit',
      type: 'text',
      pk: 1,
      name: 'phoneNumber',
      title: 'Enter  phoneNumber',
    });
    
    
    $('#email').editable({
      url: '/employee/edit',
      type: 'text',
      pk: 1,
      name: 'email',
      title: 'Enter email',
      success: function (res, newValue){
        return res.msg;
      }

     });
    $('#username').editable({
      url: '/employee/edit',
      type: 'text',
      pk: 1,
      name: 'username',
      title: 'Enter username',
      success: function (res, newValue){
        return res.msg;
      }
      
     });
    $('#level').editable({
    url: '/employee/edit',
    source:[
      {value:1,text:"root"},
      {value:2,text:"admin"},
      {value:3,text:"user"}
    ]
  });

    $.get('/employee/getdep',function(result){
    for ( var i = 0 ; i< result.length; i++){
      var k = new Object({id : i,value : result[i].iddepartments, text : result[i].name});
      $.resul.push(k);
    }
    $('#iddepartment').editable({
        url: '/employee/edit',
        source: $.resul,
        select2: {
          width: 200,
          placeholder: 'Select country',
          allowClear: false
        } 
    });      
   });
  });  
  
 