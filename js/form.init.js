function initAjaxForm(){
    $('.ajax').submit(function(){
        showProcessing('if1');
        $.ajax({
               type: "POST",
               url: this.action,
               data: $(this).serializeArray(),
               success: function(msg){
                   eval(msg);
                   /*
                   try {
                    eval(msg);
                   } catch(e){
                    $('#events').html(msg);
                   }
                   */
                 
            },
            timeout: 30000,
            statusCode: {
                404: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('page not found');
                },
                400: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Bad Request (������ ������)');
                },
                401: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Unauthorized (�������������)');
                },
                402: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Payment Required (���������� ������)');
                },
                403: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Forbidden (���������)');
                },
                404: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Not Found (�� �������)');
                },
                405: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Method Not Allowed (����� �� ��������������)');
                },
                406: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Not Acceptable (�� ���������)');
                },
                407: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Proxy Authentication Required (���������� �������������� ������)');
                },
                408: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Request Timeout (����� �������� �������)');
                },
                409: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Conflict (��������)');
                },
                410: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Gone (�����)');
                },
                411: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Length Required (���������� �����)');
                },
                412: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Precondition Failed (������� ������)');
                },
                413: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Request Entity Too Large (������ ������� ������� �����)');
                },
                414: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Request-URI Too Long (������������� URI ������� �������)');
                },
                415: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Unsupported Media Type (���������������� ��� ������)');
                },
                416: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Requested Range Not Satisfiable (������������� �������� �� ��������)');
                },
                417: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Expectation Failed (��������� �� ���������)');
                },
                418: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('I\'m a teapot (� - ������)');
                },
                422: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Unprocessable Entity (���������������� ���������)');
                },
                423: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Locked (�������������)');
                },
                424: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Failed Dependency (������������� �����������)');
                },
                425: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Unordered Collection (��������������� �����)');
                },
                426: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Upgrade Required (���������� ����������)');
                },
                449: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Retry With (��������� �...)');
                },
                456: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Unrecoverable Error (���������������� ������...)');
                },
                500: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Internal Server Error (���������� ������ �������)', {'title':'Server Error (������ �������)'});
                },
                501: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Not Implemented (�� �����������)', {'title':'Server Error (������ �������)'});
                },
                502: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Bad Gateway (������ ����)', {'title':'Server Error (������ �������)'});
                },
                503: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Service Unavailable (������ ����������)', {'title':'Server Error (������ �������)'});
                },
                504: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Gateway Timeout (���� �� ��������)', {'title':'Server Error (������ �������)'});
                },
                505: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('HTTP Version Not Supported (������ HTTP �� ��������������)', {'title':'Server Error (������ �������)'});
                },
                506: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Variant Also Negotiates (������� ���� ����������)', {'title':'Server Error (������ �������)'});
                },
                507: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Insufficient Storage (������������ ���������)', {'title':'Server Error (������ �������)'});
                },
                509: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Bandwidth Limit Exceeded (��������� ���������� ������ ������)', {'title':'Server Error (������ �������)'});
                },
                510: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Not Extended (�� ���������)', {'title':'Server Error (������ �������)'});
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                showError($('.saving').parent().attr('id'));
                switch (errorThrown){
                    case 'timeout':
                        alert('Exceeded the expectation of submitting the form. Check the server and try to send the form again <br>(��������� ���������� �������� �������� �����. ��������� ������ ������� � ���������� ��������� ����� ��� ���');
                        break;
                    default:
                        alert('There is no connection (����������� ����������)');
                }
            }
        });
        return false;
    });
}
$(document).ready(function() {
    initAjaxForm();
});
function showLoading(objId){
    $('#' + objId).html('<div class="loading">Loading ... <img src="img/loader.gif"></div>').fadeTo(3000, 1);
}
function showProcessing(objId){
    $('#' + objId).html('<div class="saving"><img src="../img/loader.gif" style="margin-top:5px" width="14" height="14"></div>').fadeTo(3000, 1);
}
function showDone(objId){
    $('#' + objId).html('<div class="done">Done</div>').fadeTo(3000, 1).delay(3000).fadeTo(3000, 0);
}
function showError(objId){
    $('#' + objId).html('<div class="error-hint">Error</div>').fadeTo(3000, 1).delay(3000).fadeTo(3000, 0);
}