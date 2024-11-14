import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@NgModule({
  declarations: [BannerComponent, TechnologiesComponent],
  imports: [CommonModule],
  exports: [BannerComponent, TechnologiesComponent],
})
export class FeaturesModule {}
