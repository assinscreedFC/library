
    function book(title,author, nbrPage, read) {
        this.title=title;
        this.author = author; 
        this.nbrPage=nbrPage;
        this.read=read;

        this.consol=function () {
            console.log("Title: "+this.title);
            console.log( "Author :"+this.author);
            if(this.nbrPage!=undefined){
                console.log("Number of pages : "+this.nbrPage);
            }
            if(this.read != undefined) {
                    console.log("Have you read it ? : "+this.read);
            }
         };    
};
            
const bro=new book( "The Alchemist", "Paulo Coelho","294",true);
bro.consol();