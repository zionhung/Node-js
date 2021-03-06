
/**
 *Ajax的GET请求辅助方法
 * @param {string}url 请求后台的地址
 * @param {function}callback  请求成功之后 返回数据成功 并且调用此方法 这个方法接收一个参数就是后台返回的数据
 * @return undefined
 */
function ajaxGet(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url ,true);
    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            callback(xhr.responseText);
        }
    }
}

function ajaxPost(url ,data , callback){
    var xhr = new XMLHttpRequest();
    xhr.open('POST',url ,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send(data);

    xhr.onreadystatechange = function(){
        if(xhr.readyState = 4 && xhr.status == 200){
            callback(xhr.responseText);
        }
    }
}