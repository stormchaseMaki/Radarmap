var map_35e7b192f95e41ce860f860043f86c3b = L.map(
                "map_35e7b192f95e41ce860f860043f86c3b",
                {
                    center: [45.75, 16.35],
                    crs: L.CRS.EPSG3857,
                    zoom: 9,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );
    
            var tile_layer_6ce7230faae94d6e9c2d3319d024eb2c = L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_35e7b192f95e41ce860f860043f86c3b);
    
function addOverlayToMap() {

  // Step 2: get an overlay image
  let overlayImage = new Image();
  overlayImage.src = 'http://vrijeme.hr/bilogora-stat.png';

  // Step 3: create an overlay object and add it to the map
  let overlay = new H.map.Overlay(
    new H.geo.Rect(
      47.58538, 14.58574,
      44.11894, 19.23499
    ),
    overlayImage,
    {
      volatility: true,
      opacity: 0.7
    }
  );

  map_35e7b192f95e41ce860f860043f86c3b.addObject(overlay);

}

addOverlayToMap();
