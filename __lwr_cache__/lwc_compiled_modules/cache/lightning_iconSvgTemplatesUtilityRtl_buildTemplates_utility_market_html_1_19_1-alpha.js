import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./market.css";

import _implicitScopedStylesheets from "./market.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M6.47 19.12C6.47 9.71 14.17 2 23.59 2s17.12 7.71 17.12 17.12c0 5-2.17 9.51-5.61 12.65h-1.83c-.61 0-1.21.07-1.77.21-.21-.43-.52-.82-.91-1.1a13.78 13.78 0 006.58-10.05h-4.51c-.22 3.87-1.01 7.28-2.28 9.91-.46-.28-1-.46-1.59-.46H27.3c-.21 0-.4.01-.6.06 1.31-2.14 2.31-5.51 2.53-9.51h-3.94v10.23c-.6.55-.97 1.32-.97 2.2 0 1.27.79 2.34 1.89 2.77-.86.13-1.74.21-2.63.21-9.42 0-17.12-7.69-17.12-17.12h.01zm26.18-1.71h4.51c-.57-4.39-3.2-8.16-6.97-10.27 1.37 2.68 2.28 6.22 2.46 10.27zm-10.78 0V6.17c-1.93 1.65-3.65 5.88-3.94 11.24h3.94zm0 14.66V20.83h-3.94c.28 5.36 1.99 9.59 3.94 11.24zm3.42-25.9v11.24h3.94c-.28-5.36-1.99-9.59-3.94-11.24zM14.51 17.41c.22-4.05 1.09-7.59 2.46-10.27A13.835 13.835 0 0010 17.41h4.51zm0 3.42H10c.57 4.39 3.2 8.16 6.97 10.27-1.37-2.68-2.28-6.22-2.46-10.27z" fill-rule="evenodd"${3}/><path d="M33.5 41.07h9.63c.3 0 .55-.19.63-.48l1.76-6.06c.13-.42-.19-.8-.63-.8H30.01l-.27-.89a.996.996 0 00-.95-.7h-1.56c-.52 0-1.01.39-1.04.89-.03.54.42 1.03.98 1.03h.91l3.07 10.14c.13.42.49.7.95.7h11.36c.52 0 1.01-.39 1.04-.89a.992.992 0 00-.98-1.03h-9.99c-.42 0-.82-.28-.91-.67v-.03c-.22-.61.27-1.21.88-1.21h.01zM33.69 50c.91 0 1.64-.71 1.64-1.59s-.73-1.59-1.64-1.59-1.64.71-1.64 1.59.73 1.59 1.64 1.59zM41.54 50c.91 0 1.64-.71 1.64-1.59s-.73-1.59-1.64-1.59-1.64.71-1.64 1.59.73 1.59 1.64 1.59z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-35l832k5sd7";
freezeTemplate(tmpl);
