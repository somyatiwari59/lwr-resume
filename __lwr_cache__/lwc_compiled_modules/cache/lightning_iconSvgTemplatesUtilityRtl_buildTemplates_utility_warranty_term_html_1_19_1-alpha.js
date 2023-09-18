import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./warranty_term.css";

import _implicitScopedStylesheets from "./warranty_term.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 2c3 0 5.43 3.29 8.09 4.42s6.82.51 8.84 2.65 1.51 6.07 2.65 8.84S50 23 50 26s-3.29 5.43-4.42 8.09-.51 6.82-2.65 8.84-6.07 1.53-8.84 2.65S29 50 26 50s-5.43-3.29-8.09-4.42-6.82-.51-8.84-2.65-1.53-6.07-2.65-8.84S2 29 2 26s3.29-5.43 4.42-8.09.51-6.82 2.65-8.84 6.07-1.53 8.84-2.65S23 2 26 2zm0 7.58A16.42 16.42 0 1042.42 26 16.47 16.47 0 0026 9.58zm7.62 9.15l1.61 1.52a1.25 1.25 0 010 1.51L25.08 33.07a2.07 2.07 0 01-1.61.7 2.23 2.23 0 01-1.61-.7l-5.49-5.47a1 1 0 01-.1-1.42l.1-.11L18 24.56a1.1 1.1 0 011.54-.07l.07.07 3.89 4 8.59-9.8a1.1 1.1 0 011.53-.03z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-253iu0gp64";
freezeTemplate(tmpl);
