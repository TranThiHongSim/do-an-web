$(document).ready(function () {

    // var username = $('#username');
    // username.blur(checkUsername);
    // function checkUsername() {
    //     if (username.val().length == 0) {
    //         $('#tb-username').html('(*)Vui lòng nhập tên đăng nhập...');
    //         return false;
    //     }
    //     else {
    //         $('#tb-username').html('');
    //     }
    //     return true;
    // }

    var sdt = $('#sdt');
    sdt.blur(checkSDT)
    function checkSDT() {
        var regex = /^[0][1-9][1-9]+$/;
        if (sdt.val().length == 0) {
            $('#tb-sdt').html('(*)Vui lòng nhập số điện thoại...');
            return false;
        }
        else if (sdt.val().length < 10) {
            $('#tb-sdt').html('(*)Số điện thoại không hợp lệ...');
            return false;
        }
        else if (!regex.test(sdt.val())) {
            $('#tb-sdt').html('(*)Số điện thoại không hợp lệ...');
            return false;
        }
        else {
            $('#tb-sdt').html('');
        }
        return true;
    }

    var password = $('#password');
    password.blur(checkPassword);
    function checkPassword() {
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (password.val().length == 0) {
            $('#tb-password').html('(*)Vui lòng nhập mật khẩu...');
            return false;
        }
        else if (password.val().length < 6) {
            $('#tb-password').html('(*)Mật khẩu phải có ít nhất 6 ký tự...');
            return false;
        }
        else if (!regex.test(password.val())) {
            $('#tb-password').html('(*)Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số...');
            return false;
        }
        else {
            $('#tb-password').html('');
        }
        return true;
    }
    var repassword = $('#repassword');
    repassword.blur(checkRePassword);
    function checkRePassword() {
        if (repassword.val() != password.val()) {
            $('#tb-repassword').html('Mật khẩu không khớp...');
            return false;
        }
        else {
            $('#tb-repassword').html('');
        }
        return true;
    }

    $('#register-form').submit(function (e) {
        if (checkSDT() && checkPassword() && checkRePassword()) {
            e.preventDefault();
            alert('Vui lòng kiểm tra lại thông tin đăng ký...');
            goToLogin();
        }
    });

    $('#goToLogin').click(function (e) {
        e.preventDefault();
        goToLogin();
    });

    $('#goToRegister').click(function (e) {
        e.preventDefault();
        goToRegister();
    });

    function goToRegister() {
        $('.login-form').hide();
        $('.register-form').show();
        $('.login-tab-login').removeClass('active');
        $('.login-tab-register').addClass('active');
    }
    
    function goToLogin() {
        $('.register-form').hide();
        $('.login-form').show();
        $('.login-tab-register').removeClass('active');
        $('.login-tab-login').addClass('active');
    }
});
