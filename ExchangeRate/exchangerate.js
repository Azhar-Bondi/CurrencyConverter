window.onload = function(){
    document.getElementById("btn").addEventListener("click", function(){
        
        //Get the id of product the user entered
       productId = document.getElementById("currencyId").value;
        fetchData(showdata);

       // document.getElementById("productName").innerHTML = //The product name received from API
    
      amount = document.getElementById("currencyInput").value;

      result = document.getElementById("Result").value;


    });
}



function showdata(json){
    result = json.rates.GBP * amount;
   // alert(json.rates.GBP * amount);
    var txt1 = "<p>Result</p>" + result;               // Create element with HTML 
    //var txt2 = $("<p>result</p>").text("Text.");   // Create with jQuery
    //var txt3 = document.createElement("p");  // Create with DOM
   // txt3.innerHTML = "Text.";
    $("body").append(txt1); 

}



function fetchData(cb) {
    console.log('entered fetchdata')
    $.ajax({
        url: 'https://api.apilayer.com/exchangerates_data/latest?apikey=lSWUs1QG4EtbkgUbGMmCP064gGwEGmep',
        type: 'GET',
        success: cb,
        error: function(err){
            console.log(err);
        }
    });
};

