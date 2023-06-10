import React,{useContext, useEffect} from 'react'
import { Loader } from "@googlemaps/js-api-loader"
import {cords} from '../components/cords';
import MapForm from './MapForm';
import MobMapForm from './MobMapForm';

const MapApi = () => {
  const states = useContext(AppContext)
  const Submit = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:3030/${states.input}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {loadMap(result);states.setSuccess(true);states.setError(false)})
      .catch((error) => {states.setError(true);states.setSuccess(false)});
  };

  const loadMap = async (input) => {
    const loader = new Loader({
      apiKey: 'AIzaSyBJa7rXLIRQKJPLS6awxh2gG529tDmccMs', // Replace with your own API key
      version: 'weekly', // or specify a specific version (e.g., 'weekly', 'weekly.next', 'beta')
    });
  
    await loader.load();

    // Mid of cords
    var dataArray = cords;
    var midIndex = Math.floor(dataArray.length / 2);
    var midObject = dataArray[midIndex];
    
    var midLat = midObject.lat;
    var midLng = midObject.lng;

    function geocodeAddress(geocoder, map,key) {
      var address = key; // Replace with your searched location
    
      geocoder.geocode({ address: address }, function (results, status) {
        if (status === "OK") {
          map.setCenter(results[0].geometry.location);
          var marker = new window.google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }

    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: midLat, lng: midLng},
      zoom: 10,
      disableDefaultUI: true
    });
  
    // Define the polygon coordinates
    const polygonCoordinates = [input];
  
    // Create the polygon
    const polygon = new window.google.maps.Polygon({
      paths: polygonCoordinates,
      strokeColor: '#4e41da',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#4e41da80',
      fillOpacity: 0.35,
    });
    var geocoder = new window.google.maps.Geocoder();
    const keys = Object.keys(states.input);
    const key = keys[0];
    geocodeAddress(geocoder, map,key);
    // Set the polygon on the map
    polygon.setMap(map);
  };
      
  useEffect(() => {
    Submit();
  }, [])
  
    
  return (
    <>
    <div id="map" className='w-11/12 h-[490px] rounded-2xl' ></div>
    </>
  )
}

export default MapApi