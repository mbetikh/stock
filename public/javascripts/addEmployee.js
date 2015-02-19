$(document).ready(function(){
   $.validator.addMethod("valueNotEquals", function(value, element, arg){
    return arg != value;
   }, "Value must not equal arg.");

  $("#form").validate({
    rules: {
      name: {
        required : true,
      },
      email: {
        required: true,
        email: true,
        // remote: {
        //   url :"/users/checkEmail",
        //   type : "post",
        //   data: {
        //     email: function() {
        //       return $( "#email" ).val();
        //     }
        //   }
        // }
      },
      phoneNumber: {
        required: true,
      },
      password :{
        required : true,
        minlength: 5,
      },
      confirmPassword : {
        required : true,
        equalTo: "#password"
      },
      iddepartment : {
        valueNotEquals: "-1" 
      },
      level: {
        valueNotEquals: "-1",
      }
    },
      messages: {
        name: {
          required: "الرجاء ادخال اسم المستخدم",
        },
        email: {
          required: " الرجاء ادخال البريد الالكتروني ",
          email: "هذا ليس بريد اليكتروني",
        },
        phoneNumber: {
          required: "الرجاء ادخال اسم المستخدم",
        },
        password:{
          required: "الرجاء إدخال كلمة المور",
          minlength: "يجب أن تكون كلمة المرور الخاصة بك على الأقل 5 أحرف",
        },
        confirmPassword:{
          required: "الرجاء إدخال كلمة المور مرة تانية",
          minlength: "يجب أن تكون كلمة المرور الخاصة بك على الأقل 5 أحرف",
          equalTo: "كلمة المرور ليست متطابقة"
        },
        level:{
          valueNotEquals: "الرجاء اختيار صلاحية المستخدم",
        },
        iddepartment : {
          valueNotEquals: "الراجاء اختيار الادارة" ,
        }
      },
    
  });
});