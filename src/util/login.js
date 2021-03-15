// // import $ from ''
// function login() {
//     $.ajax({
//         type: "POST",
//         dataType: "json",
//         contentType: "application/json;charset=utf-8",
//         url: apiPath + "/auth/webLogin",
//         data: JSON.stringify({username: admin, password: 123456}),
//         success: function (result) {
//             if (result.code === 0 && result.data && result.data.token) {
//                 var token = result.data.token;
//                 console.log(token)
//                 // exp.setTime(exp.getTime() + result.data.TTLMillis);
//                 //存储登陆用户信息
//                 // localStorage.setItem("loginUser", JSON.stringify(result.data.user));
//                 localStorage.setItem("token", token);
//                 var exp = new Date();                                    //记录登录时间
//                 console.log(exp.getTime())
//                 console.log($("#thirtyDays").prop("checked"))
//                 var expires;
//                 if ($("#thirtyDays").prop("checked")) {
//                     expires = exp.getTime() + (1000 * 60 * 60 * 24 * 30);
//                 } else {
//                     expires = exp.getTime() + (1000 * 60 * 60 * 24);
//                 }
//                 localStorage.setItem("expires", expires);
//             } else {
//                 layer.msg('登陆失败，' + result.message, {icon: 5});
//             }
//
//         }
//     });
// }
