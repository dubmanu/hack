# Curso de HTML

## Multimedia no HTML: audio e video

- O audio está soportado en HTML dende hai tempo co elemento _bgsound_ pero só polo Internet Explorer e só soporta audio en formato MIDI (mid).

- O HTML5 trae o tag _audio_ que está soportado por todos os navegadores.

- Os formatos de audio soportados son varios pero é habitual que se use o MP3. Aquí tedes unha lista de formatos de audio (e video) soportados: sl

- Para insertar audio nunha web:

  ```html
  <audio src="audio.mp3" controls></audio>
  ```

- Aparte do atributo controls que mostra os controles de play/pause/volume hai outros atributos importantes:

  - _autoplay_: fai que o sonido comece a reproducirse automáticamente
  - loop: reproduce o audio de novo ao rematar
  - Máis atributos aquí: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Attributes

- Para insertar video nunha web:

  ```html
  <video src="video.mp4" controls></video>
  ```

- Os formatos de video soportados están aquí: https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats

- En calquera caso o uso de mp4 é válido para todos os navegadores.

- Aparte do atributo controls que fai o mesmo que no caso de audio temos os seguintes atributos:

  - autoplay: igual que audio
  - loop: igual que audio
  - muted: inicia o video sen sonido
  - poster: permite establecer unha imaxe (en calquera formato soportado polos navegadores) que aparecerá mentres o usuario non lle de a play (sempre que autoplay non esté presente, claro)
  - Máis atributos aquí: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Attributes

- Tanto audio como video son tags de tipo inline.

## Formularios

- Os formularios permiten recoller contido do usuario e envialo ao servidor.

- O tag para crear un formulario é o tag _form_:

  ```html
  <form>
    ...elementos do formulario
  </form>
  ```

- O elemento principal dos formularios é o _input_, mediante ese elemento versátil poderemos incluir diferentes tipos de campos que nos permitirán engadir textos pequenos, datas, checkboxes, radio buttons, passwords, etc...

- Outros elementos importantes dos formularios son:

  - _textarea_: permite introducir textos longos
  - _select_: permite crear selectores con opcións, incluso de selección múltiple
  - _button_: permite crear botóns que realizar accións como enviar o formulario, resetear os valores aos iniciais, ou ... nada.

- Tamén temos elementos que nos permiten estructurar o formulario:

  - _label_: permite establecer etiquetas aos elementos do formulario
  - _fieldset_: permite agrupar elementos do formulario
  - _legend_: permite establecer etiquetas aos _fieldsets_

### O elemento form

- O tag form úsase para crear un novo formulario
- Os atributos principais son:
  - action: establece a url a onde se queren enviar os datos
  - method: define o método para enviar os datos:
    - GET: os datos vanse a ver na URL, é o método menos usado
    - POST: os datos van incluídos no corpo da petición e non se ven na url, é o habitual pero non é máis seguro que o anterior

### Atributos comúns aos elementos

- _autofocus_: o primeiro elemento que teña este atributo recibirá o foco ao cargar a páxina.
- _disabled_: os elementos con este atributo non se poderán editar e tampouco se enviarán ao servidor
- readonly: os elementos con este atributo non se poderán editar pero si se enviarán ao servidor.
- *required*: non permite enviar o formulario ata que ese campo esté correcto.
- _name_: establece o nome interno do elemento de formulario, este é o nome co que se enviará o valor introducido polo usuario ao servidor.
- value: establece o valor por defecto do elemento.
- _placeholder_: mostra visualmente un texto de axuda dentro do elemento que desaparece ao facer foco.

### Elementos que permiten introducir texto

- O elemento _input_ é o elemento de formulario máis común e permite introducir diferentes tipos de textos.

- O atributo type establece o tipo de input, estes son os types que permiten introducir texto:

  - **text**: é o type máis habitual e permite introducir un texto curto.
  - **email**: permite introducir un email e non deixará enviar o formulario se non é válido.
  - **password**: permite introducir unha contrasinal polo que cando se escriba aparecerán asteríscos ou círculiños en lugar das letras.
  - **url**: permite introducir unha URL e non deixará enviar o formulario se a URL non é válida.

- O elemento _textarea_ permite introducir textos máis longos mostrando unha caixa de texto con múltiples liñas.

- O _textarea_ permite dous atributos que son cols e rows que establecen o tamaño da caixa pero habitualmente ese tamaño edítase mediante CSS.

- Exemplo:

  ```html
  <form method="GET" action=".">
    Nome:
    <input type="text" name="nome" placeholder="O teu nome" autofocus /><br />
    Email: <input type="email" name="email" /><br />
    Password: <input type="password" name="password" />
  </form>
  ```

### Estructurando o formulario

- O elemento _label_ permite establecer etiquetas asociadas aos elementos de formulario. Relacionase co elemento mediante o atributo for que debe coincidir co atributo id do elemento.

  ```html
  <label for="name">Nome</label> <input type="text" name="name" id="name" />
  ```

- O elemento _fieldset_ permite agrupar elementos de formulario e o _legend_ establece un título ao fieldset:

  ```html
  <fieldset>
    <legend>Cal é a túa comida favorita?</legend>
    <ul>
      <li>
        <label for="pementos">Pementos</label>
        <input
          type="radio"
          checked
          id="pementos"
          name="comida"
          value="pementos"
        />
      </li>
      <li>
        <label for="sopa">Sopa</label>
        <input type="radio" id="sopa" name="comida" value="sopa" />
      </li>
    </ul>
  </fieldset>
  ```

### Seleccionando entre varias opcións

- O elemento select permite crear un menú desplegable e seleccionar unha ou varias opcións.

- Exemplo:

  ```html
  <select name="provincia">
    <option>Lugo</option>
    <option>A Coruña</option>
    <option>Ourense</option>
    <option>Pontevedra</option>
  </select>
  ```

- Incluso permite crear grupos de opcións coa súa etiqueta correspondente:

  ```html
  <select name="provincia">
    <optgroup label="Provincias guais">
      <option>Lugo</option>
      <option>A Coruña</option>
    </optgroup>
    <optgroup label="Provincias MENOS guais">
      <option>Ourense</option>
      <option>Pontevedra</option>
    </optgroup>
  </select>
  ```

- Ou crear unha escolla múltiple usando o atributo _multiple_:

  ```html
  <select name="froitas_preferidas" multiple>
    <option>Laranxa</option>
    <option>Pera</option>
    <option>Mazá</option>
    <option>Kiwi</option>
  </select>
  ```

### Marcando opcións

- Usando o tag coñecido _input_ podemos crear outros elementos aparte de texto:

  - _checkboxes_: campos de selección que só permiten dous estados: seleccionado ou non. Podemos controlar o valor inicial usando o atributo checked en lugar de value.

    ```html
    <input type="checkbox" checked name="pementos" />
    ```

  - _radio_: campos de selección entre varias opcións excluíntes, similar ao _select_ anterior. Permite escoller entre os input de tipo radio que teñan o mesmo atributo name, retomamos o exemplo do _fieldset_:

    ```html
    <fieldset>
      <legend>Cal é a túa comida favorita?</legend>
      <ul>
        <li>
          <label for="pementos">Pementos</label>
          <input
            type="radio"
            checked
            id="pementos"
            name="comida"
            value="pementos"
          />
        </li>
        <li>
          <label for="sopa">Sopa</label>
          <input type="radio" id="sopa" name="comida" value="sopa" />
        </li>
      </ul>
    </fieldset>
    ```

### Botóns

- O tag _button_ permite crear botons, hai tres tipos que se determinan mediante o atributo type:

  - submit: envía o formulario.

    ```html
    <button type="submit">Enviar</button>
    ```

  - reset: resetea o formulario aos valores iniciais.

    ```html
    <button type="reset">Borrar formulario</button>
    ```

  - anonimos: se os botons non teñen tipo non fan nada especial (veredes no módulo de JavaScript) cal é o uso.

    ```html
    <button>Fai clic aquí e non pasará nada</button>
    ```

### Elementos de formulario avanzados

- Co HTML5 apareceron novos elementos de formulario máis específicos.
- Unha das principais razóns foi a adaptación a dispositivos móbiles onde cubrir formularios é máis complexo que en escritorio.
- Estes elementos permiten crear campos de formulario como de tipo data, rangos, cores, ficheiros, etc...
- Máis elementos avanzados aquí: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/The_native_form_widgets#Advanced_form_widgets

## Etiquetas avanzadas

- Aparte das etiquetas que vimos nos días anteriores o HTML define moitas máis, aquí podedes ver todas: https://developer.mozilla.org/en-US/docs/Web/HTML/Element.
- As que vimos no curso son as máis usadas pero entre todas hai outras de relativa importancia que listo a continuación:
  - _address_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address
  - _blockquote_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
  - _figure_ & _figcaption_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
  - _pre_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
  - _abbr_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
  - _br_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br
  - _strong_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
  - _em_: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em

## Accesibilidade

- A accesibilidade no HTML son un conxunto de prácticas para facer as webs máis usables para xente con discapacidades.
- A idea principal é facer un HTML que sexa igual para todo o mundo, sen importar as súas circunstancias.
- Aparte diso crear un HTML accesible mellora a optimización da web para buscadores.
- Hai lugares do mundo onde a accesibilidade en determinado tipo de webs é obrigada por lei.
- Polo tanto dende que se escribe o primeiro tag de HTML hai que pensar na accesibilidade.

### Accesibilidade no HTML

- É sinxelo facer HTML accesible porque a linguaxe préstase a iso.
- Ao longo do curso xa falamos de accesibilidade en varios puntos:
  - Uso de etiquetas semánticas: evitamos usar etiquetas xenéricas e procuramos usar etiquetas que din algo do seu contido.
  - Estructurar ben as páxinas evitando elementos que non son apropiados para iso como as tablas e preferir elementos como section, article, aside, header e nav, etc...
  - Tentar facer que as páxinas sexan usables sen rato, só co teclado. Para iso hai que ordenar ben os elementos e usar atributos como _tabindex_.
  - Escribir labels e textos descriptivos correctamente e usar as etiquetas semánticas en cada caso correctamente, en especial nos formularios.
  - Se usamos táboas hai que usar as etiquetas semanticas para dividir as filas en encabezados, corpo e pé de táboa. Usar a etiqueta caption para describir o contido xeral da táboa.
  - Uso de texto alternativo en imaxes, tanto usando o atributo alt como as etiquetas figure e figcaption.
- Accesibilidade avanzada: https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics
