import { Component, OnInit } from '@angular/core';
import { PartsDataService, Part } from '../parts-data.service';

@Component({
  selector: 'app-home-list',
  standalone: false,
  templateUrl: './home-list.html',
  styleUrl: './home-list.css',
})
export class HomeList implements OnInit {
  items: Part[] = [];

  constructor(private partsDataService: PartsDataService) { }
  
  ngOnInit(): void {
    this.partsDataService.getPartsList()
      .subscribe({
        next: (parts) => {
          this.items = parts;
          console.log('Parts loaded:', this.items.length);
        },
        error: (err) => {
          console.error('Error loading parts:', err);
          // Keep items as empty array on error
        }
      });
  }
}

export class Parts { 
_id!: string; 
_partName!: string; 
_partType!: string; 
_description!: string; 
_price!: number; 
_quantity!: number; 
}



