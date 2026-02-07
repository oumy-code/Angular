import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-public',
  imports: [RouterLink,RouterModule],
  templateUrl: './header-public.component.html',
  styleUrl: './header-public.component.css'
})
export class HeaderPublicComponent {

}
