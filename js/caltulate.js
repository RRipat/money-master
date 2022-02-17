
// document.getElementById('calc-btn').addEventListener('click', function(){
    
//     const foodTotal = document.getElementById('food').value;
//     const rentTotal = document.getElementById('rent').value;
//     const clothesTotal = document.getElementById('clothes').value;
//     const totalCost = parseFloat(foodTotal) + parseFloat(rentTotal) + parseFloat(clothesTotal);
 
//     const totalExpences = document.getElementById('total-expenses');
//     totalExpences.innerText = totalCost;
// })
// document.getElementById('calc-btn').addEventListener('click', function(){
//     const incomeTotal = document.getElementById('income-total').value;
//     const total = parseFloat(incomeTotal) - totalExpences;
//     const remainingBalance = document.getElementById('remaining').innerText;
//     remainingBalance.innerText = total;
// })

                // second try

/*-------------------------------------
    catch InputValue using function
-------------------------------------*/
function getValue(isName){
    const previousValue = document.getElementById(isName);
    const newValue = parseFloat(previousValue.value);
    return newValue; 
}
function getInnerText(isName){
    const previousValue = document.getElementById(isName);
    const newValue = parseFloat(previousValue.innerText);
    return newValue; 
}


/*-----------------------
    total Expenses
------------------------*/
function totalExpenses(){
    const foodCostValue = getValue("food-cost");
    const rentCostValue = getValue("rent-cost");
    const clothCostValue = getValue("cloth-cost");
    const totalExpanses = document.getElementById("total-expanses");
    const income = getValue("total-income");
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
const totalIncomeValue = getValue("total-income");
const totalExpanses = parseFloat(totalExpenses());
const balance = document.getElementById("balance");
const balanceValue = balance.innerText = totalIncomeValue - totalExpanses;
return balanceValue;
}

/*-----------------
   total saving
-----------------*/
function totalSaving(){
    const totalIncomeValue =getValue("total-income");
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
document.getElementById("calculate-btn").addEventListener("click",function(){
    totalExpenses();
    balance();
})

/*-----------------------
    call for saving
------------------------*/
document.getElementById("save-btn").addEventListener("click",function(){
    totalSaving()
    forRemaningBalance()
})

/* income Error heandelar */
document.getElementById("total-income").addEventListener("keyup",function(){
    const totalValue = getValue("total-income");
    
    if(totalValue < 0){
        errorHeandel("error-income");
    }
    else {
        errorRemove("error-income"); 
    }
})

/* food Cost Error heandelar */
document.getElementById("food-cost").addEventListener("keyup",function(){
    const totalValue = getValue("food-cost");
    
    if(totalValue < 0){
        errorHeandel("error-food");
    }
    else {
        errorRemove("error-food"); 
    }
})

/* rent Cost Error heandelar */
document.getElementById("rent-cost").addEventListener("keyup",function(){
    const totalValue = getValue("rent-cost");
    
    if(totalValue < 0){
        errorHeandel("error-rent");
    }
    else {
        errorRemove("error-rent"); 
    }
})

/* rent cloth Error heandelar */
document.getElementById("cloth-cost").addEventListener("keyup",function(){
    const totalValue = getValue("cloth-cost");
    
    if(totalValue < 0){
        errorHeandel("error-cloth");
    }
    else {
        errorRemove("error-cloth"); 
    }
})

/* rent saving Error heandelar */
document.getElementById("saving-input").addEventListener("keyup",function(){
    const totalValue = getValue("saving-input");
    
    if(totalValue < 0){
        errorHeandel("error-save");
    }
    else {
        errorRemove("error-save"); 
    }
})
