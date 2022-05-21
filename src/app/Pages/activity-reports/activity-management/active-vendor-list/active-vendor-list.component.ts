import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Country {
  name: string,
  code: string
}

interface Activity {
  name: string,
  code: string
}
@Component({
  selector: 'app-active-vendor-list',
  templateUrl: './active-vendor-list.component.html',
  styleUrls: ['./active-vendor-list.component.scss']
})
export class ActiveVendorListComponent implements OnInit {

  vendorData:any;
  vendorSearchData:any = [];
  selectSearchData:any = [];
  selectedGroup: any;

  activeData:any

  selectvendorSugg:any = []

  // selected: Date;
  dateRange: string;
  vendorSugg:any = []


  country: Country[];
  selectedCountry: Country;

  activity_type: Activity[];
  selectedActivity: Activity;

  date3: Date;
  days: string;
  rangeDates: Date;

  showMoreText = true;
  showLess = false;
  showLessText = true;
  searchInput: string;
  constructor(private http: HttpClient) {
    this.country = [
      { name: 'India', code: '1'},
      { name: 'Newzealand', code: '2'},
      { name: 'USA', code: '3' },
      { name: 'Paris', code: '4' }
    ];
    this.activity_type = [
      { name: 'Day Access', code: '1' },
      { name: 'Fixed Time', code: '2' },
      { name: 'Open Activity', code: '3' },
      { name: 'Term Activity', code: '4 ' }
    ];
  }


  ngOnInit(): void {

    this.getallData()

  }
  getallData(){
    this.http.get('http://127.0.0.1:8000/activeStatusView').subscribe(
      (response: any) => {

        console.log('active data', response.data)

        this.activeData = [response.data];
      },
      (error: any) => {

        console.log('error from server', error)
      }
    );
  }
  onSubmit(data){
    this.selectSearchData = [];
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
    let vendor_formData = {

      start_date:startDate?startDate:'', //start date range
      end_date:endDate?endDate:'', //end  date range
      vendor_name:this.selectvendorSugg?this.selectvendorSugg:data.vendor_name,
      vendor_code:data.vendor_code?data.vendor_code:'',
      vendor_country:data.country?data.country.code:'',
      activity_type:data.activity_type?data.activity_type.name:''

      };
      console.log('check params',vendor_formData)
      this.http.post('http://127.0.0.1:8000/activityActiveView', vendor_formData).subscribe(
        (response: any) => {

          console.log('response_vendoract', response.data)

          this.vendorData = [response.data];
          this.selectvendorSugg = ''

        },
        (error: any) => {

          console.log('error from server', error)
        }
      );


  }
  //On Vendor Select Event
  onVendorSelect(event: any){
    console.log('serch keyword',event.target.value);
    var data = this.vendorSugg.map((search, index) => {
      if (index == event.target.value){
        console.log('vendor_serch keyword',search);

        return this.selectvendorSugg = search.vendor_name
      }
    })
    console.log('filter',this.selectvendorSugg);
   this.vendorSugg = []
    //this.selectvendorSugg = ''
  }
  onVendorNameSuggestion(event: any){
    console.log('serch keyword',event.target.value);
    // if(event.target.value == ''){
    //   this.vendorSearchData = []
    //   this.selectSearchData = []
    //   return true
    // }
    this.http.post('http://127.0.0.1:8000/vendorNameSuggestion',{vendor_name:event.target.value}).subscribe(
      (response: any)=>{
        console.log('vendor_name_active searchdata',response)
        console.log('vendor_name_active searchdata',response.data.length)
        this.vendorSugg = response.data
      },
      (error: any)=>{
        this.vendorSugg = []
        console.log('error from server', error)
      }
    )
  }
  onSearchChange(event: any){
    this.vendorData = [];
    console.log('serch keyword',event.target.value);
    if(event.target.value == ''){
      this.vendorSearchData = []
      this.selectSearchData = []
      return true
    }
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
  singleSearchData(event: any){
    console.log('search value',event.target.value);
    var data = this.vendorSearchData.map((search, index) => {
      if (index == event.target.value){
        return this.selectSearchData = [search]
      }
    })
    console.log('filter',this.selectSearchData);
    this.vendorSearchData = []

    // this.selectSearchData = data

  }

}
