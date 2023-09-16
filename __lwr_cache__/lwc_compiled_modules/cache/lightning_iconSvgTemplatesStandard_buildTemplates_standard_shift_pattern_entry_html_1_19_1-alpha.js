import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_pattern_entry.css";

import _implicitScopedStylesheets from "./shift_pattern_entry.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M51.75 20a2 2 0 012 2v14A4.86 4.86 0 0059 41.25h14a2 2 0 012 2V74a6.08 6.08 0 01-6 6H31a6.08 6.08 0 01-6-6V26a6.08 6.08 0 016-6h20.75zm11 48.32H51a1.17 1.17 0 00-1.17 1.16v3.32A1.18 1.18 0 0051 74h11.74a1.17 1.17 0 001.16-1.2v-3.32a1.16 1.16 0 00-1.16-1.16zm0-13.49H37.16A1.17 1.17 0 0036 56v7.9a1.16 1.16 0 001.16 1.16h25.58a1.16 1.16 0 001.16-1.16V56a1.17 1.17 0 00-1.16-1.17zM48.9 46H37.16A1.16 1.16 0 0036 47.16v3.32a1.17 1.17 0 001.16 1.16H48.9a1.18 1.18 0 001.17-1.16v-3.32A1.17 1.17 0 0048.9 46zm11.35-26a1.74 1.74 0 011.13.38l13.24 13.24a1.74 1.74 0 01.38 1.13 1.5 1.5 0 01-1.38 1.5H63A4.38 4.38 0 0158.75 32V21.38a1.5 1.5 0 011.5-1.38z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4pft7ldrlqn";
freezeTemplate(tmpl);
