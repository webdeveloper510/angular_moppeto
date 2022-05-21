import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() ratingList: any;
  @Output() onRateClickEvent = new EventEmitter<string>();
  @Output() onRefreshEvent = new EventEmitter<string>();
  private _isSearchResult: string;
  @Input() set isSearchResult(value: string) {
    this._isSearchResult = value;
  }

  isReviewSelected: boolean = false;
  selectedReview: string = null;

  constructor() { }

  get isSearchResult(): string {
    return this._isSearchResult;
  }

  ngOnInit(): void {
  }

  onClick(event) {
    this.onRateClickEvent.emit(event)
  }

  selectReviewCount(item) {
    console.log('item ', item);
    this.isReviewSelected = true;
    this.selectedReview = item;
    this.onRateClickEvent.emit(item.key);
  }

  refreshClick() {
    this.onRefreshEvent.emit();
  }


}
