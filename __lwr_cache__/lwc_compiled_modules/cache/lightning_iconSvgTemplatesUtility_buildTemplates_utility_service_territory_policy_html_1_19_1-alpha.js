import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_territory_policy.css";

import _implicitScopedStylesheets from "./service_territory_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M17.05 2H8a6.08 6.08 0 00-6 6.09v5.68a6 6 0 006 6.09h9.05a6 6 0 006-6.09V8.09a6 6 0 00-6-6.09zm-3.26 13H11.3a4.06 4.06 0 010-8.12h2.49a4.06 4.06 0 110 8.12zM34.42 19.86h9a6 6 0 006-6.09V8.09a6 6 0 00-6-6.09h-9a6 6 0 00-6 6.09v5.68a6 6 0 006 6.09zm3.25-13h2.49a4.06 4.06 0 110 8.12h-2.49a4.06 4.06 0 010-8.12zM17.05 24.73H8a6.08 6.08 0 00-6 6.09v5.69a6.06 6.06 0 006 6.08h9.05a6.06 6.06 0 006-6.08v-5.69a6 6 0 00-6-6.09zm-3.26 13H11.3a4.06 4.06 0 010-8.12h2.49a4.06 4.06 0 110 8.12zM39.18 24.73c-6 0-10.81 4.47-10.81 10.05 0 6.94 7.74 13.3 10.13 15a1.17 1.17 0 001.42 0C42.31 48 50 41.72 50 34.78c0-5.58-4.84-10.05-10.82-10.05zm0 14.2a4.4 4.4 0 01-4.55-4.21 4.57 4.57 0 019.11 0 4.4 4.4 0 01-4.56 4.21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-39pdsndj3a3";
freezeTemplate(tmpl);
