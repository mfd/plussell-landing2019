export default class Map {
  constructor(view) {
    this.view = view;
    this.opt = JSON.parse(this.view.querySelector('#mapData').innerHTML);
    // this.opt = {
    //    API_KEY: 'AIzaSyC30nnqC_nxh8v5p4jQpZEE2KyZUhl2NLU',
    //    //mapStyle: [{'featureType':'administrative','elementType':'all','stylers':[{'saturation':'-100'}]},{'featureType':'administrative.province','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'landscape','elementType':'all','stylers':[{'saturation':-100},{'lightness':65},{'visibility':'on'}]},{'featureType':'poi','elementType':'all','stylers':[{'saturation':-100},{'lightness':'50'},{'visibility':'simplified'}]},{'featureType':'road','elementType':'all','stylers':[{'saturation':'-100'}]},{'featureType':'road.highway','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'road.arterial','elementType':'all','stylers':[{'lightness':'30'}]},{'featureType':'road.local','elementType':'all','stylers':[{'lightness':'40'}]},{'featureType':'transit','elementType':'all','stylers':[{'saturation':-100},{'visibility':'simplified'}]},{'featureType':'water','elementType':'geometry','stylers':[{'hue':'#ffff00'},{'lightness':-25},{'saturation':-97}]},{'featureType':'water','elementType':'labels','stylers':[{'lightness':-25},{'saturation':-100}]}],
    //    //mapStyle: [{elementType:'geometry',stylers:[{color:'#f5f5f5'}]},{elementType:'labels.icon',stylers:[{visibility:'off'}]},{elementType:'labels.text.fill',stylers:[{color:'#616161'}]},{elementType:'labels.text.stroke',stylers:[{color:'#f5f5f5'}]},{featureType:'administrative.land_parcel',elementType:'labels.text.fill',stylers:[{color:'#bdbdbd'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#eeeeee'}]},{featureType:'poi',elementType:'labels.text.fill',stylers:[{color:'#757575'}]},{featureType:'poi.park',elementType:'geometry',stylers:[{color:'#e5e5e5'}]},{featureType:'poi.park',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]},{featureType:'road',elementType:'geometry',stylers:[{color:'#ffffff'}]},{featureType:'road.arterial',elementType:'labels.text.fill',stylers:[{color:'#757575'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#dadada'}]},{featureType:'road.highway',elementType:'labels.text.fill',stylers:[{color:'#616161'}]},{featureType:'road.local',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]},{featureType:'transit.line',elementType:'geometry',stylers:[{color:'#e5e5e5'}]},{featureType:'transit.station',elementType:'geometry',stylers:[{color:'#eeeeee'}]},{featureType:'water',elementType:'geometry',stylers:[{color:'#c9c9c9'}]},{featureType:'water',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]}],
    //    //silver
    //    //mapStyle: [{'featureType':'administrative','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#fcfcfc'}]},{'featureType':'poi','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#fcfcfc'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#dddddd'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#dddddd'}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#eeeeee'}]},{'featureType':'water','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#dddddd'}]}],
    //    mapStyle: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}],
    //    mapMarkerUrl: '/img/marker.svg'
    //  };
    this.dom = {
      map: this.view.querySelector('#map'),
      locations: this.view
    };
    this.map;
    this.init();
  }

  init() {
    // Fns
    this.loadGmaps();

  }

  loadGmaps() {
    const API_KEY = this.opt.API_KEY;
    if ( !window.googleMapsLoaded ) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.google.com/maps/api/js?key='+API_KEY;
      document.body.appendChild(script);
      script.onload = () => {
        window.googleMapsLoaded = true;
        this.initializeMap();
      };
    } else {
      this.initializeMap();
    }
  }

  initializeMap() {
    let _self = this;
    let zoom = 14;
    if ( window.innerWidth <= 1199 ) {
      zoom = 12;
    }
    let bounds = [];
    const $map = $('#map');
    const center = {lat: 56.8168863, lng: 60.6289419};

    const contactMap = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: zoom,
      disableDefaultUI: true,
      styles : _self.opt.mapStyle
    });

    const markerIcon = {
      url: _self.opt.mapMarkerUrl,
      anchor: new google.maps.Point(30,77),
      scaledSize: new google.maps.Size(70,87)
    };

    const contactMarker = new google.maps.Marker({
      position: center,
      map: contactMap,
      icon: markerIcon
    });

    google.maps.event.addDomListener(window, 'resize', function() {
      contactMap.setCenter(center);
    });

    TweenMax.from($map, 1.6, {opacity:0, ease:Power3.easeOut});



    setTimeout(function() {
      document.getElementById('map').style.opacity = '1';
    }, 650);
  }


  destroy() {
    console.log('destroy map');
  }
}
