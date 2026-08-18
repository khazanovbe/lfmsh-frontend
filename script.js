const addIncomeBtn = document.querySelector('.income-button');
const addExpenceBtn = document.querySelector('.expence-button');

const nameInput = document.querySelector('.transaction-input .name input');
const amountInput = document.querySelector('.transaction-input .amount input');

const transactions = [];



addExpenceBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const amount = amountInput.value;

    transactions.push({
        name: name,
        amount: amount,
        type: 'expence'
    });
    renderUI();
});
addIncomeBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const amount = amountInput.value;

    transactions.push({
        name: name,
        amount: amount,
        type: 'income'
    });
    renderUI();
});

function renderUI() {
    const table = document.querySelector('.transaction-table-body');

    table.innerHTML = '';
    transactions.forEach((transaction) => {
        const newLine = document.createElement('tr');
        const nameCell = document.createElement('td');
        const amountCell = document.createElement('td');
        const typeCell = document.createElement('td');
        nameCell.innerHTML = transaction.name;
        amountCell.innerHTML = transaction.amount;
        typeCell.innerHTML = transaction.type;
        newLine.appendChild(nameCell);
        newLine.appendChild(amountCell);
        newLine.appendChild(typeCell);
        table.appendChild(newLine);
    });
}

