import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./copy_to_clipboard.css";

import _implicitScopedStylesheets from "./copy_to_clipboard.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M17.4 11.6h17.3c.9 0 1.6-.7 1.6-1.6V6.8c0-2.6-2.1-4.8-4.7-4.8h-11c-2.6 0-4.7 2.2-4.7 4.8V10c-.1.9.6 1.6 1.5 1.6z"${3}/><path d="M43.3 6h-1.6c-.5 0-.8.3-.8.8V10c0 3.5-2.8 6.4-6.3 6.4H17.4c-3.5 0-6.3-2.9-6.3-6.4V6.8c0-.5-.3-.8-.8-.8H8.7C6.1 6 4 8.2 4 10.8v34.4C4 47.8 6.1 50 8.7 50h34.6c2.6 0 4.7-2.2 4.7-4.8V10.8C48 8.2 45.9 6 43.3 6z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-2vrea8hmc34";
freezeTemplate(tmpl);
