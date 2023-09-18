import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./password.css";

import _implicitScopedStylesheets from "./password.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44.8 49.5H7.2c-2.6 0-4.7-2.1-4.7-4.7V7.2c0-2.6 2.1-4.7 4.7-4.7h37.6c2.6 0 4.7 2.1 4.7 4.7v37.6c0 2.5-2.1 4.7-4.7 4.7zM8.9 10.3v31.3c0 .9.7 1.6 1.6 1.6h31.2c.9 0 1.6-.7 1.6-1.6V10.3c0-.9-.7-1.6-1.6-1.6H10.4c-.8.1-1.5.8-1.5 1.6z"${3}/><path d="M38.8 23.8l-.9-3c-.3-.8-1.1-1.3-2-1L29.1 22v-6.7c0-.9-.7-1.6-1.6-1.6h-3.1c-.9 0-1.6.7-1.6 1.6V22l-6.6-2.2c-.8-.3-1.7.2-2 1l-.9 3c-.3.8.2 1.7 1 2l6.2 2-4.5 6.1c-.5.7-.3 1.7.4 2.2l2.6 1.8c.7.5 1.7.3 2.2-.4l4.9-6.8 4.9 6.8c.5.7 1.5.9 2.2.4l2.6-1.8c.7-.5.9-1.5.4-2.2l-4.5-6.2 6.1-2c.8-.2 1.2-1 1-1.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-66revv0fdvj";
freezeTemplate(tmpl);
