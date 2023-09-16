import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sort_policy.css";

import _implicitScopedStylesheets from "./sort_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M35.05 20H26a6 6 0 00-6 6v7a6 6 0 006 6h9a6 6 0 006-6v-7a6 6 0 00-5.95-6zm-3.51 13h-2a3.5 3.5 0 010-7h2a3.5 3.5 0 010 7zM53.15 39h9a6 6 0 006-6v-7a6 6 0 00-6-6h-9a6 6 0 00-6 6v7a6 6 0 006 6zm3.48-13h2a3.5 3.5 0 010 7h-2a3.5 3.5 0 110-7zM35.05 45H26a6 6 0 00-6 6v7a6 6 0 006 6h9a6 6 0 006-6v-7a6 6 0 00-5.95-6zm-3.51 13h-2a3.5 3.5 0 110-7h2a3.5 3.5 0 010 7zM79.68 70.59l-1.47-1.39a1 1 0 00-1.41-.06l-.06.06-2.45 2.4a.68.68 0 01-1 0 .63.63 0 01-.2-.48V60a1.08 1.08 0 00-1-1H70a1.11 1.11 0 00-1 1v11.13a.67.67 0 01-.67.67.66.66 0 01-.48-.2l-2.46-2.4a1 1 0 00-1.39-.06v.06l-1.46 1.41a1 1 0 000 1.41l7.85 7.66a1 1 0 001.41.06l.06-.06L79.68 72a1 1 0 000-1.41zM63.06 55.86l.06-.06 1.46-1.41a1 1 0 000-1.41l-7.85-7.67a1 1 0 00-1.41-.06l-.06.06L47.41 53a1 1 0 000 1.41l1.46 1.41a1 1 0 001.41.06l.06-.06 2.46-2.4a.68.68 0 011.15.47V65a1.08 1.08 0 001 1H57a1.13 1.13 0 001-1V53.87a.67.67 0 011.15-.47l2.46 2.4a1 1 0 001.45.06z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ppno1e0mvi";
freezeTemplate(tmpl);
