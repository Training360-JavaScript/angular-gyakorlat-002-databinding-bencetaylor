import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Struktúraváltás';

  menuItems: {title: string, link: string, order: number}[] = [
    {title: 'Támogatás', link: '/support', order: 3},
    {title: 'Vállalati ügyfelek', link: '/enterprise', order: 2},
    {title: 'Szolgáltatások', link: '/services', order: 1},
    {title: 'Árak', link: '/prices', order: 4},
  ];

  regButtonText: string = 'Regisztráció';
}
