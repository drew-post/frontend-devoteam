import { Name } from "./name.model";
import { Location } from "./location.model";
import { Picture } from "./picture.model";
import { Login } from "./login.model";
import { Registered } from "./registered.model";
import { Id } from "./id.model";
import { Dob } from "./dob.model";

export class User {
    gender: string | undefined;
    name: Name | undefined;
    location: Location | undefined;
    email: string | undefined;
    login: Login | undefined;
    dob: Dob | undefined;
    registered: Registered | undefined;
    phone: string | undefined;
    cell: string | undefined;
    id: Id | undefined;
    picture: Picture | undefined;
    nat: string | undefined;
}