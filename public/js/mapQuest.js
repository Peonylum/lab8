function initMap() {
	L.mapquest.key = '8foPnuXf3LODyIZeeYGb1MQA7kQUq5jS'

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.8785, -117.2359],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 14,
	  zoomControl: false
	});

	// Add a marker to the map
	L.marker([32.88,-117.236]).addTo(map)
}