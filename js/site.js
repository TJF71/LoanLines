function getValues() {
    let loanamount = document.getElementById('loanAmount').value;
    let interest = document.getElementById('interestRate').value;
    let term = document.getElementById('loanTerm').value;

    calcutatePayments(loanamount, interest, term)

}


function calcutatePayments(principal, rate, term){
    let loan = principal;
    let percent = rate;
    let time = term;
    let negTime = -time;
    let denom = 1 + (rate/1200);

    let monthlyPayment = (loan * (percent/1200)) /( 1-(denom**negTime));

    let remainingBalance = loan;
    let interestPayment = (remainingBalance * percent)/1200;
    let principalPayment = monthlyPayment-interestPayment;
    

    displayPayments(loan, monthlyPayment, time,)


}

function displayPayments(loan, monthlyPayment, time) {
    
    const paymentTable = document.getElementById('payment-table');

    // clear the table
    paymentTable.innerHTML = '';

    let principal = loan;
    let mPayment = monthlyPayment.toLocaleString('en-US', {style: 'currency',  currency: 'USD',});
    let months = time;

    document.getElementById('total-principal').textContent = `Total Princiapl is: ${principal}`;
    document.getElementById('monthly-payments').textContent  = `${mPayment}`;

    for (let i = 0; i < months; i++){
        let month = month[i];
        
        
    }

}
