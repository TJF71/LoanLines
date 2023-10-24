function getValues() {
    let loanamount = document.getElementById('loanAmount').value;
    let interest = document.getElementById('interestRate').value;
    let term = document.getElementById('loanTerm').value;

    calcutatePayments(loanamount, interest, term)

}


function calcutatePayments(principal, rate, term) {
    let loan = principal;
    let percent = rate;
    let time = term;
    let negTime = -time;
    let denom = 1 + (rate / 1200);

    let monthlyPayment = (loan * (percent / 1200)) / (1 - (denom ** negTime));

    let remainingBalance = loan;
    let interestPayment = (remainingBalance * percent) / 1200;
    let principalPayment = monthlyPayment - interestPayment;


    displayPayments(loan, monthlyPayment, time, percent)


}

function displayPayments(loan, monthlyPayment, time, percent) {

    const paymentTable = document.getElementById('payment-table');

    // clear the table
    paymentTable.innerHTML = '';

    let principal = loan;
    let interest = percent;
    let monthPayment = monthlyPayment
    let months = time;
    let interestPayment = 0;
    let principalPayment = 0;
    let remainingBalance = 0
    // let mPayment = monthlyPayment.toLocaleString('en-US', {style: 'currency',  currency: 'USD',});



    document.getElementById('total-principal').textContent = `Total Princiapl is: ${principal}`;
    document.getElementById('monthly-payments').textContent = `${monthPayment}`;

    for (let i = 0; i < months; i++) {
      
        console.log ("the start principal is:", principal);
        console.log ("the start interest is: ", interest);
        interest = principal * interest / 1200;
  
        console.log(interest)

        principalPayment = monthPayment - interest;
        console.log (principalPayment)


        remainingBalance = principal - principalPayment;
        console.log(remainingBalance); 

        principal = remainingBalance;
        // console.log(principal);







        // let eventRow = document.createElement('tr');
        // let  period = document.createElement('td'); 
        // eventRow.appendChild(period);


    }

}
