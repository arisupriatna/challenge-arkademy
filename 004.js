function vendingMachine(uang, jumlahBayar) {
  var stockUang = [500, 1000, 2000, 5000, 10000, 20000, 50000];

  stockUang.sort(function(a, b) {
    return b - a;
  });

  var uangKembalian = [];

  var kembalian = uang - jumlahBayar;

  for (var a = 0; a < stockUang.length; a++) {
    if (kembalian >= stockUang[a]) {
      uangKembalian.push(stockUang[a]);
      kembalian -= stockUang[a];
    }
  }

  return uangKembalian;
}
console.log(vendingMachine(50000, 21500));
