import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./transport_bicycle.css";

import _implicitScopedStylesheets from "./transport_bicycle.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M32.47 2.44a4.08 4.08 0 00-2.88 7 4.08 4.08 0 105.77-5.77 4.05 4.05 0 00-2.89-1.23zM26.52 11a1.75 1.75 0 00-1.21.51l-9.93 9.93a1.81 1.81 0 00-.42.67 1.78 1.78 0 00-.07.79 1.71 1.71 0 00.28.75 1.76 1.76 0 00.58.54l8.46 4.89v12.45a1.9 1.9 0 00.13.67 1.84 1.84 0 00.38.57 2 2 0 00.57.38 1.79 1.79 0 001.34 0 1.73 1.73 0 00.57-.38 1.84 1.84 0 00.38-.57 1.7 1.7 0 00.13-.67V28.11a1.81 1.81 0 00-.23-.88 1.71 1.71 0 00-.64-.64l-5.32-3.07 6.64-6.64 3.71 3.71a1.72 1.72 0 001.23.51h7.45a1.87 1.87 0 00.7-.11 1.73 1.73 0 00.59-.37 1.77 1.77 0 00.4-.58 1.81 1.81 0 00.14-.69 1.85 1.85 0 00-.14-.69 1.73 1.73 0 00-.4-.57 1.76 1.76 0 00-.59-.38 1.87 1.87 0 00-.7-.11h-6.72l-6-6.05a1.77 1.77 0 00-.58-.38 1.75 1.75 0 00-.68-.13zM11.57 29.78a9.64 9.64 0 00-6.81 2.83 9.61 9.61 0 000 13.61 9.63 9.63 0 0013.62 0 9.61 9.61 0 000-13.61 9.69 9.69 0 00-6.81-2.83zm28.74 0a9.64 9.64 0 00-6.81 2.83 9.61 9.61 0 000 13.61 9.63 9.63 0 0013.62 0 9.61 9.61 0 000-13.61 9.69 9.69 0 00-6.81-2.83z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7hjkbqger15";
freezeTemplate(tmpl);
