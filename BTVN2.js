// Khởi tạo mảng subscriptions chứa sẵn 3 tài khoản ban đầu
const subscriptions = [
  { subscriptionId: 'SUB-001', customerName: 'Nguyen Van An', planTier: 'PERSONAL', deviceLimit: 2, status: 'ACTIVE' },
  { subscriptionId: 'SUB-002', customerName: 'Tran Thi Mai', planTier: 'FAMILY', deviceLimit: 5, status: 'ACTIVE' },
  { subscriptionId: 'SUB-003', customerName: 'Le Hoang Nam', planTier: 'PERSONAL', deviceLimit: 2, status: 'ACTIVE' }
];

// 1. Thêm thuê bao mới
function addSubscription(list) {
  const customerName = prompt("Nhập tên khách hàng: ");
  const planTierInput = prompt("Chọn gói cước (1: PERSONAL, 2: FAMILY): ");
  
  let planTier = 'PERSONAL';
  let deviceLimit = 2;
  
  if (planTierInput === '2' || planTierInput.toUpperCase() === 'FAMILY') {
    planTier = 'FAMILY';
    deviceLimit = 5;
  }
  
  // Tự sinh mã SUB_xxx dựa trên số lượng hiện tại
  const newId = `SUB-00${list.length + 1}`;
  
  const newSub = {
    subscriptionId: newId,
    customerName: customerName,
    planTier: planTier,
    deviceLimit: deviceLimit,
    status: 'ACTIVE'
  };
  
  list.push(newSub);
  console.log(`=> Đã thêm thành công thuê bao ${newId}!`);
}

// 2. Xem toàn bộ danh sách thuê bao dưới dạng bảng
function listSubscriptions(list) {
  if (list.length === 0) {
    console.log("Danh sách thuê bao trống!");
    return;
  }
  console.log("\n--- DANH SÁCH THUÊ BAO SAAS ---");
  console.table(list);
}

// 3. Cập nhật gói cước theo mã
function updateSubscription(list) {
  const targetId = prompt("Nhập mã thuê bao cần cập nhật (VD: SUB-001): ");
  let foundIndex = -1;
  
  for (let i = 0; i < list.length; i++) {
    if (list[i].subscriptionId === targetId) {
      foundIndex = i;
      break;
    }
  }
  
  if (foundIndex === -1) {
    console.log(`=> Không tìm thấy thuê bao với mã ${targetId}!`);
    return;
  }
  
  const newPlanInput = prompt("Chọn gói cước mới (1: PERSONAL, 2: FAMILY): ");
  if (newPlanInput === '2' || newPlanInput.toUpperCase() === 'FAMILY') {
    list[foundIndex].planTier = 'FAMILY';
    list[foundIndex].deviceLimit = 5;
  } else {
    list[foundIndex].planTier = 'PERSONAL';
    list[foundIndex].deviceLimit = 2;
  }
  
  console.log(`=> Cập nhật thành công cho thuê bao ${targetId}!`);
}

// 4. Hủy thuê bao (Xóa khỏi mảng bằng splice)
function deleteSubscription(list) {
  const targetId = prompt("Nhập mã thuê bao cần hủy (VD: SUB-001): ");
  let foundIndex = -1;
  
  for (let i = 0; i < list.length; i++) {
    if (list[i].subscriptionId === targetId) {
      foundIndex = i;
      break;
    }
  }
  
  if (foundIndex === -1) {
    console.log(`=> Không tìm thấy thuê bao với mã ${targetId}!`);
    return;
  }
  
  list.splice(foundIndex, 1);
  console.log(`=> Đã hủy và xóa thành công thuê bao ${targetId}!`);
}

// 5. Chương trình chính điều hướng bằng do-while và switch-case
function main() {
  let choice;
  do {
    console.log("\n========================================");
    console.log("   QUẢN LÝ THUÊ BAO RIKKEISTREAM CLI   ");
    console.log("========================================");
    console.log("1. Thêm thuê bao mới");
    console.log("2. Xem toàn bộ danh sách thuê bao");
    console.log("3. Cập nhật gói cước");
    console.log("4. Hủy thuê bao");
    console.log("5. Thoát chương trình");
    
    choice = prompt("Nhập lựa chọn của bạn (1-5): ");
    
    switch (choice) {
      case '1':
        addSubscription(subscriptions);
        break;
      case '2':
        listSubscriptions(subscriptions);
        break;
      case '3':
        updateSubscription(subscriptions);
        break;
      case '4':
        deleteSubscription(subscriptions);
        break;
      case '5':
        console.log("=> Cảm ơn bạn đã sử dụng hệ thống. Tạm biệt!");
        break;
      default:
        console.log("=> Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 5!");
    }
  } while (choice !== '5');
}

// Khởi chạy ứng dụng
main();