import { Name } from "./name.model";
import { Location } from "./location.model";
import { Picture } from "./picture.model";
import { Login } from "./login.model";
import { Registered } from "./registered.model";
import { Id } from "./id.model";
import { Dob } from "./dob.model";

// Follow API model fields - working under assumption that fields will not be null
export class User {
    gender !: string;
    name !: Name;
    location !: Location;
    email !: string;
    login !: Login;
    dob !: Dob;
    registered !: Registered;
    phone !: string;
    cell !: string;
    id !: Id;
    picture !: Picture;
    nat !: string;
}