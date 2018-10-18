import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryNoticiasPage } from './category-noticias';

import { NoticiasServices } from '../../providers/noticias-services';

@NgModule({
    declarations: [
      CategoryNoticiasPage,
    ],
    imports: [
      IonicPageModule.forChild(CategoryNoticiasPage),
    ],
    entryComponents: [
      CategoryNoticiasPage
    ],
    providers:[
      NoticiasServices
    ]
  })
  export class CategoryNoticiasPageModule {}