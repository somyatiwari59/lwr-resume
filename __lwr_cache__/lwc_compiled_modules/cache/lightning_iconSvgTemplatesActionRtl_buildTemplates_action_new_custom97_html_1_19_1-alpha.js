import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom97.css";

import _implicitScopedStylesheets from "./new_custom97.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M34.2 29.3v-19C34.2 5.6 30.6 2 26 2h-.1c-4.6 0-8.2 3.7-8.2 8.3v19C15.3 31.6 14 34.7 14 38c0 6.6 5.4 12 12 12s12-5.4 12-12c0-3.4-1.3-6.4-3.8-8.7zM32.3 38H19.7c-.7 0-1.2-.7-1.1-1.4.3-1.8 1.3-3.4 2.7-4.5.5-.5.9-1.1.9-1.8v-20c0-2.2 1.6-3.8 3.7-3.8h.1c2.1 0 3.7 1.7 3.7 3.8v.7h-2.2c-1.3 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h2.2v3h-2.2c-1.3 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h2.2v3h-2.2c-1.3 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h2.2c.1.7.4 1.2.9 1.7 1.4 1.1 2.4 2.8 2.7 4.5.2.9-.3 1.6-1 1.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-69ijv88hggf";
freezeTemplate(tmpl);
