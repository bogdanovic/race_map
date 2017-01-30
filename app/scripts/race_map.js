/**
 * Created by marek on 01/30/2017.
 */
var shift = [0.00002, 0.00004, 0.00006, 0.00008, 0.0001, 0.00012, 0.00014, 0.00016, 0.00017, 0.00018, 0.0002,
  -0.00002, -0.00004, -0.00006, -0.00008, -0.0001, -0.00012, -0.00014, -0.00016, -0.00017, -0.00018, -0.0002];
var colorMap = ['#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#ffff00', '#bfff00', '#00ffbf', '#00ffff', '#00bfff',
  '#0080ff', '#0000ff', '#8000ff', '#bf00ff', '#ff00bf', '#ff0040', '#ff0000', '#936c6c', '#867979', '#808080', '#ff0000', '#00ff00', '#000000'];
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
  },
  {
    "t": 3061,
    "lat": 50.78164,
    "lng": 15.7414,
    "s": 3681
  },
  {
    "t": 3279,
    "lat": 50.78175,
    "lng": 15.73882,
    "s": 3867
  },
  {
    "t": 3468,
    "lat": 50.78044,
    "lng": 15.73653,
    "s": 4091
  },
  {
    "t": 3711,
    "lat": 50.78002,
    "lng": 15.73546,
    "s": 4199
  },
  {
    "t": 3913,
    "lat": 50.78027,
    "lng": 15.73298,
    "s": 4401
  },
  {
    "t": 4092,
    "lat": 50.78002,
    "lng": 15.73108,
    "s": 4558
  },
  {
    "t": 4269,
    "lat": 50.77961,
    "lng": 15.72802,
    "s": 4804
  },
  {
    "t": 4498,
    "lat": 50.77908,
    "lng": 15.72605,
    "s": 4965
  },
  {
    "t": 4700,
    "lat": 50.77833,
    "lng": 15.72602,
    "s": 5099
  },
  {
    "t": 5135,
    "lat": 50.77771,
    "lng": 15.7264,
    "s": 5247
  },
  {
    "t": 5344,
    "lat": 50.77797,
    "lng": 15.72536,
    "s": 5398
  },
  {
    "t": 5638,
    "lat": 50.77715,
    "lng": 15.72395,
    "s": 5553
  },
  {
    "t": 5817,
    "lat": 50.77722,
    "lng": 15.72394,
    "s": 5660
  },
  {
    "t": 5999,
    "lat": 50.77742,
    "lng": 15.72352,
    "s": 5722
  },
  {
    "t": 6200,
    "lat": 50.77753,
    "lng": 15.72127,
    "s": 5949
  },
  {
    "t": 6399,
    "lat": 50.77646,
    "lng": 15.71895,
    "s": 6159
  },
  {
    "t": 6595,
    "lat": 50.7755,
    "lng": 15.71619,
    "s": 6391
  },
  {
    "t": 6777,
    "lat": 50.77369,
    "lng": 15.71462,
    "s": 6635
  },
  {
    "t": 6965,
    "lat": 50.77161,
    "lng": 15.71468,
    "s": 6868
  },
  {
    "t": 7153,
    "lat": 50.76967,
    "lng": 15.71344,
    "s": 7115
  },
  {
    "t": 7557,
    "lat": 50.76884,
    "lng": 15.71153,
    "s": 7285
  },
  {
    "t": 7759,
    "lat": 50.76777,
    "lng": 15.70952,
    "s": 7485
  },
  {
    "t": 7960,
    "lat": 50.76631,
    "lng": 15.70723,
    "s": 7725
  },
  {
    "t": 8160,
    "lat": 50.76499,
    "lng": 15.70467,
    "s": 7962
  },
  {
    "t": 8363,
    "lat": 50.76298,
    "lng": 15.70448,
    "s": 8190
  },
  {
    "t": 8558,
    "lat": 50.76085,
    "lng": 15.70428,
    "s": 8432
  },
  {
    "t": 8754,
    "lat": 50.75897,
    "lng": 15.70386,
    "s": 8648
  },
  {
    "t": 8943,
    "lat": 50.75889,
    "lng": 15.704,
    "s": 8675
  },
  {
    "t": 9567,
    "lat": 50.75893,
    "lng": 15.70392,
    "s": 8703
  },
  {
    "t": 9978,
    "lat": 50.75775,
    "lng": 15.70294,
    "s": 8854
  },
  {
    "t": 10160,
    "lat": 50.75616,
    "lng": 15.70299,
    "s": 9039
  },
  {
    "t": 10339,
    "lat": 50.75527,
    "lng": 15.70264,
    "s": 9164
  },
  {
    "t": 10528,
    "lat": 50.75553,
    "lng": 15.70223,
    "s": 9245
  },
  {
    "t": 10712,
    "lat": 50.7546,
    "lng": 15.7008,
    "s": 9414
  },
  {
    "t": 10908,
    "lat": 50.75344,
    "lng": 15.69948,
    "s": 9578
  },
  {
    "t": 11098,
    "lat": 50.75219,
    "lng": 15.69944,
    "s": 9724
  },
  {
    "t": 11295,
    "lat": 50.7511,
    "lng": 15.69949,
    "s": 9865
  },
  {
    "t": 11495,
    "lat": 50.74968,
    "lng": 15.70027,
    "s": 10055
  },
  {
    "t": 11679,
    "lat": 50.74896,
    "lng": 15.70252,
    "s": 10249
  },
  {
    "t": 12822,
    "lat": 50.74916,
    "lng": 15.70217,
    "s": 10326
  },
  {
    "t": 14483,
    "lat": 50.74895,
    "lng": 15.70263,
    "s": 10392
  },
  {
    "t": 17191,
    "lat": 50.74973,
    "lng": 15.70207,
    "s": 10504
  },
  {
    "t": 17378,
    "lat": 50.75151,
    "lng": 15.7034,
    "s": 10734
  },
  {
    "t": 17556,
    "lat": 50.75348,
    "lng": 15.70462,
    "s": 10976
  },
  {
    "t": 17747,
    "lat": 50.75553,
    "lng": 15.70413,
    "s": 11224
  },
  {
    "t": 17947,
    "lat": 50.75735,
    "lng": 15.70499,
    "s": 11449
  },
  {
    "t": 18137,
    "lat": 50.75931,
    "lng": 15.70408,
    "s": 11680
  },
  {
    "t": 18323,
    "lat": 50.7615,
    "lng": 15.70426,
    "s": 11927
  },
  {
    "t": 18510,
    "lat": 50.76367,
    "lng": 15.70481,
    "s": 12175
  },
  {
    "t": 18700,
    "lat": 50.76534,
    "lng": 15.70522,
    "s": 12381
  },
  {
    "t": 18895,
    "lat": 50.76637,
    "lng": 15.70803,
    "s": 12621
  },
  {
    "t": 19097,
    "lat": 50.76625,
    "lng": 15.71103,
    "s": 12838
  },
  {
    "t": 19299,
    "lat": 50.76665,
    "lng": 15.7138,
    "s": 13045
  },
  {
    "t": 19509,
    "lat": 50.767,
    "lng": 15.71466,
    "s": 13160
  },
  {
    "t": 19709,
    "lat": 50.76849,
    "lng": 15.71618,
    "s": 13371
  },
  {
    "t": 19907,
    "lat": 50.7689,
    "lng": 15.7192,
    "s": 13594
  },
  {
    "t": 20087,
    "lat": 50.76924,
    "lng": 15.72217,
    "s": 13811
  },
  {
    "t": 20298,
    "lat": 50.7692,
    "lng": 15.72394,
    "s": 13943
  },
  {
    "t": 20482,
    "lat": 50.7695,
    "lng": 15.72738,
    "s": 14191
  },
  {
    "t": 20680,
    "lat": 50.76965,
    "lng": 15.72907,
    "s": 14329
  },
  {
    "t": 20878,
    "lat": 50.76935,
    "lng": 15.73001,
    "s": 14496
  },
  {
    "t": 21057,
    "lat": 50.77022,
    "lng": 15.73323,
    "s": 14745
  },
  {
    "t": 21242,
    "lat": 50.77147,
    "lng": 15.73609,
    "s": 14993
  },
  {
    "t": 21421,
    "lat": 50.77294,
    "lng": 15.73846,
    "s": 15230
  },
  {
    "t": 21607,
    "lat": 50.77401,
    "lng": 15.73935,
    "s": 15370
  },
  {
    "t": 21786,
    "lat": 50.77563,
    "lng": 15.74172,
    "s": 15620
  },
  {
    "t": 21950,
    "lat": 50.77583,
    "lng": 15.74481,
    "s": 15871
  },
  {
    "t": 22117,
    "lat": 50.77445,
    "lng": 15.74732,
    "s": 16113
  },
  {
    "t": 22295,
    "lat": 50.77417,
    "lng": 15.75047,
    "s": 16352
  },
  {
    "t": 22475,
    "lat": 50.77477,
    "lng": 15.75373,
    "s": 16600
  },
  {
    "t": 22655,
    "lat": 50.7754,
    "lng": 15.75651,
    "s": 16819
  },
  {
    "t": 22848,
    "lat": 50.77594,
    "lng": 15.75967,
    "s": 17056
  },
  {
    "t": 23023,
    "lat": 50.77785,
    "lng": 15.76146,
    "s": 17308
  },
  {
    "t": 23196,
    "lat": 50.77993,
    "lng": 15.76281,
    "s": 17562
  },
  {
    "t": 23377,
    "lat": 50.78218,
    "lng": 15.7633,
    "s": 17817
  },
  {
    "t": 23552,
    "lat": 50.78433,
    "lng": 15.76244,
    "s": 18068
  },
  {
    "t": 23727,
    "lat": 50.78608,
    "lng": 15.7603,
    "s": 18317
  },
  {
    "t": 24318,
    "lat": 50.78593,
    "lng": 15.76007,
    "s": 18472
  },
  {
    "t": 24525,
    "lat": 50.78581,
    "lng": 15.75992,
    "s": 18581
  },
  {
    "t": 24722,
    "lat": 50.7874,
    "lng": 15.75976,
    "s": 18785
  },
  {
    "t": 24891,
    "lat": 50.78957,
    "lng": 15.76029,
    "s": 19032
  },
  {
    "t": 25068,
    "lat": 50.79163,
    "lng": 15.76139,
    "s": 19278
  },
  {
    "t": 25244,
    "lat": 50.7918,
    "lng": 15.76393,
    "s": 19523
  },
  {
    "t": 25418,
    "lat": 50.7921,
    "lng": 15.7673,
    "s": 19773
  },
  {
    "t": 25588,
    "lat": 50.79326,
    "lng": 15.77031,
    "s": 20028
  },
  {
    "t": 27299,
    "lat": 50.79457,
    "lng": 15.7703,
    "s": 20186
  }
];

class RaceMap {
  constructor(){
    this.Map = null;
    this.acriveSpeed = 1000;
    this.interval = null;
    this.createCustomInterval();
    this.init()
  }

  createCustomInterval(){
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
      if(active){
        window.setMyInterval[obj.intervalId]();
      }
    }
  }
  
  init(){
    let checkMap = setInterval(() => {
      if(typeof google != 'undefined' && typeof $ != 'undefined'){
        clearInterval(checkMap);
        this.initControls();
        this.animateWalk()
      }
    }, 200);
  }

  initControls(){
    this.$controls = $('#map-controls_buttons');
    this.$speedControls = this.$controls.find('[data-speed]');
    this.acriveSpeed = this.$speedControls.siblings('.is-active').data('speed');
    this.$restartControls = this.$speedControls.siblings('.restart');
    this.$stopControls = this.$speedControls.siblings('.stop');
    this.$speedControls.on('click', (el) => {
      let $target = $(el.currentTarget);
      this.$speedControls.removeClass('is-active');
      $target.addClass('is-active');
      this.acriveSpeed = $target.data('speed');
    });
    this.$restartControls.on('click', () => {
      if(this.interval){
        clearMyInterval(this.interval);
        this.$stopControls[0].innerHTML = 'stop';
      }
      this.animateWalk();
    });
    this.$stopControls.on('click', (el) => {
      let target = el.currentTarget;
      if(this.interval && target.innerHTML === 'stop'){
        clearMyInterval(this.interval);
        target.innerHTML = 'start';
      } else {
        clearMyInterval(this.interval, true);
        target.innerHTML = 'stop';
      }
    })
  }

  animateWalk(){
    this.Map = new google.maps.Map(document.getElementById('map'), {
      scrollwheel: false,
      zoom: 13,
      center: {"lat": 50.774026666666664, "lng": 15.733386666666666},
      mapTypeId: 'terrain'
    });

    let inc = 1;
    let end = locations.length;

    console.log('shift', shift.length);
    console.log('colorMap', colorMap.length);
    
    for(let item of shift){
      console.log(item);
    }

    this.interval = setMyInterval(() => {
      if(inc < end){
        var movePath = new google.maps.Polyline({
          path: [locations[inc-1], locations[inc]],
          geodesic: true,
          strokeColor: '#ee4f58',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        movePath.setMap(this.Map);
        // this.Map.setCenter(new google.maps.LatLng(locations[inc].lat, locations[inc].lng));
        inc++;
      } else{
        clearMyInterval(this.interval);
      }
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

new RaceMap();

function loadXMLDoc() {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for older browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
        this.responseText;
    }
  };
  xmlhttp.open("GET", "xmlhttp_info.txt", true);
  xmlhttp.send();
}
