import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entitlement.css";

import _implicitScopedStylesheets from "./entitlement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43.51 2H14.2a5.74 5.74 0 00-5.51 5.46H6.85a3.68 3.68 0 00-3.67 3.75 3.62 3.62 0 003.67 3.68h1.84v7.43H6.85a3.67 3.67 0 100 7.34h1.84v7.43H6.85a3.67 3.67 0 00-3.67 3.68 3.62 3.62 0 003.67 3.67h1.84A5.19 5.19 0 0014.2 50h29.31A5.63 5.63 0 0049 44.44v-37A5.68 5.68 0 0043.51 2zm-3 40a1.6 1.6 0 01-1.6 1.6H18a1.6 1.6 0 01-1.56-1.6v-1.63a1.6 1.6 0 011.56-1.6h20.88a1.6 1.6 0 011.6 1.6zM18 26.23l1.68-1.68a1.16 1.16 0 011.68 0l4.15 4.08 10.25-10.15a1.16 1.16 0 011.68 0l1.68 1.68a1.32 1.32 0 010 1.68l-12 11.82a2.53 2.53 0 01-3.36 0L18 27.91a1.05 1.05 0 010-1.68zm22.45-14.3a1.6 1.6 0 01-1.6 1.6H18a1.6 1.6 0 01-1.59-1.6v-1.59A1.6 1.6 0 0118 8.74h20.88a1.6 1.6 0 011.6 1.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1093jskj15d";
freezeTemplate(tmpl);
