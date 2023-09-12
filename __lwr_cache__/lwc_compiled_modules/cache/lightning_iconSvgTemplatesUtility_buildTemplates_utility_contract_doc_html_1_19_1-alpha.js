import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_doc.css";

import _implicitScopedStylesheets from "./contract_doc.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45.68 12.88L35.12 2.32a1 1 0 00-.8-.32 1.09 1.09 0 00-1.12 1.12v8.48a3.21 3.21 0 003.2 3.2h8.48A1.09 1.09 0 0046 13.68a1 1 0 00-.32-.8z"${3}/><path d="M44.4 19.6H33.2a4.81 4.81 0 01-4.8-4.8V3.6A1.6 1.6 0 0026.8 2h-16A4.81 4.81 0 006 6.8v38.4a4.81 4.81 0 004.8 4.8h30.4a4.81 4.81 0 004.8-4.8v-24a1.6 1.6 0 00-1.6-1.6zm-32.8-7.52l3.92-.56c.08 0 .24-.08.24-.16l1.76-3.6a.37.37 0 01.64 0l1.76 3.6c.08.08.16.16.24.16l3.92.56c.24.08.4.4.16.56l-2.88 2.8c-.08.08-.08.16-.08.32l.64 3.92a.31.31 0 01-.48.32l-3.52-1.84a.24.24 0 00-.32 0L14.08 20a.31.31 0 01-.48-.32l.64-3.92a.48.48 0 00-.08-.32l-2.88-2.8c-.08-.16.08-.48.32-.56zM36.4 38.8a1.6 1.6 0 01-1.6 1.6H14a1.6 1.6 0 01-1.6-1.6v-1.6a1.6 1.6 0 011.6-1.6h20.8a1.6 1.6 0 011.6 1.6zm3.2-9.6a1.6 1.6 0 01-1.6 1.6H14a1.6 1.6 0 01-1.6-1.6v-1.6A1.6 1.6 0 0114 26h24a1.6 1.6 0 011.6 1.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4bku9j5dijp";
freezeTemplate(tmpl);
