import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./jump_to_bottom.css";

import _implicitScopedStylesheets from "./jump_to_bottom.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M40.6 30.4L27.1 44c-.6.6-1.6.6-2.2 0L11.4 30.4c-.6-.6-.6-1.6 0-2.2l2.2-2.2c.6-.6 1.6-.6 2.2 0l9.1 9.4c.6.6 1.6.6 2.2 0l9.1-9.3c.6-.6 1.6-.6 2.2 0l2.2 2.2c.5.6.5 1.5 0 2.1z"${3}/><path d="M40.6 12.3L27.1 26.1c-.6.6-1.6.6-2.2 0L11.4 12.3c-.6-.6-.6-1.6 0-2.2l2.2-2.2c.6-.6 1.6-.6 2.2 0l9.1 9.4c.6.6 1.6.6 2.2 0L36.2 8c.6-.6 1.6-.6 2.2 0l2.2 2.2c.5.6.5 1.6 0 2.1z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-1nr8cq3hnfe";
freezeTemplate(tmpl);
