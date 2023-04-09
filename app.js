// to create a virtual data
const data = [
    {
        title: "Diriliş",
        author: "Tolstoy",
        year: 1899,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9XeEtDf8086y3W9rAD9oxlBM_aI1v6j2iIw&usqp=CAU",
        amount: 1
    },
    {
        title: "Sefiller",
        author: "Victor Hugo",
        year: 1862,
        url:"https://cdn.akakce.com/-/sefiller-victor-hugo-z.jpg",
        amount: 1
    },
    {
        title: "Bir İdam Mahkumunun Son Günü",
        author: "Victor Hugo",
        year: 1829,
        url:"https://productimages.hepsiburada.net/s/36/500/10531608920114.jpg",
        amount: 1
    },
    {
        title: "Ana",
        author: "Maksim Gorki",
        year: 1906,
        url:"https://img.kitapyurdu.com/v1/getImage/fn:11432909/wh:true/miw:200/mih:200",
        amount: 1
    },
    {
        title: "Markopaşa Yazıları ve Ötekiler",
        author: "Sabahatti Ali",
        year: 1998,
        url:"https://www.yapikrediyayinlari.com.tr/dosyalar/2020/06/Markopasa_yazilari-2230.jpg",
        amount: 1
    },
    {
        title: "Anna Karenina",
        author: "Tolstoy",
        year: 1877,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR163Tt4Bs7xkjt9PXxnBFnnuAaeGS0wIA1kuuSrZuDrpUxCYpmZyRXq3Jm6ogV3i7XkH4&usqp=CAU",
        amount: 1
    },
    {
        title: "İnsan Ne İle Yaşar",
        author: "Tolstoy",
        year: 1885,
        url:"https://i.dr.com.tr/cache/500x400-0/originals/0000000231443-1.jpg",
        amount: 1
    },
    {
        title: "İçimizdeki Şeytan",
        author: "Sabahattin Ali",
        year: 1940,
        url:"https://www.alternatifkitap.com/images/detailed/11/9789753638036.jpg",
        amount: 1
    },
    {
        title: "Beyaz Geceler",
        author: "Fyodor Mihailoviç Dostoyevski",
        year: 1848,
        url:"https://img.kitapyurdu.com/v1/getImage/fn:6609755/wh:true/wi:220",
        amount: 1
    },
    {
        title: "Hayvan Çiftliği",
        author: "George Orwell",
        year: 1945,
        url:"https://www.alfakitap.com/media/catalog/product/cache/7aaa48ea9734ca445e6a222a3fe7d59a/2/2/224479_9786053046363_19275.jpg",
        amount: 1
    }
];

//to get elements
const mainSection = document.querySelector(".index-main");
const homeIcon = document.querySelector(".fa-house");
const shoppingIcon = document.querySelector(".fa-cart-plus");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-main-content");
const shoppingCartNumber = document.querySelector(".shopping-number");
const cartArr = [];


displayMainCart();

// to write eventlistener function
homeIcon.addEventListener("click", () => {
    location.href = "https://github.com/fahriakbaba/Shopping-Cart";
    console.log("index.html is reloaded!");
});

//to open modal
shoppingIcon.addEventListener("click", () => {
    modal.style.display = "block";
    showCart();
});

//to close modal
function closeModal() {
    modal.style.display = "none";
}

//display booklist on browser
function displayMainCart() {
    const showDataOnBrowser = data.map(item => {
        return `
         <div class="cart">
            <img src="${item.url}" alt="cart-image" width="40px">
            <h4>${item.title}</h4>
            <p>${item.author}</p>
            <button type="button" onclick="addToCart('${item.title}', '${item.author}', '${item.year}', '${item.url}', '${item.amount}')">Add to cart</button>
         </div>
        `;
    });
    mainSection.innerHTML = showDataOnBrowser.join("");
}

//to add a book to cartArr
function addToCart(title, author, year, url, amount) {
    const data = {
        title,
        author,
        year,
        url,
        amount
    };

    const findItem = cartArr.find(item => item.title === data.title);
    if(findItem) {
        findItem.amount++;
        showCart();
        return
    }
    cartArr.push(data);
    showCart();
}

//to show book from cartArr 
function showCart() {
    const mapArr = cartArr.map(item => {
        return (`
        <div class="modal-cart">
            <div class="cart-info">
                <img src="${item.url}" alt="cart_image" class="cart-image" width="35" />
                <h5 class="title">${item.title}</h5>
            </div>
            <div class="button">
                <span class="numberOfCar">${item.amount}</span>
                <i class="fa-solid fa-trash" onclick="deleteItemFromCart('${item.title}')"></i>
            </div>
        </div>
        `)
    });

    mapArr.unshift(`<p>Close<i id="close-icon" class="fa-regular fa-circle-xmark" onclick="closeModal()"></i></p>`);

    if(!cartArr.length) {
        modalContent.innerHTML = `
        <p>Close<i id="close-icon" class="fa-regular fa-circle-xmark" onclick="closeModal()"></i></p>
        <p class="message" >No book in the booklist to  show!</p>
        `;
        shoppingCartAmount();
        return;
    }
    
    modalContent.innerHTML = mapArr.join("");
    shoppingCartAmount();
}

//to delete book from booklist in cartArr
function deleteItemFromCart(title) {
    const findIndexBook = cartArr.findIndex(bookName => bookName.title === title);
    cartArr.splice(findIndexBook, 1);
    showCart();
}

//to show cart number on cart shoping icon
function shoppingCartAmount() {
    const amountCart = cartArr.reduce((acc, crr) => {
        return acc + Number(crr.amount);
    }, 0);
    shoppingCartNumber.textContent = amountCart;
}