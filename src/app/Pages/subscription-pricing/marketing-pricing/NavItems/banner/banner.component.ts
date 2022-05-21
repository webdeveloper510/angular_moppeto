import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public showButton: boolean = false;
  public showButton2: boolean = false;
  public showButtonWeb: boolean = false;
  public showButtonWeb2: boolean = false;
  public showButtonAppAndWeb: boolean = false;
  public showButtonAppAndWeb2: boolean = false;


  public appColCount: number = 3;
  public webColCount: number = 3;
  public AppAndwebColCount: number = 3;


  @ViewChildren('tablerow1') tableRow1: QueryList<ElementRef>;
  @ViewChildren('tablerow2') tableRow2: QueryList<ElementRef>;
  @ViewChildren('tablerow3') tableRow3: QueryList<ElementRef>;
  @ViewChildren('tablerow4') tableRow4: QueryList<ElementRef>;
  @ViewChildren('tablerow5') tableRow5: QueryList<ElementRef>;
  @ViewChildren('tablerow6') tableRow6: QueryList<ElementRef>;

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
  }


  addColumn() {
    let $this = this;
    function show() {
      $this.showButton = true;
    }
    if (this.appColCount <= 6) {

      this.tableRow1.toArray().forEach((elem: any) => {
        const el = this.renderer.createElement('td');
        el.setAttribute("class", "removeborder");
        const text = this.renderer.createElement('INPUT');
        text.setAttribute("type", "radio");
        text.setAttribute("name", "App");
        text.setAttribute("id", "App" + this.appColCount);
        text.onclick = function () { show(); };
        this.renderer.appendChild(el, text);
        this.renderer.appendChild(elem.nativeElement, el);
      })

      this.tableRow2.toArray().forEach((elem: any) => {
        const el = this.renderer.createElement('td');

        const maindiv = this.renderer.createElement('div');
        maindiv.setAttribute('class', 'd-flex');

        const textdiv = this.renderer.createElement('div');
        textdiv.setAttribute('class', 'fortitle');
        const text = this.renderer.createText(this.appColCount.toString());
        this.renderer.appendChild(textdiv, text);
        this.renderer.appendChild(maindiv, textdiv);

        const div = this.renderer.createElement('div');
        div.setAttribute('class', 'foricon');

        const divicon1 = this.renderer.createElement('div');
        divicon1.setAttribute('class', 'icon1');
        const upicon = this.renderer.createElement('i');
        upicon.setAttribute('class', 'pi pi-caret-up');
        this.renderer.appendChild(divicon1, upicon);

        const divicon2 = this.renderer.createElement('div');
        divicon2.setAttribute('class', 'icon2');
        const downicon = this.renderer.createElement('i');
        downicon.setAttribute('class', 'pi pi-caret-down');
        this.renderer.appendChild(divicon2, downicon);

        this.renderer.appendChild(div, divicon1);
        this.renderer.appendChild(div, divicon2);
        this.renderer.appendChild(maindiv, div);

        this.renderer.appendChild(el, maindiv);

        this.renderer.appendChild(elem.nativeElement, el);

      })
      this.appColCount = this.appColCount + 1;
    }

  }


  addColumnWeb() {
    let $this = this;
    function show() {
      $this.showButtonWeb = true;
    }
    if (this.webColCount <= 6) {

      this.tableRow3.toArray().forEach((elem: any) => {
        const el = this.renderer.createElement('td');
        el.setAttribute("class", "removeborder");
        const text = this.renderer.createElement('INPUT');
        text.setAttribute("type", "radio");
        text.setAttribute("name", "Web");
        text.setAttribute("id", "Web" + this.webColCount);
        text.onclick = function () { show(); };
        this.renderer.appendChild(el, text);
        this.renderer.appendChild(elem.nativeElement, el);
      })

      this.tableRow4.toArray().forEach((elem: any) => {
        const el = this.renderer.createElement('td');

        const maindiv = this.renderer.createElement('div');
        maindiv.setAttribute('class', 'd-flex');

        const textdiv = this.renderer.createElement('div');
        textdiv.setAttribute('class', 'fortitle');
        const text = this.renderer.createText(this.webColCount.toString());
        this.renderer.appendChild(textdiv, text);
        this.renderer.appendChild(maindiv, textdiv);

        const div = this.renderer.createElement('div');
        div.setAttribute('class', 'foricon');

        const divicon1 = this.renderer.createElement('div');
        divicon1.setAttribute('class', 'icon1');
        const upicon = this.renderer.createElement('i');
        upicon.setAttribute('class', 'pi pi-caret-up');
        this.renderer.appendChild(divicon1, upicon);

        const divicon2 = this.renderer.createElement('div');
        divicon2.setAttribute('class', 'icon2');
        const downicon = this.renderer.createElement('i');
        downicon.setAttribute('class', 'pi pi-caret-down');
        this.renderer.appendChild(divicon2, downicon);

        this.renderer.appendChild(div, divicon1);
        this.renderer.appendChild(div, divicon2);
        this.renderer.appendChild(maindiv, div);

        this.renderer.appendChild(el, maindiv);

        this.renderer.appendChild(elem.nativeElement, el);

      })
      this.webColCount = this.webColCount + 1;
    }

  }

  addColumnAppAndWeb() {
    let $this = this;
    function show() {
      $this.showButtonAppAndWeb = true;
    }
    if (this.AppAndwebColCount <= 6) {

      this.tableRow5.toArray().forEach((elem: any) => {
        const el = this.renderer.createElement('td');
        el.setAttribute("class", "removeborder");
        const text = this.renderer.createElement('INPUT');
        text.setAttribute("type", "radio");
        text.setAttribute("name", "AppAndWeb");
        text.setAttribute("id", "AppAndWeb" + this.appColCount);
        text.onclick = function () { show(); };
        this.renderer.appendChild(el, text);
        this.renderer.appendChild(elem.nativeElement, el);
      })

      this.tableRow6.toArray().forEach((elem: any) => {
        const el = this.renderer.createElement('td');

        const maindiv = this.renderer.createElement('div');
        maindiv.setAttribute('class', 'd-flex');

        const textdiv = this.renderer.createElement('div');
        textdiv.setAttribute('class', 'fortitle');
        const text = this.renderer.createText(this.AppAndwebColCount.toString());
        this.renderer.appendChild(textdiv, text);
        this.renderer.appendChild(maindiv, textdiv);

        const div = this.renderer.createElement('div');
        div.setAttribute('class', 'foricon');

        const divicon1 = this.renderer.createElement('div');
        divicon1.setAttribute('class', 'icon1');
        const upicon = this.renderer.createElement('i');
        upicon.setAttribute('class', 'pi pi-caret-up');
        this.renderer.appendChild(divicon1, upicon);

        const divicon2 = this.renderer.createElement('div');
        divicon2.setAttribute('class', 'icon2');
        const downicon = this.renderer.createElement('i');
        downicon.setAttribute('class', 'pi pi-caret-down');
        this.renderer.appendChild(divicon2, downicon);

        this.renderer.appendChild(div, divicon1);
        this.renderer.appendChild(div, divicon2);
        this.renderer.appendChild(maindiv, div);

        this.renderer.appendChild(el, maindiv);

        this.renderer.appendChild(elem.nativeElement, el);

      })
      this.AppAndwebColCount = this.AppAndwebColCount + 1;
    }

  }
  
















  changeShowButton(): void {
    this.showButton = true;
  }

  changeShowButtonEdit(): void {
    this.showButton = false;
    this.showButton2 = true;
  }

  changeShowButton2(): void {
    this.showButtonWeb = true;
  }

  changeShowButton2Edit(): void {
    this.showButtonWeb = false;
    this.showButtonWeb2 = true;
  }

  changeShowButton3(): void {
    this.showButtonAppAndWeb = true;
  }

  changeShowButton3Edit(): void {
    this.showButtonAppAndWeb = false;
    this.showButtonAppAndWeb2 = true;
  }

}