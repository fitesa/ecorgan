var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_IndicedeHumedad_1 = new ol.format.GeoJSON();
var features_IndicedeHumedad_1 = format_IndicedeHumedad_1.readFeatures(json_IndicedeHumedad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedad_1.addFeatures(features_IndicedeHumedad_1);
var lyr_IndicedeHumedad_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedad_1, 
                style: style_IndicedeHumedad_1,
                interactive: false,
    title: 'Indice de Humedad<br />\
    <img src="styles/legend/IndicedeHumedad_1_0.png" /> 0,07 - 0,13<br />\
    <img src="styles/legend/IndicedeHumedad_1_1.png" /> 0,13 - 0,20<br />\
    <img src="styles/legend/IndicedeHumedad_1_2.png" /> 0,20 - 0,26<br />\
    <img src="styles/legend/IndicedeHumedad_1_3.png" /> 0,26 - 0,33<br />\
    <img src="styles/legend/IndicedeHumedad_1_4.png" /> 0,33 - 0,40<br />'
        });
var format_IndicedeVegetacion_2 = new ol.format.GeoJSON();
var features_IndicedeVegetacion_2 = format_IndicedeVegetacion_2.readFeatures(json_IndicedeVegetacion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacion_2.addFeatures(features_IndicedeVegetacion_2);
var lyr_IndicedeVegetacion_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacion_2, 
                style: style_IndicedeVegetacion_2,
                interactive: false,
    title: 'Indice de Vegetacion<br />\
    <img src="styles/legend/IndicedeVegetacion_2_0.png" /> 0,13 - 0,21<br />\
    <img src="styles/legend/IndicedeVegetacion_2_1.png" /> 0,21 - 0,28<br />\
    <img src="styles/legend/IndicedeVegetacion_2_2.png" /> 0,28 - 0,35<br />\
    <img src="styles/legend/IndicedeVegetacion_2_3.png" /> 0,35 - 0,43<br />\
    <img src="styles/legend/IndicedeVegetacion_2_4.png" /> 0,43 - 0,50<br />'
        });
var format_SinEcorgan_3 = new ol.format.GeoJSON();
var features_SinEcorgan_3 = format_SinEcorgan_3.readFeatures(json_SinEcorgan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SinEcorgan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SinEcorgan_3.addFeatures(features_SinEcorgan_3);
var lyr_SinEcorgan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SinEcorgan_3, 
                style: style_SinEcorgan_3,
                interactive: true,
                title: '<img src="styles/legend/SinEcorgan_3.png" /> Sin Ecorgan'
            });
var format_ConEcorgan_4 = new ol.format.GeoJSON();
var features_ConEcorgan_4 = format_ConEcorgan_4.readFeatures(json_ConEcorgan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConEcorgan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConEcorgan_4.addFeatures(features_ConEcorgan_4);
var lyr_ConEcorgan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ConEcorgan_4, 
                style: style_ConEcorgan_4,
                interactive: true,
                title: '<img src="styles/legend/ConEcorgan_4.png" /> Con Ecorgan'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_IndicedeHumedad_1.setVisible(true);lyr_IndicedeVegetacion_2.setVisible(true);lyr_SinEcorgan_3.setVisible(true);lyr_ConEcorgan_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_IndicedeHumedad_1,lyr_IndicedeVegetacion_2,lyr_SinEcorgan_3,lyr_ConEcorgan_4];
lyr_IndicedeHumedad_1.set('fieldAliases', {'NDMI': 'NDMI', });
lyr_IndicedeVegetacion_2.set('fieldAliases', {'NDVI': 'NDVI', });
lyr_SinEcorgan_3.set('fieldAliases', {'id': 'id', 'ruta': 'ruta', 'ubicacion': 'ubicacion', });
lyr_ConEcorgan_4.set('fieldAliases', {'id': 'id', 'TRATAMIENT': 'TRATAMIENT', 'ruta': 'ruta', 'Ubicacion': 'Ubicacion', });
lyr_IndicedeHumedad_1.set('fieldImages', {'NDMI': '', });
lyr_IndicedeVegetacion_2.set('fieldImages', {'NDVI': 'TextEdit', });
lyr_SinEcorgan_3.set('fieldImages', {'id': 'TextEdit', 'ruta': 'ExternalResource', 'ubicacion': '', });
lyr_ConEcorgan_4.set('fieldImages', {'id': 'TextEdit', 'TRATAMIENT': 'TextEdit', 'ruta': 'ExternalResource', 'Ubicacion': '', });
lyr_IndicedeHumedad_1.set('fieldLabels', {'NDMI': 'no label', });
lyr_IndicedeVegetacion_2.set('fieldLabels', {'NDVI': 'no label', });
lyr_SinEcorgan_3.set('fieldLabels', {'id': 'no label', 'ruta': 'no label', 'ubicacion': 'no label', });
lyr_ConEcorgan_4.set('fieldLabels', {'id': 'no label', 'TRATAMIENT': 'no label', 'ruta': 'no label', 'Ubicacion': 'no label', });
lyr_ConEcorgan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});