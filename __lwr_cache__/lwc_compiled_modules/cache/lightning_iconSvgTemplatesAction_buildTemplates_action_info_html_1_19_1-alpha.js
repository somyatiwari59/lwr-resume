import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./info.css";

import _implicitScopedStylesheets from "./info.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 2C12.7 2 2 12.7 2 26s10.7 24 24 24 24-10.7 24-24S39.3 2 26 2zm0 12.1c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm5 21c0 .5-.4.9-1 .9h-8c-.5 0-1-.3-1-.9v-2c0-.5.4-1.1 1-1.1.5 0 1-.3 1-.9v-4c0-.5-.4-1.1-1-1.1-.5 0-1-.3-1-.9v-2c0-.5.4-1.1 1-1.1h6c.5 0 1 .5 1 1.1v8c0 .5.4.9 1 .9.5 0 1 .5 1 1.1v2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-318k8krvl86";
freezeTemplate(tmpl);
