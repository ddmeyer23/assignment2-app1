require(["esri/config","esri/Map", "esri/views/MapView","esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery", "esri/layers/FeatureLayer", "esri/WebMap"], 
      
        function (esriConfig,Map, MapView,BasemapToggle, BasemapGallery, FeatureLayer, WebMap){
  
  var webmap = new WebMap({
    portalItem: {// autocasts new PortalItem()
      id: "a45fe02721f84bf58f28e74c9771bfc5"
    }
  });
  
  //setting the webmap instance to the map property in a mapview//
  var view = new MapView({
    map: webmap,
    container: "viewDiv",
    zoom: 6,
    center: [-88.7879,43.7844]
    
  });
});
