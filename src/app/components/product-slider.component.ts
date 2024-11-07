import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative overflow-hidden h-[400px] mb-8">
      <div class="flex transition-transform duration-500" [style.transform]="'translateX(-' + currentSlide() * 100 + '%)'">
        @for (slide of slides; track slide.id) {
          <div class="min-w-full relative">
            <img [src]="slide.imageUrl" [alt]="slide.title" class="w-full h-[400px] object-cover">
            <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h2 class="text-2xl font-bold">{{slide.title}}</h2>
              <p>{{slide.description}}</p>
            </div>
          </div>
        }
      </div>
      <button
        (click)="prevSlide()"
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
        ←
      </button>
      <button
        (click)="nextSlide()"
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
        →
      </button>
    </div>
  `
})
export class ProductSliderComponent {
  slides = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/1200/400?random=1',
      title: 'Summer Collection',
      description: 'Discover our new summer arrivals'
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/1200/400?random=2',
      title: 'Special Offers',
      description: 'Up to 50% off on selected items'
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/1200/400?random=3',
      title: 'New Arrivals',
      description: 'Check out our latest products'
    }
  ];

  currentSlide = signal(0);

  nextSlide() {
    this.currentSlide.update(current => 
      current === this.slides.length - 1 ? 0 : current + 1
    );
  }

  prevSlide() {
    this.currentSlide.update(current => 
      current === 0 ? this.slides.length - 1 : current - 1
    );
  }
}