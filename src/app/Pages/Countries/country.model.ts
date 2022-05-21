export interface AddCountry {
    name: string;
    abbr: string;
    currency: Curreny;
}


export interface Curreny {
    display_character: string;
    name: string;
}

export interface AddCountryResponse extends AddCountry {
    cities: any,
}

export enum KeyNameEnum {
    name = "name",
    currencySymb = "currencySymb",
    currencyName = "currencyName",
    cities = "cities",
    currency = "currency",
    subAttribute = "subAttribute"
}