import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./slider.css";

import _implicitScopedStylesheets from "./slider.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M71.25 46.38h6.25a2.5 2.5 0 012.5 2.5v2.5a2.51 2.51 0 01-2.5 2.5h-6.25a1 1 0 01-1-1.26 10 10 0 00.37-2.5 11.87 11.87 0 00-.37-2.62c-.13-.75.37-1.25 1-1.12zM31 68.75h-8.5a2.51 2.51 0 00-2.5 2.5v2.5a2.51 2.51 0 002.5 2.5H31a7.5 7.5 0 100-7.5zM50.25 70a11.87 11.87 0 01.37 2.62 10 10 0 01-.37 2.5 1 1 0 001 1.26H77.5a2.51 2.51 0 002.5-2.5v-2.5a2.5 2.5 0 00-2.5-2.5H51.25c-.75-.13-1.13.37-1 1.12zm5-45a11.87 11.87 0 01.37 2.62 10 10 0 01-.37 2.5 1 1 0 001 1.26H77.5a2.51 2.51 0 002.5-2.5v-2.5a2.5 2.5 0 00-2.5-2.5H56.25c-.63-.13-1.13.37-1 1.12zM36 23.75H22.5a2.51 2.51 0 00-2.5 2.5v2.5a2.51 2.51 0 002.5 2.5H36a7.5 7.5 0 100-7.5zm15 22.5H22.5a2.51 2.51 0 00-2.5 2.5v2.5a2.51 2.51 0 002.5 2.5H51a7.5 7.5 0 100-7.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2erdteq7utc";
freezeTemplate(tmpl);
