Queremos representar una escalera de altura variable, utilizando un array de strings. 

Por ejemplo, a una escalera de altura 3, la representamos con el siguiente array: 

```javascript
var escalera3 = [
  "  #",
  " ##",
  "###"
]
```

Y a una escalera de altura 5, de la siguiente forma: 

```javascript
var escalera5 = [
  "    #",
  "   ##",
  "  ###",
  " ####",
  "#####"
]
```

Recordas el repeat? se puede utilizar para repetir texto en Javascript;

```javascript
var escalon = "#".repeat(2); // ahora escalon = "##";
```

Esto nos serviría para armar nuestros escalones;

¿Pero como hago para hacer tantos escalones como el número me indique? ¿Cómo inserto un escalón, o en otras palabras un elemento en un array?


> Escribí una función `escalera` que tome una altura y devuelva el array que represente a la escalera correspondiente. 
