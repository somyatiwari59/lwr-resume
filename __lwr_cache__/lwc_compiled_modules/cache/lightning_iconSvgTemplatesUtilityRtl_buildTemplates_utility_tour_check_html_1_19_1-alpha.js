import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tour_check.css";

import _implicitScopedStylesheets from "./tour_check.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.91 32.66a8.44 8.44 0 01-8.42 8.41H17.13a13.24 13.24 0 001-2.81h23.36a5.61 5.61 0 000-11.21H13.43a8.42 8.42 0 010-16.8h17.11a4.55 4.55 0 00-.54 2.1 3.56 3.56 0 00.05.65H13.43a5.6 5.6 0 000 11.2h28.06a8.34 8.34 0 013.31.68 8.05 8.05 0 013 2.23 8.4 8.4 0 012.11 5.55zM47.84 5.14a.87.87 0 00-.65.29L40 13.52a.27.27 0 01-.22.1.28.28 0 01-.2-.08l-3.13-3.07a.87.87 0 00-1.23 0L34 11.73A.88.88 0 0034 13l4.87 4.8a1.44 1.44 0 002.13-.09l8.8-9.87a.88.88 0 000-1.24l-1.4-1.21a.85.85 0 00-.56-.25z"${3}/><path d="M9.05 29A7.07 7.07 0 002 36.1c0 4.9 5 9.4 6.6 10.58a.74.74 0 00.93 0c1.56-1.22 6.58-5.68 6.58-10.58a7.08 7.08 0 00-7-7.11zm0 10a3 3 0 113-3 3 3 0 01-3 3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-jo53rdp8hr";
freezeTemplate(tmpl);
