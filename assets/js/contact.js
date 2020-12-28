$('#ss-form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLScLFh3JZtVCkfbB6TAMzZDI0XU6YjhAt6hE3_YfGWoALho2PQ/formResponse",
        data: $(this).serialize(),
        type: "POST",
        dataType: "jsonp",
        success: function(data) {
            alert('Form Submitted. Thanks.');
            console.log('Submission successful');
        },
        error: function(xhr, status, error) {
            alert('Form Submitted. Thanks.');
            console.log('Submission failed: ' + error);
        }
    });
});
