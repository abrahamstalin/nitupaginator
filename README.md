<h3>Nitu Paginador <small>@abrahamstalin</small></h3>

<strong>Ejemplo de uso:</strong>


<p>Declaramos el div que vamos a paginar:</p>

```html
<div id="divElementTest">
</div>
```
<p>Importamos la libreria</p>

```html
<script src="/build/nitu.paginator.min.js"></script>
```
<p>Inicializamos el componente de NituPaginator enviandole de parametors un JSON
como el siguiente</p>
```js
var paginatorTest= new NituPaginador({
  divElement:'divElementTest',
  lengthWords :400,
  btnPrevious: 'btnPrevious',
  btnNext: 'btnNext'
});
```

<h4>Parametros </h4>
<table>
<tr>
  <th>divElement</th>
  <td>Este es el unico parametro obligatorio y representa al div que vamos a paginar</td>
</tr>
<tr>
  <th>lengthWords</th>
  <td>Es el numero de palabras donde va a patir el texto, el texto se termina hasta que termina la etiqueta que lo contiene por lo cual siempre puede variar hacia arriba.</td>
</tr>
<tr>
  <th>btnPrevious</th>
  <td>El id de tu boton anterior</td>
</tr>
<tr>
  <th>btnNext</th>
  <td>El id de tu boton siguiente</td>
</tr>
</table>
