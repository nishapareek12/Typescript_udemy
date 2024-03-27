// Code goes here!
import axios from "axios";
const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const GOOGLE_API_KEY =
  "pk.eyJ1IjoibmlzaGExNyIsImEiOiJjbHMxY28waDIwODZuMmxxeDJwNHg4dmp1In0.MxkkysWK2xSJBaI6EzFIWw";
declare var google: any;  
type GoogleGeocodingResponse = {
  features: { center: { lng: number; lat: number } }[];
  status: "OK" | "ZERO_RESULTS";
};
function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  axios
    .get<GoogleGeocodingResponse>(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
        enteredAddress
      )}.json?access_token=${GOOGLE_API_KEY}`
    )
    .then((response) => {
    //   if (response.data.status !== "OK") {
    //     throw new Error("could not fetch location!");
    //   }
    
    const coordinates = response.data.features[0].center;
    console.log(coordinates)
})
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
