import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { InstructionsModule as FlogoInstructionsModule } from '../flogo.instructions/flogo.instructions.module';

import { FlogoAppComponent }   from './components/flogo.component';
import { FlogoNavbarComponent }   from './components/navbar.component';

import {routing, appRoutingProviders} from "./flogo.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2Bs3ModalModule,
    FlogoInstructionsModule,
    routing
  ],
  declarations: [
    FlogoAppComponent,
    FlogoNavbarComponent
  ],
  bootstrap: [FlogoAppComponent],
  providers: [appRoutingProviders]
})
export class FlogoModule {}
