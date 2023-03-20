import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {
  /* variable de html que permitira tener visible o oculta la propiedad de la clase is-active*/
  isActive = false;
  /* funcion que permitira activer o desactivar la variable cada que se le de clic al logo de barras del menu*/
  toggleActive() {
    /* la baiable sera igual al contrario de ella misma cada vez que se llame la funcion */
    this.isActive = !this.isActive;
  }
}
