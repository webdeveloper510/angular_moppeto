import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  constructor() { }


  private show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  private remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  public showSuccess(text?: String) {
    this.show(`${text ? text : 'successfully done your work!'}`, { classname: 'customToast bg-success text-light', delay: 8000 });
    setInterval(() => {
      this.toasts = [];
    }, 8000);
  }

  public showDanger(text?: String) {
    this.show(`${text ? text : 'Error!'}`, { classname: 'customToast forextraMarginTop bg-danger text-light', delay: 8000 });
    setInterval(() => {
      this.toasts = [];
    }, 8000);
  }
}
