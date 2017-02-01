$( document ).ready(function() {

 function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          // Set mapTypeId to SATELLITE in order
          // to activate satellite imagery.
          mapTypeId: 'satellite',
          scrollwheel: false,
          zoom: 8
        });
      }