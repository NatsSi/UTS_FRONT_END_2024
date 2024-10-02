const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", function () {
    const selectedPaymentMethod = document.querySelector('input[name="payment"]:checked');

    if (selectedPaymentMethod) {
        window.location.href = "setiawan noob";
    } else {
        alert("Please select a payment method before proceeding.");
    }
});
