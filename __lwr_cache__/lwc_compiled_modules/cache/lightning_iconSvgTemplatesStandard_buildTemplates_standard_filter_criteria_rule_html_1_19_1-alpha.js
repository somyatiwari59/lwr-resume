import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./filter_criteria_rule.css";

import _implicitScopedStylesheets from "./filter_criteria_rule.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M51.75 20a2 2 0 012 2v14A4.86 4.86 0 0059 41.25h14a2 2 0 012 2V74a6.08 6.08 0 01-6 6H31a6.08 6.08 0 01-6-6V26a6.08 6.08 0 016-6h20.75zm9.4 30h-22.3a.86.86 0 00-.65 1.41l9.74 11.39a2.08 2.08 0 01.45 1.31v7.23a.82.82 0 00.81.75h1.5a.73.73 0 00.71-.75v-7.23A1.84 1.84 0 0152 62.8l9.8-11.39a.86.86 0 00-.65-1.41zm-.9-30a1.74 1.74 0 011.13.38l13.24 13.24a1.74 1.74 0 01.38 1.13 1.5 1.5 0 01-1.38 1.5H63A4.38 4.38 0 0158.75 32V21.38a1.5 1.5 0 011.5-1.38z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2c018q6rgd4";
freezeTemplate(tmpl);
