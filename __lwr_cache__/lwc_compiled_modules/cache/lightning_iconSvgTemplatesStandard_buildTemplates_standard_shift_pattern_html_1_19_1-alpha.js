import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_pattern.css";

import _implicitScopedStylesheets from "./shift_pattern.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M71.74 26h-5v-2a4 4 0 10-8 0v2h-18v-2a4 4 0 00-8 0v2h-5a6 6 0 00-6 6v2a2 2 0 002 2h52a2 2 0 002-2v-2a6 6 0 00-6-6zm4 16a2 2 0 012 2v30a6 6 0 01-6 6h-44a6 6 0 01-6-6V44a2 2 0 012-2h52zm-13.5 27.32H50.5a1.17 1.17 0 00-1.17 1.16v3.32A1.18 1.18 0 0050.5 75h11.74a1.17 1.17 0 001.16-1.2v-3.32a1.16 1.16 0 00-1.16-1.16zm0-13.49H36.66A1.17 1.17 0 0035.5 57v7.9a1.16 1.16 0 001.16 1.16h25.58a1.16 1.16 0 001.16-1.16V57a1.17 1.17 0 00-1.16-1.17zM48.4 47H36.66a1.16 1.16 0 00-1.16 1.16v3.32a1.17 1.17 0 001.16 1.16H48.4a1.18 1.18 0 001.17-1.16v-3.32A1.17 1.17 0 0048.4 47z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3mo8qvoi89r";
freezeTemplate(tmpl);
