import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./business_hours.css";

import _implicitScopedStylesheets from "./business_hours.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.1 35.3h3.2c.9 0 1.6.7 1.6 1.6v14c0 .4-.2.8-.4 1.2l-9 9c-.6.6-1.6.6-2.2 0l-2.2-2.2c-.6-.6-.6-1.6 0-2.2l7.5-7.6V37c-.1-.8.5-1.6 1.4-1.7h.1z"${3}/><path d="M84.5 49.2h-4.8c0-.3-.1-.7-.1-1.1-1.3-16.4-15.6-28.7-32-27.5-16.4 1.3-28.7 15.6-27.5 32C21.3 68.1 34 80 49.5 80.2c8.4.2 16.5-3.3 22.2-9.4.5-.5 1-1 .4-1.6l-2.6-3.1c-.9-1.1-1.7-.6-2.4.1-5 5.5-12.4 8.3-19.8 7.5-10.3-1-19.9-10.6-21-20.7-1.3-12.9 8.1-24.5 21-25.8s24.5 8.1 25.8 21H73c.1.4.1.7.1 1.1h-4.7c-.9 0-1.6.7-1.6 1.6 0 .4.1.7.3 1l8 9.7c.7.7 1.8.7 2.5 0l8-9.7c.6-.6.6-1.6 0-2.2-.3-.3-.7-.5-1.1-.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-62tmrsgniji";
freezeTemplate(tmpl);
