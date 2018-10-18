
export  class Post {

  

   constructor(
    public post_name:string,
    public post_address:string,
   public post_phone:string,
   public post_content:string,
   public  post_image:string,
   public post_date:string,
   public post_uid:string,
   public author_email:string

  ){}

  set_post_author_id(post_name){
    this.post_name = post_name;
  }

  get_post_author_id(){
    return this.post_name;
  }

}