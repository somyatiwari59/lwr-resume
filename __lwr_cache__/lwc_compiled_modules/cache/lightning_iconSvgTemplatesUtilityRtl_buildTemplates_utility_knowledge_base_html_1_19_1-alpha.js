import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./knowledge_base.css";

import _implicitScopedStylesheets from "./knowledge_base.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M9.5 35h13c.8 0 1.5-.7 1.5-1.5V10c0-1.7-1.8-3-3.2-3H9.5C8.7 7 8 7.7 8 8.5v25c0 .8.7 1.5 1.5 1.5z"${3}/><path d="M49.2 11.6c-.6-.2-1.2.3-1.2 1v24.9c0 .8-.7 1.5-1.5 1.5h-41c-.8 0-1.5-.7-1.5-1.5V12.7c0-.7-.8-1.2-1.4-.9C1.1 12.5 0 14.1 0 16v23c0 2.2 1.8 4 4 4h16.5c.8 0 1.5.7 1.5 1.5s.7 1.5 1.5 1.5h5c.8 0 1.5-.7 1.5-1.5s.7-1.5 1.5-1.5H48c2.2 0 4-1.8 4-4V16c0-2.1-.7-3.9-2.8-4.4z"${3}/><path d="M29.5 35h13c.8 0 1.5-.7 1.5-1.5v-25c0-.8-.7-1.5-1.5-1.5H31.2C29.7 7 28 8.3 28 10v23.5c0 .8.7 1.5 1.5 1.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-n41gfim7th";
freezeTemplate(tmpl);
