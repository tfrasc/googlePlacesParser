# Google Places Parser
Simple script to grab Google Places results from input box and parse the results into a simpler format to grab each component (e.g. street, country, etc.).

## Usage
- Make sure you include both the Google Places API and jQuery. For Google Places we used:
```<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"></script>
```
and for jQuery:
```<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
 ```
- Make sure to call getGoogleLocations() before using parseGooglePlaces()
- Make sure to change the HTML element id that's set on your text input box that is autocompleted by the Google Places API (the id in the example is "#places-input")


## Example
Checkout an example in this JSFiddle (currently a little out of date):
https://jsfiddle.net/tfrasc/a51fwknu/

## TODO
- Add display in fiddle to actually show what it does :p
- Remove console logs
