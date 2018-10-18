
export  class Destaque {

  

   constructor(
    public action:string,
    public actionValue:string,
   public post_image:string,
   public desc:string,
   public  titulo:string,
   public  post_uid:string,
   public  order:number,
  ){}

  set_actiond(action){
    this.action = action;
  }

  get_action(){
    return this.action;
  }

}