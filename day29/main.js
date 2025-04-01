import { car1,car2,driveCar } from "./car.js";
import { building1,building2,buidBuilding } from "./building.js";
import { track1,track2,buildTrack } from "./track.js";


console.log(buidBuilding(building2));
console.log(driveCar(car1));
console.log(buildTrack(track2));



 document.getElementById('output').innerHTML=`
  <p>${buildTrack(track1)}</p>
  <p>${driveCar(car2)}</p>

  <p>${buidBuilding(building1)}</p>
`