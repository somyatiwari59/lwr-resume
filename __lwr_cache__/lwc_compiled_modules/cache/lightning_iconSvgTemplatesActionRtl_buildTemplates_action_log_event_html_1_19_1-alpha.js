import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./log_event.css";

import _implicitScopedStylesheets from "./log_event.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M38.7 40.2l-4.8 1.6c-.4.1-.9.2-1.3.2-1.4 0-2.8-.7-3.7-1.8-.9-1.1-1.1-2.7-.8-4.1l1.6-5.7 7.5-7.5c.3-.3.1-.9-.4-.9H5.5c-.8 0-1.5.7-1.5 1.5V42c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4v-.8c0-.7-.7-1.2-1.3-1zM5.5 18h33c.8 0 1.5-.7 1.5-1.5V14c0-2.2-1.8-4-4-4h-3V9c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v1H17V9c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v1H8c-2.2 0-4 1.8-4 4v2.5c0 .8.7 1.5 1.5 1.5z"${3}/><path d="M43.5 23.1c-.2-.2-.5-.2-.7 0l-9.4 9.4-1.4 4.7c-.1.5.3.9.8.8l4.7-1.4 9.4-9.4c.2-.2.2-.5 0-.7l-3.4-3.4zM51.5 20.2l-1.8-1.8c-.6-.6-1.7-.6-2.4 0 0 0-1.1 1.1-1.6 1.7-.2.2-.2.5 0 .7l3.4 3.4c.2.2.5.2.7 0 .6-.6 1.7-1.6 1.7-1.6.7-.6.7-1.7 0-2.4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-28t66nuuh16";
freezeTemplate(tmpl);
