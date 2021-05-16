import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerRecordsPage } from './player-records.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRecordsPageRoutingModule {}
