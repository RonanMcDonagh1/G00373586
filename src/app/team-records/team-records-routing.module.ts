import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamRecordsPage } from './team-records.page';

const routes: Routes = [
  {
    path: '',
    component: TeamRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRecordsPageRoutingModule {}
