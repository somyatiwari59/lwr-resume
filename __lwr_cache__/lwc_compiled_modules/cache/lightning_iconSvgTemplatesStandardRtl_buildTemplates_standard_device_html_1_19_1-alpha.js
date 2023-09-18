import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./device.css";

import _implicitScopedStylesheets from "./device.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M56.59 37.92H53.3v-3.3a2.2 2.2 0 00-2.2-2.19h-2.2a2.2 2.2 0 00-2.2 2.19v3.3h-3.29a2.21 2.21 0 00-2.2 2.2v2.19a2.21 2.21 0 002.2 2.2h3.29v3.3A2.21 2.21 0 0048.9 50h2.2a2.21 2.21 0 002.2-2.2v-3.3h3.29a2.21 2.21 0 002.2-2.2v-2.18a2.21 2.21 0 00-2.2-2.2z"${3}/><path d="M79.6 25.33a5 5 0 00-4.93-4.93H25.33a5 5 0 00-4.93 4.93V57.4a5 5 0 004.93 4.93h49.34a5 5 0 004.93-4.93zm-7.4 27.75a1.89 1.89 0 01-1.85 1.85h-40.7a1.89 1.89 0 01-1.85-1.85V29.65a1.89 1.89 0 011.85-1.85h40.7a1.89 1.89 0 011.85 1.85zM58.63 72.2h-3.7A1.16 1.16 0 0153.7 71v-2.5a1.16 1.16 0 00-1.23-1.23h-4.94a1.16 1.16 0 00-1.23 1.23V71a1.16 1.16 0 01-1.23 1.23h-3.7a5 5 0 00-4.94 4.93v.62a1.9 1.9 0 001.85 1.85h23.44a1.9 1.9 0 001.85-1.85v-.62a5 5 0 00-4.94-4.96z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-7bv60j7t8j4";
freezeTemplate(tmpl);
