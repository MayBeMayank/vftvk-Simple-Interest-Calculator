function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    if(principal<=0){
        alert("Enter a positive number");
    }
    else
    {   
        //calculate the interest.
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        
        //printing result in span element
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    }
    
}
//Updating rate span
function updateRate() 
{   
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_value").innerText=rateval;
}