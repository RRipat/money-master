
/*-------------------------------------
    inpute for function items
-------------------------------------*/
function gateToValue(nameOf){
    const previousInputValue = document.getElementById(nameOf);
    const newValue = parseFloat(previousInputValue.value);
    return newValue; 
}
function getText(nameOf){
    const previousInputValue = document.getElementById(nameOf);
    const newValue = parseFloat(previousInputValue.innerText);
    return newValue; 
}


/*-----------------------
    total Expenses items
------------------------*/
function expencesTotal(){
    const foodValue = gateToValue("food");
    const rentValue = gateToValue("rent");
    const clothValue = gateToValue("cloth");
    const totalExpanses = document.getElementById("total-expences");
    const income = gateToValue("income-total");
    const newTotalExpanses = foodValue + rentValue + clothValue;
    
    if(newTotalExpanses < income){
        const totalExpansesValue = totalExpanses.innerText = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothValue);
        document.getElementById("error-expanses").style.display = "none";
        return totalExpansesValue;
    }
    else{
        document.getElementById("error-expanses").style.display = "block";
    }
}

/*------------------
     balance
------------------*/
function balance(){
const totalIncomeValue = gateToValue("income-total");
const totalExpanses = parseFloat(expencesTotal());
const balance = document.getElementById("balance");
const balanceValue = balance.innerText = totalIncomeValue - totalExpanses;
return balanceValue;
}

/*-----------------
   total saving
-----------------*/
function totalSaving(){
    const totalIncomeValue =gateToValue("income-total");
    const savingInputValue = gateToValue("saving-input");
    const totalBalance = getText("balance");
    const savingAmount = document.getElementById("saving-amount");
    const newSavingAmount = (totalIncomeValue / 100) * savingInputValue;

    if(newSavingAmount < totalBalance){
        const savingAmountValue = savingAmount.innerText = (totalIncomeValue / 100) * savingInputValue;
        document.getElementById("error-saveing-amount").style.display = "none";
        return savingAmountValue;
    }
    else{
        document.getElementById("error-saveing-amount").style.display = "block";
    }
 
}

/*-------------------------
    remaining Balance
-------------------------*/
function forRemaningBalance(){
  const balance =  getText("balance");
  const savingAmount = getText("saving-amount");
  const remainingBalance = document.getElementById("remaining-balance");
  remainingBalance.innerText = balance - savingAmount;
}

/*-----------------------
      Error heandel
-----------------------*/

function errorHeandel(forError){
    const errorMassage = document.getElementById(forError);
    errorMassage.style.display = "block";
}
function errorRemove(removeError){
    const errorMassage = document.getElementById(removeError);
    errorMassage.style.display = "none";
}

/*--------------------------
    call for calculate
--------------------------*/
document.getElementById("calc-btn").addEventListener("click",function(){
    expencesTotal();
    balance();
})

/*-----------------------
    call for saving
------------------------*/
document.getElementById("save-button").addEventListener("click",function(){
    totalSaving()
    forRemaningBalance()
})

/* income Error area */
document.getElementById("income-total").addEventListener("keyup",function(){
    const totalValue = gateToValue("income-total");
    
    if(totalValue < 0){
        errorHeandel("error-income");
    }
    else {
        errorRemove("error-income"); 
    }
})

/* food error area*/
document.getElementById("food").addEventListener("keyup",function(){
    const totalValue = gateToValue("food");
    
    if(totalValue < 0){
        errorHeandel("error-food");
    }
    else {
        errorRemove("error-food"); 
    }
})

/* rent cost error arror*/
document.getElementById("rent").addEventListener("keyup",function(){
    const totalValue = gateToValue("rent");
    
    if(totalValue < 0){
        errorHeandel("error-rent");
    }
    else {
        errorRemove("error-rent"); 
    }
})

/* rent cost arror area */
document.getElementById("cloth").addEventListener("keyup",function(){
    const totalValue = gateToValue("cloth");
    
    if(totalValue < 0){
        errorHeandel("error-cloth");
    }
    else {
        errorRemove("error-cloth"); 
    }
})

/* rent saving error */
document.getElementById("saving-input").addEventListener("keyup",function(){
    const totalValue = gateToValue("saving-input");
    
    if(totalValue < 0){
        errorHeandel("error-save");
    }
    else {
        errorRemove("error-save"); 
    }
})
