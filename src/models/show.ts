
export  class Show {

  

   constructor(
   public post_uid:string,
    public post_name:string,
   public post_content:string,
   public  post_image:string,
   public post_dia:string,
   public post_local:string,
   public post_horario:string,
   public post_cidade:string,
   public post_estado:string,
   public link_ingresso:string

  ){}

  set_post_name(post_name){
    this.post_name = post_name;
  }

  get_post_name(){
    return this.post_name;
  }

}