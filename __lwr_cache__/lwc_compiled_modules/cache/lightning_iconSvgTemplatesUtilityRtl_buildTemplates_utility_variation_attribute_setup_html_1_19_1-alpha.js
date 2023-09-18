import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./variation_attribute_setup.css";

import _implicitScopedStylesheets from "./variation_attribute_setup.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M23.6 3.6A1.39 1.39 0 0022.1 5v22.6a1.26 1.26 0 001.4 1.4h.1a1.31 1.31 0 001.4-1.4V4.9a1.29 1.29 0 00-1.4-1.3zM9.1 3.6H3.5A1.31 1.31 0 002.1 5v22.6A1.37 1.37 0 003.5 29h5.6a1.31 1.31 0 001.4-1.4V4.9a1.41 1.41 0 00-1.4-1.3zM16.9 3.6h-1.4A1.31 1.31 0 0014.1 5v22.6a1.26 1.26 0 001.4 1.4h1.4a1.31 1.31 0 001.4-1.4V4.9a1.24 1.24 0 00-1.4-1.3zM44.4 24.4v.2l.1.7c.2.1.3.2.5.3l.7-.5.6-.2.5-.2V4.9a1.31 1.31 0 00-1.4-1.4h-2.8a1.31 1.31 0 00-1.4 1.4v15.8a4.67 4.67 0 013.2 3.7zM31.7 25l.5.2a3.33 3.33 0 01.6-.3l.1-.6v-.2a4.9 4.9 0 014.1-3.8V4.9a1.34 1.34 0 00-1.4-1.3H30A1.31 1.31 0 0028.6 5v19.9a4.3 4.3 0 011.2-.2 4.9 4.9 0 011.9.3zM47.4 37.8a11.14 11.14 0 00.2-1.7 8.81 8.81 0 00-.2-1.7l1.9-1.6a1.8 1.8 0 00.4-2.2l-.8-1.5a1.76 1.76 0 00-1.5-.8c-.2 0-.4.1-.6.1l-2.3.9a8.26 8.26 0 00-3-1.7l-.4-2.4a1.63 1.63 0 00-1.7-1.2h-1.7a1.66 1.66 0 00-1.7 1.2l-.4 2.3a8.51 8.51 0 00-3.1 1.7l-2.2-.9a1.08 1.08 0 00-.6-.1 1.76 1.76 0 00-1.5.8l-.8 1.4a1.83 1.83 0 00.4 2.2l1.9 1.6a11.14 11.14 0 00-.2 1.7 8.81 8.81 0 00.2 1.7l-1.9 1.7a1.8 1.8 0 00-.4 2.2l.8 1.6a1.76 1.76 0 001.5.8c.2 0 .4-.1.6-.1l2.3-.9a8.26 8.26 0 003 1.7l.4 2.5a1.72 1.72 0 001.7 1.4h1.7a1.72 1.72 0 001.7-1.4l.4-2.5a8.77 8.77 0 003.2-1.9l2.2.9a1.27 1.27 0 00.6.1 1.76 1.76 0 001.5-.8l.7-1.3a1.83 1.83 0 00-.4-2.2zm-8.8 4.1a5.6 5.6 0 115.6-5.6 5.59 5.59 0 01-5.6 5.6z"${3}/><path d="M38.5 33.1a3.1 3.1 0 103.1 3.1 3.1 3.1 0 00-3.1-3.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-39hhh0dd7ee";
freezeTemplate(tmpl);
