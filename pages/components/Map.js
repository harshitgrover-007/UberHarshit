import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFyc2hpdGdyb3ZlcjAwNyIsImEiOiJja3cwanFnNHcwemwxMnhub3NmdmF6bzVwIn0.Lm6wj8mNTiCa4BlmA2lBNg";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
    if (props.pickCoordinates) {
      addToMap(map, props.pickCoordinates);
    }
    if (props.dropCoordinates) {
      addToMap(map, props.dropCoordinates);
    }
    if (props.pickCoordinates && props.dropCoordinates) {
      
      map.fitBounds([props.dropCoordinates, props.pickCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickCoordinates, props.dropCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
