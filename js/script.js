
 let nutritionAnalysisData;

    
 const $input = $('input[type="text"]');
 const $calories = $("#calories");
 const $totalFat = $("#fat");
 const $totalProtein = $("#protein");
 const $totalCholesterol = $("#cholesterol");
 const $totalSodium = $("#sodium");
 


 function handleGetData(event){
    event.preventDefault();
    
    $.ajax({
        url:`https://api.edamam.com/api/nutrition-data?app_id=ffef944c&app_key=077f3f278f8f86b7d236a724425e6710%09&nutrition-type=cooking&ingr=${$input.val()}` 
    
 
    })
    .then(
        function(data){
            console.log(data);
    
     nutritionAnalysisData = data;
     console.log(data.totalNutrients.FAT.quantity);
     console.log(data.totalNutrients.PROCNT.quantity);
     console.log(data.totalNutrients.CHOLE.quantity);
     console.log(data.totalNutrients.NA.quantity);
     render(data);
     {$input.val()}

        },
     function(error){
         console.log("error", error);
     });
 }
     function render(data){
         $calories.text(data.calories);
         $totalFat.text(data.totalNutrients.FAT.quantity+data.totalNutrients.FAT.unit);
         $totalProtein.text(data.totalNutrients.PROCNT.quantity+data.totalNutrients.PROCNT.unit);
         $totalCholesterol.text(data.totalNutrients.CHOLE.quantity+data.totalNutrients.CHOLE.unit);
         $totalSodium.text(data.totalNutrients.NA.quantity+data.totalNutrients.NA.unit);
     
 }
 $("form").on("submit", handleGetData);


