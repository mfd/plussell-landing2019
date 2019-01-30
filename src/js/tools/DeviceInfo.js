/**
 * Device Info
 */

class DeviceInfo {


  static check() {

    // devices (need mobile detect)
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) document.body.classList.add('mobile');
    else $('html').addClass('allowHover');
    window.isTablet = document.body.classList.contains('tablet');
    window.isDesktop = !window.isTablet && !window.isMobile;

    if(window.isDesktop) document.body.classList.add('desktop');

    if(!window.isDesktop) {
      let attachFastClick = require('fastclick');
      attachFastClick(document.body);
    }

    //browsers
    const nua = window.navigator.userAgent.toLowerCase();

    window.isIE = DeviceInfo.getInternetExplorerVersion() !== -1 ? true : false;
      	window.isOpera = ( nua.indexOf('opr/') > -1 ) ? true : false;
      	window.isChrome = !window.isOpera && ( nua.indexOf('chrome') > -1 ) ? true : false;
      	window.isSafari = !window.isOpera && !window.isChrome && ( nua.indexOf('safari') > -1 ) ? true : false;
      	window.isFirefox = ( nua.indexOf('firefox') > -1 ) ? true : false;

      	//retards
      	if (window.isIE)
      		document.body.classList.add('ie');
      	else if (window.isSafari)
      		document.body.classList.add('safari');

  }

  static getInternetExplorerVersion() {

    let rv = -1;
    let re = null;
    let ua = window.navigator.userAgent;

    if (window.navigator.appName === 'Microsoft Internet Explorer') {

      re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
      if (re.exec(ua) !== null) rv = parseFloat( RegExp.$1 );

    } else if (window.navigator.appName === 'Netscape') {

      re = new RegExp('Trident/.*rv:([0-9]{1,}[\.0-9]{0,})');
      if (re.exec(ua) !== null) rv = parseFloat( RegExp.$1 );
    }

    return rv;
  }
}

export default DeviceInfo;
