import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom75.css";

import _implicitScopedStylesheets from "./new_custom75.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M26 2c-1.4 0-2.4 1-2.4 2.4v43.2c0 1.4 1 2.4 2.4 2.4 13.2 0 24-10.8 24-24S39.2 2 26 2zm19 21.6h-6.3c-.2-5.7-1.5-10.6-3.4-14.4 5.3 3 8.9 8.2 9.7 14.4zM28.4 44.2V28.4h5.5c-.4 7.5-2.8 13.4-5.5 15.8zm0-20.6V7.8c2.7 2.3 5.1 8.2 5.5 15.8h-5.5zm6.9 19.2c1.9-3.8 3.1-8.7 3.4-14.4H45c-.8 6.2-4.4 11.4-9.7 14.4zM12.8 17.9c.6.5 1.6.4 2.2-.2l4.4-5c.6-.6.6-1.6-.1-2.2l-4.4-4.4c-.6-.6-1.4-.6-2-.2l-.9.6C6 10.8 2 17.9 2 26s4 15.2 10 19.5l.9.6c.6.4 1.4.3 2-.2l4.4-4.4c.6-.6.6-1.6.1-2.2l-4.4-5c-.6-.6-1.5-.7-2.2-.2l-1.7 1.3c-1.8-2.7-2.7-5.9-2.7-9.4s1-6.6 2.7-9.4l1.7 1.3z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-59g55ebhqi9";
freezeTemplate(tmpl);
