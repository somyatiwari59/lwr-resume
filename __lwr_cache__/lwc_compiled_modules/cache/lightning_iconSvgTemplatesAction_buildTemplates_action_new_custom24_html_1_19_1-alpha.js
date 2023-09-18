import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom24.css";

import _implicitScopedStylesheets from "./new_custom24.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M40.3 2H11.7C9.1 2 7 4.2 7 6.7v.1c0 .9.7 1.6 1.6 1.6h34.8c.9 0 1.6-.7 1.6-1.6v-.1C45 4.2 42.9 2 40.3 2zM40.2 13.2H11.8c-.9 0-1.6.7-1.6 1.6v33.6c0 .9.7 1.6 1.6 1.6h8.8c.9 0 1.5-.7 1.5-1.6V42c0-.9.8-1.6 1.7-1.6h4.6c.9 0 1.7.7 1.7 1.6v6.4c0 .9.6 1.6 1.5 1.6h8.8c.9 0 1.6-.7 1.6-1.6V14.8c-.2-.9-.9-1.6-1.8-1.6zM23.6 34.8c0 .9-.7 1.6-1.6 1.6h-3.2c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6H22c.9 0 1.6.7 1.6 1.6v3.2zm0-11.2c0 .9-.7 1.6-1.6 1.6h-3.2c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6H22c.9 0 1.6.7 1.6 1.6v3.2zm11.1 11.2c0 .9-.7 1.6-1.6 1.6H30c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6v3.2zm0-11.2c0 .9-.7 1.6-1.6 1.6H30c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6v3.2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-14d6lg0k4t0";
freezeTemplate(tmpl);
