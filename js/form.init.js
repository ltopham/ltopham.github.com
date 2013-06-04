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
                    alert('Bad Request (Плохой запрос)');
                },
                401: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Unauthorized (Неавторизован)');
                },
                402: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Payment Required (Необходима оплата)');
                },
                403: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Forbidden (Запрещено)');
                },
                404: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Not Found (Не найдено)');
                },
                405: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Method Not Allowed (Метод не поддерживается)');
                },
                406: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Not Acceptable (Не приемлемо)');
                },
                407: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Proxy Authentication Required (Необходима аутентификация прокси)');
                },
                408: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Request Timeout (Время ожидания истекло)');
                },
                409: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Conflict (Конфликт)');
                },
                410: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Gone (Удалён)');
                },
                411: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Length Required (Необходима длина)');
                },
                412: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Precondition Failed (Условие «ложно»)');
                },
                413: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Request Entity Too Large (Размер запроса слишком велик)');
                },
                414: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Request-URI Too Long (Запрашиваемый URI слишком длинный)');
                },
                415: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Unsupported Media Type (Неподдерживаемый тип данных)');
                },
                416: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Requested Range Not Satisfiable (Запрашиваемый диапазон не достижим)');
                },
                417: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Expectation Failed (Ожидаемое не приемлемо)');
                },
                418: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('I\'m a teapot (Я - чайник)');
                },
                422: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Unprocessable Entity (Необрабатываемый экземпляр)');
                },
                423: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Locked (Заблокировано)');
                },
                424: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Failed Dependency (Невыполненная зависимость)');
                },
                425: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Unordered Collection (Неупорядоченный набор)');
                },
                426: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Upgrade Required (Необходимо обновление)');
                },
                449: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Retry With (Повторить с...)');
                },
                456: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Unrecoverable Error (Некорректируемая ошибка...)');
                },
                500: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Internal Server Error (Внутренняя ошибка сервера)', {'title':'Server Error (Ошибка сервера)'});
                },
                501: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Not Implemented (Не реализовано)', {'title':'Server Error (Ошибка сервера)'});
                },
                502: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Bad Gateway (Плохой шлюз)', {'title':'Server Error (Ошибка сервера)'});
                },
                503: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Service Unavailable (Сервис недоступен)', {'title':'Server Error (Ошибка сервера)'});
                },
                504: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Gateway Timeout (Шлюз не отвечает)', {'title':'Server Error (Ошибка сервера)'});
                },
                505: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('HTTP Version Not Supported (Версия HTTP не поддерживается)', {'title':'Server Error (Ошибка сервера)'});
                },
                506: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Variant Also Negotiates (Вариант тоже согласован)', {'title':'Server Error (Ошибка сервера)'});
                },
                507: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Insufficient Storage (Переполнение хранилища)', {'title':'Server Error (Ошибка сервера)'});
                },
                509: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Bandwidth Limit Exceeded (Исчерпана пропускная ширина канала)', {'title':'Server Error (Ошибка сервера)'});
                },
                510: function() {
                    showError($('.saving').parent().attr('id'));
                    alert('Not Extended (Не расширено)', {'title':'Server Error (Ошибка сервера)'});
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                showError($('.saving').parent().attr('id'));
                switch (errorThrown){
                    case 'timeout':
                        alert('Exceeded the expectation of submitting the form. Check the server and try to send the form again <br>(Превышено допустимое ожидание отправки формы. Проверьте работу сервера и попробуйте отправить форму еще раз');
                        break;
                    default:
                        alert('There is no connection (Отсутствует соединение)');
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