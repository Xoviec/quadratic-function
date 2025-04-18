class FunkcjaKwadratowa {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    Delta() {
      return this.b * this.b - 4 * this.a * this.c;
    }
  
    Rozwiazanie() {
      const delta = this.Delta();
  
      if (delta < 0) {
        return []; 
      } else if (delta === 0) {
        const x = -this.b / (2 * this.a);
        return [x, x];
      } else {
        const sqrtDelta = Math.sqrt(delta);
        const x1 = (-this.b - sqrtDelta) / (2 * this.a);
        const x2 = (-this.b + sqrtDelta) / (2 * this.a);
        return [x1, x2];
      }
    }
  }
  
  module.exports = FunkcjaKwadratowa;
  