var authorization = '84ddf124-4d18-4f34-a55c-a89b3e836251';
function start() {
    var formData = new FormData();
    formData.append('file', $('#upload')[0].files[0]);
    var num = 0;

    /*$.ajax({
        async: false,
        type: 'post',
        contentType: 'application/json',
        url: 'https://openapi.saicmotor.com/services/cloud/sds/v1.0.0/upload?fileName=test%2Ftest.html&applicationName=test',
        beforeSend: function (request) {
            request.setRequestHeader('Authorization', 'Bearer ' + authorization);
        },
        data: formData,
        success: function (data) {
            console.log(data);
        }
    });*/
    setInterval(function () {
        $.ajax({
            async: false,
            contentType: 'application/json',
            type: 'get',
            url: 'https://openapi.saicmotor.com/services/cloud/sds/v1.0.0/download?fileName=test%2Ftest.html&applicationName=test',
            beforeSend: function (request) {
                request.setRequestHeader('Authorization', 'Bearer ' + authorization);
            },
            success: function (data) {
                console.log(++num);
                console.log(data);
            }
        });
    }, 2000);
};

