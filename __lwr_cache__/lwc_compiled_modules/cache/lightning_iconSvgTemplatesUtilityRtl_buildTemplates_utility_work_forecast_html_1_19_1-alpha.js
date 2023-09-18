import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_forecast.css";

import _implicitScopedStylesheets from "./work_forecast.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44.88 11.82s-2.38-4.91-7.7-4.91S29.34 12 29.34 12a7.94 7.94 0 00-6.75 0s-2.45-5.05-7.77-5.05-7.7 4.91-7.7 4.91S2.14 22.93 2 32.89s6.48 12.2 9.61 12.2c3.41 0 11.46-1.43 11.05-12.61a3.26 3.26 0 013.07-1.84 4.06 4.06 0 013.68 1.84C29 43.66 37 45.09 40.39 45.09c3.06 0 9.74-2.39 9.61-12.2s-5.12-21.07-5.12-21.07zM12.23 40.73a5.94 5.94 0 115.93-5.94 5.94 5.94 0 01-5.93 5.94zm27.54 0a5.94 5.94 0 115.93-5.94 5.94 5.94 0 01-5.93 5.94z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2l2bpcsh6na";
freezeTemplate(tmpl);
