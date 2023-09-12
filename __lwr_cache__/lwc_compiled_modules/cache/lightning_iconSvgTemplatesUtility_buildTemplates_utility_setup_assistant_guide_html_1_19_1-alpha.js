import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./setup_assistant_guide.css";

import _implicitScopedStylesheets from "./setup_assistant_guide.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M11.5 24.9c0-.4-.5-.6-.8-.4l-4.5 3.7c-.2.2-.2.5-.2.8v15.9c0 1 1.4 1.5 2.3.8l7.3-5.7c.2-.2.3-.4.1-.7-1.8-2.7-3.6-7.2-4.2-14.4zM21.2 39.8c.2.1.4.2.6.2h8.3c.2 0 .4-.1.6-.2 1.2-.8 6-4.8 6-18.4 0-6.3-1.8-10.7-3.9-13.7C29.7 3.3 26 2 26 2s-3.8 1.3-6.9 5.8c-2.1 3-3.8 7.3-3.8 13.6C15.3 35 20 39 21.2 39.8zM25.9 13c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zM45.7 28.2l-4.4-3.7c-.3-.3-.8-.1-.8.4-.6 7.2-2.4 11.7-4.1 14.5-.1.2-.1.5.1.7l7.3 5.7c.9.7 2.2.2 2.2-.8V29c0-.3 0-.6-.3-.8zM32.2 44.5c-.2-.3-.5-.5-.8-.5h-11c-.3 0-.7.2-.8.5-.4.6-1 1.7-1.4 3.1-.3 1.2.7 2.4 2 2.4h11.4c1.3 0 2.3-1.2 2-2.4-.4-1.5-1-2.6-1.4-3.1z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-8ih60gfkak";
freezeTemplate(tmpl);
