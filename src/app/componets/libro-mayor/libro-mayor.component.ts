import { Component, OnInit } from '@angular/core';
import { LibroMayorServiceService } from '../../services/libro-mayor-service.service';

@Component({
  selector: 'app-libro-mayor',
  templateUrl: './libro-mayor.component.html',
  styleUrl: './libro-mayor.component.css'
})
export class LibroMayorComponent implements OnInit {
  libroMayor: any = {};

  constructor(private libroMayorService: LibroMayorServiceService) { }

  ngOnInit(): void {
    this.libroMayorService.getLibroMayor().subscribe(data => {
      this.libroMayor = data;
    });
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
