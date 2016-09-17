# Google Places Parser
Simple script to grab Google Places results from input box and parse the results into a simpler format to grab each address component (e.g. street, country, etc.).

## Setup
- Make sure you include both the Google Places API and jQuery. For Google Places we used:
```
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"></script>
```
and for jQuery:
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
 ```
- Make sure to call getGoogleLocations() before using parseGooglePlaces(). This initiates the Google Places API Autocomplete function on the HTML input element that you've specified via id.
- Make sure to change the HTML element id that's set on your text input box that is autocompleted by the Google Places API (the id in the example is "#places-input").

## Usage
On each call of parseGooglePlaces(), all address components of each result returned from the Google Places API Autocomplete will be stored in the global 'places' array. Each address component can then conveniently be accessed for each result via dot operator (e.g. places[0].street will return a string containing the street of the first result from Google Places).

## Example
Checkout an example in this JSFiddle:
https://jsfiddle.net/tfrasc/a51fwknu/

## TODO
- ~~Add display in fiddle to actually show what it does :p~~
- ~~Remove console logs~~
- Figure out how to fire the display on the first click of button (might be a timing delay getting the results back from the Google API)
- Fix phone number and vicinity (if possible)
- Error handling and validation
