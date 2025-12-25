function addRow() {
    const table = document.getElementById("purchaseTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td><input type="date" name="date[]" required></td>
        <td><input type="text" name="material[]" placeholder="Tên nguyên liệu" required></td>
        <td><input type="text" name="supplier[]" placeholder="Nhà cung cấp" required></td>
        <td><input type="number" name="quantity[]" placeholder="0" min="1" required></td>
        <td><input type="text" name="purpose[]" placeholder="Sản xuất/Kho..."></td>
        <td><button type="button" class="btn-delete" onclick="deleteRow(this)">Xóa</button></td>
    `;
}

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    // Đảm bảo luôn còn ít nhất 1 dòng
    const rowCount = document.getElementById("purchaseTable").rows.length;
    if (rowCount > 2) {
        row.parentNode.removeChild(row);
    } else {
        alert("Phải có ít nhất một dòng dữ liệu!");
    }
}

// Xử lý gửi form (ví dụ)
document.getElementById('purchaseForm').onsubmit = function(e) {
    e.preventDefault();
    alert("Dữ liệu đã được sẵn sàng để gửi đi!");
    // Tại đây bạn có thể dùng Fetch API hoặc AJAX để gửi dữ liệu về server
};
