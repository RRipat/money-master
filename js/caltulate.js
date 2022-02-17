
/*-------------------------------------
    inpute for function
-------------------------------------*/
function getValue(nameOf){
    const previousValue = document.getElementById(nameOf);
    const newValue = parseFloat(previousValue.value);
    return newValue; 
}
function getInnerText(nameOf){
    const previousValue = document.getElementById(nameOf);
    const newValue = parseFloat(previousValue.innerText);
    return newValue; 
}


/*-----------------------
    total Expenses
------------------------*/
function totalExpenses(){
    const foodCostValue = getValue("food");
    const rentCostValue = getValue("rent");
    const clothCostValue = getValue("cloth");
    const totalExpanses = document.getElementById("total-expences");
    const income = getValue("income-total");
    const newTotalExpanses = foodCostValue + rentCostValue + clothCostValue;
    
    if(newTotalExpanses < income){
        const totalExpansesValue = totalExpanses.innerText = parseFloat(foodCostValue) + parseFloat(rentCostValue) + parseFloat(clothCostValue);
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
const totalIncomeValue = getValue("income-total");
const totalExpanses = parseFloat(totalExpenses());
const balance = document.getElementById("balance");
const balanceValue = balance.innerText = totalIncomeValue - totalExpanses;
return balanceValue;
}

/*-----------------
   total saving
-----------------*/
function totalSaving(){
    const totalIncomeValue =getValue("income-total");
    const savingInputValue = getValue("saving-input");
    const totalBalance = getInnerText("balance");
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
  const balance =  getInnerText("balance");
  const savingAmount = getInnerText("saving-amount");
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
    totalExpenses();
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
    const totalValue = getValue("income-total");
    
    if(totalValue < 0){
        errorHeandel("error-income");
    }
    else {
        errorRemove("error-income"); 
    }
})

/* food error area*/
document.getElementById("food").addEventListener("keyup",function(){
    const totalValue = getValue("food");
    
    if(totalValue < 0){
        errorHeandel("error-food");
    }
    else {
        errorRemove("error-food"); 
    }
})

/* rent cost error arror*/
document.getElementById("rent").addEventListener("keyup",function(){
    const totalValue = getValue("rent");
    
    if(totalValue < 0){
        errorHeandel("error-rent");
    }
    else {
        errorRemove("error-rent"); 
    }
})

/* rent cost arror area */
document.getElementById("cloth").addEventListener("keyup",function(){
    const totalValue = getValue("cloth");
    
    if(totalValue < 0){
        errorHeandel("error-cloth");
    }
    else {
        errorRemove("error-cloth"); 
    }
})

/* rent saving error */
document.getElementById("saving-input").addEventListener("keyup",function(){
    const totalValue = getValue("saving-input");
    
    if(totalValue < 0){
        errorHeandel("error-save");
    }
    else {
        errorRemove("error-save"); 
    }
})
