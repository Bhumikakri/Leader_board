// console.log("hello world!!!");
// let div1 = document.createElement("div");
// div1.style.height = '100px';
// div1.style.width = '100px';
// div1.style.backgroundColor = 'gray';
// div1.style.color = 'red';
// div1.style.padding = '5px';


// // console.log(div1);
// document.body.appendChild(div1);
// div1.innerText = "Welcome to the geekster with bhumii"

// let createMenu = (Name) => {
//     let liElement = document.createElement("li");
//     console.log("liElement");
//     liElement.innerText = Name;
//     return liElement;
// }


// let list = document.querySelector("ul");
// list.setAttribute("class")


// let menu = document.querySelector(".menu");
// menu.appendChild(createMenu("Home"))
// menu.appendChild(createMenu("Contact Us"))
// menu.appendChild(createMenu("About"))
// menu.appendChild(createMenu("Location"))
// menu.appendChild(createMenu("Number"))

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     console.log(getRandomColor);
//     return color;
//   }
  
  
  
//   function setRandomColor() {
//     console.log(getRandomColor);
//     $("#colorpad").css("background-color", getRandomColor());
//   }

// let btn = document.querySelector("button");
// console.log(btn);
  

// let i=0;

// function BackChange(){
//     if (i === colorArray.length) {
//         i = 0;
//       }
//       document.body.style.backgroundColor = colorArray[i];
//       i++;
//     }

// let button = document.getElementById("btn1");
// let buttn = document.getElementById("btn2");

// let colorArray =[ "rgb(2,0,36)"," rgb(0, 255, 200)"," rgb(247, 0, 255)","rgb(255, 166, 0)","rgb(255, 0, 0)",
// "rgb(0, 255, 0)","rgb(250, 0, 255)","rgb(0, 0, 255)","rgb(245, 240, 0)","rgb(255, 251, 0)","rgb(0, 255, 191);","rgb(255, 0, 234)","rgb(0, 255, 136)","rgb(179, 255, 0)","rgb(255, 102, 0)",
// "rgb(195, 0, 255)","rgb(255, 0, 128)","rgb(155, 0, 108)"," rgb(105, 105, 118)","rgb(0, 0, 0)","rgb(105, 0, 0)"," rgb(105, 102, 0)",
// "rgb(255, 255, 255)","rgb(205, 205, 255)","rgb(255, 132, 132)"]

// let i=0;

// button.addEventListener("click", () => {
//     document.body.style.background = colorArray;
//     if (i == colorArray.length) {
//         i = 0;
//       }
//       document.body.style.background = colorArray[i];
//       i++;
//         button.classList.add("button");

//     setTimeout(() => {
//         button.classList.remove("button");
//     },400);
// })

// let imageArray =["url('https://globalpassiveinvestor.files.wordpress.com/2021/05/pexels-photo-1146708.jpeg?w=1200')","url('https://wallpapercave.com/wp/9KxfB3a.jpg')"]

//  let j=0;
// buttn.addEventListener("click", () => {
//     // document.body.style.backgroundRepeat = no-repeat;
//     if (j == imageArray.length) {
//         j = 0;
//       }
//       document.body.style.backgroundImage = imageArray[j];
//       j++;
//         buttn.classList.add("buttonn");

//     setTimeout(() => {
//         buttn.classList.remove("buttonn");
//     },400);
// })
// button.addEventListener("mouseleave", () => {
//     button.classList.remove("button")
// })

// let Ball = document.getElementById("Ball");
// document.addEventListener('keydown', moveBall);

// let tp=0;
// let left=0;

// function moveBall(event){
// // console.log(event);

// let browserHeight = document.documentElement.clientHeight;
// let browserWidth = document.documentElement.clientWidth;

// let key = event.keyCode;
// console.log()

// if(key == 68 || key == 39){
//     if(left + elementWidth + 10 <= browserWidth){
//         Ball.style.left = left+10+px;
//         left+=10;
//     }
// }
// }

const productList = document.querySelectorAll('#show')
// console.log(productList);
const cartList = document.querySelector('.buy')
console.log(cartList)
const buttons1 = document.querySelectorAll('.btnplus')
const buttons2 = document.querySelectorAll('.btnminus')
// console.log(buttons2);

productList.forEach((ele,index) => {
    console.log(ele);
    buttons1[index].addEventListener("click", function(){
        const proElement = ele.querySelector('span');
        proElement.innerText =parseInt(proElement.innerText) + 1;
        updateCart();
    })
    
})

productList.forEach((ele,index) => {
    buttons2[index].addEventListener("click", function(){
        const proElement = ele.querySelector('span');
        const num = parseInt(proElement.innerText)
        if(num > 0){
            proElement.innerText =num - 1;
            updateCart();
        }
        
    })
})

// productList.forEach((ele,index) => {
//     buttons1[index].addEventListener("click", function(){
//         // console.log( buttons1[index], index);
//         const showElement = ele.querySelector('.name');
//         const price = ele.querySelector(".rs");
//         // console.log(price)
//         const quantity = ele.querySelector('.buttons #quantity')
//         console.log(quantity.innerText)
//         let para = document.createElement('p');
//         let amountElement = document.createElement('p');
//         let items = document.createElement('p');
//         if(quantity.innerText == 1){
//             para.innerText = showElement.innerText;
//             cartList.appendChild(para);
//             amountElement.innerText = price.innerText;
//             cartList.appendChild(amountElement);
//             items.innerText = quantity.innerText
//             cartList.appendChild(items)
//         }
//         else{
//              items.innerText = parseInt(quantity.innerText) + 1;
//              console.log(items.innerText);


//         }
        

//     })
// })

function updateCart(){
    const cart = document.getElementById('buy');
    const totalprice =document.getElementById('total-amount');
    cart.innerHTML = "";
    let totalpriceValue = 0 ;
    productList.forEach((Product) =>{
        const quantity = parseInt(document.querySelector(`.div1 #${Product.name} .quantProduct`)
        .textContent,
      10);
      if(quantity > 0){
        const cartItem = document.createElement('div');
        cartItem.classList.add("item1");
        cartItem.innerHTML  =`<h5 class="productCartName">${Product.name}</h5>
        <div class="content">
          <h5 class="quantCartProduct">${quantity}</h5>
          <h5>*</h5>
          <h5 class="productCartPrice">${Product.price}</h5>
        </div>`;
        cart.appendChild(cartItem);
        totalpriceValue += quantity * Product.price;
      }
    });
    if(cart.children.length === 0){
        cart.innerHTML = "<p>No Product added to the cart</p>";
        totalprice.textContent = "INR 0";
      } else {
        totalprice.textContent = `INR ${totalpriceValue}`;
    }
}