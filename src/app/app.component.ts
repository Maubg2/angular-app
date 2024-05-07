import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './products/components/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola mundo!!!';
  enabled: boolean = false;

  courses: string[] = ['Angular', 'React', 'Spring'];

  setEnabled(): void{
    this.enabled = this.enabled ? false : true;
    console.log('Se hizo click en setEnabled')
  }

}
