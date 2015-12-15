/* SantaModel assists santa's helpers in packing children's requests.
 * It provides quality control by checking if the requests are being
 * fulfilled
 */

var SantaModel = {
  
  /* Initializes the model with a list of requests, 
   * and sets the first one as the current one 
   */
   collection: requests,
    
   init : function(list){
       
   },
  
   /* It moves "current" to the next request */
   next : function (){
       
       $(".card").html("");
       var i=0;
       return i+1;
   },
  
   /* Returns the current request. 
    * If all requests have been processed (there is no current one), it returns null 
    */
   getCurrentRequest : function () {
   },  
    
   /* Packs the given item if it fulfills the current request.       
    * returns 1 if the given item fulfills the request (= answer)
    * returns 0 if the given item does not fulfill the request
    */
    //confronto se risposta è giusta:
   pack : function(item) {
       
       if( document.getElementById( $(".card").val() ) == document  )
       
   }      
  
};

var tmpl0= "<h2> TEST </h2> <br> ";
var tmplYES= "<li> <button id= ID> OPTION </a> </li> <br>";
var tmplNO= "<li> <button id= ID> OPTION </a> </li> <br>";

var SantaView= {
    
    init: function(){
            $(".card").append(tmpl0.replace("TEST",SantaController.getData(0).question));
            $(".card").append(tmplYES.replace("OPTION",SantaController.getData(0).options[0]).replace("ID",0));
            $(".card").append(tmplNO.replace("OPTION",SantaController.getData(0).options[1]).replace("ID",0));
        
    },
    
    layout: function(position){
        
            
            $(".card").append(tmpl0.replace("TEST",SantaController.getData(position).question));
            $(".card").append(tmplYES.replace("OPTION",SantaController.getData(position).options[0]).replace("ID",position));
            $(".card").append(tmplNO.replace("OPTION",SantaController.getData(position).options[1]).replace("ID",position));
        
    }
};

var SantaController= {
    
    getInitView: function(){
        return SantaView.init();
    },
    
    getData: function(pos){
        return SantaModel.collection[pos];
    },
    
    initLayout: function(position){
        return SantaView.layout(position);
    },
    
    getnext: function(){
        return SantaModel.next();
    }
    
}

$(document).ready(function(){
    
    SantaController.getInitView();
    
    $("button").click( function(){

        SantaController.initLayout( SantaController.getnext() );
        
    })
    
    
     
});

