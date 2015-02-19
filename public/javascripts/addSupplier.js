$(document).ready(function(){
  $("#form").validate({
    rules: {
      name: {
        required: true,
        remote: {
          url: "/supplier/checkNameSupplier",
          type: "post",
          data: {
            name: function() {
              return $( "#name" ).val();
            }
          }
        }
      },
      companyName :{
        required: true
      },
      email :{
        required: true,
        email:true,
        remote: {
          url: "/supplier/checkEmailSupplier",
          type: "post",
          data: {
            email: function() {
              return $( "#email" ).val();
            }
          }
        }
      },
      mobail :{
        required:true,
        minlength: 10,
        number: true
      }
    },

    messages: {
      name : {
        required: "الرجاء ادخال اسم المورد",
        remote: "اسم المورد موجود مسبقا الرجاء اختيار مورد اخر"
      },
      companyName :{
        required: "الرجاء ادخال اسم الشركة"
      },
      email :{
        required: "الرجاء ادخال البريد الالكتورني",
        email: "هذا ليس شكل البريد الالكتروني",
        remote : "هذا البريد مستعمل من قبل الرجاء ادخال بريد اخر"
      },
      mobail :{
        required : "الرجاء ادخال رقم الهاتف",
        minlength: " يجب أن يكون الهاتف لا يقل عن 10 ارقام ",
        number: "يجب ان يكون رقم الهاتف مكون من ارقام فقط! "
      }
    }
  });
});