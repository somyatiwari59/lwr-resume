import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./incident.css";

import _implicitScopedStylesheets from "./incident.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M16.4 10h3.2a.76.76 0 00.8-.8V6.8h11.2v2.4a.76.76 0 00.8.8h3.2a.76.76 0 00.8-.8V6.8A4.81 4.81 0 0031.6 2H20.4a4.81 4.81 0 00-4.8 4.8v2.4a.76.76 0 00.8.8zM26 36.66a1.79 1.79 0 101.8 1.79 1.76 1.76 0 00-1.8-1.79z"${3}/><path d="M45.2 14.8H6.8A4.81 4.81 0 002 19.6v25.6A4.81 4.81 0 006.8 50h38.4a4.81 4.81 0 004.8-4.8V19.6a4.81 4.81 0 00-4.8-4.8zM39.7 45H12.33c-1.5 0-2.34-1.92-1.5-3.29l13.69-22.09a1.7 1.7 0 013 0l13.67 22.12A2.1 2.1 0 0139.7 45z"${3}/><rect x="24.22" y="26.49" width="3.59" height="8.97" rx=".6"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2dk3q73knan";
freezeTemplate(tmpl);
