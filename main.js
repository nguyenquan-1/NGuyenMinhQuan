// =======================
// CÂU 1: Constructor function Product
// =======================
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;                 // mã sản phẩm
  this.name = name;             // tên sản phẩm
  this.price = price;           // giá sản phẩm
  this.quantity = quantity;     // số lượng tồn kho
  this.category = category;     // danh mục
  this.isAvailable = isAvailable; // trạng thái bán (true/false)
}


// CÂU 2: Tạo mảng products >= 6 sản phẩm, >= 2 danh mục

const products = [
  new Product(1, "iPhone 15 Pro Max", 35990000, 5, "Phones", true),
  new Product(2, "Samsung S24 Ultra", 33990000, 0, "Phones", true),
  new Product(3, "MacBook Air M2", 26990000, 7, "Laptops", true),
  new Product(4, "AirPods Pro 2", 5990000, 12, "Accessories", true),
  new Product(5, "Sạc nhanh 20W", 490000, 0, "Accessories", false),
  new Product(6, "Chuột Logitech MX Master 3S", 2490000, 9, "Accessories", true),
];

// In mảng gốc
console.log("=== DANH SÁCH PRODUCTS (GỐC) ===");
console.table(products);

// =======================
// CÂU 3: Tạo mảng mới chỉ chứa name, price
// =======================
const namePriceList = products.map(p => ({ name: p.name, price: p.price }));
console.log("\n=== CÂU 3: MẢNG CHỈ CÓ name, price ===");
console.table(namePriceList);

// =======================
// CÂU 4: Lọc sản phẩm còn hàng (quantity > 0)
// =======================
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("\n=== CÂU 4: SẢN PHẨM CÒN HÀNG (quantity > 0) ===");
console.table(inStockProducts);

// =======================
// CÂU 5: Kiểm tra có ít nhất 1 sản phẩm giá > 30.000.000 không
// =======================
const hasOver30m = products.some(p => p.price > 30000000);
console.log("\n=== CÂU 5: CÓ SẢN PHẨM GIÁ > 30.000.000 ? ===");
console.log(hasOver30m ? "Có ✅" : "Không ❌");

// =======================
// CÂU 6: Kiểm tra tất cả sản phẩm danh mục 'Accessories' có isAvailable = true không

// =======================
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable =
  accessories.length > 0 && accessories.every(p => p.isAvailable === true);

console.log("\n=== CÂU 6: TẤT CẢ 'Accessories' ĐANG ĐƯỢC BÁN (isAvailable=true)? ===");
if (accessories.length === 0) {
  console.log("Không có sản phẩm Accessories để kiểm tra.");
} else {
  console.log(allAccessoriesAvailable ? "Đúng ✅" : "Sai ❌");
}

// =======================
// CÂU 7: Tính tổng giá trị kho hàng: sum(price * quantity)
// =======================
const totalInventoryValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
console.log("\n=== CÂU 7: TỔNG GIÁ TRỊ KHO (price * quantity) ===");
console.log(totalInventoryValue.toLocaleString("vi-VN") + " VND");

// =======================
// CÂU 8: Dùng for...of duyệt products và in: Tên - Danh mục - Trạng thái

console.log("\n=== CÂU 8: for...of IN: Tên - Danh mục - Trạng thái ===");
for (const p of products) {
  const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${p.name} - ${p.category} - ${status}`);
}

// =======================
// CÂU 9: Dùng for...in để:

console.log("\n=== CÂU 9: for...in (TRÊN PRODUCT ĐẦU TIÊN) ===");
const sample = products[0];

console.log("- Tên thuộc tính:");
for (const key in sample) {
  console.log(key);
}

console.log("- Giá trị tương ứng:");
for (const key in sample) {
  console.log(`${key}: ${sample[key]}`);
}


// CÂU 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng

const sellingAndInStockNames = products
  .filter(p => p.isAvailable === true && p.quantity > 0)
  .map(p => p.name);

console.log("\n=== CÂU 10: TÊN SP ĐANG BÁN & CÒN HÀNG ===");
console.log(sellingAndInStockNames);
