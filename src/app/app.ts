import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isNavCollapsed: boolean = true
  onNavClick() {
    this.isNavCollapsed = !this.isNavCollapsed
  }
}
