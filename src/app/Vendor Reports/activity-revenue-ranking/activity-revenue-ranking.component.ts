import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface City {
  name: string,
  code: string
}

interface City2 {
  name: string,
  code: string
}

@Component({
  selector: 'app-activity-revenue-ranking',
  templateUrl: './activity-revenue-ranking.component.html',
  styleUrls: ['./activity-revenue-ranking.component.scss']
})
export class ActivityRevenueRankingComponent implements OnInit {

  // selected: Date;
  dateRange: string;

  vendorData: any;
  vendorSearchData: any;

  cities: City[];
  selectedCity: City;

  cities2: City[];
  selectedCity2: City;

  date3: Date;
  days: string;
  rangeDates: Date;

  showMoreText = true;
  showLess = false;
  showLessText = true;
  searchInput: string;



  constructor(private http: HttpClient) {
    this.cities = [
      { name: 'India', code: 'IN' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.cities2 = [
      { name: 'India', code: 'IN' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'Paris', code: 'PRS' }
    ];
  }



  ngOnInit(): void {
  }

  onSubmit(data){

    console.log('fromdata',data)

    //First Date
    var check = Array.isArray(data.dateRange)
    if(check == true){
    if(data.dateRange[0]){
    var st_date  = String(data.dateRange[0]);
    var st_date_split = st_date.split(" ");
    var final_st_date = st_date_split[0]+' '+ st_date_split[1]+' '+ st_date_split[2]+' ' +st_date_split[3]
    var date = Date.parse(final_st_date);

    var start_date = new Date(date);

    const formatYmd = start_date => start_date.toISOString().slice(0, 10);

    // Example
    var startDate = formatYmd(new Date(start_date))
    console.log('startDdate',startDate);

  }
    //Second Date
if(data.dateRange[1]){
    var end_date  = String(data.dateRange[1]);
    var end_date_split = end_date.split(" ");
    var final_end_date = end_date_split[0]+' '+ end_date_split[1]+' '+ end_date_split[2]+' ' +end_date_split[3]
    var en_date = Date.parse(final_end_date);

    var endd_date = new Date(en_date);

    const endformatYmd = endd_date => endd_date.toISOString().slice(0, 10);

    // Example
    var endDate = endformatYmd(new Date(endd_date))
    console.log('endDdate',endDate);
  }
}else{
  var selected_date = data.dateRange
}
    let datas = {
      // vendor_name: data.vendor_name,
      // activity_type: 'vendor',
      // vendor_code: data.vendor_code ,
      // country: data.country.name?data.country.name:'' ,


      date_check:selected_date?selected_date:'', //30days Or 60 Days
      start_date:startDate?startDate:'', //start date range
      end_date:endDate?endDate:'', //end  date range
      activity_type:data.start_date?'date':data.vendor_name?'vendor':data.country_field?'country':data.vendor_code?'vendor':data.country.name?'vendor':'',
      activity_typee:{
        vendor_type:data.vendor_name?'vendor':data.vendor_code?'vendor':'',date_range_type:data.start_date?'date_range':'', 
        selected_date_type:selected_date?'selected_date':'', country_type:data.country?'country':''
      },
      vendor_name:data.vendor_name,
      vendor_code:data.vendor_code?data.vendor_code:'',
      country_field:data.country?data.country.name:''

      };
      console.log('check params',datas)
      this.http.post('http://127.0.0.1:8000/authentication/vendorActivity', datas).subscribe(
        (response: any) => {

          console.log('response_vendoract', response.data)

          this.vendorData = response.data;
        },
        (error: any) => {

          console.log('error from server', error)
        }
      );


  }

  onSearchChange(event: any){
    console.log('serch keyword',event.target.value);
    this.http.post('http://127.0.0.1:8000/authentication/vendorActivitySearch',{vendor_search:event.target.value}).subscribe(
      (response: any)=>{
        console.log('searchdata',response)
        this.vendorSearchData = response.data
      },
      (error: any)=>{
        console.log('error from server', error)
      }
    )
  }

}
