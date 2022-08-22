CODING ADVENTURE

1.  ¿Cuándo tengo que usar useCallback()?
    -Utilizo el hook useCallback() cuando quiero que la callback se ejecute una vez.
    Utilizamos este hook de react para evitar rerenders especificos y nos permite memoizar la funcion.
    De esta manera no es una funcion que realmente genere una optimizacion significa, pero si evita loops que suceden en ciertos casos con react.
