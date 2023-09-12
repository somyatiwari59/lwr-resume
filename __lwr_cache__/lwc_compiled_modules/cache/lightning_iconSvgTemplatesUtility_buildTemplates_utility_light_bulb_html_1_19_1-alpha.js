import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./light_bulb.css";

import _implicitScopedStylesheets from "./light_bulb.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M24.12 2.69A16.11 16.11 0 009.69 17a15.9 15.9 0 005.85 13.65 4.92 4.92 0 011.87 3.82v.08a4 4 0 004.05 4h9a4 4 0 004.05-4v-.08a4.92 4.92 0 011.87-3.82 15.88 15.88 0 005.93-12.24C42.36 9.09 34 1.68 24.12 2.69zM33 43.16H19a1.56 1.56 0 00-1.56 1.56 4.69 4.69 0 004.68 4.68h7.8a4.69 4.69 0 004.68-4.68 1.56 1.56 0 00-1.6-1.56z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2kvhbhad36c";
freezeTemplate(tmpl);
