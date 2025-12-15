export function generateOrderCode() {
  return `MBJ-${Math.floor(100000 + Math.random() * 900000)}`;
}
