import {Root} from "../root.I";

export interface VendorResponseI extends Root {
    data: VendorSubscription[]
} 


export interface VendorSubscription {
    vendor_id: Number,
    subscription_type: String,
    country: String,
    total_locations: Number,
    total_sub_admins: Number,
    trial_class: Boolean,
    promotions_module: Boolean,
    reports_module: Boolean,
    no_of_activities: noOfActivitiesI,
    max_slots_dayaccess: Number,
    max_slots_fixedtiming: Number,
    max_slots_term: Number,
    max_slots_open: Number,
    subscription_period: subscriptionPeriodI,
    price_per_month: Number,
    total_subscription_remaining: Number,
    total_subscription_payable: number,
    status: String,
    email_sent_at?: String,

}

export interface filterI {
    country_name: String,
    subscription_type: String,
    activity_type: String,
    status: String,
    view: String[],
    [key: string]: String | String[]
}

interface noOfActivitiesI {
    day_access: Number,
    fixed_timing: Number,
    term: Number,
    open: Number
}

interface subscriptionPeriodI {
    from: String,
    to: String
}
