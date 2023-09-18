import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text.css";

import _implicitScopedStylesheets from "./text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.4 47.9c-.2-3.2-.3-6.5-.3-9.7 0-1.6 0-3.2.1-4.9 0-1.5.2-3-.4-4.4-1.3-3.2-5.5-3.8-8.5-3.8-1.5 0-3.1.2-4.7.6-1.1.3-2.2.7-3.1 1.2l1 2.5c.2.5.3 1 .4 1.5 2-1 4-1.5 6.1-1.5 3.2 0 4.8 1.3 4.8 3.8v1.2h-2.2c-4.1 0-7.2.6-9.3 1.8-2.3 1.1-3.3 3.2-3.3 6.3 0 2.3.7 4.1 2.1 5.3 1.4 1.2 3.2 1.9 5.4 1.9 1.9 0 3.4-.3 4.6-.8 1.2-.5 2.2-1.4 3-2.5h.1c.1.5.2 1.4.4 2.6 0 .1 3.6 0 3.9 0 0-.4-.1-.7-.1-1.1zM44.8 40c0 .6-.1 1.1-.3 1.6-.1.4-.3.8-.6 1.1-1 1.4-2.6 2.1-4.2 2.3-1 .2-2 .1-3-.1-.8-.1-1.5-.5-2-1.2-.7-1.1-.5-2.8.2-3.8.5-.6 1.2-1 1.9-1.3C38.7 38 41 38 43 38h1.7v2zM29.9 31L18.7 3.4c-.2-.5-.6-.9-1.2-.9H14c-.5 0-1.1.4-1.3.9L2.6 31c-.3.5.2 1.2.7 1.2h3.9c.5 0 1.1-.4 1.3-1L11 24h10l2.9 7.2c.2.5.7 1 1.3 1h3.9c.6 0 1-.7.8-1.2zM13.1 18.5L16 11l3.2 7.5h-6.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-62rs1a5v8iv";
freezeTemplate(tmpl);
