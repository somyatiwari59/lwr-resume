import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./log_a_call.css";

import _implicitScopedStylesheets from "./log_a_call.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43 2H13.5c-2.6 0-4.8 2.4-4.8 4.8v1.6H7.1C5.4 8.4 4 9.8 4 11.6s1.4 3.2 3.1 3.2h1.6v8H7.1C5.4 22.8 4 24.2 4 26s1.4 3.2 3.1 3.2h1.6v8H7.1c-1.7 0-3.1 1.4-3.1 3.2 0 1.8 1.4 3.2 3.1 3.2h1.6v1.6c0 2.4 2.2 4.8 4.8 4.8H43c2.6 0 5-2.4 5-5V6.6C48 3.9 45.6 2 43 2zm-2.8 32.2L38 36.5c-.5.5-1.2.8-1.8.7-5.2-.3-10-2.7-13.5-6.2s-5.8-8.5-6.1-13.8c0-.7.2-1.4.7-1.8l2.2-2.2c1-1 2.7-1 3.6.2l2 2.6c.7.9.7 2.1.1 3l-1.7 2.5c-.2.3-.2.8.1 1l3.6 4.1 4 3.7c.3.3.7.3 1 .1l2.4-1.8c.9-.6 2.1-.6 3 .1l2.5 2.1c1.1.6 1.1 2.4.1 3.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6u95tkqt0gi";
freezeTemplate(tmpl);
