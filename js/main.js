$(document).ready(function () {
    pushHeader()
    function pushHeader() {
        $.ajax({
            url: 'header.html',
            dataType: 'html',
            success: function (data) {
                $('.header-wrapped').html(data);
            },
            error: function () {
            }
        });
    }

    pushFooter()
    function pushFooter() {
        $.ajax({
            url: 'footer.html',
            dataType: 'html',
            success: function (data) {
                $('.site-footer').html(data);
            },
            error: function () {
            }
        });
    }

    // $('#btn-search').click(function () {
    //     // $('.search-bar').toggleClass('show');
    //     console.log('click');
    // });

    // tinhTongTien();

    // $('#backDrop').change(function () {
    //     thanhTien('backDrop', 'tienBackDrop', 'giaBackDrop');
    // });

    // $('#hoaTuoi').change(function () {
    //     thanhTien('hoaTuoi', 'tienHoaTuoi', 'giaHoaTuoi');
    // });

    // $('#amThanhAnhSang').change(function () {
    //     thanhTien('amThanhAnhSang', 'tienAmThanhAnhSang', 'giaAmThanhAnhSang');
    // });

    // $('#mc').change(function () {
    //     thanhTien('mc', 'tienMC', 'giaMC');
    // });

    // $('#khachMoi').change(function () {
    //     thanhTien('khachMoi', 'tienKhachMoi', 'giaKhachMoi');
    // });

    // $('#amNhac').change(function () {
    //     thanhTien('amNhac', 'tienAmNhac', 'giaAmNhac');
    // });

    // $('#nuocUong').change(function () {
    //     thanhTien('nuocUong', 'tienNuocUong', 'giaNuocUong');
    // });



    // function thanhTien(id, thanhTien, gia) {
    //     var gia = $('#' + gia).html().split(' ')[0].split('.').join('');
    //     var inputValue = $('#' + id).val();
    //     var tien = formatCurrency(inputValue * parseInt(gia)) + " VND";

    //     $('#' + thanhTien).html(tien);
    //     tinhTongTien();
    // }


    // function tinhTongTien() {
    //     var tongTien = 0;
    //     var tienBackDrop = $('#tienBackDrop').html().split(' ')[0].split('.').join('');
    //     var tienHoaTuoi = $('#tienHoaTuoi').html().split(' ')[0].split('.').join('');
    //     var tienAmThanhAnhSang = $('#tienAmThanhAnhSang').html().split(' ')[0].split('.').join('');
    //     var tienMC = $('#tienMC').html().split(' ')[0].split('.').join('');
    //     var tienKhachMoi = $('#tienKhachMoi').html().split(' ')[0].split('.').join('');
    //     var tienAmNhac = $('#tienAmNhac').html().split(' ')[0].split('.').join('');
    //     var tienNuocUong = $('#tienNuocUong').html().split(' ')[0].split('.').join('');

    //     tongTien = parseInt(tienBackDrop) + parseInt(tienHoaTuoi) + parseInt(tienAmThanhAnhSang) + parseInt(tienMC) + parseInt(tienKhachMoi) + parseInt(tienAmNhac) + parseInt(tienNuocUong);
    //     $('#tongTien').html(formatCurrency(tongTien) + " VND");
    //     // console.log(parseInt($('#tongTien').html().split(' ')[0].split('.').join('')));
    //     tinhTienCoc();
    // }

    // $('#tienCoc').change(function () {
    //     tinhTienCoc();
    // });

    // function tinhTienCoc() {
    //     var tongTien = parseInt($('#tongTien').html().split(' ')[0].split('.').join(''));
    //     var tienCoc = tongTien * $('#tienCoc').val() / 100;
    //     $('#tienCanThanhToan').html(formatCurrency(tienCoc) + " VND");

    // }

    // function formatCurrency(number) {
    //     return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    // }
    
    var testimonials = $(".testimonial-item");

    // Lặp qua từng cột
    testimonials.each(function (index, testimonial) {
        // Đặt thời gian hiển thị cho từng cột
        var delay = index * 1000; // Mỗi cột sẽ xuất hiện sau 1 giây

        // Tạo hiệu ứng xuất hiện lần lượt
        setTimeout(function () {
            $(testimonial).css({
                opacity: "1",
                transform: "translateY(0)"
            });
        }, delay);
    });



})

document.addEventListener("DOMContentLoaded", function () {
    var testimonials = document.querySelectorAll(".testimonial-item");

    // Lặp qua từng cột
    testimonials.forEach(function (testimonial, index) {
        // Đặt thời gian hiển thị cho từng cột
        var delay = index * 1000; // Mỗi cột sẽ xuất hiện sau 1 giây

        // Tạo hiệu ứng xuất hiện lần lượt
        setTimeout(function () {
            testimonial.style.opacity = "1";
            testimonial.style.transform = "translateY(0)";
        }, delay);
    });
});

    function showSearchBar() {
        $('.search-bar').toggleClass('show');
        var imgElement = $('#btn-search img');

    if ($('.search-bar').hasClass('show')) {
        imgElement.attr('src', '../img/icon/close.png');
        imgElement.addClass('small-icon'); 
    } else {
        imgElement.attr('src', '../img/icon/search.png');
        imgElement.removeClass('small-icon');
    }
    }

