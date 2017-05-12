+++
date = "2015-07-01T13:27:26-04:00"
title = "worldPing Global Footprint"
description = "Deatiled breakdown of the worldPing global footprint"
tags = [ "raintank", "worldPing", "probes" ]
section = ["worldPing"]
+++


<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.37.0/mapbox-gl.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.37.0/mapbox-gl.css' rel='stylesheet' />
<style>
    body { margin:0; padding:0; }
    #map { position:absolute; top:0; bottom:0; width:100%; }
</style>

<div id='map'></div>
<script>
mapboxgl.accessToken = 'pk.eyJ1Ijoid2VhcmVjYXBhY2l0eSIsImEiOiJ2ZkcwNFBJIn0.z-6Cs83_A86Eqr3tFekS7g';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/light', //hosted style id
    center: [-77.38, 39], // starting position
    zoom: 3 // starting zoom
});
</script>
<br/>

**Amazon** | 
------ | ------
Frankfurt | Germany
Portland | Oregon, USA
Sydney | Australia
Tokyo | Japan
Sao Paulo | Brasil

**BelugaCDN** | 
------ | ------
Dallas | Texas, USA

**Digital Ocean** | 
------ | ------ 
Amsterdam | Netherlands
London | UK
New York | New York, USA
San Francisco | California, USA
Singapore | Singapore

**Google (GCE)** | 
------ | ------
Charleroi | Belgium
Omaha | Nebraska, USA
Taipei | Taiwan

**Linode** | 
------ | ------
Atlanta | Georgia, USA

**Vultr** | 
------ | ------
Chicago | Illinois, USA
Los Angeles | California, USA
Miami | Florida, USA
Newark | New Jersey, USA
Paris | France
San Jose | California, USA
Seattle | Washington, USA
