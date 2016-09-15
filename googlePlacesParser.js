// Place class definition
var Place = function() {
  this.street_number = "";
  this.street = "";
  this.city = "";
  this.state = "";
  this.country = "";
  this.zip_code = "";
  this.full_address = "";
  this.phone_number = "";
  this.latitude = "";
  this.longitude = "";
  this.types = "";
  this.vicinity = "";
}

// Init Google Places API
function getGoogleLocations() {
   new google.maps.places.Autocomplete(
   (document.getElementById('places-input')), {
       types: ['geocode']
   });
}

// Parse Google Places results
function parseGooglePlaces(id) {
  var geocoder = new google.maps.Geocoder();
  var address = document.getElementById(id).value;

  // global to allow access in html file
  places = [];

  geocoder.geocode({ 'address': address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {

      for(var resultIndex = 0; resultIndex < results.length; resultIndex++) {
       var place = new Place();

       place.latitude = results[resultIndex].geometry.location.lat;
       place.longitude = results[resultIndex].geometry.location.lng;
       place.full_address = results[resultIndex].formatted_address;
       place.phone_number = results[resultIndex].formatted_phone_number;
       place.types = results[resultIndex].types;
       place.vicinity = results[resultIndex].vicinity;

       for(i = 0; i < results[resultIndex].address_components.length; i++){
         if (results[resultIndex].address_components[i].types[0] == "street_number") {
           place.street_number = results[resultIndex].address_components[i].long_name;
         }
         else if (results[resultIndex].address_components[i].types[0] == "route") {
           place.street = results[resultIndex].address_components[i].long_name;
         }
         else if (results[resultIndex].address_components[i].types[0] == "locality") {
           place.city = results[resultIndex].address_components[i].long_name;
         }
         else if (results[resultIndex].address_components[i].types[0] == "administrative_area_level_1") {
           place.state = results[resultIndex].address_components[i].long_name;
         }
         else if (results[resultIndex].address_components[i].types[0] == "country") {
           place.country = results[resultIndex].address_components[i].long_name;
         }
         else if (results[resultIndex].address_components[i].types[0] == "postal_code") {
           place.zip_code = results[resultIndex].address_components[i].long_name;
         }
       }

       places.push(place);
      }
    }
  });
}
