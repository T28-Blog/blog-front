import React, { Component } from 'react';
import {
    InfoWindow, 
    withScriptjs, 
    withGoogleMap, 
    GoogleMap, 
    Marker
} from "react-google-maps";
import Geocode from 'react-geocode';
import { Descriptions } from 'antd';
import AutoComplete from 'react-google-autocomplete';

Geocode.setApiKey("AIzaSyCEyMTVNJQ1XpmzWINtKNXGZFunoIYYnvI")

class GoogleMapComponent extends React.Component {

    state = {
        address: "",
        city: "",
        area: "",
        state: "",
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition: {
            lat: 0,
            lng: 0,
        }
    }

    componentDidMount(){

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    mapPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    markerPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                }, () => {
                    Geocode.fromLatLng(position.coords.latitude, position.coords.longitude)
                    .then(response => {
                        const address = response.results[0].formatted_address,
                            addressArray = response.results[0].address_components,
                            city = this.getCity(addressArray),
                            area = this.getArea(addressArray),
                            state = this.getState(addressArray)

                        this.setState({
                            address: (address) ? address : "",
                            area : (area) ? area : "",
                            city: (city) ? city : "",
                            state: (state) ? state : "",
                        })
                    },
                    error => {
                        console.log(error);
                    })
                })
            })
        } else {
            console.error("현재 사용하고 계신 브라우저에서는 Geolocation을 지원하지 않습니다.")
        }
    }



    // 도시정보얻기
    getCity = (addressArray) => {
        let city = '';
        for(let index = 0; index < addressArray.length; index++){
            if(addressArray[index].types[0] && 'administrative_area_level_2' === addressArray[index].types[0]){
                city = addressArray[index].long_name;
                return city;
            }
        }
    }

    // 지역정보얻기
    getArea = (addressArray) => {
        let area = '';
        for(let index = 0; index < addressArray.length; index++){
            if(addressArray[index].types[0]){
                for(let j = 0; j < addressArray.length; j++){
                    if('sublocality_level_1' === addressArray[index].types[j] || 'locality' === addressArray[index].types[j]){
                        area = addressArray[index].long_name;
                        return area;
                    }
                }
            }
        }
    }

    getState = (addressArray) => {
        let state = '';
        for(let index = 0; index < addressArray.length; index++){
            for(let index = 0; index < addressArray.length; index++){
                if(addressArray[index].types[0] && 'administrative_area_level_1' === addressArray[index].types[0]){
                    state = addressArray[index].long_name;
                    return state;
                }
            }
        }
    }



    //  marker이동 
    onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat();
        let newLng = event.latLng.lng();

        Geocode.fromLatLng(newLat, newLng)
        .then(response => {
            const address = response.results[0].formatted_address,
                addressArray = response.results[0].address_components,
                city = this.getCity(addressArray),
                area = this.getArea(addressArray),
                state = this.getState(addressArray)

                this.setState({
                    address: (address) ? address : "",
                    area : (area) ? area : "",
                    city: (city) ? city : "",
                    state: (state) ? state : "",
                    markerPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition: {
                        lat: newLat,
                        lng: newLng
                    }
                })
        })
    }

    onPlaceSelected = (place) => {
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray),
            newLat = place.geometry.location.lat(),
            newLng = place.geometry.location.lng();

            this.setState({
                address: (address) ? address : "",
                area : (area) ? area : "",
                city: (city) ? city : "",
                state: (state) ? state : "",
                markerPosition: {
                    lat: newLat,
                    lng: newLng
                },
                mapPosition: {
                    lat: newLat,
                    lng: newLng
                }
            })
    }

    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props => 
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{
                lat: this.state.mapPosition.lat,
                lng: this.state.mapPosition.lng
            }}>
            {/* marker 위치 초기값 */}
            <Marker
                draggable={true}
                onDragEnd={this.onMarkerDragEnd}
                position={{
                    lat: this.state.markerPosition.lat,
                    lng: this.state.markerPosition.lng
                }}
            >
                {/* marker에 주소를 표시하기위한 라이브러리 */}
                <InfoWindow>
                    <div>
                        <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                    </div>
                </InfoWindow>
            </Marker>

            {/* 자동완성기능 */}
            <AutoComplete
                style={{ width: '100%', height: '40px', paddingLeft: 16, marginTop: 2, marginBottom: '2rem'}}
                types={['(regions']}
                onPlaceSelected={this.onPlaceSelected}
            />
        </GoogleMap>
        ));

        return (

            <div style={{ margin: '0 auto', maxWidth: 1000 }}>
                {/* <Descriptions bordered>
                    <Descriptions.Item label="City">{this.state.city}</Descriptions.Item>
                    <Descriptions.Item label="Area">{this.state.area}</Descriptions.Item>
                    <Descriptions.Item label="State">{this.state.state}</Descriptions.Item>
                    <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item>
                </Descriptions> */}

                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCEyMTVNJQ1XpmzWINtKNXGZFunoIYYnvI&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style = {{ height: `100%`, width: `1000px` }}/>}
                    containerElement={<div style = {{ height: `400px`, width: `1000px` }}/>}
                    mapElement={<div style = {{ height: `100%`, width: `1000px` }}/>}
                />
            </div>
        );
    }
}

export default GoogleMapComponent;