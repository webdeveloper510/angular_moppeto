import {Root} from "../root.I";

export interface SubscriptionPannelResponseI extends Root {
    results: SubscriptionPannel[]
}

export interface SubscriptionPannel {
    "id": Number
    "subscription_type": String,
    "country": String,
    "no_of_locations": Number,
    "no_of_subadmins": Number,
    "has_trial_class": true,
    "no_of_media": Number,
    "has_promotions": false,
    "baner_credit": Number,
    "header_credit": Number,
    "has_reports": false,
    "search_word_credit": Number,
    "no_of_activities": {
        "day_access": null,
        "fixed_timing": null,
        "term": null,
        "open": null
    },
    "subscription_per_month_paid_annual": {
        "day_access": null,
        "fixed_timing": null,
        "term": null,
        "open": null
    },
    "max_slots_dayaccess": 1,
    "max_slots_fixedtiming": 1,
    "max_slots_open": 1,
    "max_slots_term": 1
}