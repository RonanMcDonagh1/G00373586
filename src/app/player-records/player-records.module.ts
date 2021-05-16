import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerRecordsPageRoutingModule } from './player-records-routing.module';

import { PlayerRecordsPage } from './player-records.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerRecordsPageRoutingModule
  ],
  declarations: [PlayerRecordsPage]
})
export class PlayerRecordsPageModule {}
