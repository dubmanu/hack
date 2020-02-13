# Curso de HTML

## Creación de entornos de desenvolvemento

- Aínda que é viable escribir HTML directamente nos arquivos correspondentes, gardar e recargar o navegador para ver os cambios imos usar un módulo de Nodejs que nos axudará a dúas cousas:
  - Crear un servidor web local de probas
  - Auto actualizar o navegador cando cambiemos os arquivos
- O módulo que imos usar chámase [BrowserSync](https://www.browsersync.io/)
- Para configuralo seguimos estes pasos
  - Combrobamos que temos instalado Nodejs no noso equipo
  - Abrimos un terminal e imos ao directorio onde imos traballar, creamos o subdirectorio _www_ e executamos:
    - `npm init -y`
    - `npm install browser-sync --save-dev`
  - Editamos o package.json e engadimos á sección de scripts esta liña:
    - `"start": "browser-sync start --server 'www' --files 'www'"`
  - Gardamos e executamos `npm start`
- Dende ese momento o navegador vai servir na url http://localhost:3000/ o contido que creemos dentro do subdirectorio _www_ creado anteriormente e actualizarase cos cambios que fagamos automáticamente.

## Enlaces: Estructura dun sitio web e relación entre documentos HTML

- Un sitio web é un conxunto de documentos HTML tanto estáticos (existen fisicamente en disco) coma dinámicos (créaos un programa con contido dunha base de datos, p.ex.)
- Os documentos HTML relaciónanse entre si mediante links.
- O tag _a_ define un link.
- O atributo máis importante é o href que determina que páxina ten que mostrar o navegador ao facer click nel.
  - Os links poden ser internos, e enlazar a outras partes do documento actual mediante o atributo _id_.
  - Os links externos cargan outro documento novo.
- No href determinase a ruta que ten que cargar:
  - Se a ruta comeza por / é unha ruta absoluta e polo tanto empeza na raíz do sitio web.
  - Se non é así é unha ruta relativa á ruta actual.
  - (ver exemplos nos html do directorio www)
- Outro atributo importante relacionado coa accesibilidade é o title que describe a onde vai ir ese link.

## Listas

- Os tags _ul_ e _ol_ permiten crear listas desordenadas e ordenadas.

- As listas desordenadas mostrar cada elemento cun punto (bullet) e as ordenadas cun número.

- Exemplo de lista desordenada:

  ```html
  <ul>
    <li>Tinky Winky</li>
    <li>Dipsy</li>
    <li>Laa-Laa</li>
    <li>Po</li>
    <li>Noo-Noo</li>
  </ul>
  ```

- Exemplo de lista ordenada:

  ```html
  <ol>
    <li>Primeiro</li>
    <li>Segundo</li>
    <li>Terceiro</li>
  </ol>
  ```

- Os dous tipos de listas permiten aniñamento, exemplo:

  ```html
  <ul>
    <li>
      A Mariña Occidental
      <ol>
        <li>Viveiro</li>
        <li>Xove</li>
        <li>Vicedo</li>
      </ol>
    </li>
    <li>
      A Mariña Oriental
      <ol>
        <li>Ribadeo</li>
        <li>Barreiros</li>
        <li>Trabada</li>
      </ol>
    </li>
  </ul>
  ```

- As listas de definición son listas avanzadas que permiten asociar un termo a unha definición, o seu uso é bastante limitado.

- Os tags que usa son _dl_ para inicial abrir a lista de definición e despois _dt_ para especificar o termo e _dd_ para a definición. Exemplo:

  ```html
  <dl>
    <dt>HTML</dt>
    <dd>Linguaxe de etiquetado</dd>
    <dt>CSS</dt>
    <dd>Linguaxe de follas de estilo</dd>
    <dt>JavaScript</dt>
    <dd>Linguaxe de programación interpretado</dd>
  </dl>
  ```

## Táboas

- As táboas son conxuntos estructurados de filas e columnas. Sirven para mostrar contido tabular e nada máis.

- No pasado usáronse para maquetar como base da grella. Isto considérase unha moi mala práctica.

- Definimos un elemento de táboa co tag _table_ que un tag de bloque.

- As táboas en HTML están compostas por filas co tag _tr_ (table row) que conteñen celas definidas polo tag _td_ (table data), exemplo básico:

  ```html
  <table>
    <tr>
      <td>Columna 1</td>
      <td>Columna 2</td>
    </tr>
    <tr>
      <td>Valor 1</td>
      <td>Valor 2</td>
    </tr>
  </table>
  ```

- No exemplo anterior creamos unha táboa de 2 filas con 2 celas cada fila formando deste xeito 2 columnas, ou sexa, unha táboa 2x2.

- Se unha cela queremos definila como cela de cabeceira podemos mudar o seu tag por _th_ que é unha etiqueta semántica, exemplo anterior modificado:

  ```html
  <table>
    <tr>
      <th>Columna 1</th>
      <th>Columna 2</th>
    </tr>
    <tr>
      <td>Valor 1</td>
      <td>Valor 2</td>
    </tr>
  </table>
  ```

- Se queremos que unha fila ou cela ocupe máis que o seu espazo natural podemos usar os atributos _rowspan_ e _colspan_. É importante manter a estrutura lóxica ou a táboa mostraráse descolocada. Por exemplo se queremos crear unha táboa con 2 filas pero que a primeira fila só teña unha cela e a segunda dúas faremos isto:

  ```html
  <table>
    <tr>
      <th colspan="2">Columna ancha</th>
    </tr>
    <tr>
      <td>Valor 1</td>
      <td>Valor 2</td>
    </tr>
  </table>
  ```

- Usamos o tag _caption_ dentro da táboa se queremos darlle un título semántico á táboa:

  ```html
  <table>
    <caption>
      Título da táboa
    </caption>
    ...
  </table>
  ```

- Do mesmo xeito que os tags _section, article, aside, footer, etc..._ tamén temos tags estructurais que definen semánticamente partes dunha táboa. Estes son

  - `<thead>`: define as filas e celas de encabezado.
  - `<tbody>`: define as filas e celas principais da táboa
  - `<tfoot>`: define as filas e celas de pé de táboa

- Exemplo completo:

  ```html
  <table>
    <thead>
      <tr>
        <th>Cela de Cabeceira</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cela de Corpo</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Cela de pé</td>
      </tr>
    </tfoot>
  </table>
  ```

### Multimedia no HTML: Imaxes

- As imaxes no HTML están soportadas completamente dende mediados dos 90 pero o soporte completo de audio e o video chegou coa especificación do HTML5

- Os navegadores soportan imaxes en moitos formatos, pero os máis habituais son:

  - JPEG: ou JPG, é o máis famoso e é apropiado para fotos.
  - PNG: é máis moderno e máis apropiado para imaxes con cores planos e soporta transparencias.
  - GIF: úsase sobre todo para animacións.
  - SVG: formato vectorial de imaxes soportado en navegadores modernos

- Para insertar unha imaxe nun documento HTML usamos o tag _img_:

  ```html
  <img src="imaxe.jpg" alt="texto descriptivo da imaxe" />
  ```

- O tag _img_ é un tag de tipo inline polo tanto non crea unha nova liña ao insertalo.
