<h3>Nitu Paginador <small>@abrahamstalin</small></h3>

<strong>Ejemplo de uso:</strong>


<p>Declaramos el div que vamos a paginar:</p>

```html
<div id="divElementTest">
</div>
```
<p>Importamos la libreria e inicializamos el componente de NituPaginator enviandole de parametors un JSON
como el siguiente:</p>

```html
<script src="/build/nitu.paginator.min.js"></script>
Creamos un paginador con botones customizados.
<script>
var paginatorTest= new NituPaginador({
  divElement:'divElementTest',
  lengthWords :400,
  btnPrevious: 'btnPrevious',
  btnNext: 'btnNext'
});
</script>
Agregamos los estilos:
<style>
.pagination {
    display: inline-block;
}

.pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
    cursor: auto;
}

.pagination a.active {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
}
</style>

Creamos un paginador con barra de navegacion
<script>
var paginatorTest= new NituPaginador({
  divElement:'divElementTest',
  lengthWords :400,
  paginationNav:{
    classNav:'pagination'
  }
});
</script>
```
<p>Tambien podemos definir un div externo en el cual podemos inyectar la barra de navegacion del paginador</p>

```html
<script>
  var paginatorTest= new NituPaginador({
    divElement:'divElementTest',
    lengthWords :400
  });
  paginatorTest.makePaginationNav('customPosition');
</script>

```

<h3>Miralo funcionando: </h3>

<a href="https://jsfiddle.net/abrahamstalin/sprd6209/3/">https://jsfiddle.net/abrahamstalin/sprd6209/3/</a>
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
