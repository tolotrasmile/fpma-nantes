import React from "react"
import GoogleMapReact from "google-map-react"

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div style={{ height: "100vh", width: "100%" }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBN6PBA4eqChtsUNmqbylZdHbHbF-zjZ8Y" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent lat={59.955413} lng={30.337844} text="Google Map" />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
