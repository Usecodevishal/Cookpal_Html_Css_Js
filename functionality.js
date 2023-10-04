const vegData = recipesData.filter((el)=>{
    return el.type == "veg";
  })

  
    



//   searchRecipe.addEventListener("input", function(e){
//     console.log(e.target.value);
//   })

  let clickSearchBtn = document.getElementById("search-btn");
  clickSearchBtn.addEventListener("click", function(){
    let userLookingFor = document.getElementById("search-recipe").value.toLowerCase();
   let userRecipe =  recipesData.filter(el=>el.name.toLowerCase().includes(userLookingFor))

    cusineContainer.innerHTML = "";
  if(userRecipe.length!==0){
    displayRecipesData(userRecipe, foodVessel);
    
  }else if(userRecipe.length == 0){
    console.log(userRecipe);
    document.getElementById("recipes-container").innerHTML = "<h1>The Item is Unavailable now!</h1>"
    console.log("Recipe Not Found")
  }
  

    console.log("search button is clicked");


  })

  console.log(vegData);
  
  const nonVegData = recipesData.filter((el)=>{
    return el.type == "non-veg";
  })

  let allRecipesBtnEle = document.getElementById("show-all-btn");
allRecipesBtnEle.addEventListener("click",function(e){

//   cusineContainer.innerHTML = "";

  displayRecipesData(recipesData, foodVessel);

  console.log("all recipes button clicked",e.target.value,recipesData);
})

let vegRecipesBtnEle = document.getElementById("show-veg-btn");
vegRecipesBtnEle.addEventListener("click",function(e){

//   cusineContainer.innerHTML = "";


  displayRecipesData(vegData, foodVessel);

  

  console.log("veg Button Clicked",e.target.value,vegData);

})

let nonVegRecipesBtnEle = document.getElementById("show-non-veg-btn");
nonVegRecipesBtnEle.addEventListener("click",function(e){

//   cusineContainer.innerHTML = "";


 displayRecipesData(nonVegData, foodVessel);

  console.log("Non veg Button clicked",e.target.value,nonVegData);

})