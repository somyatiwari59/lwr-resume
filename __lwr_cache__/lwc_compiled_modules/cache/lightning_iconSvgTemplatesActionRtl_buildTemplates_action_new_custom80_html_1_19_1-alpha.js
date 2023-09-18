import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom80.css";

import _implicitScopedStylesheets from "./new_custom80.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M9.7 33.7c-4.3 0-7.7 3.4-7.7 7.7S5.5 49 9.7 49s7.7-3.4 7.7-7.7-3.4-7.6-7.7-7.6zm0 10.7c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1c0 1.7-1.4 3.1-3.1 3.1zM42.3 33.7c-4.3 0-7.7 3.4-7.7 7.7S38 49 42.3 49s7.7-3.4 7.7-7.7-3.5-7.6-7.7-7.6zm0 10.7c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1c0 1.7-1.4 3.1-3.1 3.1z"${3}/><path d="M41.8 29.1c1.7-.1 3.3.2 4.9.8.8.3 1.6-.1 2-.8 3.9-7.4-2.4-10.9-6.4-12.9-1.1-.5-2.3.2-2.3 1.4V22c0 .9-.6 1.8-1.5 1.7-5.7-.9-10.8-6.9-17-6.9s-7 6.1-7 6.1c-4.3 0-8.6-.3-10.5-.8-1.1-.1-2 .6-2 1.6 0 0 0 5.4 7.7 5.4C16 29.1 21.3 33.7 22 40c.2 1.7 0 3.4-.5 4.8-.2.5.2 1.1.9 1.1h7.1c.6 0 1-.5.9-1.1-.5-1.5-.6-3-.5-4.6.6-6 5.7-10.9 11.9-11.1zM2 23.7zM22.4 11.8c.1.6.5 1.1 1.1 1.3l8.2 2.8c.8.2 1.5-.1 1.9-.8l.7-1.3c.3-.5-.1-1.1-.6-1.2-2.4-.2-7.4-1.1-6-3.8 1.3-2.3 4-1.7 5.8-.9.7.3 1.4-.5 1.1-1.1-1.2-2.5-3.9-4-6.7-3.7-3.6.4-6.2 3.9-5.7 7.5l.2 1.2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4s4g4ce8bf4";
freezeTemplate(tmpl);
