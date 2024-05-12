// Need to add this to get google types working
/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

// On peut passer user et company car Typescript vérifie si les 2 objets
// matchent avec l'interface "Mappable"
customMap.addMarker(user);
customMap.addMarker(company);
