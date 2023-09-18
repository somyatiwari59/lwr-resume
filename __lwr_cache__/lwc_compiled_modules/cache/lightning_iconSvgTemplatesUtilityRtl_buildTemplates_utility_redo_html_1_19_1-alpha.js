import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./redo.css";

import _implicitScopedStylesheets from "./redo.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M30.3 12.6c10.4 0 18.9 8.4 18.9 18.9s-8.5 18.9-18.9 18.9h-8.2c-.8 0-1.3-.6-1.3-1.4v-3.2c0-.8.6-1.5 1.4-1.5h8.1c7.1 0 12.8-5.7 12.8-12.8s-5.7-12.8-12.8-12.8H16.4s-.8 0-1.1.1c-.8.4-.6 1 .1 1.7l4.9 4.9c.6.6.5 1.5-.1 2.1L18 29.7c-.6.6-1.3.6-1.9.1l-13-13c-.5-.5-.5-1.3 0-1.8L16 2.1c.6-.6 1.6-.6 2.1 0l2.1 2.1c.6.6.6 1.6 0 2.1l-4.9 4.9c-.6.6-.6 1.3.4 1.3h.7l13.9.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-hnj0j3rqag";
freezeTemplate(tmpl);
