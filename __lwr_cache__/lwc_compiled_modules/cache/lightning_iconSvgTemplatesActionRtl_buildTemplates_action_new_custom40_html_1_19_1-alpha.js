import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom40.css";

import _implicitScopedStylesheets from "./new_custom40.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M45.2 8H6.8C4.2 8 2 10.1 2 12.7v26.6C2 41.9 4.2 44 6.8 44h38.4c2.6 0 4.8-2.1 4.8-4.7V12.7c0-2.6-2.2-4.7-4.8-4.7zm0 4.7v4.7H6.8v-4.7h38.4zM6.8 39.3V25.2h38.4v14.1H6.8z"${3}/><path d="M20.5 29.1c-1.1 0-2.1.5-2.6 1.4-.1.2-.3.2-.4 0-.6-.9-1.5-1.4-2.6-1.4-1.8 0-3.2 1.4-3.2 3.1 0 1.7 1.4 3.1 3.2 3.1 1.1 0 2.1-.5 2.6-1.4.1-.2.3-.2.4 0 .6.9 1.5 1.4 2.6 1.4h.1c1.7 0 3.1-1.3 3.1-3.1V32c-.1-1.5-1.5-2.9-3.2-2.9zM38.8 29.9h-9.6c-.9 0-1.6.7-1.6 1.6V33c0 .9.7 1.6 1.6 1.6h9.6c.9 0 1.6-.7 1.6-1.6v-1.6c0-.8-.7-1.5-1.6-1.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6p4qs2iqpn5";
freezeTemplate(tmpl);
