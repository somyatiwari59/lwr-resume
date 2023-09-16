import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_type.css";

import _implicitScopedStylesheets from "./shift_type.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M72 26h-5v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2H41v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2h-5c-3.3 0-6 2.7-6 6v2c0 1.1.9 2 2 2h52c1.1 0 2-.9 2-2v-2c0-3.3-2.7-6-6-6zM76 42H24c-1.1 0-2 .9-2 2v30c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V44c0-1.1-.9-2-2-2zM42.3 59.9c0-.6.5-1.1 1.1-1.1h19.4c.6 0 1.1.5 1.1 1.1v2.2c0 .6-.5 1.1-1.1 1.1H43.4c-.6 0-1.1-.5-1.1-1.1v-2.2zM37.8 72c.1.6-.4 1.1-1 1.1H34.5c-.6 0-1.1-.5-1.1-1.1v-2.2c0-.6.5-1.1 1.1-1.1h2.2c.6 0 1.1.5 1.1 1.1V72zm0-9.9c.1.6-.4 1.1-1 1.1H34.5c-.6 0-1.1-.5-1.1-1.1v-2.2c0-.6.5-1.1 1.1-1.1h2.2c.6 0 1.1.5 1.1 1.1v2.2zm0-9.9c.1.6-.4 1.1-1 1.1H34.5c-.6 0-1.1-.5-1.1-1.1V50c0-.6.5-1.1 1.1-1.1h2.2c.6 0 1.1.5 1.1 1.1v2.2zM66.6 72c0 .6-.5 1.1-1.1 1.1H43.4c-.6 0-1.1-.5-1.1-1.1v-2.2c0-.6.5-1.1 1.1-1.1h22.1c.6 0 1.1.5 1.1 1.1V72zm0-19.8c0 .6-.5 1.1-1.1 1.1H43.4c-.6 0-1.1-.5-1.1-1.1V50c0-.6.5-1.1 1.1-1.1h22.1c.6 0 1.1.5 1.1 1.1v2.2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-37oo4djspks";
freezeTemplate(tmpl);
