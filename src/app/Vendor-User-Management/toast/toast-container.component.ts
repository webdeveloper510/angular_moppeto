import { Component, TemplateRef } from '@angular/core';
import { ToastService } from '../../services/toast.service';


@Component({
  selector: 'app-toasts',
  template: `

  `,
  host: { '[class.ngb-toasts]': 'true' }
})
export class ToastsContainer {
  constructor(public toastService: ToastService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}