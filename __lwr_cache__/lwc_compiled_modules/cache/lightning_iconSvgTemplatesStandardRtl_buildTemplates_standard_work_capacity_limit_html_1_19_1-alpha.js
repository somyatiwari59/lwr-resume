import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_capacity_limit.css";

import _implicitScopedStylesheets from "./work_capacity_limit.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M75.9 29.3l-9-8.9c-.3-.3-.6-.4-.9-.4-.8 0-1.4.6-1.4 1.4v6.4c.1 2.1 1.8 3.8 3.9 3.8h6.4c.7 0 1.3-.6 1.3-1.3 0-.4-.1-.7-.3-1zM29.6 62.6v-31c-3.2 0-5.8 2.6-5.8 5.8v36.7c0 3.2 2.6 5.8 5.8 5.9h29.2c3.2 0 5.7-2.5 5.8-5.7H41.3c-6.4 0-11.7 0-11.7-11.7zM51.5 44.3v9H60s.5-3.2-2.4-6.2c-2.9-2.9-6.1-2.8-6.1-2.8z"${3}/><path d="M74.2 37.4h-9.8c-3.2.1-5.8-2.5-5.9-5.7V21.9c.1-1-.7-1.8-1.7-1.9H41.2c-3.2-.1-5.8 2.5-5.9 5.7V62.5c0 3.2 2.6 5.8 5.8 5.8H70.3c3.2.1 5.8-2.5 5.9-5.7V39.4c0-1.1-.8-2-2-2zM63.5 53c-.1 6.5-5.4 11.8-11.9 11.7s-11.8-5.4-11.7-11.9c.1-6.5 5.4-11.8 11.9-11.7 6.5 0 11.7 5.4 11.7 11.9z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-399t04l2vp8";
freezeTemplate(tmpl);
