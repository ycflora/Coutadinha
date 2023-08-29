var map = L.map('map', {
    center:[38.745371, -8.937826],
    zoom: 16,
});

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
  maxZoom: 20,
  minZoom: 10,
  subdomains:['mt0','mt1','mt2','mt3'],
  attribution:'&copy <a href="https://www.google.com/maps/about/#!/" title="Google Maps - Hybrid Image"> Google Maps</a> - Hybrid Image'
}).addTo(map);

var project_area = new L.GeoJSON(limite,{
    weight: 3.0,
    color: 'red',
    fillColor: 'none'
  }).addTo(map);

var trimble = [];
var tree = L.geoJson(sobreiros,{
  onEachFeature: function (feature, layer){
    trimble.push([feature.geometry.coordinates[1], feature.geometry.coordinates[0]])
  }
});
var tree_project = L.heatLayer(trimble,{
  radius: 10,
  max:0.2,
}).addTo(map);