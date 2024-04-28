$(document).ready(function () {
    var hoTen = $('#hoTen')
    hoTen.blur(checkHoTen);

    function checkHoTen() {
        hoTenValue = hoTen.val();
        if (hoTenValue == "") {
            $('#tbHoTen').html('*Vui lòng nhập họ tên');
            return false;
        }
        return true;
    }

    var email = $('#email')
    email.blur(checkEmail);

    function checkEmail() {
        emailValue = email.val();
        if (emailValue == "") {
            $('#tbEmail').html('*Vui lòng nhập email');
            return false;
        }
        return true;
    }

    var sdt = $('#sdt')
    sdt.blur(checkSDT);

    function checkSDT() {
        sdtValue = sdt.val();
        if (sdtValue == "") {
            $('#tbSDT').html('*Vui lòng nhập số điện thoại');
            return false;
        }
        return true;
    }

    var diaChi = $('#tenCT')
    diaChi.blur(checkDiaChi);

    function checkDiaChi() {
        diaChiValue = diaChi.val();
        if (diaChiValue == "") {
            $('#tbTenCT').html('*Vui lòng nhập tên công ty');
            return false;
        }
        return true;
    }

    var date = $('#date')
    date.blur(checkDate);

    function checkDate() {
        var date = $('#date').val();
        if (date == "") {
            $('#tbDate').html('*Vui lòng chọn ngày');
            return false;
        }
        return true;
    }

    $('#btnSubmit').click(function (e) {
        if (checkHoTen() && checkEmail() && checkSDT() && checkDiaChi()) {
            var myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
            $('#tienCanThanhToan-modal').html($('#tienCanThanhToan').html());
            myModal.show();
            return true;
        }
        alert('Vui lòng nhập đủ thông tin.');
        return false;

    });

});