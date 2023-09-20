import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M62 28H31.5c-1.7 0-3.1 1.4-3.1 3.1v30.5h-4.6c-2.1 0-3.8-1.7-3.8-3.8V23.3c0-2.1 1.7-3.8 3.8-3.8h34.5c2.1 0 3.8 1.7 3.8 3.8V28z"${3}/><path d="M41.8 37.6h34.5c2.1 0 3.8 1.7 3.8 3.8v34.5c0 2.1-1.7 3.8-3.8 3.8H41.8c-2.1 0-3.8-1.7-3.8-3.8V41.3c0-2 1.7-3.7 3.8-3.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-798g4bo4ltm";
freezeTemplate(tmpl);