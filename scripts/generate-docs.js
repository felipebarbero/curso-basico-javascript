const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const modules = [
  { id: "00-introduccion", title: "Introducción", folder: "00-introduccion" },
  { id: "01-tipos", title: "Tipos", folder: "01-tipos" },
  { id: "02-operadores", title: "Operadores", folder: "02-operadores" },
  { id: "03-control-flujo", title: "Control de flujo", folder: "03-control-flujo" },
  { id: "04-objetos", title: "Objetos", folder: "04-objetos" },
  {
    id: "05-avanzado",
    title: "Avanzado",
    folder: "05-avanzado",
    // Orden didáctico (los archivos de esta carpeta no están numerados)
    fileOrder: [
      "conceptos-avanzados.js",
      "typeof-instanceof.js",
      "set-map.js",
      "try-catch.js",
      "regex-expresiones-regulares.js",
      "eventos-dom.js",
      "fetch.js",
    ],
  },
];

const TITLE_OVERRIDES = {
  "01-que-es-javascript.js": "Qué es JavaScript",
  "02-que-es-ecmascript.js": "Qué es ECMAScript",
  "03-referenciar-archivos.js": "Referenciar archivos",
  "02-tipos-de-datos.js": "Tipos de datos",
  "05-numeros.js": "Números",
  "10-expresiones-declaraciones.js": "Expresiones y declaraciones",
  "11-conversiones-de-datos.js": "Conversiones de datos",
  "01-aritmeticos.js": "Aritméticos",
  "02-asignacion.js": "Asignación",
  "03-comparacion.js": "Comparación",
  "04-logicos.js": "Lógicos",
  "01-if-else-elseif.js": "if / else / else if",
  "03-do-while.js": "do while",
  "05-for-of.js": "for...of",
  "06-for-in.js": "for...in",
  "07-break-continue.js": "break / continue",
  "09-listar-propiedades.js": "Listar propiedades",
  "conceptos-avanzados.js": "Conceptos avanzados",
  "typeof-instanceof.js": "typeof / instanceof",
  "set-map.js": "Set y Map",
  "try-catch.js": "Try / Catch",
  "regex-expresiones-regulares.js": "Regex / Expresiones regulares",
  "eventos-dom.js": "Eventos DOM",
};

function slugifyTitle(name) {
  if (TITLE_OVERRIDES[name]) return TITLE_OVERRIDES[name];
  return name
    .replace(/^\d+-/, "")
    .replace(/\.js$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function toAnchor(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function isSectionHeader(text) {
  const t = text.trim();
  if (/^:{2,}/.test(t)) return true;
  return (
    t.length > 8 &&
    t === t.toUpperCase() &&
    /[A-ZÁÉÍÓÚÑ]/.test(t) &&
    !t.includes("=")
  );
}

function cleanHeader(text) {
  return text.replace(/:/g, "").trim();
}

function parseJsToMarkdown(content) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let codeBuf = [];
  let inBlock = false;
  let blockBuf = [];

  const flushCode = () => {
    while (codeBuf.length && codeBuf[codeBuf.length - 1].trim() === "") {
      codeBuf.pop();
    }
    const start = codeBuf.findIndex((l) => l.trim() !== "");
    if (start === -1) {
      codeBuf = [];
      return;
    }
    const slice = codeBuf.slice(start);
    out.push("");
    out.push("```js");
    out.push(...slice);
    out.push("```");
    out.push("");
    codeBuf = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!inBlock && trimmed.startsWith("/*")) {
      flushCode();
      inBlock = true;
      const after = trimmed.replace(/^\/\*\*?/, "").replace(/\*\/$/, "");
      if (trimmed.includes("*/")) {
        inBlock = false;
        if (after.trim()) out.push(after.trim());
      } else if (after.trim()) {
        blockBuf.push(after.trim());
      }
      continue;
    }

    if (inBlock) {
      if (trimmed.endsWith("*/")) {
        const body = trimmed.replace(/\*\/$/, "").replace(/^\*\s?/, "").trim();
        if (body) blockBuf.push(body);
        const text = blockBuf
          .map((l) => l.replace(/^\*\s?/, ""))
          .join("\n")
          .trim();
        if (text) {
          out.push("");
          text.split("\n").forEach((l) => out.push(l));
          out.push("");
        }
        blockBuf = [];
        inBlock = false;
      } else {
        blockBuf.push(trimmed.replace(/^\*\s?/, ""));
      }
      continue;
    }

    if (trimmed.startsWith("//")) {
      flushCode();
      const comment = trimmed.replace(/^\/\/\s?/, "");
      if (!comment.trim()) {
        out.push("");
        continue;
      }
      if (isSectionHeader(comment) || /^:{2,}/.test(comment)) {
        out.push("");
        out.push("### " + cleanHeader(comment));
        out.push("");
      } else {
        out.push(comment);
      }
      continue;
    }

    if (trimmed === "") {
      if (codeBuf.length) codeBuf.push("");
      else out.push("");
      continue;
    }

    codeBuf.push(line);
  }

  flushCode();

  const cleaned = [];
  for (const l of out) {
    if (l === "" && cleaned.length && cleaned[cleaned.length - 1] === "") continue;
    cleaned.push(l);
  }
  return cleaned.join("\n").trim() + "\n";
}

const docsDir = path.join(root, "docs");
fs.mkdirSync(docsDir, { recursive: true });

const moduleMeta = modules.map((m, idx) => {
  const dir = path.join(root, m.folder);
  const found = fs.readdirSync(dir).filter((f) => f.endsWith(".js"));
  let files;
  if (m.fileOrder) {
    const ordered = m.fileOrder.filter((f) => found.includes(f));
    const extras = found
      .filter((f) => !m.fileOrder.includes(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    files = [...ordered, ...extras];
  } else {
    files = found.sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true })
    );
  }
  return { ...m, idx, files };
});

for (const m of moduleMeta) {
  const prev = moduleMeta[m.idx - 1];
  const next = moduleMeta[m.idx + 1];
  const nav = [
    prev ? `[← Anterior: ${prev.title}](./${prev.id}.md)` : "← Anterior",
    "[Índice](./README.md)",
    next ? `[Siguiente: ${next.title} →](./${next.id}.md)` : "Siguiente →",
  ].join(" | ");

  const body = [];
  body.push(`# ${String(m.idx).padStart(2, "0")}. ${m.title}`);
  body.push("");
  body.push(nav);
  body.push("");
  body.push(
    `Contenido basado en los archivos de [\`${m.folder}/\`](../${m.folder}/).`
  );
  body.push("");
  body.push("## Temas");
  body.push("");
  for (const file of m.files) {
    const title = slugifyTitle(file);
    body.push(`- [${title}](#${toAnchor(title)})`);
  }
  body.push("");

  for (const file of m.files) {
    const rel = path.join(m.folder, file).replace(/\\/g, "/");
    const content = fs.readFileSync(path.join(root, m.folder, file), "utf8");
    const title = slugifyTitle(file);
    body.push("---");
    body.push("");
    body.push(`## ${title}`);
    body.push("");
    body.push(`Archivo: [\`${rel}\`](../${rel})`);
    body.push("");
    body.push(parseJsToMarkdown(content));
  }

  body.push("---");
  body.push("");
  body.push(nav);
  body.push("");

  fs.writeFileSync(path.join(docsDir, `${m.id}.md`), body.join("\n"), "utf8");
  console.log(`Wrote docs/${m.id}.md`);
}

const docsIndex = [];
docsIndex.push("# Curso de JavaScript — Índice");
docsIndex.push("");
docsIndex.push(
  "Apuntes navegables del curso. Cada módulo resume la teoría y los ejemplos de los archivos `.js` del repositorio."
);
docsIndex.push("");
docsIndex.push("[← Volver al README del proyecto](../README.md)");
docsIndex.push("");
docsIndex.push("## Módulos");
docsIndex.push("");
for (const m of moduleMeta) {
  docsIndex.push(
    `### [${String(m.idx).padStart(2, "0")}. ${m.title}](./${m.id}.md)`
  );
  docsIndex.push("");
  for (const file of m.files) {
    const title = slugifyTitle(file);
    docsIndex.push(`- [${title}](./${m.id}.md#${toAnchor(title)})`);
  }
  docsIndex.push("");
}
docsIndex.push("## Cómo practicar");
docsIndex.push("");
docsIndex.push("1. Abre `index.html` en el navegador (Live Server o similar).");
docsIndex.push(
  "2. Copia el contenido del archivo de la lección a `app.js` (o referéncialo desde el HTML)."
);
docsIndex.push("3. Revisa la consola del navegador para ver los `console.log`.");
docsIndex.push("");
fs.writeFileSync(path.join(docsDir, "README.md"), docsIndex.join("\n"), "utf8");
console.log("Wrote docs/README.md");

const readme = [];
readme.push("# Curso de JavaScript");
readme.push("");
readme.push(
  "Apuntes y ejemplos prácticos de JavaScript, organizados por módulos."
);
readme.push("");
readme.push("## Empezar aquí");
readme.push("");
readme.push(
  "- **[Índice del curso (docs/)](./docs/README.md)** — teoría + ejemplos con navegación entre módulos"
);
readme.push("- Código fuente por carpeta (archivos `.js` listos para ejecutar)");
readme.push("");
readme.push("## Navegación rápida");
readme.push("");
for (const m of moduleMeta) {
  readme.push(
    `### [${String(m.idx).padStart(2, "0")}. ${m.title}](./docs/${m.id}.md)`
  );
  readme.push("");
  readme.push("| Tema | Archivo |");
  readme.push("| --- | --- |");
  for (const file of m.files) {
    const title = slugifyTitle(file);
    const rel = `${m.folder}/${file}`;
    readme.push(
      `| [${title}](./docs/${m.id}.md#${toAnchor(title)}) | [\`${rel}\`](./${rel}) |`
    );
  }
  readme.push("");
}
readme.push("## Estructura del proyecto");
readme.push("");
readme.push("```");
readme.push("curso-js/");
readme.push("├── README.md");
readme.push("├── docs/                 # Apuntes navegables");
readme.push("├── 00-introduccion/");
readme.push("├── 01-tipos/");
readme.push("├── 02-operadores/");
readme.push("├── 03-control-flujo/");
readme.push("├── 04-objetos/");
readme.push("├── 05-avanzado/");
readme.push("├── index.html");
readme.push("└── app.js");
readme.push("```");
readme.push("");
readme.push("## Cómo usar los ejemplos");
readme.push("");
readme.push("1. Abre `index.html` en el navegador.");
readme.push(
  "2. El script principal es `app.js`. Para probar una lección, copia su código ahí o cambia la etiqueta `<script>` en el HTML."
);
readme.push("3. Abre la consola del navegador (F12) para ver la salida.");
readme.push("");
readme.push("## Convención de navegación en docs");
readme.push("");
readme.push(
  "Cada módulo en `docs/` incluye enlaces **Anterior | Índice | Siguiente** al inicio y al final."
);
readme.push("");
readme.push("## Regenerar la documentación");
readme.push("");
readme.push(
  "Si agregas o editas lecciones `.js`, puedes volver a generar los apuntes con:"
);
readme.push("");
readme.push("```bash");
readme.push("node scripts/generate-docs.js");
readme.push("```");
readme.push("");
fs.writeFileSync(path.join(root, "README.md"), readme.join("\n"), "utf8");
console.log("Wrote README.md");
