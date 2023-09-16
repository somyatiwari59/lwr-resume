import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./activations.css";

import _implicitScopedStylesheets from "./activations.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M78 60a2 2 0 012 2v16a2 2 0 01-2 2H62a2 2 0 01-2-2V62a2 2 0 012-2zM40.2 26.9l12.9.2a1.16 1.16 0 011.2 1.2l.2 12.9a1.16 1.16 0 01-1.2 1.2H51a1.16 1.16 0 01-1.2-1.2l-.1-4a.77.77 0 00-1.3-.6l-7.9 7.9A10.32 10.32 0 0142 50a11.07 11.07 0 01-1.9 6.2l8.3 8.3a.77.77 0 001.3-.6l.1-4a1.16 1.16 0 011.2-1.2l2.4-.1a1.16 1.16 0 011.2 1.2l-.2 12.9a1.16 1.16 0 01-1.2 1.2l-12.9.2a1.16 1.16 0 01-1.2-1.2v-2.3a1.16 1.16 0 011.2-1.2l4-.1a.77.77 0 00.6-1.3l-8.4-8.4A11.24 11.24 0 0131 61a11 11 0 116.2-20.1l7.8-7.8a.77.77 0 00-.6-1.3l-4-.1a1.16 1.16 0 01-1.2-1.2l-.1-2.4a1.08 1.08 0 011.1-1.2zM74 66h-8v8h8zM31 45a5 5 0 105 5 5 5 0 00-5-5zm47-25a2 2 0 012 2v16a2 2 0 01-2 2H62a2 2 0 01-2-2V22a2 2 0 012-2zm-4 6h-8v8h8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1su7maiq8do";
freezeTemplate(tmpl);
