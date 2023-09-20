import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./topic.css";

import _implicitScopedStylesheets from "./topic.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M61.4 37.2c.2.7.7 1.2 1.4 1.4l2.2.6c.4.1.9-.1 1.1-.5l4.7-8.1c1.1-1.9.5-2.6-1.5-1.5l-8.1 4.7c-.4.2-.6.7-.5 1.1l.7 2.3zM33.9 38.7c.2.4.7.6 1.1.5l2.2-.6c.7-.2 1.2-.7 1.4-1.4l.6-2.2c.1-.4-.1-.9-.5-1.1l-8.1-4.7c-1.9-1.1-2.6-.5-1.5 1.5l4.8 8zM66.1 61.3c-.2-.4-.7-.6-1.1-.5l-2.2.6c-.7.2-1.2.7-1.4 1.4l-.6 2.2c-.1.4.1.9.5 1.1l8.1 4.7c1.9 1.1 2.6.5 1.5-1.5l-4.8-8zM38.6 62.8c-.2-.7-.7-1.2-1.4-1.4l-2.2-.6c-.4-.1-.9.1-1.1.5l-4.7 8.1c-1.1 1.9-.5 2.6 1.5 1.5l8.1-4.7c.4-.2.6-.7.5-1.1l-.7-2.3z"${3}/><path d="M78.4 49l-20.5-5.5c-.7-.2-1.2-.7-1.4-1.4L51 21.6c-.6-2.1-1.5-2.1-2.1 0l-5.5 20.5c-.2.7-.7 1.2-1.4 1.4L21.6 49c-2.1.6-2.1 1.5 0 2.1l20.5 5.5c.7.2 1.2.7 1.4 1.4L49 78.4c.6 2.1 1.5 2.1 2.1 0l5.5-20.5c.2-.7.7-1.2 1.4-1.4L78.4 51c2.1-.5 2.1-1.5 0-2zM50 55c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-40qo9gmeomm";
freezeTemplate(tmpl);