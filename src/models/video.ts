
export  class Video {

  

   constructor(
   public post_uid:string,
    public post_name:string,
   public post_content:string,
   public  post_image:string,
   public video_url:string,
   public post_description:string

  ){}

  set_post_name(post_name){
    this.post_name = post_name;
  }

  get_post_name(){
    return this.post_name;
  }

}