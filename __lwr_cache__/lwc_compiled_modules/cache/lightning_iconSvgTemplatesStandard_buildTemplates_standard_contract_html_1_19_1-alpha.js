import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract.css";

import _implicitScopedStylesheets from "./contract.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74.6 33.6L61.4 20.4c-.3-.3-.6-.4-1-.4-.8 0-1.4.6-1.4 1.4V32c0 2.2 1.8 4 4 4h10.6c.8 0 1.4-.6 1.4-1.4 0-.4-.1-.7-.4-1z"${3}/><path d="M73 42H59c-3.3 0-6-2.7-6-6V22c0-1.1-.9-2-2-2H31c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h38c3.3 0 6-2.7 6-6V44c0-1.1-.9-2-2-2zm-41-9.4l4.9-.7c.1 0 .3-.1.3-.2l2.2-4.5c.2-.3.6-.3.8 0l2.2 4.5c.1.1.2.2.3.2l4.9.7c.3.1.5.5.2.7l-3.6 3.5c-.1.1-.1.2-.1.4l.8 4.9c.1.3-.3.6-.6.4l-4.4-2.3c-.1-.1-.3-.1-.4 0l-4.4 2.3c-.3.2-.7-.1-.6-.4l.8-4.9c0-.1 0-.3-.1-.4l-3.6-3.5c-.1-.2.1-.6.4-.7zM63 66c0 1.1-.9 2-2 2H35c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h26c1.1 0 2 .9 2 2v2zm4-12c0 1.1-.9 2-2 2H35c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h30c1.1 0 2 .9 2 2v2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6g0mhmvuuq1";
freezeTemplate(tmpl);
