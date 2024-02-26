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
            console.log(this.clone);
            section.appendChild(newClone);
            const neww=section.lastElementChild;
            neww.querySelector('.name').innerHTML="Title: "+this.title ;
            neww.querySelector('.autor').innerHTML="Author :"+this.author;
            neww.querySelector('.page').innerHTML="pages: "+this.nbrPage;
            
           if (this.read){
                neww.querySelector(".read").classList.add("active");
           }
            neww.classList.add(this.title);    
    }

    removeALL(){
        const newClone = section.getElementsByClassName(this.title);
        const elementsArray = Array.from(newClone);
        console.log(elementsArray);
        elementsArray.forEach(element => {
            element.remove();
        });  
    }
}

const addBook=document.querySelector("#submit");
addBook.addEventListener('click',() => setBook());


function setBook() {
    const p=document.querySelector(".para");
        
let impposible=false;
    Books.forEach(book=>{
    if(titre.value===book.title) {
        impposible=true ;
    }
    });
    if(!impposible){  Books.push( new book(titre.value,author.value,page.value,read.checked));
        localStorage.setItem("BOOKS",JSON.stringify(Books));
        Books[Books.length-1].card();
        chekBtn();
        togglemodal();
        p.innerHTML="";
    }else{
        if(p.innerHTML===""){
        p.innerHTML="Ce livre est déja dans votre bibliothèque";
        console.log(":existe deja");
        }
    }
}
    
(function (){
    
    if(localStorage.getItem('BOOKS') != null) {
        Books =JSON.parse(localStorage.getItem("BOOKS"));
       
        Books.forEach((e)=>{
            new book(e.title,e.author,e.nbrPage,e.read).card();
       });
    }


chekBtn();

})();
// btn pour enlever une  carte rem et checkit pour read
function chekBtn() {
    const rem=document.querySelectorAll(".remove");
    const checkit=document.querySelectorAll(".read");
    checkit.forEach((btn)=> btn.addEventListener("click" , (BTN)=>{BTN.target.classList.toggle("active");} ));

    rem.forEach(element => {
    element.addEventListener('click', (you)=>{you.target.parentElement.remove();
    console.log(you.target.parentElement.classList[1]);
    Books=Books.filter((e)=> e.title!=you.target.parentElement.classList[1]);
    localStorage.setItem("BOOKS", JSON.stringify(Books));
    });
   
});
}
