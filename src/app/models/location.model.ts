import { Coordinates } from "./coordinates.model";
import { Timezone } from "./timezone.model";

export class Location {
    street: {
        number: Number;
        name: string;
    } | undefined;
    city: string | undefined;
    state: string | undefined;
    country: string | undefined;
    postcode: string | undefined;
    coordinates: Coordinates | undefined;
    timezone: Timezone | undefined;
}