import axios from "axios";

export default function Api() {
  fetch(
    "https://car-data.p.rapidapi.com/cars/types/acc2f5665fmsh8b6c0959707ecaap100175jsnfa19042b138f"
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err, "error"));
}
