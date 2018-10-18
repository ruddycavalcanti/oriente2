
    import { Component , ViewChild} from '@angular/core';
    import { Platform ,Nav, AlertController, ToastController} from 'ionic-angular';
    import { StatusBar } from '@ionic-native/status-bar';
    import { SplashScreen } from '@ionic-native/splash-screen';
    
    
    
    import firebase from 'firebase';
    import { Unsubscribe } from '@firebase/util';
    import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';
    
    import { Events } from 'ionic-angular';
    
    import { Media, MediaObject} from '@ionic-native/media';
    import { AuthProvider } from '../providers/auth-provider';
    //import { FcmProvider } from '../providers/fcm';
    
  //import { tap } from 'rxjs/operators';

    let file: MediaObject;
    
    @Component({
      templateUrl: 'app.html'
    })
    export class MyApp {
      @ViewChild(Nav) nav: Nav;
    
    
      rootPage:any = "login";
    
    
      pages: Array<{title: string, component: any,  icon: string}>;
    
      email:any;
      is_admin:any = false;
    
      habilitarPlayer = false;
      musica_artista:any;
      musica_nome:any;
      musica_origem:any;
      musica_url:any; 
      
    
      botaoPause:boolean = false;
      botaoPlay:boolean = true;
      botaoRefresh:boolean= true;
      botaoRepeat:boolean= false;
      botaoShuffle:boolean= false;
      
      mediaTimer :any;
      duracao :any;
    
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public iab: InAppBrowser ,  public authProvider:AuthProvider, public events:Events,
    private media: Media, public alertCtrl:AlertController,
    public toastCtrl:ToastController
    //,public fcm:FcmProvider
  ) {
    
    
        this.initializeApp();
    
      }
    
    
      initializeApp() {
        this.platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          this.statusBar.styleDefault();
          this.splashScreen.hide();

          if (this.platform.is('cordova')) {
            this.getFcmToken();
          }

          
          this.platform.registerBackButtonAction(() => {
            this.presentConfirm();
          }, 100);
      
    
          const unsubscribe: Unsubscribe = firebase
            .auth()
            .onAuthStateChanged(user => {
              if (user) {
                this.rootPage = "home";
                this.email = user.email;
                
                unsubscribe();
              } else {
                this.rootPage = "login";
                unsubscribe();
              }
            });


            this.pages = [
              { title: 'Home', component: "home" , icon: 'home'},
             
            { title: 'Agenda de Shows', component: "shows", icon: 'calendar' },
            { title: 'Vídeos', component: "videos" , icon: 'film'},
            { title: 'Notícias', component: "noticias" , icon: 'paper'},
            { title: 'Músicas', component: "tabs" , icon: 'headset'},
            { title: 'Loja Virtual' , component: "Loja Virtual", icon: 'cart'},
            { title: 'Meu Perfil', component: "perfil", icon: 'person' },
            { title:  'Usuários', component:  "usuarios" , icon: 'people'},
           { title: 'Configurações' , component: "configuracoes", icon: 'settings'}
            ];
        
            });
    
          this.events.subscribe('musica:played', (musica_artista, musica_nome, musica_url, habilitar_player) => {
       
              this.musica_artista = musica_artista;
              this.musica_nome = musica_nome;
              this.musica_url = musica_url;
              this.habilitarPlayer = habilitar_player;
    
              if(musica_artista !=undefined){
                this.tocarMusicaAoAbrir(musica_url);
              }
    
            }); 
    
    
      
      }
    
    
    
      ionViewDidLoad(){
    
       }
    
    
    
      
   
    
        
    tocarMusicaAoAbrir(musica_url){
    
      if (file != undefined) { // se tiver tocando
        file.release();
      }else{
        file = this.media.create(musica_url);
      }
    
      if (this.media != undefined) { // se tiver tocando
            file = this.media.create(musica_url);
             file.play();
             this.botaoPause = true;
             this.botaoPlay = false;
      }
    }
    
    
     tocarMusica(){
          if (file != undefined) { // se tiver tocando
            file.play();
            this.botaoPause = true;
            this.botaoPlay = false;
        }
    }
    

    pausarMusica(){
      if (file != undefined) {
       file.pause();
       this.botaoPause = false;
       this.botaoPlay = true;
      }
   }


   refresh(){
    this.botaoRefresh = false;
    this.botaoRepeat = true;
    this.botaoShuffle = false;
}
repeat(){
    this.botaoRefresh = false;
    this.botaoRepeat = false;
    this.botaoShuffle = true;
}
shuffle(){
    this.botaoRefresh = true;
    this.botaoRepeat = false;
    this.botaoShuffle = false;
}

anterior(){
}



proximo(){
    // skip to 10 seconds (expects int value in ms)
    file.seekTo(20000);
}


share(){
   //this.socialSharing.share();
}

  
    
      openLojaVirtual(){
        const options: InAppBrowserOptions = {
          zoom: 'no',
           hidden: 'yes',
           location:  'yes'
        }
    
        const website = 'https://bocadooriente.com/';
    
       const browser = this.iab.create(website, "_blank", options);
       browser.show();
      }
    
      openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        
        if(page.component=="Loja Virtual"){
          this.openLojaVirtual();
        }else{
          this.nav.setRoot(page.component);
        }   
      }
    
    
  presentConfirm() {
    
     this.alertCtrl.create({
        title: 'Oriente APP',
        message: 'Você deseja sair do aplicativo?',
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Sim',
            handler: () => {
              this.platform.exitApp();
              console.log('Sim clicked');
            }
          }
        ]
      }).present();
    }


    getFcmToken(){
      
         
       /*  this.fcm.getToken();
    
        this.fcm.listenToNotifications().pipe(
          tap(msg =>{
            const toast = this.toastCtrl.create({
              message: msg.body,
              duration:5000
            });
            toast.present();
          })
        ).subscribe()  */
    
      
     }


    /*
      getUserInfo(){
    
        this.authProvider.currentUserInfo().then(snapshot=> {
    
    
                if(snapshot.val().user_tipo=="administrador" || snapshot.val().user_tipo!="administrador"){
                  
                  this.is_admin = true; 
                  this.storage.set("is_admin", true);
    
                  this.pages.push({
                    title:  'Usuários', component: "usuarios", icon: 'people'
                    
                  },  {
                    title:  'Configurações', component: "configuracoes", icon: 'settings'
                  });
                  }
        
    
          }).catch(error => {
          });
        
      } */

      
    }
    
    