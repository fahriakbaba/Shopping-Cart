// to create a virtual data
const data = [
    {
        title: "Diriliş",
        author: "Tolstoy",
        year: 1899,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9XeEtDf8086y3W9rAD9oxlBM_aI1v6j2iIw&usqp=CAU"
    },
    {
        title: "Sefiller",
        author: "Victor Hugo",
        year: 1862,
        url:"https://cdn.akakce.com/-/sefiller-victor-hugo-z.jpg"
    },
    {
        title: "Bir İdam Mahkumunun Son Günü",
        author: "Victor Hugo",
        year: 1829,
        url:"https://productimages.hepsiburada.net/s/36/500/10531608920114.jpg"
    },
    {
        title: "Ana",
        author: "Maksim Gorki",
        year: 1906,
        url:"https://img.kitapyurdu.com/v1/getImage/fn:11432909/wh:true/miw:200/mih:200"
    },
    {
        title: "Markopaşa Yazıları ve Ötekiler",
        author: "Sbahatti Ali",
        year: 1998,
        url:"https://www.yapikrediyayinlari.com.tr/dosyalar/2020/06/Markopasa_yazilari-2230.jpg"
    },
    {
        title: "Diriliş",
        author: "Tolstoy",
        year: 1899,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9XeEtDf8086y3W9rAD9oxlBM_aI1v6j2iIw&usqp=CAU"
    },
    {
        title: "Sefiller",
        author: "Victor Hugo",
        year: 1862,
        url:"https://cdn.akakce.com/-/sefiller-victor-hugo-z.jpg"
    },
    {
        title: "Bir İdam Mahkumunun Son Günü",
        author: "Victor Hugo",
        year: 1829,
        url:"https://productimages.hepsiburada.net/s/36/500/10531608920114.jpg"
    },
    {
        title: "Ana",
        author: "Maksim Gorki",
        year: 1906,
        url:"https://img.kitapyurdu.com/v1/getImage/fn:11432909/wh:true/miw:200/mih:200"
    },
    {
        title: "Markopaşa Yazıları ve Ötekiler",
        author: "Sbahatti Ali",
        year: 1998,
        url:"https://www.yapikrediyayinlari.com.tr/dosyalar/2020/06/Markopasa_yazilari-2230.jpg"
    }
];

//to get elements
const mainSection = document.querySelector(".index-main");
const homeIcon = document.querySelector(".fa-house");
const shoppingIcon = document.querySelector(".fa-cart-plus");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-main-content");
const cartArr = [];


displayMainCart();

// to write eventlistener function
homeIcon.addEventListener("click", () => {
    location.reload();
    console.log("index.html is reloaded!");
});

shoppingIcon.addEventListener("click", () => {
    modal.style.display = "block";
    showCart();
});

function closeModal() {
    modal.style.display = "none";
}



function displayMainCart() {
    const showDataOnBrowser = data.map(item => {
        return `
         <div class="cart">
            <img src="${item.url}" alt="cart-image" width="40px">
            <h4>${item.title}</h4>
            <p>${item.author}</p>
            <button type="button" onclick="addToCart('${item.title}', '${item.author}', '${item.year}', '${item.url}')">Add to cart</button>
         </div>
        `;
    });
    mainSection.innerHTML = showDataOnBrowser.join("");
     
}

function addToCart(title, author, year, url) {
    const data = {
        title,
        author,
        year,
        url
    }

    cartArr.push(data);
    showCart();
}

function showCart() {
    const mapArr = cartArr.map(item => {
        return (`
        <div class="modal-cart">
            <div class="cart-info">
                <img src="${item.url}" alt="cart_image" class="cart-image" width="35" />
                <h5 class="title">${item.title}</h5>
            </div>
            <div class="button">
                <span class="numberOfCar">2</span>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        `)
    });

    mapArr.unshift(`<p>Close<i id="close-icon" class="fa-regular fa-circle-xmark" onclick="closeModal()"></i></p>`);
    
    modalContent.innerHTML = mapArr.join("");
}
