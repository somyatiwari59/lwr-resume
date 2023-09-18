import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./goal.css";

import _implicitScopedStylesheets from "./goal.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M5 2C3.3 2 2 3.3 2 5v42c0 1.6 1.3 3 3 3 1.6 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zM48.8 6.5c-13 6.8-23.3-4.9-35.6-.4-.6.2-1.2.8-1.2 1.5V30c0 1.1 1.2 1.9 2.3 1.6 11.8-3.5 22 7.6 34.8.6.5-.3.9-.8.9-1.4V7.2c0-.6-.7-1-1.2-.7zM46 29.2l-.5.2c-1 .5-2.6.6-5.3.6H40v-5c-1.5 0-4.2-.3-6-.7v5.3c-1.7-.3-3.3-.6-4.6-.9-.5-.1-1-.3-1.4-.4v-5.5c-1.7-.5-4.3-1-6-1.4v5.7c-1.2-.2-1.5-.3-2.8-.3-.5 0-.9 0-1.6.1L16 27v-5.8c1-.2 2.2-.2 3.5-.2 1.3 0 1.4.1 2.5.3v-6c-1.1-.2-5-.2-6 .1V9.2l.9-.1c1-.1 4 .1 5.1.4v5.8c1.4.3 3.8.8 5.6 1.3.1 0 .3.1.4.1v-5.8c1.8.5 3.9 1.1 6 1.4V18c1.7.3 4.4.5 6 .5V13h.2c1.6 0 2.7-.4 4.7-.7l1.2-.4v6c-1.8.5-3.7.7-5.6.7h-.4V25h.2c1.9 0 4-.7 5.8-1.5v5.7z"${3}/><path d="M28 16.7v6c.4.1.8.2 1.2.4 1.5.4 3.1.9 4.8 1.2v-6.2c-2.1-.4-4.2-.9-6-1.4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-2vnbb1d1hbq";
freezeTemplate(tmpl);
