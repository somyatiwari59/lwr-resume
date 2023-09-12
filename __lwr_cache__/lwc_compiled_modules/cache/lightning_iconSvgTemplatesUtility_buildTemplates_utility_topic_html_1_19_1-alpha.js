import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./topic.css";

import _implicitScopedStylesheets from "./topic.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M17.4 35.3c-.1-.3-.4-.6-.7-.7l-2.2-.6c-.4-.1-.9.1-1.1.5L9.6 41c-1 1.8-.4 2.4 1.4 1.4l6.6-3.8c.4-.2.6-.7.5-1.1l-.7-2.2zM34.6 16.7c.1.3.4.6.7.7l2.2.6c.4.1.9-.1 1.1-.5l3.8-6.6c1-1.8.4-2.4-1.4-1.4l-6.6 3.8c-.4.2-.6.7-.5 1.1l.7 2.3zM13.4 17.6c.2.4.7.6 1.1.5l2.2-.6c.3-.1.6-.4.7-.7l.6-2.2c.1-.4-.1-.9-.5-1.1L11 9.6c-1.8-1-2.4-.4-1.4 1.4l3.8 6.6zM38.6 34.4c-.2-.4-.7-.6-1.1-.5l-2.2.6c-.3.1-.6.4-.7.7l-.6 2.3c-.1.4.1.9.5 1.1l6.6 3.8c1.8 1 2.4.4 1.4-1.4l-3.9-6.6z"${3}/><path d="M48.7 25.2l-16.4-4.4c-.6-.1-1-.6-1.1-1.1L26.8 3.3c-.5-1.7-1.2-1.7-1.7 0l-4.4 16.4c-.1.6-.6 1-1.1 1.1L3.3 25.2c-1.7.5-1.7 1.2 0 1.7l16.4 4.4c.6.1 1 .6 1.1 1.1l4.4 16.4c.5 1.7 1.2 1.7 1.7 0l4.4-16.4c.1-.6.6-1 1.1-1.1l16.4-4.4c1.6-.5 1.6-1.3-.1-1.7zM26 30c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3faubdmgqoc";
freezeTemplate(tmpl);
