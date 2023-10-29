// get the trems of the loan to calculagte and validate them
function getValues() {
    let principal  = document.getElementById('loanAmount').value;
    let term = document.getElementById('loanTerm').value;
    let interest = document.getElementById('interestRate').value;

    principal = parseInt(principal);
    term = parseInt(term);
    interest = parseFloat(interest);

    if (isNaN(principal) || isNaN(term) || isNaN(interest) || principal <= 0 || term <= 0 || interest <= 0){
        Swal.fire({
            icon:'error',
            backdrop: false,
            title: 'Oops',
            text: 'Please enter valid numbers for your loan'
        })
    } else {
        let totals = calculateTotals(principal, term, interest);
        displayTotals(totals);

        let payments = calculatePayments(principal, term, interest, totals.monthlyPayment);
        displayPayments(payments);
      
    }

}

// calculate the totals for the loan
function calculateTotals (principal, term, rate){

    let monthlyPayment = (principal * (rate/1200)) / (1 - Math.pow(1 + rate/1200, -term));
    let totalCost = monthlyPayment * term;
    let totalInterest = totalCost - principal;

    // return an object with all the totals
    let loanTotals = {
        monthlyPayment: monthlyPayment,
        totalCost: totalCost,
        totalInterest: totalInterest, 
        totalPrincipal: principal       
    }

    return loanTotals;

}


// calculate each month of the loan
function calculatePayments(principal, term, rate, monthlyPayment){
    let balance = principal;
    let totalInterest = 0;

// for lopp to go through all of the months



//   put the calculations of each monht into an object
//   put that object into an array
// return an array of objects


}

// display the totals for the loan
function displayTotals(totals){
    let format = {
        style: 'currency',
        currency: 'USD'
    }

    document.getElementById('monthly-payment').textContent = totals.monthlyPayment.toLocaleString('en-US', format);
    document.getElementById('total-principal').textContent = totals.totalPrincipal.toLocaleString('en-US', format);
    document.getElementById('total-interest').textContent = totals.totalInterest.toLocaleString('en-US',  format);
    document.getElementById('total-cost').textContent = totals.totalCost.toLocaleString('en-US', format);
}   




function displayPayments(paymentsArr){

}



// display the month in a table
