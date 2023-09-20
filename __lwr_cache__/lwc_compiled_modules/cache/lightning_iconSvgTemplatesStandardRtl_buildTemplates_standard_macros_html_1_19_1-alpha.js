import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./macros.css";

import _implicitScopedStylesheets from "./macros.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M64.7 67.5c-.2.5-.7.6-1.2.6h-5.8c-.5 0-.9-.4-.9-.9 0-.1.1-.4.1-.5l.1-.1.2-.2L70 50.9c.4-.5.5-1.2.2-1.7 0-.1-.1-.2-.1-.2L56.9 33.2c-.1-.1-.1-.4-.1-.5 0-.5.5-.9.9-.9h5.8c.5 0 1 .1 1.2.6L78.4 49c.2.2.2.6.2.9 0 .4-.1.7-.2 1L64.7 67.5z"${3}/><path d="M50.4 67.5c-.2.5-.7.6-1.2.6h-5.8c-.5 0-.9-.4-.9-.9 0-.1.1-.4.1-.5l.1-.1.2-.2 12.7-15.5c.4-.5.5-1.2.2-1.7 0-.1-.1-.2-.1-.2L42.6 33.2c-.1-.1-.1-.4-.1-.5 0-.5.5-.9.9-.9h5.8c.5 0 1 .1 1.2.6L64.1 49c.2.2.2.6.2.9 0 .4-.1.7-.2 1L50.4 67.5z"${3}/><path d="M36 67.5c-.2.5-.7.6-1.2.6H23.9c-.5 0-.9-.4-.9-.9 0-.1.1-.4.1-.5l.1-.1.2-.2 12.7-15.5c.4-.5.5-1.2.2-1.7 0-.1-.1-.2-.1-.2l-13-15.8c-.2-.1-.2-.3-.2-.5 0-.5.5-.9.9-.9h10.8c.5 0 1 .1 1.2.6L49.6 49c.2.2.2.6.2.9 0 .4-.1.7-.2 1L36 67.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4jrf2qlokm2";
freezeTemplate(tmpl);