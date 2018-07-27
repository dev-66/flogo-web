import {NgModule} from '@angular/core';
import {AddActivityDirective} from './add-activity.directive';
import {TaskAddComponent} from './task-add.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import {CommonModule} from '@angular/common';
import {AddActivityService} from '@flogo/flow/task-add-new/add-activity.service';
import {TranslateModule} from '@ngx-translate/core';
import {InstallerModule} from '@flogo/flow/shared/installer';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    TranslateModule,
    InstallerModule
  ],
  declarations: [
    AddActivityDirective,
    TaskAddComponent
  ],
  providers: [AddActivityService],
  entryComponents: [
    TaskAddComponent
  ],
  exports: [
    AddActivityDirective
  ]
})
export class TaskAddModule {}
