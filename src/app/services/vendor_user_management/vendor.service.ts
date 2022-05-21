import { Injectable } from '@angular/core';
import {RootService} from "../root.service";
import { Observable } from 'rxjs';
import {Vendor} from "../../shared/interfaces/vendor_user_management/vendor.I";

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  
  constructor(
    private root_service: RootService
  ) {}

  public getVedor (querparams: any): Observable<Vendor[]> {
    let url = `vendors?country=${querparams.country}&perpage=${querparams.perPage}${(querparams.status !== 'all') ? '&status='+querparams.status.toLocaleUpperCase() : ""}`;
    return this.root_service.get<Vendor[]>(url);
  }

  public getCsv (): Observable<String> {
    return this.root_service.get<String>("vendors/CSV", true);
  }

  public updateVendor<T>(dataSet: any): Observable<T> {
    let url = `vendor/${dataSet._id}`;
    delete dataSet._id;
    return this.root_service.patch<T>(url, dataSet);
  }

  public ConvertToCSV(objArray, headerList): String {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';
    for (let index in headerList) {
      row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = (i+1)+'';
      for (let index in headerList) {
        let head = headerList[index];
        console.log(array[i]);
        if (typeof array[i][head] !== 'object') {
          line += ',' + array[i][head];
        } else {
          console.log("=====array[i][head]", array[i][head])
          for (let subIndex in array[i][head]) {
            line += ',' + array[i][head][subIndex];
          }
        }
        
      } 
      str += line + '\r\n';
    }
    return str;
  }

  public downloadFile(csvData, filename='data'): void {
    // let csvData = this.ConvertToCSV(data, ['name','age', 'average', 'approved', 'description']);
    // console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }
}
