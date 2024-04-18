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

})
document.getElementById('btn-search').addEventListener('click', function() {
    var searchBar = document.getElementById('search-bar');
    if (searchBar.style.display === 'none') {
        searchBar.style.display = 'block';
    } else {
        searchBar.style.display = 'none';
    }
});