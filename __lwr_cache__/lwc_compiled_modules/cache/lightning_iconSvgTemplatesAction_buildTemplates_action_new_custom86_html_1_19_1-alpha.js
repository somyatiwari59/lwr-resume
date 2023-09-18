import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom86.css";

import _implicitScopedStylesheets from "./new_custom86.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M16.4 10h3.2c.5 0 .8-.3.8-.8V6.8h11.2v2.4c0 .5.3.8.8.8h3.2c.5 0 .8-.3.8-.8V6.8c0-2.6-2.2-4.8-4.8-4.8H20.4c-2.6 0-4.8 2.2-4.8 4.8v2.4c0 .5.3.8.8.8zM45.2 14.8H6.8C4.2 14.8 2 17 2 19.6v25.6C2 47.8 4.2 50 6.8 50h38.4c2.6 0 4.8-2.2 4.8-4.8V19.6c0-2.6-2.2-4.8-4.8-4.8zM26 43.6c-6.2 0-11.2-5-11.2-11.2s5-11.2 11.2-11.2 11.2 5 11.2 11.2-5 11.2-11.2 11.2z"${3}/><path d="M30.8 30h-2.4v-2.4c0-.9-.7-1.6-1.6-1.6h-1.6c-.9 0-1.6.7-1.6 1.6V30h-2.4c-.9 0-1.6.7-1.6 1.6v1.6c0 .9.7 1.6 1.6 1.6h2.4v2.4c0 .9.7 1.6 1.6 1.6h1.6c.9 0 1.6-.7 1.6-1.6v-2.4h2.4c.9 0 1.6-.7 1.6-1.6v-1.6c0-.9-.7-1.6-1.6-1.6z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4oqjrq00sku";
freezeTemplate(tmpl);
