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

    var previousScroll = 0;

    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > previousScroll) {
            // Người dùng đang cuộn xuống, ẩn header
            $('.header-wrapped').removeClass('header-top').addClass('header-bottom');
        } else {
            // Người dùng đang cuộn lên, hiển thị header
            $('.header-wrapped').removeClass('header-bottom').addClass('header-top');
        }
        previousScroll = currentScroll;
    });
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