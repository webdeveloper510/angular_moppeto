export interface Vendor {
    i: string,
    vendor: UserDetail,
    organization_type: string; 
    name: string; 
    reg_address: string; 
    reg_city: string; 
    reg_zip_code: string; 
    mailing_address: string; 
    mailing_city: string; 
    mailing_zip_code: string; 
    reg_number: string; 
    preferred_name: string; 
    profile_intro: string; 
    terms_and_conditions: string; 
    logo: string; 
    is_website: string; 
    website_url: string; 
    is_instagram: string; 
    instagram_url: string; 
    is_twitter: string; 
    twitter_url: string; 
    is_facebook: string; 
    facebook_url: string; 
  }

  export interface UserDetail {
    id: string;
    firstname: string;
    lastname: string;
    code: string;
    date_joined: string;
    country: string;
    email: string;
  }

  export enum VendorStatusEnum {
    INACTIVE = "INACTIVE",
    ACTIVE = "ACTIVE"
  }