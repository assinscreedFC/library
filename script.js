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
    const clone=document.querySelector(`#bookTemplate`).content.cloneNode(true);
        // let clone=temp.content.cloneNode(true);
        console.log(clone);
    clone.querySelector('.name').innerHTML=titre.value;
    clone.querySelector('.autor').innerHTML=author.value;
    clone.querySelector('.page').innerHTML=page.value;
    section.appendChild(clone);
    
    }else{

    }
   
    console.log(Books)
}
  