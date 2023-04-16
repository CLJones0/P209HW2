let pizzaCost = 0;
function sizeSelect(RadioElement)
{
    if(RadioElement.value == null)
    {
        alert("please select a size");
    }
    
    let sizeOfPizza = RadioElement.value;
    
    if(sizeOfPizza == "small")
    {
        pizzaCost=7;
    }
    
    else if (sizeOfPizza == "medium")
    {
        pizzaCost=10;
    }
    
    else if (sizeOfPizza == "large")
    {
        pizzaCost=14;
    }
}

function toppingsSelect()
{
    let numberToppings = document.getElementById("numToppings").value;

    if(numberToppings == "1")
    {
        pizzaCost += 2;
    }
    
    else if(numberToppings == "2")
    {
        pizzaCost += 3;
    }
}

function printOrderCompletion(){
    document.getElementById("completedOrder").innerHTML = "Thanks for the order! Your pizza costs $" + pizzaCost;
    pizzaCost = 0;
}
