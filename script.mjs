const addBook = document.querySelector(".addBook");
const deleteBook = document.querySelector(".deleteBook");
const submit = document.getElementById("submitBtn");
const pop = document.getElementById("bookTile");
const grid = document.getElementById("bookGrid");


let library = [];
let newBook;

class Book 
{
   constructor(author, title, pages, read)
   {
      this.author = tile.author.value;
      this.title = tile.title.value;
      this.pages = tile.pages.value;
   }
}


addBook.addEventListener("click", ()=>
{
   pop.style.display = "block";
})

submit.addEventListener("click", ()=>
{
   newBook = new Book(author, title, pages);
   library.push(newBook);
   saveData();
   display();
   tile.reset();
   
})
 

function createBook(data)
{
   //book container
   let newBook = document.createElement("div");

   //Author
   let author = document.createElement("div");

   //Title
   let title = document.createElement("div");

   //Pages
   let pages = document.createElement("div");

   //Switch
   let contain = document.createElement("div");
   let check = document.createElement("input");
   check.type = "checkbox"
   let slider = document.createElement("div");
   contain.appendChild(check);
   contain.appendChild(slider);
   
   //Delete Button
   let deleteBtn = document.createElement("button");
   const grid = document.getElementById("bookGrid");
   
   /*Adding class names to the book tile
     the author, title, pages, delete button & switch
   */
   newBook.classList.add("book");
   author.classList.add("author");
   title.classList.add("title");
   pages.classList.add("pages");
   contain.classList.add("contain");
   slider.classList.add("slider");
   check.classList.add("check");
   deleteBtn.classList.add("delete");
   newBook.setAttribute("id", library.indexOf(data));

   author.textContent = data.author;
   title.textContent = data.title;
   pages.textContent = data.pages;
   deleteBtn.textContent = "Delete"

   newBook.appendChild(author);
   newBook.appendChild(title);
   newBook.appendChild(pages);
   newBook.appendChild(contain);
   newBook.appendChild(deleteBtn);

   deleteBtn.setAttribute("id", "deleteBtn");

   deleteBtn.addEventListener("click", ()=>
   {
      library.splice(library.indexOf(data),1)
      saveData();
      display();
   })

   grid.appendChild(newBook);
   
}

function display()
{

   const bookNew = document.querySelectorAll(".book"); 
   bookNew.forEach(bookNew => grid.removeChild(bookNew));
   for(let i = 0; i < library.length; i++ )
   {
      createBook(library[i]);
   }

   console.log(library[0]);
}

function saveData()
{
   localStorage.setItem(`library`, JSON.stringify(library));
}

function refresh()
{
   if(!localStorage.library)
   {
      display();
   }
   else
   {
      let object = localStorage.getItem(`library`);
      object = JSON.parse(object);
      library = object;
      display();
   }
   
}

refresh();
