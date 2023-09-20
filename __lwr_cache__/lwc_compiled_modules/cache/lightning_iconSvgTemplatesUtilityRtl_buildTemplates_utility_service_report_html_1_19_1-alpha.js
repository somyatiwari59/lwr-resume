import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_report.css";

import _implicitScopedStylesheets from "./service_report.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43.44 6h-1.6a.757.757 0 00-.8.7V10a6.4 6.4 0 01-6.34 6.4H17.28a6.4 6.4 0 01-6.34-6.4V6.8a.757.757 0 00-.7-.8H8.54a4.793 4.793 0 00-4.76 4.8v34.4c0 2.64 2.12 4.78 4.76 4.8h34.9a4.793 4.793 0 004.76-4.8V10.8c0-2.64-2.12-4.78-4.76-4.8zM20.45 38.8c0 .88-.72 1.6-1.6 1.6h-1.6c-.88 0-1.6-.72-1.6-1.6v-8c0-.88.72-1.6 1.6-1.6h1.6c.88 0 1.6.72 1.6 1.6v8zm7.95 0c0 .88-.72 1.6-1.6 1.6h-1.6c-.88 0-1.6-.72-1.6-1.6V23.6c0-.88.72-1.6 1.6-1.6h1.6c.88 0 1.6.72 1.6 1.6v15.2zm7.93 0c0 .88-.72 1.6-1.6 1.6h-1.6c-.88 0-1.6-.72-1.6-1.6v-12c0-.88.72-1.6 1.6-1.6h1.6c.88 0 1.6.72 1.6 1.6v12z" fill-rule="evenodd"${3}/><path d="M17.28 11.6h17.44c.88 0 1.6-.72 1.6-1.6V6.8c0-2.64-2.12-4.78-4.76-4.8H20.45a4.793 4.793 0 00-4.76 4.8V10c0 .88.71 1.6 1.59 1.6z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-763fbdogncv";
freezeTemplate(tmpl);