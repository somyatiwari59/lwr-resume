import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quick_text.css";

import _implicitScopedStylesheets from "./quick_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26.1 3.3C12.5 3.3 1.5 13.4 1.5 25.8c0 3.9 1.1 7.6 3 10.9.3.5.4 1.1.2 1.7l-3.2 8.7c-.3.8.5 1.5 1.3 1.3l8.8-3.4c.5-.2 1.1-.1 1.7.2 3.7 2.1 8.1 3.3 12.9 3.3 13.5-.1 24.5-10.1 24.5-22.6 0-12.5-11-22.6-24.6-22.6zM14.7 25c0-.5.4-1 1-1h15.9c.5 0 1 .4 1 1v2c0 .5-.4 1-1 1h-16c-.5 0-1-.4-1-1v-2zm22.9 9.6c0 .5-.4 1-1 1h-21c-.5 0-1-.4-1-1v-1.9c0-.5.4-1 1-1h21c.5 0 1 .4 1 1v1.9zm0-15.3c0 .5-.4 1-1 1h-21c-.5 0-1-.4-1-1v-1.9c0-.5.4-1 1-1h21c.5 0 1 .4 1 1v1.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-33lhmjvv35c";
freezeTemplate(tmpl);
