export interface StaticInfo { //tearms of service
    country: string;
    contentData: string;
    contentLanguage: string;
    id: string;
}

export enum StaticInfoTextEnum {
    tos = "Terms of Service",
    tou = "Terms of use",
    pp = "Privacy policy"
}

export enum StaticInfoTypeEnum {
    tos = "tos",
    tou = "tou",
    pp = "pp",
    email = "email"
}

export const defaultLanguage = "main";