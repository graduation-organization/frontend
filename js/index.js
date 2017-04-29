/**
 * Created by ccc on 2017/4/22.
 */
/*将表单数据转换成json对象*/
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
$(function () {
    $("button#submit").click(function () {
        var data = JSON.stringify($('form.login-form').serializeObject());
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/user/login",
            contentType: "application/json",
            data: data,
            success: function (result) {
                if (result.userType == 0) {
                    window.location.href = "../student.html";
                } else if (result.userType == 1) {
                    window.location.href = "../ueds/teacher/teacher.html";
                } else {
                    window.location.href = "../ueds/administrator/admin.html";
                }

            },
            error: function () {
                alert("failure");
            }
        });
    });

    $("button#submit_wms").click(function () {
        var data = JSON.stringify($('form.login-form').serializeObject());
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/sysUser/login",
            contentType: "application/json",
            data: data,
            success: function (result) {
                /*if (result.userType == 0) {
                    window.location.href = "";
                } else if (result.userType == 1) {
                    // window.location.href = "../ueds/teacher/teacher.html";
                } else {
                    // window.location.href = "../ueds/administrator/admin.html";
                }*/
                window.location.href = "/main3.html";

            },
            error: function () {
                alert("failure");
            }
        });
    });
});
