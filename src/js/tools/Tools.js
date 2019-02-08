/**
 * Tools
 */

class Tools {

  static getScrollTop() {
    return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
  }

  static scrollTo( x, y ) {
    window.scrollTo(x,y);
  }

  /**
	 * Arrayify
	 * convert a node collection to a regular array
	 */
  static arrayify( nodeCollection ) {

    return Array.from( nodeCollection );
  }

  /**
	 * Suffle Array
	 * returns a suffled version of the original array
	 */
  static shuffleArray(o) {
    	for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
  }

  /**
	 * Get Global Height
	 * returns the global height of the current page
	 */
  static getGlobalHeight() {

    const body = document.body;
    const html = document.documentElement;

    return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  }

  /**
	 * Get Params
	 * returns an object of parameters set in the current url
	 */
  static getParams() {

    let queryString = {};
    let query = window.location.search.substring(1);
    let vars = query.split('&');

    for (let i=0;i<vars.length;i++) {
		  var pair = vars[i].split('=');

		  if (typeof queryString[pair[0]] === 'undefined') {
		      queryString[pair[0]] = pair[1];

		  } else if (typeof queryString[pair[0]] === 'string') {
		      var arr = [ queryString[pair[0]], pair[1] ];
		      queryString[pair[0]] = arr;

		  } else {
		      queryString[pair[0]].push(pair[1]);
		  }
    }

    return queryString;
  }

  static getInnerHeight( element ) {

    const styles = window.getComputedStyle(element);

    return element.clientHeight - parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);

  }

  static getRemainingTime( upcoming ) {

    const time = {h:0,m:0,s:0};

    let remainingTime = ( upcoming - window.timestamp ) / 1000;

    if( remainingTime > 0 ) {

      const h = ( remainingTime / 3600 ) >> 0;
      remainingTime -= h * 3600;
      const m = ( remainingTime / 60 ) >> 0;
      remainingTime -= m * 60;

      time.h = h;
      time.m = m;
      time.s = remainingTime;
    }


    return time;

  }


  static getOffsetTop( elem ) {

    var offsetTop = 0;

    do {
      if ( !isNaN( elem.offsetTop ) ) {
        offsetTop += elem.offsetTop;
      }
    } while( elem = elem.offsetParent );

    return offsetTop;

  }

}

export default Tools;
