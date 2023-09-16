import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./answer_private.css";

import _implicitScopedStylesheets from "./answer_private.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M89 84c-1.1 0-2 .9-2 2v1h4v-1c0-1.1-.9-2-2-2z" fill-opacity=".65"${3}/><path d="M100 100V62l-38 38zm-5-6.5c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5h.5v-1c0-2.2 1.8-4 4-4s4 1.8 4 4v1h.5c.8 0 1.5.7 1.5 1.5z" fill-opacity=".65"${3}/><path d="M49.9 22c-16.6 0-30 12.5-30 28 0 5 1.4 9.6 3.8 13.7.3.5.4 1.1.2 1.6l-2.8 8.9c-.5 1.6 1 3 2.6 2.5l8.8-3.1c.6-.2 1.2-.1 1.7.2 4.6 2.7 10 4.2 15.8 4.2 16.6 0 30-12.5 30-28-.1-15.5-13.4-28-30.1-28zm14.5 21.8L49.1 59.1c-.6.6-1.3.9-2.1.9s-1.5-.3-2.1-.9l-7.4-7.4c-.6-.6-.6-1.5 0-2.1l2.1-2.1c.6-.6 1.5-.6 2.1 0l5.3 5.3 13.2-13.2c.6-.6 1.5-.6 2.1 0l2.1 2.1c.5.6.5 1.6 0 2.1z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-5n6se06ppnc";
freezeTemplate(tmpl);
