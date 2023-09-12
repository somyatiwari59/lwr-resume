import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./notification.css";

import _implicitScopedStylesheets from "./notification.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M46 33h-.5c-1.9 0-3.5-1.6-3.5-3.5V18c0-9.1-7.6-16.4-16.8-16C16.6 2.4 10 9.8 10 18.5v11.1c0 1.9-1.6 3.4-3.5 3.4H6c-2.2 0-4 1.9-4 4.1v1.5c0 .7.7 1.4 1.5 1.4h45c.8 0 1.5-.7 1.5-1.5V37c0-2.2-1.8-4-4-4zM30.9 44h-9.8c-.6 0-1.1.6-1 1.2.5 2.8 3 4.8 5.9 4.8s5.4-2.1 5.9-4.8c.1-.6-.4-1.2-1-1.2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6acnr0aecm4";
freezeTemplate(tmpl);
