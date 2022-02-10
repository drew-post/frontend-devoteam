import { Coordinates } from "./coordinates.model";
import { Timezone } from "./timezone.model";

export class Location {
    street !: {
        number: Number;
        name: string;
    };
    city !: string;
    state !: string;
    country !: string;
    postcode !: string;
    coordinates !: Coordinates;
    timezone !: Timezone;
}