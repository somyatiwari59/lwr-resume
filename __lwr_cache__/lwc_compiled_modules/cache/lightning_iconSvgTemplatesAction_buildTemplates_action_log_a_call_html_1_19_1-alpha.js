import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./log_a_call.css";

import _implicitScopedStylesheets from "./log_a_call.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M42.9 2H12.7C10 2 7.8 4.4 7.8 6.8v1.6H6.2C4.4 8.4 3 9.8 3 11.6s1.4 3.2 3.2 3.2h1.6v8H6.2C4.4 22.8 3 24.2 3 26s1.4 3.2 3.2 3.2h1.6v8H6.2c-1.8 0-3.2 1.4-3.2 3.2 0 1.8 1.4 3.2 3.2 3.2h1.6v1.6c0 2.4 2.2 4.8 4.9 4.8h30.2c2.7 0 5.1-2.4 5.1-5V6.6C48 3.9 45.6 2 42.9 2zM40 34.2l-2.2 2.2c-.5.5-1.2.8-1.8.7-5.3-.3-10.3-2.7-13.8-6.2s-5.9-8.5-6.2-13.8c0-.7.2-1.4.7-1.8l2.2-2.2c1-1 2.8-1 3.7.2l2.1 2.6c.7.9.7 2.1.1 3L23 21.5c-.2.3-.2.8.1 1l3.7 4.1 4.1 3.7c.3.3.7.3 1 .1l2.5-1.8c.9-.6 2.2-.6 3.1.1l2.6 2.1c.9.6 1 2.4-.1 3.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6fahc3v4gt8";
freezeTemplate(tmpl);
