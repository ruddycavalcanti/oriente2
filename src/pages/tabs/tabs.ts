import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage({
	name: 'tabs',
  segment: 'tabs'
  })
@Component({
	selector: 'page-tabs',
  template: ` 
    <ion-tabs selectedIndex="{{selectedIndex}}" #myTabs  margin-bottom  tabsPlacement="top" tabsHighlight="true">
        <ion-tab [root]="tab1Root" [rootParams]="musicaMp3Url" tabTitle="Musicas" tabIcon="musical-notes"></ion-tab>
        <ion-tab [root]="tab2Root" tabTitle="Playlists" tabIcon="list"></ion-tab>
        <ion-tab [root]="tab3Root" tabTitle="Local" tabIcon="folder"></ion-tab>
        <ion-tab [root]="tab4Root"  tabTitle="Player" tabIcon="radio"></ion-tab>
      </ion-tabs>
    `
})
export class TabsPage {

  tab1Root = "musicas";
  tab2Root = "playlists";
  tab3Root = "local";
  tab4Root = "player";

  selectedIndex = 0;

}
