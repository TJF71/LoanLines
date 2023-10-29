// get the trems of the loan to calculagte and validate them
function getValues() {
    let principal  = document.getElementById('loanAmount').value;
    let term = document.getElementById('loanTerm').value;
    let interest = document.getElementById('interestRate').value;

    principal = parseInt(loanAmount);
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
        let totals = calculateTotals(principal, term, rate);
        displayTotals(totals)
    }

}

// calculate the totals for the loan
function calculateTotals (principal, term, rate){

    let monthlyPayment = (principal * (rate/1200)) / (1 - Math.pow(1 + rate/1200, -term));
    let totalCost = monthlyPayment * term;
    let totalInterest = totalCost = principall;

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
function calculatePayments(paymentsArr){

}

// display the totals for the loan
function displayTotals(loan){

}

function displayPayments(paymentsArr){

}



// display the month in a table
