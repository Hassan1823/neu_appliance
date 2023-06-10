'use client'


import React, { useState,useEffect } from 'react'
import { AiFillCheckCircle,AiFillCloseCircle } from 'react-icons/ai'
import { Loader } from "@googlemaps/js-api-loader"
import {getCords} from './api'
import MobMapForm from './MobMapForm'
import MapForm from './MapForm'

const MapSection = () => {

  const [zip,setZip] = useState(78602);
  const [success,setSuccess] = useState(false);
  const [error,setError] = useState(false);

  function geocodeAddress(geocoder, map,key) {
    var address = key; // Replace with your searched location
  
    geocoder.geocode({ address: address }, function (results, status) {
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);
        var marker = new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
        });
      }
    });
  }

  const loadMap = async (result) => {
    const loader = new Loader({
      apiKey: 'AIzaSyBJa7rXLIRQKJPLS6awxh2gG529tDmccMs', // Replace with your own API key
      version: 'weekly', // or specify a specific version (e.g., 'weekly', 'weekly.next', 'beta')
    });
  
    await loader.load();
    
    // Mid of cords
    var dataArray = result;
    var midIndex = Math.floor(dataArray.length / 2);
    var midObject = dataArray[midIndex];
    
    var midLat = midObject.lat;
    var midLng = midObject.lng;

    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: midLat, lng: midLng},
      zoom: 10,
      disableDefaultUI: true
    });
  
    // Define the polygon coordinates
    const polygonCoordinates = [result];
  
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
    const keys = Object.keys(zip);
    const key = keys[0];
    geocodeAddress(geocoder, map,key);
    // Set the polygon on the map
    polygon.setMap(map);
  };

  const loadMap2 = async (result) => {
    const loader = new Loader({
      apiKey: 'AIzaSyBJa7rXLIRQKJPLS6awxh2gG529tDmccMs', // Replace with your own API key
      version: 'weekly', // or specify a specific version (e.g., 'weekly', 'weekly.next', 'beta')
    });
  
    await loader.load();
    
    // Mid of cords
    var dataArray = result[78602];
    var midIndex = Math.floor(dataArray.length / 2);
    var midObject = dataArray[midIndex];
    
    var midLat = midObject.lat;
    var midLng = midObject.lng;

    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: midLat, lng: midLng},
      zoom: 10,
      disableDefaultUI: true
    });
  
    // Define the polygon coordinates
    const polygonCoordinates = [result['78602']];
  
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
    const keys = Object.keys(result);
    const key = keys[0];
    geocodeAddress(geocoder, map,key);
    // Set the polygon on the map
    polygon.setMap(map);
  };
      
  const Submit = async () => {
        const response = await getCords(zip);
        if (response) {
          loadMap(response); // Call the loadMap function with the received data
          setSuccess(true);
          setError(false);
        } else {
          // loadMap2(cords);
          setSuccess(false);
          setError(true);
          // Handle error or display a message
        }
  };

  useEffect(() => {
    Submit();
  }, [])

  return (
    <>
          <h4 className='font-bold text-center xl:text-3xl lg:text-2xl mt-10' >Neu Local Delivery Area</h4>
          <div className='relative flex flex-col justify-end items-end py-20 w-[1440px] h-[686px] px-5' >
           <img src="./free.png" className='absolute z-40 xl:top-0 xl:w-52 xl:right-10 lg:w-36 w-20 lg:top-5 top-10 right-0 lg:right-8' />
          
          <div className={`absolute bottom-20 lg:left-24 ${success? 'flex' : 'hidden'} items-center z-20 bg-transparent h-52 justify-center w-11/12`} >
           <div className='absolute flex items-center z-20 bottom-20 space-x-2 bg-white shadow-xl px-5 py-2 rounded-lg' >
            <AiFillCheckCircle className='text-b12' />
            <p className='font-semibold' >Delivery Available {zip}</p>
           </div>
           </div>

           <div className={`absolute bottom-10 left-24 ${error? 'flex' : 'hidden'} items-center z-20 bg-transparent h-52 justify-end w-12/12`} >
            <div className='flex justify-center h-fit items-center space-x-2 bg-white shadow-xl px-5 py-2 rounded-lg' >
               <AiFillCloseCircle className='text-red-500' />
               <p className='font-semibold' >Delivery Not Available {zip}</p>
            </div>
           </div> 

           <MobMapForm zip={zip} setZip={setZip} Submit={Submit} />

           <MapForm zip={zip} setZip={setZip} error={error} success={success} Submit={Submit} />
            
             {/* Map Section Start */}
             <div id="map" className='xl:h-[686px] xl:w-[1000px] lg:h-[490px] lg:w-[850px] w-full h-52 rounded-2xl' ></div>
             {/* Map Section End */}
          
            {/* <div className='bg-red-500 w-11/12 h-[490px] rounded-2xl' ></div> */}
          </div>
    </>
  )
}

export default MapSection