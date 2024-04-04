$(document).ready(function() {
    pushHeader()
    function pushHeader(){
        $.ajax({
            url: 'header.html',
            dataType: 'html',
            success: function(data) {
                $('.header-wrapped').html(data);
            },
            error: function() {
            }
        });
    }

    pushFooter()
    function pushFooter(){
        $.ajax({
            url: 'footer.html',
            dataType: 'html',
            success: function(data) {
                $('.site-footer').html(data);
            },
            error: function() {
            }
        });
    }

    $('.nav-link').hover(function () {
            $(this).addClass('hover')
        }, function () {
            var parent = $(this).parent()
            if(!parent.hasClass('submenu')){
                $(this).removeClass('hover')
            }
            else{
                $('.submenu').mouseleave(function () {
                    if (!$(this).find('.submenu-content').is(':hover')) {
                        $(this).find('.nav-link').removeClass('hover');
                    }
                });
            }
        }
        );

})