$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    var formData = new FormData();
    formData.append('image', $('#image')[0].files[0]);

    $.ajax({
        url: '/thanh-toan',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log('Upload successful!\n' + data);
        },
    });
});
});