function initMap() {
  const museumCenter = { lat: 48.86091, lng: 2.3364 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: museumCenter,
    styles: [
      /* можно добавить стили, если нужно */
    ],
  });

  const markersData = [
    { lat: 48.86091, lng: 2.3364 },
    { lat: 48.8602, lng: 2.3333 },
    { lat: 48.8607, lng: 2.3397 },
    { lat: 48.8619, lng: 2.333 },
    { lat: 48.8625, lng: 2.3365 },
  ];

  markersData.forEach((pos) => {
    new google.maps.Marker({
      position: pos,
      map: map,
    });
  });
}
