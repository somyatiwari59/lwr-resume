import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./ribbon.css";

import _implicitScopedStylesheets from "./ribbon.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M24.1 36.7L14.7 50l-2.4-6.4H5.9l8.2-11.1c1.6 1 3.3 1.1 4.5 1.4.4.1.9.2 1.1.2.2.1.6.4.8.6.9.6 2.1 1.5 3.6 2zm15.2-4.2c-1.6 1-3.3 1.1-4.5 1.4-.4.1-1 .2-1.2.2-.2.1-.6.4-.8.6-.9.6-2 1.6-3.5 2.1L38.7 50l2.4-6.4h6.4l-8.2-11.1zM26.7 11.6c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zm15.2 5.6c0 1.9-2.1 3.4-2.8 5.1-.7 1.8-.3 4.3-1.7 5.6-1.3 1.3-3.8 1-5.6 1.7-1.7.7-3.2 2.8-5.1 2.8s-3.4-2.1-5.1-2.8c-1.8-.7-4.3-.3-5.6-1.7-1.3-1.3-1-3.8-1.7-5.6-.7-1.7-2.8-3.2-2.8-5.1s2.1-3.4 2.8-5.1c.7-1.8.3-4.3 1.7-5.6 1.3-1.3 3.8-1 5.6-1.7 1.7-.7 3.2-2.8 5.1-2.8s3.4 2.1 5.1 2.8c1.8.7 4.3.3 5.6 1.7 1.3 1.3 1 3.8 1.7 5.6.7 1.7 2.8 3.2 2.8 5.1zm-4.8 0c0-5.8-4.6-10.4-10.4-10.4s-10.4 4.6-10.4 10.4 4.6 10.4 10.4 10.4S37.1 23 37.1 17.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-30vnrocp5kg";
freezeTemplate(tmpl);
