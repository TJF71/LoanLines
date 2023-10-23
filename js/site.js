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
    let denom = 1+ (rate/1200);

    let monthlyPayment = (loan * (percent/1200)) /( 1-(denom**negTime));
    console.log ("the monthly payment is ", monthlyPayment);



}

function displayPayments() {
    
    let principal = getLoanAmount();

    document.getElementById('total-principal').textContent = `Total Princiapl is: ${principal}`;


}