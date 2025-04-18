const FunkcjaKwadratowa = require('./FunkcjaKwadratowa');

describe('FunkcjaKwadratowa', () => {
  test('konstruktor przypisuje współczynniki', () => {
    const f = new FunkcjaKwadratowa(1, -2, 1);
    expect(f.a).toBe(1);
    expect(f.b).toBe(-2);
    expect(f.c).toBe(1);
  });

  test('delta zwraca poprawną wartość', () => {
    const f = new FunkcjaKwadratowa(1, -2, 1); 
    expect(f.Delta()).toBe(0);
  });

  test('jedno rozwiązanie (delta = 0)', () => {
    const f = new FunkcjaKwadratowa(1, -2, 1); 
    expect(f.Rozwiazanie()).toEqual([1, 1]);
  });

  test('dwa rozwiązania (delta > 0)', () => {
    const f = new FunkcjaKwadratowa(1, -3, 2); 
    expect(f.Rozwiazanie()).toEqual([1, 2]);
  });

  test('brak rozwiązań (delta < 0)', () => {
    const f = new FunkcjaKwadratowa(1, 0, 1); 
    expect(f.Rozwiazanie()).toEqual([]);
  });
});
