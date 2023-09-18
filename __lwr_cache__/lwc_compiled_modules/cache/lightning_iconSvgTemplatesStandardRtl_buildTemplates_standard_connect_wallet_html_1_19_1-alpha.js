import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./connect_wallet.css";

import _implicitScopedStylesheets from "./connect_wallet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45.79 20.96a6.423 6.423 0 016.43 0l6.56 3.79a6.425 6.425 0 013.21 5.57v7.58c0 2.3-1.23 4.42-3.21 5.57l-6.56 3.79a6.423 6.423 0 01-6.43 0l-6.56-3.79a6.425 6.425 0 01-3.21-5.57v-7.58c0-2.3 1.23-4.42 3.21-5.57l6.56-3.79z"${3}/><path d="M32.3 39.19h-6.87c-3.55 0-6.43 2.88-6.43 6.43v27.86c0 3.55 2.88 6.43 6.43 6.43h47.14c3.55 0 6.43-2.88 6.43-6.43v-15c0-3.55-2.88-6.43-6.43-6.43H28.64c-1.78 0-3.21-1.44-3.21-3.21s1.44-3.21 3.21-3.21h6.9l-.03-.02a6.425 6.425 0 01-3.21-5.57v-.84zm8.8 33.77l.89 1.13c.4.48.08 1.29-.48 1.37h-2.42c-5.32 0-9.6-4.44-9.36-9.76.16-5.08 4.52-9.03 9.6-9.03h7.1c.81 0 1.77.16 2.58.4 2.1.56 3.95 2.02 5.16 3.79.65.97 1.13 2.02 1.37 3.15.16.73.24 1.45.24 2.1 0 .48 0 .97-.08 1.45-.16.32-.4.65-.81.65h-2.74c-.56.08-.97-.4-.81-.97.01-.06.02-.12.04-.17.07-.33.13-.61.13-.96 0-.81-.16-1.45-.4-2.1-.4-1.05-1.21-1.94-2.18-2.5-.73-.32-1.61-.65-2.58-.65h-7.34c-2.98 0-5.49 2.5-5.24 5.57.16 2.74 2.58 4.84 5.4 4.84h.48c.32 0 .56.16.73.4.16.48.73 1.29.73 1.29zm17.58-16.37c5.08-.08 9.44 3.95 9.6 9.03.16 5.32-4.11 9.76-9.52 9.52h-7.34c-.81 0-1.77-.16-2.58-.4-2.1-.56-3.95-2.02-5.16-3.79a8.065 8.065 0 01-1.37-3.07c-.16-.65-.24-1.45-.24-2.1 0-.48 0-.97.08-1.45.16-.32.4-.65.81-.65h2.74c.56-.08.97.4.81.97-.01.06-.02.12-.03.17-.07.33-.13.61-.13.96 0 .81.16 1.45.4 2.1.4 1.05 1.21 1.94 2.18 2.5.73.32 1.61.65 2.58.65h7.34c2.98 0 5.49-2.5 5.24-5.57-.16-2.74-2.58-4.84-5.4-4.84h-.48c-.32 0-.56-.16-.73-.4-.48-.89-.97-1.69-1.61-2.42-.4-.48 0-1.29.65-1.29l2.18.08z" fill-rule="evenodd"${3}/><path d="M62.16 45.62h10.41c0-3.55-2.88-6.43-6.43-6.43h-.44v.68a6.43 6.43 0 01-3.42 5.68l-.12.06z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-1h0k5ue7apd";
freezeTemplate(tmpl);
