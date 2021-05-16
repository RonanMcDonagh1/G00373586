import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamRecordsPageRoutingModule } from './team-records-routing.module';

import { TeamRecordsPage } from './team-records.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamRecordsPageRoutingModule
  ],
  declarations: [TeamRecordsPage]
})
export class TeamRecordsPageModule {}
