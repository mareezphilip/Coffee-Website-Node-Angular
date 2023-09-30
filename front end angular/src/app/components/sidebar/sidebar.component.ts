import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 categories=[ "hot Coffee" , "ice coffee" , "tea" , "Frappuccino"  , "fresh drinks" ]
}
