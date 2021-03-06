
var openstreetmap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 14,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoibGlla2UxOCIsImEiOiJjam5yZDd0MnIwMW9wM3FzNXExMHJ6MG5nIn0.iyEfspnssHxzGdZDWa1_aA'
}),
	OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
	

var map = L.map('mymap', {
    center: [-34.6076405504689,-58.38842555507813],
    zoom: 11,
    layers: OpenStreetMap_Mapnik
});

var baseMaps = {
    "Openstreetmap": OpenStreetMap_Mapnik,
	"Openstreetmap2": openstreetmap
};

// Layers

var overlayLayers = {
    
}

L.control.layers(baseMaps )

	var mymap = L.map('mapid').setView([],11)0
	var marker = L.marker([-34.6065504,-58.410706800000014
	 ]).addTo(mymap);marker.bindPopup("<b>La Bomba de Tiempo</b><br>Een 17-delige groep die Argentijnse volkmuziek en samba combineerd met stijlen uit Afrika en Centraal Amerika. Ze spelen iedere maandagavond om 20.00 uur voor enkele uren. Daarna gaat het feest tot in de late uurtjes door in de straten die in de buurt liggen. Perfect begin voor een avondje uit dus.").openPopup()
		
	var popup = L.popup()
	var marker = L.marker([-34.6128522,-58.3787964
	 ]).addTo(mymap);marker.bindPopup("<b>Rayuela Hostel voor The Asado Night </b><br>De donderdagavond in dit hotel staat in het teken van vlees. Asado is een traditioneel Argentijns gerecht waarbij verschillende soorten vlees bij elkaar op een bbq grill worden bereid. Het is een groot sociaal evenement die vrienden en familie bij elkaar brengt. Een betere manier om de lokale eetcultuur te proeven is er dus bijna niet en daarnaast kun je dus ook nog lekker socializen. win win.").openPopup()
	
	var popup = L.popup()
	var marker = L.marker([-34.6216651,-58.371352799999954
	 ]).addTo(mymap);marker.bindPopup("<b>Gigantische openlucht markt in San Telmo </b><br>Iedere zondag is er aan Calle Defensa en omliggende straten een grote openlucht markt, de perfecte plek om je onder te dompelen in de lokale cultuur. Je vind er uiteraard de kraampjes met spullen maar ook eten en optredens. Zeker een bezoekje waard dus! (perfecte plek om te shoppen voor souverniertjes voor het thuisfront (hint hint)").openPopup()
	var popup = L.popup()
	
	var popup = L.popup()
	var marker = L.marker([-34.6393399,-58.36268389999998]).addTo(mymap);marker.bindPopup("<b>Openluchtmuseum La Boca</b><br>La Boca is een must-visit wanneer je in Buenos Aires bent. Het is een wijk waar alle huisjes vrolijk gekleurd zijn. Het heeft veel Europese invloeden door Italianen die hier hun intrek hebben genomen. Zij hebben de huizen geverfd om de dagelijkse elende en armoede te vergeten. Nog wel een tip; blijf op de aangegeven paden. Daarbuiten is niets te zien en is het ook nog eens onveilig!").openPopup()
	var popup = L.popup()
	
	var popup = L.popup()
	var marker = L.marker([-34.6083667,-58.37228319999997]).addTo(mymap);marker.bindPopup("<b>Het roze huis van Playa de Mayo (niet de saus ;))</b><br>Het roze huis is een mega bekend gebouw en tevens het huis van de regerende president van het land. De blauw met witte vlag op het dak maakt het één van de meest iconische beelden van Buenos Aires. goed voor je instafeed dus! ").openPopup()
	var popup = L.popup()
	
	var popup = L.popup()
	var marker = L.marker([-34.5748804,-58.379327200000034]).addTo(mymap);marker.bindPopup("<b>Tripje naar Uruguay)</b><br>Vanaf hier is het maar 75 minuutjes met de ferry naar Uruguay. Bezoek daar bijvoorbeeld het UNESCO werelderfgoed stadje  Colonia del Sacramento. Deze stad is opgericht door de Portugeze en dat zie je terug. Met de mooie oude straatjes en het mooie weer is het dus prima vertoeven daar! ").openPopup()
	var popup = L.popup()
