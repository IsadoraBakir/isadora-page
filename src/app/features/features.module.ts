import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { WorkExperiencesComponent } from './work-experiences/work-experiences.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    BannerComponent,
    TechnologiesComponent,
    WorkExperiencesComponent,
    ContactsComponent,
  ],
  imports: [CommonModule],
  exports: [
    BannerComponent,
    TechnologiesComponent,
    WorkExperiencesComponent,
    ContactsComponent,
  ],
})
export class FeaturesModule {}
