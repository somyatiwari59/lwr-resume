import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_consumed.css";

import _implicitScopedStylesheets from "./product_consumed.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M77.13 55.17h-3.75A1.92 1.92 0 0071.5 57v12.5a1.92 1.92 0 01-1.87 1.88H28.38a1.92 1.92 0 01-1.87-1.87V57a1.92 1.92 0 00-1.87-1.87h-3.76A1.92 1.92 0 0019 57v16.92a5 5 0 005 5h50a5 5 0 005-5V57a1.92 1.92 0 00-1.87-1.83zm-29.38 8.25a1.81 1.81 0 002.63 0l16.87-16.88a1.81 1.81 0 000-2.63l-2.62-2.63a1.81 1.81 0 00-2.62 0l-7 7a1.25 1.25 0 01-2.13-.88V20.79a2.25 2.25 0 00-2-1.87h-3.75a1.92 1.92 0 00-1.87 1.88v26.5a1.25 1.25 0 01-2.13.88l-7-7a1.81 1.81 0 00-2.63 0l-2.63 2.75a1.81 1.81 0 000 2.63z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5hl7oce6lee";
freezeTemplate(tmpl);
