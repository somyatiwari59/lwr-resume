import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./richtextoutdent.css";

import _implicitScopedStylesheets from "./richtextoutdent.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M34.1 23.5v3c0 .8.8 1.5 1.6 1.5h6.4v5.7c0 1 .8 1.5 1.4.9l8.3-9c.3-.4.3-1 0-1.4l-8.3-9c-.5-.6-1.4-.1-1.4.9V22h-6.4c-.8 0-1.6.7-1.6 1.5zm-34-9c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-17c-.8 0-1.5.7-1.5 1.5v3zm4 24c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-13c-.8 0-1.5.7-1.5 1.5v3zm-4-12c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-17c-.8 0-1.5.7-1.5 1.5v3zm24 20c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-41c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v41z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5c5t4q83j46";
freezeTemplate(tmpl);