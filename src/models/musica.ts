
export  class Musica {

  

   constructor(
   public post_uid:string,
    public post_name:string,
    public musica_url:string,
    public  post_image:string,
    public post_artista:string
  ){}

  set_post_name(post_name){
    this.post_name = post_name;
  }

  get_post_name(){
    return this.post_name;
  }

}