import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./turn_off_notifications.css";

import _implicitScopedStylesheets from "./turn_off_notifications.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M23.4 26.6c.6.6 1.4.6 2 0L46.8 6.9c.4-.7.3-1.9-1.2-1.9H3.4c-1.1 0-2 1.1-1.2 2l21.2 19.6z"${3}/><path d="M30.1 37.6c.5-5.6 5-10.2 10.7-10.8.5 0 1-.1 1.4-.1 1.8 0 3.4.4 4.9 1V15.3c0-1-1.2-1.5-1.9-.8L28.6 29.9c-1.1 1-2.6 1.6-4.1 1.6s-3-.6-4.1-1.6L3.8 14.5c-.8-.7-1.9-.2-1.9.8v19.6c0 2.5 2.1 4.6 4.6 4.6h23.7c-.1-.6-.1-1.3-.1-1.9z"${3}/><path d="M42.1 31c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm6 9.6c0 .2-.2.4-.5.4h-11c-.3 0-.5-.2-.5-.4v-3.2c0-.2.2-.4.5-.4h11c.3 0 .5.2.5.4v3.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-707hefo8e5o";
freezeTemplate(tmpl);
