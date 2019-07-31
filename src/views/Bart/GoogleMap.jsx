import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import styleObj from '../../utilities/googleMapStyle.json'

const rowStyle = {
  height: '25vh',
  marginTop: '1em',
  marginBottom: '1em',
  background: 'grey'
}

const gMarker = { lat: 37.78954, lng: -122.389988 }
const options = {
  zoom: 14,
  disableDefaultUI: true,
  center: gMarker
}
// var markers = [
//   {
//     position: { lat: 37.7929, lng: -122.3971 },
//     address: 'QJV3+56 Financial District, San Francisco, CA',
//     title: 'Embarcadero Bart'
//   },
//   {
//     position: { lat: 37.7845174, lng: -122.3950765 },
//     address: '598 Market St, San Francisco, CA 94104',
//     title: 'Montgomery Bart'
//   }
// ]

// var locations = {
//   origins: [gMarker],
//   destinations: [markers[0].address, markers[1].address],
//   travelMode: 'WALKING'
// }

// // Runs distance calculation based on 'locations'
// const service = new window.google.maps.DistanceMatrixService()
// service.getDistanceMatrix(locations, (response, status) => {
//   if (status === 'OK') {
//     markers[0].distance = response.rows[0].elements[0].duration.value
//     markers[1].distance = response.rows[0].elements[1].duration.value
//   }
//   console.log(markers)
// })

function Map({ location, setLocation }) {
  const infoWindow = new window.google.maps.InfoWindow()
  const styledMapType = new window.google.maps.StyledMapType(styleObj, { name: 'Styled Map' })
  let map

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos)
    infoWindow.setContent(
      browserHasGeolocation
        ? 'Error: The Geolocation service failed.'
        : "Error: Your browser doesn't support geolocation."
    )
    infoWindow.open(map)
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
        infoWindow.setPosition(location)
        infoWindow.setContent('Location found.')
        infoWindow.open(map)
        map.setCenter(location)
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter())
      }
    )
  } else {
    // Browser doesn't support Geolocation// eslint-disable-next-line
    handleLocationError(false, infoWindow, map.getCenter())
  }

  React.useEffect(() => {
    // eslint-disable-next-line
    map = new window.google.maps.Map(document.getElementById('map'), options)
    map.mapTypes.set('styled_map', styledMapType)
    map.setMapTypeId('styled_map')
  }, [])

  return <Grid.Row style={rowStyle} id="map"></Grid.Row>
}

Map.propTypes = {
  location: PropTypes.object,
  setLocation: PropTypes.func
}

export default Map
