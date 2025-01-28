class Evenoddprinter{
 
constructor(num){
    this.numbr=num;
}

 evenoddprinter(){
   if(this.numbr%2==0){
    console.log('even');
   }
   else{
    console.log('odd');
   }

}

}
var eop=new Evenoddprinter(6);
eop.evenoddprinter();