---
theme: default
title: Sesión de estudio · Violencias Basadas en Género
info: Sesión de estudio sobre violencias basadas en género (VBG).
class: text-center
contextMenu: false
transition: slide-left
favicon: /favicon-la-fogata.png
---

<img class="cover-logo" src="/assets/logo-la-fogata.jpeg" alt="Logo de Colectiva La Fogata">
<div class="eyebrow">Colectiva La Fogata · San Cristóbal</div>

# Sesión de estudio
## <span class="accent">Violencias Basadas en Género (VBG)</span>

<!-- Recursos: public/slides/01-portada/ -->

---

# Introducción
<div class="two-col"><div><p class="question">Antes de entender las violencias basadas en género debemos problematizar con cifras, la necesidad de dialogar sobre esto.</p><p class="mt-8">Para ello, haremos una serie de comparativas que resultan interesantes y nos dan una perspectiva más <strong>radical</strong> del asunto.</p></div><div><VbgChart kind="regional" /></div></div>

<!-- Recursos: public/slides/02-por-que-hablar-vbg/ -->

---

# La violencia también ocurre en el vínculo familiar
<div class="two-col"><div><VbgChart kind="vif" /></div><div><div class="eyebrow">Colombia · 2024</div><p class="question">La violencia intrafamiliar no tiene una única dirección: puede ser ejercida por padres, madres, hijos/as, hermanos/as, familiares políticos y otras personas de la red familiar.</p><p>En las <strong><AnimatedNumber :value="20185" /> valoraciones médico-legales</strong> registradas, <strong><AnimatedNumber :value="11846" /></strong> víctimas fueron mujeres y <strong><AnimatedNumber :value="8339" /></strong> fueron hombres.</p><p class="note">La gráfica muestra la relación con el presunto agresor, no el parentesco de la víctima. *Familia política: cuñado/a, yerno y nuera. Esta fuente no incluye violencia de pareja (esposo/esposa).</p></div></div>

<!--
## Notas del orador

- **Familia política** agrupa vínculos por afinidad, no por consanguinidad: en esta gráfica, cuñado/a, yerno y nuera.
- **Otros familiares** corresponde a la categoría original de Medicina Legal “otros familiares civiles o consanguíneos”. Es una categoría agrupada para relaciones familiares que la fuente no desagrega en una etiqueta más específica; no conviene atribuirle parentescos concretos que la base no identifica.
- Reiterar que son **valoraciones médico-legales registradas**, no la totalidad de violencias ocurridas ni una decisión judicial sobre responsabilidad.

Recursos y fuente: `public/slides/03-violencia-intrafamiliar/`
-->

---

# ¿Quiénes aparecen como presuntos agresores?
<div class="two-col"><div><VbgChart kind="vif-aggressor" /></div><div><div class="eyebrow">Colombia · 2024</div><p class="question">Cuando se observa el sexo registrado de los presuntos agresores, los hombres concentran más registros en la mayoría de los vínculos familiares mostrados.</p><p>El conjunto registra <strong><AnimatedNumber :value="13230" /></strong> presuntos agresores hombres y <strong><AnimatedNumber :value="6688" /></strong> presuntas agresoras mujeres.</p><p class="note">Se muestran las categorías hombre y mujer para permitir la comparación. Hay <AnimatedNumber :value="267 " /> registros adicionales clasificados como intersexual, no binario o sin información; no se representan en las dos series. *Familia política: cuñado/a, yerno y nuera.</p></div></div>

<!-- Recursos y fuente: public/slides/04-presuntos-agresores/ -->

---

# Una región, realidades muy distintas
<div class="two-col"><div><VbgChart kind="territory" /></div><div><div class="eyebrow">Colombia · 2019</div><p class="question">Dentro de un mismo país, el riesgo tampoco se distribuye por igual.</p><p>Las tasas departamentales seleccionadas van de <strong>7,2</strong> a <strong>59,3</strong> homicidios por cada 100.000 habitantes: una distancia de más de ocho veces.</p><p class="note">Los datos territoriales ayudan a preguntar por conflicto, economías ilegales, desigualdad, acceso institucional y condiciones locales; no explican por sí solos la violencia.</p></div></div>

<!-- Recursos: public/slides/03-desigualdad-territorial/ -->

---

# Violencia letal y diversidad de género
<div class="two-col"><div><VbgChart kind="diversity" /></div><div><p class="question">Las violencias basadas en género también afectan a personas lesbianas, gais, bisexuales, trans, no binarias, intersexuales y otras personas con orientaciones, identidades y expresiones diversas.</p><p>Los registros documentan violencia letal, pero no permiten calcular una tasa nacional completa y comparable para todas las identidades.</p><p class="note">La ausencia de datos desagregados no significa ausencia de violencia: muestra una barrera para reconocerla, prevenirla y responder.</p></div></div>

<!-- Recursos: public/slides/04-patrones-genero/ -->

---

# La expresión más extrema
<div class="two-col"><div><VbgChart kind="femicide" /></div><div><div class="eyebrow">América Latina y el Caribe · 2024</div><p class="question">Al menos 3.828 mujeres fueron víctimas de femicidio, feminicidio o muerte violenta por razones de género.</p><p>Esto equivale a <strong>por lo menos 11 muertes cada día</strong> en 26 países y territorios con información oficial disponible.</p><p class="note">“Al menos” importa: el subregistro y las diferencias legales entre países limitan las comparaciones exactas.</p></div></div>

<!-- Recursos: public/slides/05-feminicidio-regional/ -->

---

<div class="question-stage">
  <div class="eyebrow">Antes de definir</div>
  <h1>Preguntas para pensar</h1>
  <h2 class="first-question">¿Qué es el sexo?</h2>
  <v-clicks>
    <p>¿Es una sola característica o un conjunto de dimensiones corporales?</p>
    <p>¿Quién define el sexo: el cuerpo, la medicina, la ciencia, las instituciones o la sociedad?</p>
  </v-clicks>
</div>

<!-- Recursos: public/slides/08-que-es-el-sexo/ y public/slides/09-quien-define-el-sexo/ -->

---

# La interpretación cromosomática
<div class="karyotype-stage">
<p class="karyotype-intro">XX y XY son configuraciones frecuentes, pero no las únicas. Estas son algunas variaciones documentadas; los cromosomas son una dimensión de las características sexuales, no una definición total de los cuerpos ni del género.</p>
<div class="karyotype-grid all-variants"><div v-click="1" class="karyotype-item" tabindex="0" data-tooltip="Configuración frecuente. Suele asociarse con desarrollo ovárico, pero por sí sola no determina anatomía ni identidad."><strong>XX</strong><span>frecuente</span></div><div v-click="2" class="karyotype-item" tabindex="0" data-tooltip="Configuración frecuente. Con genes y vías hormonales funcionales suele asociarse con desarrollo testicular; no es una regla automática."><strong>XY</strong><span>frecuente</span></div><div v-click="3" class="karyotype-item" tabindex="0" data-tooltip="Un X adicional. Muchas personas no presentan rasgos evidentes; algunas tienen talla alta o diferencias de aprendizaje variables."><strong>XXX</strong><span>trisomía</span></div><div v-click="4" class="karyotype-item" tabindex="0" data-tooltip="Un X adicional. Puede asociarse con menor producción de testosterona, testículos pequeños o infertilidad; la expresión es variable."><strong>XXY</strong><span>Klinefelter</span></div><div v-click="5" class="karyotype-item" tabindex="0" data-tooltip="Un Y adicional. El desarrollo testicular y la fertilidad suelen ser posibles; algunas personas presentan talla alta o diferencias de aprendizaje."><strong>XYY</strong><span>variación</span></div><div v-click="6" class="karyotype-item" tabindex="0" data-tooltip="Un solo X. Puede asociarse con baja estatura, función ovárica reducida y necesidades médicas variables; no define a la persona."><strong>45,X</strong><span>Turner</span></div><div v-click="7" class="karyotype-item" tabindex="0" data-tooltip="Distintas células pueden tener configuraciones diferentes. Los efectos dependen de cuáles células y tejidos estén implicados."><strong>mosaico</strong><span>mosaicismo</span></div><div v-click="8" class="karyotype-item" tabindex="0" data-tooltip="Cuatro X. Puede asociarse con diferencias del desarrollo y aprendizaje; las manifestaciones cambian mucho entre personas."><strong>48,XXXX</strong><span>tetrasomía</span></div><div v-click="9" class="karyotype-item" tabindex="0" data-tooltip="Tres X y un Y. Puede afectar desarrollo y función testicular, con expresiones corporales y cognitivas variables."><strong>48,XXXY</strong><span>polisomía</span></div><div v-click="10" class="karyotype-item" tabindex="0" data-tooltip="Dos X y dos Y. Puede asociarse con función testicular reducida y diferencias del desarrollo; no todas las personas viven lo mismo."><strong>48,XXYY</strong><span>polisomía</span></div><div v-click="11" class="karyotype-item" tabindex="0" data-tooltip="Un X y tres Y. Es muy poco frecuente; se han descrito diferencias del desarrollo, pero su expresión es variable."><strong>48,XYYY</strong><span>polisomía</span></div><div v-click="12" class="karyotype-item" tabindex="0" data-tooltip="Cinco X. Es extremadamente poco frecuente y puede acompañarse de diferencias del desarrollo y necesidades médicas diversas."><strong>49,XXXXX</strong><span>pentasomía</span></div><div v-click="13" class="karyotype-item" tabindex="0" data-tooltip="Cuatro X y un Y. Puede influir en desarrollo y función testicular; requiere valoración médica individual, no estereotipos."><strong>49,XXXXY</strong><span>pentasomía</span></div><div v-click="14" class="karyotype-item" tabindex="0" data-tooltip="Pérdidas, duplicaciones, anillos o translocaciones en X o Y. Sus efectos dependen del cambio concreto y de los genes involucrados."><strong>estructural</strong><span>reordenamiento</span></div></div>
<p class="note mt-6">No hay cuerpos “normales” frente a otros “anormales”: hay configuraciones frecuentes y variaciones.</p>
</div>

<!--
## Notas del orador

- Presentar estas configuraciones como **ejemplos**, no como un listado exhaustivo ni como diagnósticos.
- “Mosaico” significa que una persona puede tener más de una configuración cromosómica en células distintas; por ejemplo, 45,X/46,XX o 45,X/46,XY.
- No hay un inventario completo y fijo: además de cambios numéricos, existen mosaicismos y cambios estructurales de X o Y.
- `45,X` es preferible a “X0”; expresa que hay 45 cromosomas y un cromosoma X.
- Evitar inferir identidad de género, anatomía, vivencias o capacidades de una configuración cromosómica.
- Fuentes de consulta: MedlinePlus Genetics (trisomía X, Turner y cromosoma X) y NHGRI (cariotipo y cromosoma X).

Recursos: `public/slides/10a-interpretacion-cromosomica/` y `public/slides/10b-variaciones-cromosomicas/`
-->

---

# Anne Fausto-Sterling
<div class="two-col"><div><img class="author-photo tall" src="/slides/10-fausto-sterling/anne-fausto-sterling-retrato.jpg" alt="Marcador para retrato de Anne Fausto-Sterling"></div><div><div class="eyebrow">Autora de referencia · 1 minuto</div><h3><em>Sexing the Body</em> · 2000</h3><p>Bióloga y teórica feminista. Su trabajo aborda la complejidad de las características sexuales y las formas en que la ciencia y la sociedad clasifican los cuerpos.</p><p class="question">Su obra permite cuestionar las ideas simplificadas sobre el sexo biológico y reconocer la diversidad de las características sexuales humanas.</p></div></div>

<!-- Recursos: public/slides/10-fausto-sterling/ -->

---

# Conceptos para orientarnos
<div class="cards">
<div v-click="1" class="card">
<p class="concept-prompt">¿Qué es el sexo?</p>
<div v-click="2" class="concept-definition"><h3>Sexo</h3>
<p>Conjunto de características corporales —cromosomas, gónadas, hormonas, genitales y caracteres sexuales secundarios— que no siempre se presentan de forma binaria. El sexo asignado al nacer es una clasificación, no una descripción total de una persona.</p></div>
</div>
<div v-click="3" class="card">
<p class="concept-prompt">¿Qué es el género?</p>
<div v-click="4" class="concept-definition"><h3>Género</h3><p>Construcción social e histórica de normas, significados y relaciones de poder que organizan lo masculino, lo femenino y otras posibilidades. Se entrecruza con clase, raza, sexualidad, territorio y discapacidad.</p></div>
</div>
<div v-click="5" class="card">
<p class="concept-prompt">¿Qué son los roles de género?</p>
<div v-click="6" class="concept-definition"><h3>Roles de género</h3><p>Expectativas y asignaciones sociales sobre comportamientos, cuidados, trabajo y participación. Cuando se imponen como “naturales”, pueden reproducir subordinación y excluir de la decisión.</p></div>
</div>
</div>
<div class="cards">
<div v-click="7" class="card"><p class="concept-prompt">¿Qué es la identidad de género?</p><div v-click="8" class="concept-definition"><h3>Identidad de género</h3><p>Vivencia interna e individual del género: la forma en que cada persona se piensa e identifica. Puede corresponder o no con el sexo asignado al nacer.</p></div></div>
<div v-click="9" class="card"><p class="concept-prompt">¿Qué es la expresión de género?</p><div v-click="10" class="concept-definition"><h3>Expresión de género</h3><p>Exteriorización de la identidad o personalidad mediante lenguaje, apariencia, comportamiento, vestimenta, características corporales o nombre. No autoriza suposiciones ni juicios.</p></div></div>
<div v-click="11" class="card"><p class="concept-prompt">¿Qué es la orientación sexual?</p><div v-click="12" class="concept-definition"><h3>Orientación sexual</h3><p>Forma en que una persona experimenta deseo o atracción sexual y afectiva hacia otras personas. Es distinta de la identidad y de la expresión de género.</p></div></div>
</div>

<!--
## Notas del orador

- Basado en la sección 3, “Conceptos”, y en los principios de interseccionalidad y división sexual del trabajo de la Ruta Nacional de atención y seguimiento de VBG.
- La Ruta define de forma expresa identidad de género, expresión de género y orientación sexual. Las primeras tres tarjetas presentan un marco pedagógico coherente con su enfoque estructural.
- Evitar usar apariencia, conducta o nombre para inferir identidad de género u orientación sexual.

Recursos: `public/slides/11-conceptos/`
-->

---

# Género, estereotipos y poder
<div class="soft-panel">Los roles de género se aprenden y reproducen en la familia, la escuela, los medios, las instituciones y las relaciones cotidianas. Se vuelven problemáticos cuando operan como obligaciones, jerarquías o mecanismos de exclusión.</div>
<div class="cards mt-10"><div class="card"><h3>Deslegitimar</h3><p>Cuestionar opiniones o capacidades por estereotipos de género.</p></div><div class="card"><h3>Ridiculizar</h3><p>Usar la apariencia, el cuerpo o la expresión como objeto de burla.</p></div><div class="card"><h3>Excluir</h3><p>Restringir la palabra, el reconocimiento o la participación.</p></div></div>

<!-- Recursos: public/slides/12-estereotipos-poder/ -->

---

# Simone de Beauvoir y Joan W. Scott
<div class="two-col"><div class="author-panel"><img class="author-photo compact" src="/slides/13-beauvoir-scott/simone-de-beauvoir-retrato.jpeg" alt="Marcador para retrato de Simone de Beauvoir"><h3>Simone de Beauvoir</h3><p><em>El segundo sexo</em> (1949): analiza cómo la condición social de las mujeres se construye históricamente.</p></div><div class="author-panel"><img class="author-photo compact" src="/slides/13-beauvoir-scott/joan-w-scott-retrato.webp" alt="Marcador para retrato de Joan W. Scott"><h3>Joan W. Scott</h3><p>“Gender: A Useful Category of Historical Analysis” (1986): propone el género como categoría para comprender relaciones de poder.</p></div></div>

<!-- Recursos: public/slides/13-beauvoir-scott/ -->

---

# Antes de hablar de VBG
<div class="violence-stage">
<p v-click="1" class="violence-question">¿Qué es la violencia?</p>
<div v-click="2" class="definition">Podemos entender la violencia como acciones, omisiones, amenazas o formas de control que, mediante el uso de la fuerza, el poder o la coerción, producen daño, restringen la autonomía o colocan a alguien en una situación de subordinación. Esta es una definición para analizar; no reemplaza las definiciones jurídicas ni decide por sí sola si una acción es legítima.</div>
<div v-click="3" class="violence-prompts"><p>Si una organización expulsa a alguien que aceptó sus reglas, ¿es un acto violento, una sanción legítima o depende de cómo se hizo?</p><p>Si el Estado priva de la libertad a una persona, ¿podemos hablar de violencia aunque exista una norma o un contrato social?</p><p>¿Todo uso de fuerza o coerción es igualmente malo o ilegítimo? ¿Qué papel tienen el contexto, el poder y las garantías?</p></div>
<p v-click="4" class="note">Estas preguntas no se resuelven aquí: abren otra conversación sobre violencia, legalidad, legitimidad y justicia. Entender esa complejidad nos permite ser más críticos al estudiar las VBG.</p>
</div>

<!-- Recursos: public/slides/14a-pregunta-violencia/ -->

---

# ¿Qué entendemos por VBG?
<div v-click="1" class="definition">La violencia basada en género comprende actos, amenazas, prácticas de control, coerción o discriminación que producen o pueden producir daño y que están relacionados con el género, las desigualdades de género, la identidad o expresión de género o la orientación sexual de una persona.</div>
<p v-click="2" class="note mt-10">Varias manifestaciones pueden coexistir. Para comprender una conducta importa el contexto, sus efectos y las relaciones de poder involucradas.</p>

<!-- Recursos: public/slides/14-que-es-vbg/ -->

---

# Tipos de VBG: daño, control y desigualdad
<div class="cards"><div v-click="1" class="card"><h3>Verbal</h3><p>Insultos o comentarios denigrantes que hieren, acosan, menosprecian o coaccionan por género.</p></div><div v-click="2" class="card"><h3>Discriminación</h3><p>Acciones u omisiones que restringen derechos, recursos, participación o trato igualitario.</p></div><div v-click="3" class="card"><h3>Psicológica</h3><p>Intimidación, manipulación, amenazas, desprecio, humillación o condicionamientos para controlar.</p></div></div>
<div class="cards"><div v-click="4" class="card"><h3>Simbólica</h3><p>Mensajes, valores, íconos o estereotipos que normalizan subordinación y desigualdad.</p></div><div v-click="5" class="card"><h3>Física</h3><p>Agresión —o intento— que usa el cuerpo, objetos o sustancias para inmovilizar o dañar.</p></div><div v-click="6" class="card"><h3>Sexual</h3><p>Conductas que someten el cuerpo o limitan una sexualidad libre mediante coerción, amenaza o fuerza.</p></div></div>

<!--
## Notas del orador

Adaptado de la sección 7, “Tipificación de las violencias”, de la Ruta Nacional de atención y seguimiento de VBG. No leer las tarjetas como una lista de chequeo: las manifestaciones pueden coexistir.

Recursos: `public/slides/15-manifestaciones-vbg/`
-->

---

# Tipos de VBG: autonomía y vida cotidiana
<div class="cards two-by-two"><div v-click="1" class="card"><h3>Doméstica</h3><p>Se produce en la convivencia cotidiana y puede articular abusos emocionales, físicos, económicos, control o acecho.</p></div><div v-click="2" class="card"><h3>Virtual</h3><p>Agresiones digitales: hostigamiento, amenazas, exposición no consentida, discursos de odio o vigilancia.</p></div><div v-click="3" class="card"><h3>Económica y patrimonial</h3><p>Controlar ingresos, recursos o decisiones financieras; retener, dañar o apropiarse de bienes o documentos.</p></div><div v-click="4" class="card"><h3>División sexual del trabajo</h3><p>Imponer tareas de cuidado, apoyo o trabajo invisible según el género y excluir de la deliberación o decisiones.</p></div></div>

<!--
## Notas del orador

La Ruta distingue violencia económica de patrimonial; aquí se presentan juntas para mostrar que ambas restringen autonomía material, pero no son idénticas. La división sexual del trabajo se incluye como forma estructural de subordinación, especialmente en ámbitos organizativos y comunitarios.

Recursos: `public/slides/15a-autonomia-vida-cotidiana/`
-->

---

# Tipos de VBG: participación y respuesta institucional
<div class="two-col"><div v-click="1" class="soft-panel"><h3>Violencia política</h3><p>Acciones que atemorizan, presionan, desacreditan, persiguen o limitan a mujeres y personas sexo-género diversas en su participación, representación o toma de decisiones.</p><p class="mt-4 text-sm">Puede aparecer como silenciamiento, deslegitimación de saberes, interrupciones sistemáticas o apropiación de ideas.</p></div><div v-click="2" class="soft-panel"><h3>Revictimización</h3><p>Prácticas durante o después de la atención que profundizan el daño: minimizar, culpabilizar, forzar relatos repetidos, divulgar información o poner en duda la credibilidad.</p><p class="mt-4 text-sm">Una respuesta cuidadosa protege autonomía, confidencialidad y dignidad.</p></div></div>
<p v-click="3" class="note mt-8">Las categorías orientan el reconocimiento y la respuesta; una misma situación puede involucrar varias formas de violencia a la vez.</p>

<!--
## Notas del orador

La Ruta incluye ejemplos como machoexplicación, machoapropiación y machointerrupción dentro de violencia política. Úsalos solo si ayudan a situar la conversación; no son una lista exhaustiva.

Recursos: `public/slides/15b-participacion-respuesta/`
-->

---

# Rita Laura Segato
<div class="two-col"><div><img class="author-photo tall" src="/slides/16-segato/rita-laura-segato-retrato.jpg" alt="Marcador para retrato de Rita Laura Segato"></div><div><div class="eyebrow">Antropóloga feminista</div><h3><em>Las estructuras elementales de la violencia</em> · 2003</h3><p>Su trabajo permite analizar la violencia en relación con jerarquías, relaciones de poder y normas sociales que pueden normalizar la humillación o dominación.</p><p class="question">¿Una conducta puede ser violenta aunque quien la ejerce diga que “estaba bromeando”?</p></div></div>

<!-- Recursos: public/slides/16-segato/ -->

---

# Para cerrar
<div class="soft-panel text-left mt-12"><p class="eyebrow">Preguntas para llevar</p><ul><li>¿Todo acto violento a una mujer, o persona diversa, puede catalogarse como VBG?</li><li>¿Cómo distinguimos una crítica de una descalificación basada en estereotipos?</li><li>¿Qué responsabilidades tienen nuestros espacios colectivos frente a las VBG?</li></ul></div>
<p class="note mt-10"><strong>Marco de referencia:</strong> Ley 1257 de 2008. Su alcance debe distinguirse de otras formas de VBG y de las normas aplicables a cada situación.</p>

<!-- Recursos: public/slides/18-cierre/ -->
