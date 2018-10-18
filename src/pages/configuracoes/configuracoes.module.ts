import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracoesPage } from './configuracoes';
import { ConfiguracoesServices } from '../../providers/configuracoes-services';


@NgModule({
    declarations: [
      ConfiguracoesPage,
    ],
    imports: [
      IonicPageModule.forChild(ConfiguracoesPage),
    ],
    entryComponents: [
      ConfiguracoesPage
    ],
    providers:[
      ConfiguracoesServices
    ]
  })
  export class ConfiguracoesModule {}