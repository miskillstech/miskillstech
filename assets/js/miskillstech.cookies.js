(function () {

    var cookieDiv = document.getElementById('cookies')
    , cookieBtn = document.getElementById('miskillstechCookieButton')
    , cookieAccept = function () {

      localStorage['miskillstechCookieAccept'] = true;
      toggleCookieAlert();
    }
    , toggleCookieAlert = function () {

      if (!localStorage['miskillstechCookieAccept']) {

        cookieDiv.style.display = 'initial';
      } else {

        cookieDiv.style.display = 'none';
      }
    };

    cookieBtn.onclick = function () {

      cookieAccept();
    };

    toggleCookieAlert();
  }());
