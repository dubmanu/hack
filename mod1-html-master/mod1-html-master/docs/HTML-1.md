# Curso de HTML

## Introdución ao HTML

- O HTML é a linguaxe de etiquetado propia do protocolo HTTP, un sistema cliente servidor proposto a principios dos anos 90 por Tim Berners-Lee no CERN como un sistema de intercambio de información para investigadores.
- O éxito do HTML foi a simplicidade detrás da idea. Un sistema para enlazar documentación. Baseado en arquivos de texto editables facilmente. Unha linguaxe moi simple e sinxela de aprender.
- Por outra banda tamén afectou o feito de que fose pensado como unha linguaxe aberta. Cun sistema de cliente servidor de código aberto que todo o mundo podía modificar segundo as súas necesidades.
- A xente empezou a usala para publicar contido. Modificaron os servidores. Os clientes (que logo se chamarían navegadores).
- Apareceron os primeiros grandes navegadores como Mosaic que despois se convertiu en Netscape e logo derivou na fundación Mozilla e seu navegador Firefox.
- Cos cambios no HTML apareceron novos elementos e tags, o máis importante daquela foi o tag `<img>` que implementou Mosaic e permitía mostrar imaxes nos documentos HTML. Pero non había moito control e foi necesaria a creación dun organismo regulador: a [W3C](https://www.w3.org/).
- Empezaron a aparecer versións de HTML (a primeira no 1995, versión 2.0) que implementaban ordenadamente novas características: formularios, táboas, etc. No 1997 saiu a versión 3.2.
- No ano 1998 sae a primeira gran versión de HTML, a 4. Con ela sae a primeira versión de CSS que introduce un concepto importante: separación de contido e presentación. A pesar da importancia do CSS non vai ser ata mediados dos 2000 cando se empece a usar no seu potencial completo.
- A principios dos 2000 a [W3C](https://www.w3.org/) nun intento de facer o HTML máis estricto propuxo facelo máis cercano ao XML (unha linguaxe da mesma familia máis estricta) e naceu ou XHTML.
- Os navegadores ainda que xa soportaban video usando incrustacións de programas externos como applets de Java ou RealPlayer dende mediados dos 90 pero non foron realmente viables para o consumo de multimedia ata que se popularizou o flash.
- A finais da decada dos 2000 a web cada vez se usaba para máis cousas, convertiuse nunha plataforma de contido, aplicacións, software, multimedia. O XHTML estaba a quedar limitado e o Flash e outras tecnoloxías pechadas estaban cubrindo os ocos.
- A mediados dos 2000 empeza a usarse masivamente unha tecnoloxía que levaba anos soportada nos navegadores: AJAX, o cal permitiu crear unha web máis dinámica e comezouse a ver a web como unha plataforma capaz de articularse para moitas máis cousas que para presentar contido estático.
- Daquela unha parte da [W3C](https://www.w3.org/) descontenta co estado actual do HTML creou un [grupo de traballo](https://whatwg.org/) para desenvolver unha nova especificación do HTML para axudar a establecer a web como unha plataforma autosuficiente e aberta. Naceu o HTML5.
- O HTML5 soportaba audio e video, mellor acceso ao hardware (xeolocalización, 3d), etiquetas semánticas, Canvas e moitas novas funcionalidades adaptadas para a web moderna.
- Apple matou ao Flash ao non soportalo no seu iPhone. O resto de compañías de mobiles seguiron esa tendencia. O HTML volveu a gañar a web.
- Agora a web usase con multiples dispositivos, está en moitos máis gracias á internet das cousas, é máis multimedia, e por suposto plataforma de traballo e comunicación. Este avance tecnolóxico moldea o futuro do HTML e á inversa. Comezamos.

## Fontes de documentación

- Principal fonte de documentación: [MDN](https://developer.mozilla.org/)
  - É a máis completa, actualizada e fiable.
  - Google, Microsoft, Apple contribúen.
  - Hai contido en varios idiomas pero a referencia é o ingles.

## Anatomía dun tag

- O HTML é un lenguaxe de etiquetado moi simple. Imos aprendelo en 3 días, máis ou menos.
- O HTML define unha serie de elementos co que se construen páxinas web: textos, imaxes, táboas, elementos de formulario, ...non moito máis.
- Os elementos están representados por tags.
- Os tags normalmente están compostos por un tag de inicio e un tag de peche. O contido que hai no medio pode ser texto ou outros tags.
- Hai tags que non precisan pecharse, chega con abrilos xa que non modifican nada. Por exemplo as imaxes ou elementos de formulario.
- Os tags poden ter atributos os atributos modifican determinados aspectos dos tags.
- Os tags aníñanse entre si creando unha estructura de árbore ata formar documentos HTML.

Exemplos:

`<p lang="gl">Esto é un parágrafo!</p>`

`<img src="foto.jpg" alt="Texto descriptivo da foto" />`

```html
<article>
  <header>
    <h1>Titulo</h1>
  </header>
  <p>Lorem ipsum dolor sit amet</p>
</article>
```

## Estrutura básica dun documento HTML

- O tag que define un documento HTML e que o engloba completamente é o tag `<html>`
- Os documentos HTML están formados por dúas partes principais: `<head>` e `<body>`
- O `<head>` conten metainformación do documento.
- O `<body>` é o que vemos na pantalla do navegador.
- Os documentos HTML están compostos por elementos HTML aniñados. A complexidade pode ser moi grande.
- O documento HTML só representa o contido, nunca a presentación. Lembrar símil da porta.

### Construíndo un documento HTML paso a paso

- Comezamos polo doctype, todos os documentos HTML deben comezar por tag especial fora do tag `<html>` que determina o tipo de documento: `<!doctype html>`

- Nas versións de HTML anteriores o doctype era moito máis complexo:

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  ```

- Despois do doctype abrimos o `<html>`

- Dentro do tag `<html>` só son soportados dous tags principais o tag `<head>` e o tag `<body>`. O atributo principal dese tag é o _lang_ que define o idioma do documento, p.ex:

  ```html
  <html lang="gl"></html>
  ```

- O head inclúe metainformación do documento: titulo, descrición, carga de código externo como CSS ou JavaScript, información sobre a codificación de caracteres do documento ou un variado número de tags `<meta>` que definen diferentes valores de metainformación.
  Exemplo:

  ```html
  <!DOCTYPE html>
  <html lang="gl">
    <head>
      <meta charset="utf-8" />
      <title>A mellor páxina do mundo</title>
      <meta
        name="description"
        content="Nesta páxina podes ver contido flipante"
      />
    </head>
    <body>
      Contido da páxina
    </body>
  </html>
  ```

- O body é a raíz de todo o contido que aparece na ventana (viewport) do navegador. Vamos a por iso.

#### O body e os elementos estructurais máis importantes

- O HTML moderno (HTML5) é semántico. Antes isto non era así, usábanse tags xenéricos para calquera tipo de contido.
- É moito máis sinxelo tanto para as persoas como para as máquinas leer HTML semántico.
- Isto é importante porque cando o buscador de Google indexe a nosa páxina vaille ser máis sinxelo procesala se os tags son semánticos e polo tanto aparecerá mellor posicionada nos resultados.
- En calquera caso debemos construír a nosa páxina pensando nas persoas e non nos buscadores.
- Cando falamos de HTML semántico referímonos ao uso de tags que den un significado estructural aos elementos da páxina. Por exemplo, o tag `<footer>` indica que o contido é un pé de páxina pero iso non implica que vaia aparecer abaixo da páxina, diso encárgase o CSS e axiña chegaremos aí.

##### Encabezados

- Os tags _h1, h2, h3, h4, h5 e h6_ definen os 6 niveis de encabezados que pode ter unha páxina, se precisas un h7 é que algo estás facendo mal e deberías replantexar a estrutura.
- O h1 é o encabezado principal e o resto sub-encabezados.
- Non ten porque haber un só encabezado principal nunha páxina, antes si, agora xa non.
- Os encabezados mostránse con diferentes tipos de letra e tamaños, a razón disto é que antes de que escribamos CSS o navegador aplica un CSS moi básico a algúns tags. Volveremos sobre isto no futuro.
- É importantisimo que os encabezados nunha páxina sigan unha estructura lóxica e non falten nen sobren.

##### O header e a navegación

- O tag `<header>` define unha sección da páxina que conten o encabezado e navegación principal, como a cabeceira dunha carta.
- Dentro do `<header>` é recomendable que exista un tag `<nav>` que conten información sobre a navegación pola páxina.
- Pode haber varios headers nunha páxina aínda que é importante que exista un principal, dentro de cada `<article>` ou `<section>` pode haber outros encabezados secundarios.

##### Os section, article, aside e footer

- O tag `<section>` define unha sección xenérica de contido nunha páxina, normalmente debe iniciarse cun tag `<h1>` que siga a lóxica dos previos.
- O tag `<article>` representa unha parte de contido da páxina que tamén teña sentido se o extraemos da páxina.
- O `<article>` pode conter un `<header>` similar ao que falamos antes e tanto pode seguir a lóxica de encabezados da páxina como conter unha nova, ou sexa, volver a comezar por un h1.
- O tag `<aside>` define unha parte do contido da páxina que está algo relacionado co resto pero non moito, por exemplo, unha frase destacada, unha imaxe relacionada, etc...
- O footer define un pe de páxina, tanto do documento principal como dun `<article>`

##### Outros elementos

- O tag `<p>` define un parágrafo.
- O tag `<main>` define o contido principal do documento.

##### Elementos xenéricos

- Hai dous elementos xenéricos que non teñen valor semántico: `<div>` e o `<span>`. Estes elmentos non aportan información sobre o seu contido. Debemos evitar usalos pero ás veces vai ser inevitable.
- Un tag `<div>` pode ter calquera contido pero se vemos un tag `<footer>` xa sabemos que o contido vai ser probablemente un pé de páxina.

### Modelos de contido en HTML

Validador da W3C: https://validator.w3.org/#validate_by_input

- O modelo de contido de HTML define como se poden aniñar os tags.
- Os tags aparte de ter que estar ben formados só poden ter determinados fillos.
- Tradicionalmente só había dous tipos de tags: os tags de bloque (block) e os tags en liña (inline).
- HTML5 presenta un modelo máis complexo con [7 tipos de tags](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#kinds-of-content). A razón disto é o soporte de tags máis semánticos, veremos isto máis adiante.
- Pero podemos seguir agrupándoos en gous meta-tipos:
  - Flow: que serían os anteriores tags de tipo block.
  - Phrasing: os tags de tipo inline.
- Podemos mudar como se renderizan con CSS pero aínda non chegamos aí.
- Cando o navegador renderiza o HTML non ten en conta o espazo que deixamos entre os tags.

#### Block tags

- O tag máis xenérico é o `<div>`
- Sempre se renderizan nunha liña nova.
- Poden conter outros block tags ou inline tags.
- Lista de tags de bloque: https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements

#### Inline tags

- O tag máis xenérico é o `<span>`
- Por defecto renderízanse na mesma liña.
- Só poden conter outros tags inline.
- Lista de tags inline: https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements
