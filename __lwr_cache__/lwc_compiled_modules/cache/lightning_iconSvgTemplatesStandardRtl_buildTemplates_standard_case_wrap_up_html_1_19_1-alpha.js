import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./case_wrap_up.css";

import _implicitScopedStylesheets from "./case_wrap_up.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M37.2 30.1h4a.94.94 0 001-1v-3H58v3a.94.94 0 001 1h4a.94.94 0 001-1v-3a6 6 0 00-6-6H42.2a6 6 0 00-6 6v3a.94.94 0 001 1zM74 36.1H26.2a6 6 0 00-6 6v31.8a6 6 0 006 6H74a6 6 0 006-6V42.1a6.15 6.15 0 00-6-6zm-8.7 16.1L47.9 69.6a3.38 3.38 0 01-4.8 0l-8.4-8.4a1.63 1.63 0 010-2.4l2.4-2.4a1.63 1.63 0 012.4 0l6 6 15-15a1.63 1.63 0 012.4 0l2.4 2.4a1.82 1.82 0 010 2.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4skutt6f16q";
freezeTemplate(tmpl);
