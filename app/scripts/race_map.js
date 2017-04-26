/**
 * Created by marek on 01/30/2017.
 */

var colorMap = ['#000000', '#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#ffff00', '#bfff00', '#00ffbf', '#00ffff', '#00bfff',
  '#0080ff', '#0000ff', '#8000ff', '#bf00ff', '#ff00bf', '#ff0040', '#ff0000', '#936c6c', '#867979', '#808080', '#ff0000', '#00ff00', '#000110'];
var locations = [
  {
    "t": 0,
    "lat": 50.79297,
    "lng": 15.76967,
    "s": 0
  },
  {
    "t": 184,
    "lat": 50.79212,
    "lng": 15.76679,
    "s": 232
  },
  {
    "t": 386,
    "lat": 50.79198,
    "lng": 15.76324,
    "s": 517
  },
  {
    "t": 570,
    "lat": 50.79147,
    "lng": 15.76129,
    "s": 734
  },
  {
    "t": 758,
    "lat": 50.78947,
    "lng": 15.76033,
    "s": 974
  },
  {
    "t": 935,
    "lat": 50.78728,
    "lng": 15.75982,
    "s": 1220
  },
  {
    "t": 1128,
    "lat": 50.78538,
    "lng": 15.76114,
    "s": 1465
  },
  {
    "t": 1318,
    "lat": 50.78361,
    "lng": 15.7627,
    "s": 1698
  },
  {
    "t": 1526,
    "lat": 50.78259,
    "lng": 15.76138,
    "s": 1865
  },
  {
    "t": 1739,
    "lat": 50.78283,
    "lng": 15.75811,
    "s": 2135
  },
  {
    "t": 1918,
    "lat": 50.78347,
    "lng": 15.75552,
    "s": 2368
  },
  {
    "t": 2114,
    "lat": 50.78206,
    "lng": 15.75542,
    "s": 2602
  },
  {
    "t": 2304,
    "lat": 50.78209,
    "lng": 15.75265,
    "s": 2849
  },
  {
    "t": 2498,
    "lat": 50.78196,
    "lng": 15.74999,
    "s": 3043
  },
  {
    "t": 2696,
    "lat": 50.78114,
    "lng": 15.74728,
    "s": 3257
  },
  {
    "t": 2890,
    "lat": 50.7814,
    "lng": 15.74415,
    "s": 3484
  }
];


/**
 * Make a X-Domain request to url and callback.
 *
 * @param url {String}
 * @param method {String} HTTP verb ('GET', 'POST', 'DELETE', etc.)
 * @param data {String} request body
 * @param callback {Function} to callback on completion
 * @param errback {Function} to callback on error
 */
function xdr(url, method, data, callback, errback) {
  var req;

  if(XMLHttpRequest) {
    req = new XMLHttpRequest();

    if('withCredentials' in req) {
      req.open(method, url, true);
      req.onerror = errback;
      req.onreadystatechange = function() {
        if (req.readyState === 4) {
          if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
          } else {
            errback(new Error('Response returned with non-OK status'));
          }
        }
      };
      req.send(data);
    }
  } else if(XDomainRequest) {
    req = new XDomainRequest();
    req.open(method, url);
    req.onerror = errback;
    req.onload = function() {
      callback(req.responseText);
    };
    req.send(data);
  } else {
    errback(new Error('CORS not supported'));
  }
}

class RaceMap {
  /**
   * @param {$} $element - plugin container
   * @param {Object} opts - plugin options
   * @property {$} $ - jquery element
   * @property {Object} opts - plugin options
   */
  constructor($element, opts = null) {
    if (typeof $ === 'undefined') {
      console.warn('Please load jQuery before RaceMap');
      return;
    }

    this.$element = $element;
    this.$ = $;

    const defaults = {
      mapSelector: '#map',
      mapOpts: {
        scrollwheel: false,
        zoom: 15,
        mapTypeId: 'terrain',
        disableDefaultUI: true
      }
    };

    if (opts === null || typeof opts === 'undefined' || this.$.isEmptyObject(opts)) {
      opts = defaults;
    } else {
      opts = this.$.extend(true, defaults, opts);
    }
    this.opts = opts;

    this.init();
  }

  init() {
    this.setMapContainerHeight();
    this.Map = null;
    this.acriveSpeed = 100;
    this.interval = null;
    this.locations = locations;
    this.createCustomInterval();
    this.initMapContainer()
  }

  createCustomInterval() {
    //override the default window.setInterval() function
    window.setMyInterval = (func) => {
      //window.setInterval.count is used to assign a unique intervalId to each interval created
      //these IDs are used by the custom clearInterval() function
      var intervalId = window.setMyInterval.count ? ++window.setMyInterval.count : window.setMyInterval.count = 1;
      //store the arguments as a local variable so they can be used inside other functions
      var args = arguments;
      //create a property on the window.setInterval object for the current intervalId
      //this property will be a function that is called recursively with setTimeout()
      window.setMyInterval[intervalId] = () => {
        //check if the current interval is still active
        //this will be true unless clearInterval() has been called on this interval
        if (window.setMyInterval[intervalId].active) {
          //handle all three possible cases of arguments passed to setInterval
          //if a string is passed instead of a function, use eval() to run the string
          if (typeof func == "string") {
            eval(func);
          }
          //if arguments for the function are passed in addition to the function and time delay
          //call the function with the specified arguments
          else if (args.length > 2) {
            //the apply() method allows passing an array as different arguments to a function
            //create an array out of the original arguments after the time delay argument, and pass that array to apply()
            func.apply(this, Array.prototype.slice.call(args, 2));
          }
          //if neither special case applies, call the function directly
          else {
            func();
          }
          //call this function again after the specified time delay has passed
          setTimeout(window.setMyInterval[intervalId], this.acriveSpeed);
        }
      };
      //set the current interval to active
      window.setMyInterval[intervalId].active = true;
      //call the current interval after the specified time delay
      setTimeout(window.setMyInterval[intervalId], this.acriveSpeed);
      //return an object with the current intervalId, use it to clear this interval using clearInterval()
      return {intervalId: intervalId};
    };
//override the default clearInterval() function so it works with the custom setInterval()
    window.clearMyInterval = function (obj, active = false) {
      //set the active status of the interval associated with the passed object to false
      window.setMyInterval[obj.intervalId].active = active;
      if (active) {
        window.setMyInterval[obj.intervalId]();
      }
    }
  }


  /**
   * Initialize map container and add to MAP height as container height
   */
  setMapContainerHeight() {
    this.$mapSelector = this.$element.find(this.opts.mapSelector);
    // this.$mapSelector.css({height: this.$element.height()});
  }

  initMapContainer() {
    let checkMap = setInterval(() => {
      if (typeof google !== 'undefined' && typeof $ !== 'undefined') {
        clearInterval(checkMap);
        this.initControls();



        let data = new FormData();
        data.append('competition', 2);
        data.append('player', 2);
        // data.append('ago', 30000);
        // data.append('frequency', 10);

        xdr('http://tomaszd.usermd.net/api/coordinates', 'POST', data, (el) => {
          // do something to response
          this.locations = JSON.parse(el);
          this.animateWalk()
        }, (el) => {
          // do something to response
          console.log(el);
        })



        // $.get('/scripts/json/sample_10000.json', (data) => {
        //   this.locations = data.locations;
        //   this.animateWalk()
        // });

      }
    }, 200);
  }

  initControls() {
    // this.$controls = $('#map-controls_buttons');
    // this.$speedControls = this.$controls.find('[data-speed]');
    // this.acriveSpeed = this.$speedControls.siblings('.is-active').data('speed');
    // this.$restartControls = this.$speedControls.siblings('.restart');
    // this.$stopControls = this.$speedControls.siblings('.stop');
    // this.$speedControls.on('click', (el) => {
    //   let $target = $(el.currentTarget);
    //   this.$speedControls.removeClass('is-active');
    //   $target.addClass('is-active');
    //   this.acriveSpeed = $target.data('speed');
    // });
    // this.$restartControls.on('click', () => {
    //   if (this.interval) {
    //     clearMyInterval(this.interval);
    //     this.$stopControls[0].innerHTML = 'stop';
    //   }
    //   this.animateWalk();
    // });
    // this.$stopControls.on('click', (el) => {
    //   let target = el.currentTarget;
    //   if (this.interval && target.innerHTML === 'stop') {
    //     clearMyInterval(this.interval);
    //     target.innerHTML = 'start';
    //   } else {
    //     clearMyInterval(this.interval, true);
    //     target.innerHTML = 'stop';
    //   }
    // })
  }

  animateWalk() {
    this.Map = new google.maps.Map(document.getElementById('map'), {
      scrollwheel: false,
      zoom: 15,
      center: {"lat": 51.734688, "lng": 19.472734},
      mapTypeId: 'terrain',
      disableDefaultUI: true,
      draggable: false,
      zoomControl: false,
      disableDoubleClickZoom: true
    });

    let inc = 1;
    let end = this.locations.length;

    let newArr = {};
    for(let item of this.locations){
      newArr[item.t] = {lat: item.lt, lng: item.lg};
    }


    //START 1492753159285 ENDS 1493099948554

    console.log(newArr);


    this.interval = setMyInterval(() => {
      if (inc < end) {
        // var bounds = new google.maps.LatLngBounds();
        let path = [{
          lat: this.locations[inc - 1].lt,
          lng: this.locations[inc - 1].lg
        }, {lat: this.locations[inc].lt, lng: this.locations[inc].lg}];

        var movePath = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: colorMap[1],
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        movePath.setMap(this.Map);
        // this.Map.setCenter(bounds.getCenter());
        // this.Map.fitBounds(bounds);
        // if(this.Map.getZoom()> 15){
        //   this.Map.setZoom(15);
        // } else {
        //   this.Map.setZoom(this.Map.getZoom()-3);
        // }
        // this.Map.fitBounds(bounds);
        // this.Map.setZoom(this.Map.getZoom()-3);
        this.Map.setCenter(new google.maps.LatLng(this.locations[inc].lt, this.locations[inc].lg));
        inc++;
      } else {
        clearMyInterval(this.interval);
      }

      //STOP
      // clearMyInterval(this.interval);
    });

  }

  initMap() {
    this.Map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: {lat: 0, lng: -180},
      mapTypeId: 'terrain'
    });


    var sailingOpts = {
      sailor_1: {
        strokeColor: '#FF0000',
        coordinates: [
          {lat: 37.772, lng: -122.214},
          {lat: 21.291, lng: -157.821},
          {lat: -18.444, lng: 178.444},
          {lat: -27.467, lng: 153.027}
        ]
      },
      sailor_2: {
        strokeColor: '#00FF00',
        coordinates: [
          {lat: 37.772, lng: -122.214},
          {lat: 20.291, lng: -156.821},
          {lat: -17.142, lng: 172.431},
          {lat: -27.467, lng: 153.027}
        ]
      },
      sailor_3: {
        strokeColor: '#ee4f58',
        coordinates: [
          {lat: 37.772, lng: -122.214},
          {lat: 21.24, lng: -153.821},
          {lat: 20.241, lng: -160.841},
          {lat: -18.142, lng: 174.431},
          {lat: -27.467, lng: 153.027}
        ]
      },
      sailor_4: {
        strokeColor: '#FF22FF',
        coordinates: [
          {lat: 37.772, lng: -122.214},
          {lat: 20.231, lng: -160.83},
          {lat: -17.232, lng: 172.221},
          {lat: -27.467, lng: 153.027}
        ]
      },
      sailor_5: {
        strokeColor: '#000000',
        coordinates: [
          {lat: 37.772, lng: -122.214},
          {lat: 20.291, lng: -160.821},
          {lat: -27.467, lng: 153.027}
        ]
      },
      sailor_6: {
        strokeColor: '#fa8072',
        coordinates: [
          {lat: 37.772, lng: -122.214},
          {lat: 21.231, lng: -153.83},
          {lat: -18.142, lng: 174.431},
          {lat: -27.467, lng: 153.027}
        ]
      },
    };

    for (var item in sailingOpts) {
      var sailingPath = new google.maps.Polyline({
        path: sailingOpts[item].coordinates,
        geodesic: true,
        strokeColor: sailingOpts[item].strokeColor,
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      sailingPath.setMap(this.Map);
    }
  }
}

new RaceMap($('#tracking-map'));
