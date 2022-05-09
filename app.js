

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "img/air.png",
      },
      {
        code: "darkblue",
        img: "img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "img/jordan.png",
      },
      {
        code: "green",
        img: "img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "img/blazer.png",
      },
      {
        code: "green",
        img: "img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "img/crater.png",
      },
      {
        code: "lightgray",
        img: "img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "img/hippie.png",
      },
      {
        code: "black",
        img: "img/hippie2.png",
      },
    ],
  },
];


let choosenProduct=products[0];
const currentProductImg=document.querySelector('.productImg')
const currentProductTitle=document.querySelector('.productTitle')
const currentProductPrice=document.querySelector('.productPrice')
const currentProductColors=document.querySelectorAll('.color')
const currentProductSizes=document.querySelectorAll('.size')


const wrapper = document.querySelector(".sliderWrapper");
// console.log(wrapper);

const menuItems = document.querySelectorAll(".menuItem");
// console.log(menuItems); so this menuItems give us a nodeList which is similar to array
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // console.log("yes i clicked" +  index);
    // changeing the current slide
    wrapper.style.transform =`translateX(${-100*index}vw)`;

    // change the choosen product
choosenProduct=products[index];
//  change title of currentProduct
currentProductTitle.textContent=choosenProduct.title;
//  change price of currentProduct
currentProductPrice.textContent= "$"+choosenProduct.price;
// change description of currentproduct 
currentProductImg.src=choosenProduct.colors[0].img;

// change the colors variety as per selected shoes
currentProductColors.forEach((color,index)=>{
color.style.backgroundColor=choosenProduct.colors[index].code;
})


  });
});

// wrapper.style.transform = "translateX(-100vw)";

// rendering product img as per the color clicked.
currentProductColors.forEach((color,index)=>{
color.addEventListener("click",()=>{
  currentProductImg.src=choosenProduct.colors[index].img;
});
});


// Now we obviously want to disable the active size option when other size option is clicked.
currentProductSizes.forEach((currentsize)=>{
  currentsize.addEventListener("click",()=>{

    currentProductSizes.forEach((size=>{
      size.style.backgroundColor="white";
      size.style.color="black";
    }))
  currentsize.style.backgroundColor="black";
  currentsize.style.color="white";
})

})

// code for opening and closing of modal window.
const productButton=document.querySelector('.productButton');
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})
close.addEventListener("click",()=>{
  payment.style.display="none";
})

































