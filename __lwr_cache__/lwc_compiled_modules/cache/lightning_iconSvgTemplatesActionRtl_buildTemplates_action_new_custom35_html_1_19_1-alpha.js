import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom35.css";

import _implicitScopedStylesheets from "./new_custom35.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M41.5 18c-1.4 0-2.5 1-2.5 2.4v4c0 7-5.9 12.8-13.1 12.8s-13.1-5.8-13.1-12.8v-4c0-1.4-1.1-2.4-2.5-2.4S8 19 8 20.4v4c0 8.9 6.8 16.2 15.5 17.4v3.4h-4.1c-1.4 0-2.5 1-2.5 2.4S18 50 19.4 50h13.1c1.4 0 2.5-1 2.5-2.4s-1.1-2.4-2.5-2.4h-4.1v-3.4C37.2 40.6 44 33.3 44 24.4v-4c0-1.4-1.1-2.4-2.5-2.4z"${3}/><path d="M26 32.4c4.5 0 8.2-3.6 8.2-8V9.9c0-4.4-3.6-7.9-8.1-7.9h-.2c-4.5 0-8.1 3.5-8.1 7.9v14.5c0 4.4 3.7 8 8.2 8z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-25tuv37mu4t";
freezeTemplate(tmpl);
