var authorization = 'e9485b5d-4a0c-409d-97af-56ee0cac858b';
var id;

function start() {
    var formData = new FormData();
    formData.append('test.html', $('#upload')[0].files[0]);
    var num = 0;
    console.log(formData);

    /*$.ajax({
        async: false,
        type: 'post',
        contentType: false,
        processData: false,
        cache: false,
        url: 'https://openapi.saicmotor.com/services/cloud/sds/v1.0.0/upload?fileName=test%2Ftest.html&applicationName=test',
        beforeSend: function (request) {
            request.setRequestHeader('Authorization', 'Bearer ' + authorization);
        },
        data: formData,
        success: function (data) {
            console.log(data);
        }
    });*/
    id = setInterval(function () {
        $.ajax({
            async: false,
            contentType: 'application/octet-stream',
            type: 'get',
            url: 'https://openapi.saicmotor.com/services/cloud/sds/v1.0.0/download?fileName=test%2Ftest.html&applicationName=test',
            beforeSend: function (request) {
                request.setRequestHeader('Authorization', 'Bearer ' + authorization);
            },
            success: function (response, status, request) {
                console.log(response);
                window.open(response);
                //window.clearInterval(id);
            }
        })
    }, 2000);
};
function end() {
    window.clearInterval(id);
}





