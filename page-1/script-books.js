function addFavBook(bookname) {
    !bookname.includes('Great') && favBooks.push(bookname);
}

function printFavBook() {
    for (let books of favBooks) {
        const botao = document.querySelector('.button');
        botao.addEventListener('click', () => {
            document.querySelector('.resultado').innerText += ` > ${books} \n`;
            console.log(books);
        });
    }
}

let favBooks = [];

addFavBook('A song of ice and fire');
addFavBook('The Great gatsby');
addFavBook('Crime and Punishment');
addFavBook('Great Expectations');
addFavBook('You don`t know js');

printFavBook();
