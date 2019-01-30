export default class MapStores {
  constructor(view) {
    this.view = view;
    // To fix : loop for each address

    this.opt = {
      API_KEY: 'AIzaSyC30nnqC_nxh8v5p4jQpZEE2KyZUhl2NLU',
      //mapStyle: [{'featureType':'administrative','elementType':'all','stylers':[{'saturation':'-100'}]},{'featureType':'administrative.province','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'landscape','elementType':'all','stylers':[{'saturation':-100},{'lightness':65},{'visibility':'on'}]},{'featureType':'poi','elementType':'all','stylers':[{'saturation':-100},{'lightness':'50'},{'visibility':'simplified'}]},{'featureType':'road','elementType':'all','stylers':[{'saturation':'-100'}]},{'featureType':'road.highway','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'road.arterial','elementType':'all','stylers':[{'lightness':'30'}]},{'featureType':'road.local','elementType':'all','stylers':[{'lightness':'40'}]},{'featureType':'transit','elementType':'all','stylers':[{'saturation':-100},{'visibility':'simplified'}]},{'featureType':'water','elementType':'geometry','stylers':[{'hue':'#ffff00'},{'lightness':-25},{'saturation':-97}]},{'featureType':'water','elementType':'labels','stylers':[{'lightness':-25},{'saturation':-100}]}],
      mapStyle: [{elementType:'geometry',stylers:[{color:'#f5f5f5'}]},{elementType:'labels.icon',stylers:[{visibility:'off'}]},{elementType:'labels.text.fill',stylers:[{color:'#616161'}]},{elementType:'labels.text.stroke',stylers:[{color:'#f5f5f5'}]},{featureType:'administrative.land_parcel',elementType:'labels.text.fill',stylers:[{color:'#bdbdbd'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#eeeeee'}]},{featureType:'poi',elementType:'labels.text.fill',stylers:[{color:'#757575'}]},{featureType:'poi.park',elementType:'geometry',stylers:[{color:'#e5e5e5'}]},{featureType:'poi.park',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]},{featureType:'road',elementType:'geometry',stylers:[{color:'#ffffff'}]},{featureType:'road.arterial',elementType:'labels.text.fill',stylers:[{color:'#757575'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#dadada'}]},{featureType:'road.highway',elementType:'labels.text.fill',stylers:[{color:'#616161'}]},{featureType:'road.local',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]},{featureType:'transit.line',elementType:'geometry',stylers:[{color:'#e5e5e5'}]},{featureType:'transit.station',elementType:'geometry',stylers:[{color:'#eeeeee'}]},{featureType:'water',elementType:'geometry',stylers:[{color:'#c9c9c9'}]},{featureType:'water',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]}],
      //silver
      //mapStyle: [{'featureType':'administrative','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#fcfcfc'}]},{'featureType':'poi','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#fcfcfc'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#dddddd'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#dddddd'}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#eeeeee'}]},{'featureType':'water','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#dddddd'}]}],
      //mapStyle: [{'featureType':'all','elementType':'labels.text.fill','stylers':[{'saturation':36},{'color':'#120d19'}]},{'featureType':'all','elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#ffffff'},{'lightness':16}]},{'featureType':'all','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#fefefe'},{'lightness':20}]},{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#fefefe'},{'lightness':17},{'weight':1.2}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'color':'#efefef'}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#f5f5f5'},{'lightness':21}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#dedede'},{'lightness':21}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#7a7a7a'}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#ffffff'},{'lightness':29},{'weight':0.2}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#7a7a7a'},{'lightness':25}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#7a7a7a'},{'lightness':70}]},{'featureType':'transit','elementType':'geometry','stylers':[{'color':'#f2f2f2'},{'lightness':19}]},{'featureType':'water','elementType':'geometry','stylers':[{'color':'#353535'}]}],
    //mapStyle: [{'featureType':'all','elementType':'geometry','stylers':[{'color':'#ffffff'}]},{'featureType':'all','elementType':'labels.text.fill','stylers':[{'gamma':0.01},{'lightness':20}]},{'featureType':'all','elementType':'labels.text.stroke','stylers':[{'saturation':-31},{'lightness':-33},{'weight':2},{'gamma':0.8}]},{'featureType':'all','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'administrative.locality','elementType':'labels.text.fill','stylers':[{'color':'#050505'}]},{'featureType':'administrative.locality','elementType':'labels.text.stroke','stylers':[{'color':'#fef3f3'},{'weight':'3.01'}]},{'featureType':'administrative.neighborhood','elementType':'labels.text.fill','stylers':[{'color':'#0a0a0a'},{'visibility':'off'}]},{'featureType':'administrative.neighborhood','elementType':'labels.text.stroke','stylers':[{'color':'#fffbfb'},{'weight':'3.01'},{'visibility':'off'}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'lightness':30},{'saturation':30}]},{'featureType':'poi','elementType':'geometry','stylers':[{'saturation':20}]},{'featureType':'poi.attraction','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'lightness':20},{'saturation':-20}]},{'featureType':'road','elementType':'geometry','stylers':[{'lightness':10},{'saturation':-30}]},{'featureType':'road','elementType':'geometry.stroke','stylers':[{'saturation':25},{'lightness':25}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#a1a1a1'}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#292929'}]},{'featureType':'road.highway','elementType':'labels.text.fill','stylers':[{'visibility':'on'},{'color':'#202020'}]},{'featureType':'road.highway','elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#ffffff'}]},{'featureType':'road.highway','elementType':'labels.icon','stylers':[{'visibility':'simplified'},{'hue':'#0006ff'},{'saturation':'-100'},{'lightness':'13'},{'gamma':'0.00'}]},{'featureType':'road.arterial','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#686868'}]},{'featureType':'road.arterial','elementType':'geometry.stroke','stylers':[{'visibility':'off'},{'color':'#8d8d8d'}]},{'featureType':'road.arterial','elementType':'labels.text.fill','stylers':[{'visibility':'on'},{'color':'#353535'},{'lightness':'6'}]},{'featureType':'road.arterial','elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#ffffff'},{'weight':'3.45'}]},{'featureType':'road.local','elementType':'geometry.fill','stylers':[{'color':'#d0d0d0'}]},{'featureType':'road.local','elementType':'geometry.stroke','stylers':[{'lightness':'2'},{'visibility':'on'},{'color':'#999898'}]},{'featureType':'road.local','elementType':'labels.text.fill','stylers':[{'color':'#383838'}]},{'featureType':'road.local','elementType':'labels.text.stroke','stylers':[{'color':'#faf8f8'}]},{'featureType':'water','elementType':'all','stylers':[{'lightness':-20}]}],
    //mapStyle: [{'featureType':'water','elementType':'geometry','stylers':[{'color':'#e9e9e9'},{'lightness':17}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'color':'#f5f5f5'},{'lightness':20}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#ffffff'},{'lightness':17}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#ffffff'},{'lightness':29},{'weight':0.2}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#ffffff'},{'lightness':18}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#ffffff'},{'lightness':16}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#f5f5f5'},{'lightness':21}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#dedede'},{'lightness':21}]},{'elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#ffffff'},{'lightness':16}]},{'elementType':'labels.text.fill','stylers':[{'saturation':36},{'color':'#333333'},{'lightness':40}]},{'elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'geometry','stylers':[{'color':'#f2f2f2'},{'lightness':19}]},{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#fefefe'},{'lightness':20}]},{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#fefefe'},{'lightness':17},{'weight':1.2}]}]
    };
    this.dom = {
      stores: this.view.querySelectorAll('.store-city__item'),
      locations: this.view.querySelectorAll('.store-city__item')
    };
    this.map;
    this.init();
    this.binds();
  }

  init() {

    if ( this.dom.locations.length > 0 ) {
      this.centerMap = this.dom.locations[0].getAttribute('data-latlng').split(',').map(Number);
      // Fns
      this.loadGmaps();
    }

    this.listStores();


  }
  binds() {

  }

  listStores() {
    $('.b-stores').height($('#gmap').height()-100);
    this.listStoresBlock = new PerfectScrollbar('.b-stores');

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
    let zoom = 2;
    let $style = this.opt.mapStyle;
    if ( window.innerWidth <= 1199 ) {
      zoom = 6;
    }
    let bounds = [];
    this.map = new GMaps({
      el: document.getElementById('gmap'),
      center: { lat: this.centerMap[0], lng: this.centerMap[1] },
      zoom: zoom,
      // scrollwheel: false,
      // scrollwheel: false,
      streetViewControl: false,
      // zoomControl: false,
      mapTypeControl: false,
      // scaleControl: false,
      rotateControl: false,
      // fullscreenControl: false,
      // scrollwheel: false,
      draggable: true,
      styles: $style,
      markerClusterer: function(map) {
        let options = {
          gridSize: 40,
          maxZoom: 14,
          styles: [{
            url: 'https://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png',
            height: 56,
            width: 56,
            anchor: [0, 0],
            //textColor: '#ffffff',
            //textSize: 10,
            iconAnchor: [15, 48]
          }]
        };
        return new MarkerClusterer(map, [], options);
      }
    });

    this.drawMap();

    setTimeout(function() {
      document.getElementById('gmap').style.opacity = '1';
    }, 650);
  }

  drawMap() {
    let selfMap = this.map;
    let elems = this.dom.stores;
    let markers_data = [];
    for ( let i = 0; i < elems.length; i++ ) {
      let mrk = {
        name: elems[i].querySelector('.store-city__name').textContent,
        //'address': elems[i].getAttribute('data-addr'),
        address: elems[i].querySelector('.store-city__addr').innerHTML,
        lat: elems[i].getAttribute('data-latlng').split(',').map(Number)[0],
        lng: elems[i].getAttribute('data-latlng').split(',').map(Number)[1],
        city: elems[i].getAttribute('data-select'),//city 24/07/18
        icon : {

          //url: '/img/map-marker.png', // url
          url: 'https://mfd.github.io/mdrt/img/marker-svg.png', // url
          scaledSize: new google.maps.Size(50, 50), // scaled size
        },
        infoWindow: {
          content: elems[i].querySelector('.store-city__name').textContent
        },
        mouseover: function() {
          this.infoWindow.open(this.map, this);
        },
        mouseout: function() {
          this.infoWindow.close();
        },
        click: function(e) {
          window.open('https://www.google.com/maps/place/'+latlng[0]+','+latlng[1]+'', '_blank');
        }
      };
      if (elems[i].getAttribute('data-latlng')) {
        markers_data.push(mrk);
      };
    };
    this.map.addMarkers(markers_data);
    this.map.fitLatLngBounds(markers_data);
    debugger;
    console.log('map', this.map);

    $(document).on('click', '.store-city__item', function(e) {

      var position, lat, lng, $index;
      // debugger;
      $index = $(this).data('marker-index');

      //position = map.markers[$index].getPosition();

      //lat = position.lat();
      //lng = position.lng();
      lat = this.getAttribute('data-latlng').split(',').map(Number)[0];
      lng = this.getAttribute('data-latlng').split(',').map(Number)[1];

      selfMap.setCenter(lat, lng);
      selfMap.setZoom(15);
      e.preventDefault();
    });

  
    $(document).on('change', '.select-store select', function() {
      var val = this.value;
      console.log('val', val);
      if (val !== '0') {
        for (let i = 0; i < markers_data.length; i++) {         
          let marker = markers_data[i];
      
          if(marker.city === val) {
            selfMap.setCenter(marker.lat, marker.lng);
            selfMap.setZoom(12);
            //marker.setVisible(true);
          }
        }   
      } else {
        selfMap.setZoom(4);
      }
    });
  

    
  }
  destroy() {
    console.log('destroy map');
  }
}
