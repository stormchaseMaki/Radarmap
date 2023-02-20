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

            var overlay = L.imageLayer ("http://vrijeme.hr/bilogora-stat.png",
                                 
                                    center: [45.75, 16.35],
                                    opacity: 0.5,
                                  
                                ).addTo(map_35e7b192f95e41ce860f860043f86c3b);
