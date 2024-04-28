$(document).ready(function () {

    tinhTongTien();

    $('#backDrop').change(function () {
        thanhTien('backDrop', 'tienBackDrop', 'giaBackDrop');
    });

    $('#hoaTuoi').change(function () {
        thanhTien('hoaTuoi', 'tienHoaTuoi', 'giaHoaTuoi');
    });

    $('#amThanhAnhSang').change(function () {
        thanhTien('amThanhAnhSang', 'tienAmThanhAnhSang', 'giaAmThanhAnhSang');
    });

    $('#mc').change(function () {
        thanhTien('mc', 'tienMC', 'giaMC');
    });

    $('#khachMoi').change(function () {
        thanhTien('khachMoi', 'tienKhachMoi', 'giaKhachMoi');
    });

    $('#amNhac').change(function () {
        thanhTien('amNhac', 'tienAmNhac', 'giaAmNhac');
    });

    $('#kyNiem').change(function () {
        thanhTien('kyNiem', 'tienKyNiem', 'giaKyNiem');
    });

    $('#nuocUong').change(function () {
        thanhTien('nuocUong', 'tienNuocUong', 'giaNuocUong');
    });

    function thanhTien(id, thanhTien, gia) {
        var gia = $('#' + gia).html().split(' ')[0].split('.').join('');
        var inputValue = $('#' + id).val();
        var tien = formatCurrency(inputValue * parseInt(gia)) + " VND";

        $('#' + thanhTien).html(tien);
        tinhTongTien();
    }


    function tinhTongTien() {
        var tongTien = 0;
        var tienBackDrop = $('#tienBackDrop').html().split(' ')[0].split('.').join('');
        var tienHoaTuoi = $('#tienHoaTuoi').html().split(' ')[0].split('.').join('');
        var tienAmThanhAnhSang = $('#tienAmThanhAnhSang').html().split(' ')[0].split('.').join('');
        var tienMC = $('#tienMC').html().split(' ')[0].split('.').join('');
        var tienKhachMoi = $('#tienKhachMoi').html().split(' ')[0].split('.').join('');
        var tienAmNhac = $('#tienAmNhac').html().split(' ')[0].split('.').join('');
        var tienNuocUong = $('#tienNuocUong').html().split(' ')[0].split('.').join('');

        tongTien = parseInt(tienBackDrop) + parseInt(tienHoaTuoi) + parseInt(tienAmThanhAnhSang) + parseInt(tienMC) + parseInt(tienKhachMoi) + parseInt(tienAmNhac) + parseInt(tienNuocUong);
        $('#tongTien').html(formatCurrency(tongTien) + " VND");
        // console.log(parseInt($('#tongTien').html().split(' ')[0].split('.').join('')));
        tinhTienCoc();
    }

    $('#tienCoc').change(function () {
        tinhTienCoc();
    });

    function tinhTienCoc() {
        var tongTien = parseInt($('#tongTien').html().split(' ')[0].split('.').join(''));
        var tienCoc = tongTien * $('#tienCoc').val() / 100;
        $('#tienCanThanhToan').html(formatCurrency(tienCoc) + " VND");

    }

    function formatCurrency(number) {
        return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
});

