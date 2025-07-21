function initMap() {
  const museumCenter = { lat: 48.86091, lng: 2.3364 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: museumCenter,
    styles: [],
  });

  const markersData = [
    { lat: 48.86091, lng: 2.3364 },
    { lat: 48.8602, lng: 2.3333 },
    { lat: 48.8607, lng: 2.3397 },
    { lat: 48.8619, lng: 2.333 },
    { lat: 48.8625, lng: 2.3365 },
    { lat: 48.86110519403928, lng: 2.3358177384292205 },
  ];

  markersData.forEach((pos) => {
    new google.maps.Marker({
      position: pos,
      map: map,
    });
  });
}

window.initMap = initMap;
