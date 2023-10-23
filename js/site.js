function getLoanAmount() {
    let loanamount = document.getElementById('loanAmount').value;

    return loanamount;
}

function getInterest(){;

    let interest = document.getElementById('interestRate').value;

    return interest;
}


function getTerm(){

    let totalPrincipal = document.getElementById('loanTerm').value;


}


function calcutatePayments(){


}

function displayPayments() {
    
    let principal = getLoanAmount();

    document.getElementById('total-principal').textContent = `${principal}`;


}