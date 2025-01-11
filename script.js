const form = document.getElementById('add-item-form');
const itemNameInput = document.getElementById('item-name');
const itemQuantityInput = document.getElementById('item-quantity');
const inventoryList = document.getElementById('inventory-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = itemNameInput.value.trim();
    const itemQuantity = parseInt(itemQuantityInput.value.trim(), 10);

    if (itemName && itemQuantity > 0) {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${itemName}</td>
            <td>${itemQuantity}</td>
            <td><button class="action-btn" onclick="deleteRow(this)">Delete</button></td>
        `;

        inventoryList.appendChild(newRow);

        itemNameInput.value = '';
        itemQuantityInput.value = '';
    }
});

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    inventoryList.removeChild(row);
}
