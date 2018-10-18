
export  class Configuracao {

  

   constructor(
    public facebookUrl:string,
    public youtubeUrl:string,
    public instagramUrl:string,
    public spotifyUrl:string,
    public websiteUrl:string,
    public lojaVirtualUrl:string,
    public songkickId:string
  ){}

  set_post_name(youtubeUrl){
    this.youtubeUrl = youtubeUrl;
  }

  get get_post_name(){
    return this.youtubeUrl;
  }

}