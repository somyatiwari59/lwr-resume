import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./transport_heavy_truck.css";

import _implicitScopedStylesheets from "./transport_heavy_truck.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.41 30.22h-.12v-4.11a3.48 3.48 0 00-3.49-3.48l-2.28-.08c-.93-1.42-2.13-3.3-3.21-5.14-1.83-3.1-4-2.86-4-2.86H27.5v-2.78a1.59 1.59 0 00-1.59-1.59H3.59A1.59 1.59 0 002 11.77v24.17a1.59 1.59 0 001.59 1.59H6.4a6.16 6.16 0 0011.64 0h16.24a6.16 6.16 0 0011.64 0h2.49A1.59 1.59 0 0050 35.94v-4.13a1.59 1.59 0 00-1.59-1.59zm-36.19 8.26a3 3 0 113-3 3 3 0 01-3 3zm18-15.74a1.48 1.48 0 01-1.34-1.59v-2.78a1.48 1.48 0 011.34-1.59h4.62c1.37 0 2.24 1.72 2.24 1.72s1.07 1.79 1.55 2.65.43 1.59-1.34 1.59zm9.88 15.74a3 3 0 113-3 3 3 0 01-3 3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-30p5u1cgrcu";
freezeTemplate(tmpl);
