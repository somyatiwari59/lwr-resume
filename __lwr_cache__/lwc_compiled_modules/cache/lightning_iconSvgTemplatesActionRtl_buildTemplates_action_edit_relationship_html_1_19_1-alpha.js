import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./edit_relationship.css";

import _implicitScopedStylesheets from "./edit_relationship.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43 42h-3v-6h3c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1H17c-.6 0-1 .4-1 1v3h-6V9c0-3.9 3.1-7 7-7h26c3.9 0 7 3.1 7 7v26c0 3.9-3.1 7-7 7z"${3}/><path d="M32 16H6c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4zM14.8 41.5c-.2.2-.3.2-.5.3l-4.5 1.1c-.4.1-.8-.3-.7-.7l1.1-4.5c0-.1.1-.2.2-.4l.1-.1c.1-.1.4-.1.5 0l3.7 3.7c.2.3.2.6.1.6zm10.9-11l-9.2 9.3c-.2.2-.4.2-.6 0l-3.7-3.7c-.2-.1-.2-.4 0-.5l9.3-9.3c.2-.2.4-.2.6 0l3.7 3.7c0 .1 0 .3-.1.5zm2.8-2.8l-1 1c-.2.2-.4.2-.6 0L23.2 25c-.2-.2-.2-.4 0-.6l1-1c.7-.7 1.7-.7 2.4 0l2 2c.6.7.6 1.7-.1 2.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-drf6evtlut";
freezeTemplate(tmpl);
