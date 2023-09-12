import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./reset_password.css";

import _implicitScopedStylesheets from "./reset_password.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M42 23H10c-2.2 0-4 1.8-4 4v19c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V27c0-2.2-1.8-4-4-4zM31 44.5c-1.5 1-3.2 1.5-5 1.5-.6 0-1.2-.1-1.8-.2-2.4-.5-4.4-1.8-5.7-3.8l3.3-2.2c.7 1.1 1.9 1.9 3.2 2.1 1.3.3 2.6 0 3.8-.8 2.3-1.5 2.9-4.7 1.4-6.9-.7-1.1-1.9-1.9-3.2-2.1-1.3-.3-2.6 0-3.8.8-.3.2-.5.4-.7.6L26 37h-9v-9l2.6 2.6c.4-.4.9-.8 1.3-1.1 2-1.3 4.4-1.8 6.8-1.4 2.4.5 4.4 1.8 5.7 3.8 2.8 4.2 1.7 9.8-2.4 12.6zM10 18.1v0zM11 19h4c.6 0 1-.3 1-.9V18c0-5.7 4.9-10.4 10.7-10 5.3.4 9.3 5 9.3 10.4v-.3c0 .6.4.9 1 .9h4c.6 0 1-.3 1-.9V18c0-9.1-7.6-16.4-16.8-16-8.5.4-15 7.6-15.2 16.1.1.5.5.9 1 .9z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-2lb2o2lhvtr";
freezeTemplate(tmpl);
