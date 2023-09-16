import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./immunization.css";

import _implicitScopedStylesheets from "./immunization.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M53.76 31.24a7.19 7.19 0 00-.85-.7A4.13 4.13 0 0047.76 37l.82.82h-.06L35 51.3c-.3.28-.59.57-.8.79a6.85 6.85 0 00-.86 8.15.25.25 0 010 .07 16 16 0 006.42 6.36 6.23 6.23 0 002.57.87 7.1 7.1 0 005.89-2.18L62 51.51a.46.46 0 00.11-.16l.91.91a4.15 4.15 0 105.73-6zM78.09 28.45c-2.19-2.25-4.42-4.45-6.66-6.66a4.72 4.72 0 00-4-1.38 4.77 4.77 0 00-2.58 8.25c.69.68.31.36 1 1.07l-3.11 3a.83.83 0 000 1.19c.36.35 2.75 2.74 3.11 3.08a.85.85 0 001.19 0l3-3.07c.77.78.49.46 1.18 1.14a4.76 4.76 0 106.81-6.65zM31 66.23c-3.61 3.62-6.56 6.66-10.17 10.28a1.74 1.74 0 102.5 2.43c3.58-3.57 6.5-6.57 10.08-10.14.07-.07.13-.16.18-.21l-2.47-2.46z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6q04o5oshtt";
freezeTemplate(tmpl);
