/* eslint-disable no-console */
import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import styleObj from '../../utilities/googleMapStyle.json'

const rowStyle = {
  height: '25vh',
  marginTop: '1em',
  background: 'grey'
}

const markers = [
  {
    position: { lat: 37.7929, lng: -122.3971 },
    address: 'QJV3+56 Financial District, San Francisco, CA',
    station: 'Embarcadero',
    abbr: 'EMBR'
  },
  {
    position: { lat: 37.7845174, lng: -122.3950765 },
    address: '598 Market St, San Francisco, CA 94104',
    station: '',
    abbr: ''
  }
]

// prop values orignate from index.jsx
function Map({ location }) {
  const mapOptions = {
    zoom: 14,
    disableDefaultUI: true,
    center: location.gMarker
  }

  var distanceValues = {
    origins: [location.gMarker],
    destinations: [markers[0].address, markers[1].address],
    travelMode: 'WALKING'
  }

  // Runs distance calculation based on 'distanceValues'
  const service = new window.google.maps.DistanceMatrixService()
  service.getDistanceMatrix(distanceValues, (response, status) => {
    if (status === 'OK') {
      location.nearestLocation.distance =
        response.rows[0].elements[0].duration.value
      location.nearestLocation.minutes =
        response.rows[0].elements[0].duration.text
    }
  })

  const infoWindow = new window.google.maps.InfoWindow()
  const styledMapType = new window.google.maps.StyledMapType(styleObj, {
    name: 'Styled Map'
  })
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
  if (map) {
    if (navigator.geolocation) {
      console.log('map', map)
      navigator.geolocation.getCurrentPosition(
        position => {
          location.userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          infoWindow.setPosition(location.userLocation)
          infoWindow.setContent('Location found.')
          infoWindow.open(map)
          map.setCenter(location.userLocation)
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter())
        }
      )
    } else {
      // Browser doesn't support Geolocation// eslint-disable-next-line
      handleLocationError(false, infoWindow, map.getCenter())
    }
  }

  React.useEffect(() => {
    // eslint-disable-next-line
    map = new window.google.maps.Map(document.getElementById('map'), mapOptions)
    map.mapTypes.set('styled_map', styledMapType)
    map.setMapTypeId('styled_map')
  }, [])

  return <Grid.Row style={rowStyle} id="map"></Grid.Row>
}

Map.propTypes = {
  location: PropTypes.object
}

export default Map
