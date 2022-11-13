import axios from "axios";

export default function Api() {
  // const options = {
  //     method: 'GET',
  //     headers: {
  //         'X-RapidAPI-Key': 'acc2f5665fmsh8b6c0959707ecaap100175jsnfa19042b138f',
  //         'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  //     }
  // };

  fetch(
    "https://car-data.p.rapidapi.com/cars/types/acc2f5665fmsh8b6c0959707ecaap100175jsnfa19042b138f"
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err, "error"));
}
