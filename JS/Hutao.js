window.onload = function() {
    var Openpopup = document.getElementById('UPLeft');
    var PopupUp = document.getElementById('PopupUp');
    var Close = document.getElementById('Close');

    var Openpopup2 = document.getElementById('DOWNLeft');
    var PopupUp2 = document.getElementById('PopupUp2');
    var Close2 = document.getElementById('Close2');

    var Openpopup3 = document.getElementById('UPRight');
    var PopupUp3 = document.getElementById('PopupUp3');
    var Close3 = document.getElementById('Close3');

    var Openpopup4 = document.getElementById('DOWNRight');
    var PopupUp4 = document.getElementById('PopupUp4');
    var Close4 = document.getElementById('Close4');

    var homeLink = document.getElementById('Home');

    // 點擊打開彈出視窗
    Openpopup.addEventListener('click', function() {
        PopupUp.style.display = 'block';
    });

    // 點擊關閉彈出視窗
    Close.addEventListener('click', function() {
        PopupUp.style.display = 'none';
    });

    Openpopup2.addEventListener('click', function() {
        PopupUp2.style.display = 'block';
    });

    // 點擊關閉彈出視窗
    Close2.addEventListener('click', function() {
        PopupUp2.style.display = 'none';
    });

    Openpopup3.addEventListener('click', function() {
        PopupUp3.style.display = 'block';
    });

    // 點擊關閉彈出視窗
    Close3.addEventListener('click', function() {
        PopupUp3.style.display = 'none';
    });

    Openpopup4.addEventListener('click', function() {
        PopupUp4.style.display = 'block';
    })

    // 點擊關閉彈出視窗
    Close4.addEventListener('click', function() {
        PopupUp4.style.display = 'none';
    });

    homeLink.addEventListener('click', function() {
        // 將用戶重定向到指定的網頁
        window.location.href = '../Main.html'; // 將網址替換為你想要跳轉的網頁地址
    });
};