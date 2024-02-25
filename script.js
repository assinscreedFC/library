const modalContainer = document.querySelector('.modal-container');
const modalTriggers=document.querySelectorAll(".modal-trigger");

modalTriggers.forEach( trigger => trigger.addEventListener('click', ()=>togglemodal()));

function togglemodal() {
    modalContainer.classList.toggle("active");    
}
 
 

 
 
 
 
class book{
    
    constructor(title,author, nbrPage, read){
        this.title=title;
        this.author = author; 
        this.nbrPage=nbrPage;
        this.read=read;
        this.clone = document.querySelector('#bookTemplate').content.cloneNode(true);

    }

    card(){
        const newClone = this.clone.cloneNode(true);
            // let clone=temp.content.cloneNode(true);
            console.log(this.clone);
            section.appendChild(newClone);
            const neww=section.lastElementChild;
            neww.querySelector('.name').innerHTML="Title: "+this.title ;
            neww.querySelector('.autor').innerHTML="Author :"+this.author;
            neww.querySelector('.page').innerHTML="pages: "+this.nbrPage;
            
           if (this.read){
            
           }
            neww.classList.add(this.title);    
    }

    removeALL(){
        const newClone = section.getElementsByClassName(this.title);

        // Convert HTMLCollection to an array for easier manipulation
        const elementsArray = Array.from(newClone);
        console.log(elementsArray);
        // Remove each element
        elementsArray.forEach(element => {
            element.remove();
        });  
    }
}


 
 
 
 
 
 
 
 
//  function book(title,author, nbrPage, read) {
            
//     this.title=title;
//         this.author = author; 
//         this.nbrPage=nbrPage;
//         this.read=read;

//         this.consol=function () {
//             console.log("Title: "+this.title);
//             console.log( "Author :"+this.author);
//             if(this.nbrPage!=undefined){
//                 console.log("Number of pages : "+this.nbrPage);
//             }  
//                     console.log("Have you read it ? : "+this.read);   
//          };    
// };
const titre=document.querySelector("#titleInput");
const author=document.querySelector("#author");
const page=document.querySelector("#page");
const read=document.querySelector("#check");
const section=document.querySelector("section");
let Books=[];


const addBook=document.querySelector("#submit");
addBook.addEventListener('click',() => setBook());


function setBook() {
let impposible=false;
    Books.forEach(book=>{
    if(titre.value===book.title) {
        impposible=true ;
    
    }
    });
    if(!impposible){  Books.push( new book(titre.value,author.value,page.value,read.checked));
        localStorage.setItem(localStorage.length-1,JSON.stringify(Books));
        JSON.parse(localStorage.getItem("book"));
        console.log(Books);
        let to=Books.pop();
        to.card();

        
    //     console.log(localStorage);
    // const clone=document.querySelector(`#bookTemplate`).content.cloneNode(true);
    //     // let clone=temp.content.cloneNode(true);
    //     console.log(clone);
    // clone.querySelector('.name').innerHTML=titre.value;
    // clone.querySelector('.autor').innerHTML=author.value;
    // clone.querySelector('.page').innerHTML=page.value;
    // section.appendChild(clone);
    
    }else{

    }
   
    console.log(Books)
}
(function (){
    for (let index = 0; index < localStorage.length-1; index++) {
        let key=localStorage.key(index);
        let addBook=JSON.parse(localStorage.getItem(key));
        console.log(addBook);
new book(addBook[0].title,addBook[0].author,addBook[0].nbrPage,addBook[0].read).card();
}

})();
  