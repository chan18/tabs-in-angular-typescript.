
import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-tab',
  styles: [
    `
    .pane{
      padding: 1em;
    }
  `
  ],
  templateUrl: `tab.template.html`
})

export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
  @Input() isCloseable = false;
  @Input() template;
  @Input() dataContext;
}

