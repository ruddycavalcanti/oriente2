
export  class Ponto {

  

   constructor(
   public post_author_email:string,
    public post_author_id:string,
   public pontos_totais:number,
   public  pontos_atuais:number

  ){}

  set_post_author_id(post_author_id){
    this.post_author_id = post_author_id;
  }

  get_post_author_id(){
    return this.post_author_id;
  }

}