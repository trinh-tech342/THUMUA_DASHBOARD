const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyAmL-1Vc9RkbwXipkFgsXkf3jeaHJq2TYsQq4RF0-Jm-cJsoroBiH4OMhjwiNqQNOW/exec';

document.getElementById('purchaseForm').onsubmit = function(e) {
    e.preventDefault();
    
    const table = document.getElementById("purchaseTable");
    const rows = table.getElementsByTagName('tbody')[0].rows;
    const data = [];

    // Thu thập dữ liệu từ từng hàng
    for (let i = 0; i < rows.length; i++) {
        data.push({
            date: rows[i].querySelector('input[name="date[]"]').value,
            material: rows[i].querySelector('input[name="material[]"]').value,
            supplier: rows[i].querySelector('input[name="supplier[]"]').value,
            quantity: rows[i].querySelector('input[name="quantity[]"]').value,
            purpose: rows[i].querySelector('input[name="purpose[]"]').value
        });
    }

// Thay đổi phần Fetch trong script.js
fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors', // Thêm dòng này để bỏ qua chặn trình duyệt
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(() => {
    // Vì dùng 'no-cors', trình duyệt không đọc được phản hồi thành công
    // nên chúng ta mặc định báo thành công nếu không rơi vào .catch
    alert("Dữ liệu đã được gửi đi! Vui lòng kiểm tra Google Sheet.");
    document.getElementById('purchaseForm').reset();
})
.catch(error => {
    console.error('Lỗi:', error);
    alert("Có lỗi xảy ra khi kết nối.");
});
