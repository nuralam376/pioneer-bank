// Login button event handler
const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", function () {
	const loginArea = document.getElementById("login-area");
	loginArea.style.display = "none";
	const transactionArea = document.getElementById("transaction-area");
	transactionArea.style.display = "block";
});

// Deposit button event handler
const depositBtn = document.getElementById("addDeposit");

depositBtn.addEventListener("click", function () {
	const depositNumber = getInputNumber("deposit");

	updateSpanText("currentDeposit", depositNumber);
	updateSpanText("currentBalance", depositNumber);

	document.getElementById("deposit").value = "";
});

// Withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");

withdrawBtn.addEventListener("click", function () {
	const withdrawAmount = getInputNumber("withdrawAmount");

	updateSpanText("currentWithdraw", withdrawAmount);
	updateSpanText("currentBalance", -1 * withdrawAmount);

	document.getElementById("withdrawAmount").value = "";
});

function getInputNumber(id) {
	const amount = document.getElementById(id).value;
	const amountNumber = parseFloat(amount);
	return amountNumber;
}

function updateSpanText(id, depositNumber) {
	const currentAmount = document.getElementById(id).innerText;
	const currentAmountNumber = parseFloat(currentAmount);
	const totalAmount = depositNumber + currentAmountNumber;
	document.getElementById(id).innerText = totalAmount;
}
