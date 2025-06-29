let tcbEnv = (window as any)._tcbEnv;
if (!tcbEnv) {
  (window as any)._tcbEnv = {};
  tcbEnv = (window as any)._tcbEnv;
}
if (!tcbEnv['GROOM']) {
  tcbEnv['GROOM'] = '未设置';
}
if (!tcbEnv['BRIDE']) {
  tcbEnv['BRIDE'] = '未设置';
}
if (!tcbEnv['DATE']) {
  tcbEnv['DATE'] = '2025-09-13 16:00:00';
}
if (!tcbEnv['ADDR']) {
  tcbEnv['ADDR'] = '广州鸣泉居酒店';
}
if (!tcbEnv['MHID']) {
  tcbEnv['MHID'] = 'shOUWQDqzJohMHYvKd1dMK0';
}
