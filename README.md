# floatformat

Napisz funkcję (patrz plik `index.ts`), która będzie odpowiedzialna za formatowanie liczb zmiennoprzecinkowych w następujący sposób:

Jeżeli argument `digits` jest liczbą dodatnią, to zwraca ciąg znaków reprezentującą liczbę z podaną dokładnością miejsc po przecinku.
np. dla
-  number: 5; digits: 3  --> 5,000
-  number: -5.1234; digits: 3  --> -5,123

Jeżeli argument `digits` jest liczbą ujemną, to zwracany ciąg znaków jest liczbą z podaną dokładnością miejsc po przecinku, ale z pominięciem nieznaczących zer.
np.
-  number: 5.123; digits: 2 --> 5.12
-  number: 5.1; digits: 2 --> 5,1
-  number: 5; digits: 2 --> 5

Jeżeli argument `digits` jest równy `0`, to zwróć liczbę całkowitą (jako ciąg znaków).

Funkcja ma działać, jeśli `number` jest liczbą i ciągiem znaków reprezentującą liczbę (separatorem dziesiętnym może być zarówno przecinek, jak i kropka).

## Jak uruchomić?

Do uruchomienia potrzebny jest node.js oraz manager pakietów (np. yarn)

```
yarn install
yarn test
```

## UWAGI

- Separatorem dziesiętnym w zwracanej funkcji jest przecinek.
- Pamiętaj o dopisaniu typów do funkcji `floatformat`.
- Czy testy pokrywają wszystkie przypadki testowe?
