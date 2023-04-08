// to create a virtual data
const data = [
    {
        title: "Diriliş",
        author: "Tolstoy",
        year: 1899,
        url:""
    },
    {
        title: "Sefiller",
        author: "Victor Hugo",
        year: 1862,
        url:""
    },
    {
        title: "Bir İdam Mahkumunun Son Günü",
        author: "Victor Hugo",
        year: 1829,
        url:""
    },
    {
        title: "Ana",
        author: "Maksim Gorki",
        year: 1906,
        url:""
    },
    {
        title: "Markopaşa Yazıları ve Ötekiler",
        author: "Sbahatti Ali",
        year: 1998,
        url:"https://www.yapikrediyayinlari.com.tr/dosyalar/2020/06/Markopasa_yazilari-2230.jpg"
    }
];

//to get elements
const shoppingDiv = document.querySelector(".container");

const showDataOnBrowser = data.map(item => {
 
    return `
     <div>
        <img src="${item.url}" alt="cart-image">
        <h4>${item.title}</h4>
        <p>${item.author}</p>
        <button type="button" onclick="addToCart('${item.title}', '${item.author}', '${item.year}', '${item.url}')">Add to cart</button>
     </div>
    `;
});


shoppingDiv.innerHTML = showDataOnBrowser.join("");
 

function addToCart(title, author, year, url) {
    const data = {
        title,
        author,
        year,
        url
    }
    console.log("data: ",data);
}