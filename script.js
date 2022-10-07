const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);


function calculateAmount(e) {
    e.preventDefault(); 
    const amount = document.querySelector("#amount").value;
    const people = document.querySelector("#people").value;

    if (amount === "" || people === "" || people < 1) {
        Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please enter your information!'
    })
    return false;
    }


    let amountPerPerson = amount / people;

    amountPerPerson = amountPerPerson.toFixed(2);

    document.querySelector("#dividedBill").textContent = amountPerPerson;

}