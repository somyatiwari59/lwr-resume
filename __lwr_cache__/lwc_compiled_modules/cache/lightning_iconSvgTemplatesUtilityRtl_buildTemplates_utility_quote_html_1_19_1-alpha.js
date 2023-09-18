import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quote.css";

import _implicitScopedStylesheets from "./quote.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45.2 2.1H27.7c-1.1-.1-2.1.5-2.9 1.3L3.4 24.9c-1.8 1.8-1.8 4.9 0 6.8l17 17c1.8 1.8 4.9 1.8 6.8 0l21.7-21.8c.8-.8 1.3-2.1 1.2-3.2V6.9c-.1-2.6-2.3-4.8-4.9-4.8zM27.9 37.3l-1.1 1.1c-.6.6-1.6.6-2.2 0L13.7 27.6c-.6-.6-.6-1.6 0-2.2l1.1-1.1c.6-.6 1.6-.6 2.2 0l10.9 10.9c.7.5.7 1.5 0 2.1zm6.4-6.4L33.2 32c-.6.6-1.6.6-2.2 0L20.1 21.2c-.6-.6-.6-1.6 0-2.2l1.1-1.1c.6-.6 1.6-.6 2.2 0l10.9 10.9c.7.5.7 1.5 0 2.1zm4.5-13.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7050f6j6fia";
freezeTemplate(tmpl);
