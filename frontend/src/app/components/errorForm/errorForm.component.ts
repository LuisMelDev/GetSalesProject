import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-form',
  template: `
    <span
      class="block w-full mb-2 mt-1 p-2 border border-red-600 border-l-4 rounded bg-red-100 text-xs text-gray-800"
    >
      {{mensaje}}
    </span>
  `,
})
export class ErrorForm {
    @Input() mensaje;
}
