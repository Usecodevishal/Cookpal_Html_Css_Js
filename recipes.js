const recipesData = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];



let cusineContainer = document.getElementById("recipes-container");



const foodVessel = document.getElementById("recipes-container");



// console.log(recipesData);


// console.log(foodCardElement);
// function displayAll(data){
//     displayRecipesData(data);
// }



// function displayVegRecipes(vegData){
//   displayRecipesData(vegData);
// }

function displayRecipesData(Data, foodVessel){
  foodVessel.innerHTML = "";
  Data.map((ele,index)=>{
    var foodCardElement = document.createElement("div");
  foodCardElement.setAttribute("class", "recipe-card");
  
   let recipeImg = document.createElement("img");
   recipeImg.setAttribute("class","cusine-img");
   recipeImg.src = ele.imageSrc;
  
   let recipeType =  document.createElement("p");
   recipeType.innerText = ele.type;
   recipeType.setAttribute("class","food-type");
  
   let nameStarFlex = document.createElement("div");
   nameStarFlex.setAttribute("class","name-star-flex");
   
   let cusineName = document.createElement("p");
   cusineName.setAttribute("class","recipe-name");
   cusineName.innerText = ele.name;
  
   let startRatingDiv = document.createElement("div");
   startRatingDiv.style.display = "flex";
   startRatingDiv.style.alignItems = "center";
  
   startRatingDiv.style.gap = "0.5rem";
  
   let star = document.createElement("img");
   star.style.width = "16px";
   star.style.height = "16px";
  
   star.src = "./assets/Star.png";
  
   let rating = document.createElement("p");
   rating.innerText = ele.rating;
  
   startRatingDiv.append(star,rating);
  
   nameStarFlex.append(cusineName,startRatingDiv);
  
   let timingLikeDiv = document.createElement("div");
   timingLikeDiv.style.display="flex";
   timingLikeDiv.style.justifyContent="space-between";
   timingLikeDiv.style.alignItems="center";
  
   let timing = document.createElement("p");
   timing.setAttribute("class","time-red");
   timing.innerText = ele.time;
  
   let likeCommentDiv = document.createElement("div");
   likeCommentDiv.style.display = "flex";
   likeCommentDiv.style.alignItems = "center";
   likeCommentDiv.style.gap = "1rem";
  
  
   let like = document.createElement("img");
   like.src = "./assets/like.png";
   like.style.width = "22px";
   like.style.height = "22px";
  
  
   let comment = document.createElement("img")
   comment.src = "./assets/comments.png";
   comment.style.width = "22px";
   comment.style.height = "22px";
  
   likeCommentDiv.append(like,comment);
  
   timingLikeDiv.append(timing,likeCommentDiv);
  
   
  
  
  
  
   
  
  
   foodCardElement.append(recipeImg,recipeType,nameStarFlex,timingLikeDiv);
   foodVessel.append(foodCardElement);
  })
}




