const modalContainer = document.querySelector('.modal-container');
const modalTriggers=document.querySelectorAll(".modal-trigger");
const titre=document.querySelector("#titleInput");
const author=document.querySelector("#author");
const page=document.querySelector("#page");
const read=document.querySelector("#check");
const section=document.querySelector("section");
let Books=[];

modalTriggers.forEach( trigger => trigger.addEventListener('click', ()=>togglemodal()));

function togglemodal() {
    
    modalContainer.classList.toggle("active");    
    titre.value="";
    author.value="";
    page.value="";
    read.checked=false;

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
            section.appendChild(newClone);
            const neww=section.lastElementChild;
            neww.querySelector('.name').innerHTML="Title: "+this.title ;
            neww.querySelector('.autor').innerHTML="Author :"+this.author;
            neww.querySelector('.page').innerHTML="pages: "+this.nbrPage;
            
           if (this.read){
                neww.querySelector(".read").classList.add("active");
                neww.querySelector(".read").innerHTML="Read";
           }else{
            neww.querySelector(".read").innerHTML="Not read";
           }
            neww.classList.add(this.title);    
    }

    removeALL(){
        const newClone = section.getElementsByClassName(this.title);
        const elementsArray = Array.from(newClone);

        elementsArray.forEach(element => {
            element.remove();
        });  
    }
}

const addBook=document.querySelector("#submit");
const form=document.querySelector( "#form" );
form.addEventListener('submit',function(e) {
    e.preventDefault();
    setBook();
});
addBook.addEventListener('submit',(e) =>{e.preventDefault(); ;});


function setBook() {
    const p=document.querySelector(".para");
        
let impposible=false;
    Books.forEach(book=>{
    if(titre.value===book.title) {
        impposible=true ;
    }
    });
   
    if(!impposible){  
        Books.push( new book(titre.value,author.value,page.value,read.checked));
        localStorage.setItem("BOOKS",JSON.stringify(Books));
        Books[Books.length-1].card();
        
        togglemodal();
        p.innerHTML="";
        chekBtn();
        
    }else{
        if(p.innerHTML===""){
        p.innerHTML="Ce livre est déja dans votre bibliothèque";
        
        }
    }
}

(function (){
    
    if(localStorage.getItem('BOOKS') != null) {
        Books =JSON.parse(localStorage.getItem("BOOKS"));
       
        Books.forEach((e)=>{
            if(e.title!="")
            new book(e.title,e.author,e.nbrPage,e.read).card();
       });
       chekBtn();
    }

})();
// btn pour enlever une  carte rem et checkit pour read 
function chekBtn() {
    const rem=document.querySelectorAll(".remove");
    const checkit=document.querySelectorAll(".read");
    checkit.forEach((btn)=> btn.addEventListener("click" , (BTN)=>{BTN.target.classList.toggle("active")
    if(BTN.target.classList.contains("active")){
    BTN.target.innerHTML="Read";
     Books.forEach((e)=>{if(e.title==BTN.target.parentElement.classList[1]){
            e.read=true;

        }});
       
    } else{
        BTN.target.innerHTML="Not read";
        Books.forEach((e)=>{if(e.title==BTN.target.parentElement.classList[1]){
            e.read=false;

        }});
     }
     
      localStorage.setItem("BOOKS", JSON.stringify(Books));
    
    ;} ));

    rem.forEach(element => {
        element.addEventListener('click', (you)=>{you.target.parentElement.remove();

    
        Books=Books.filter((e)=> e.title!=you.target.parentElement.classList[1]);
        localStorage.setItem("BOOKS", JSON.stringify(Books));
        });
   
    });
}