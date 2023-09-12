import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./emoji.css";

import _implicitScopedStylesheets from "./emoji.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50.1 26c0 13.3-10.8 24.1-24.1 24.1S1.9 39.3 1.9 26 12.7 1.9 26 1.9 50.1 12.7 50.1 26zM18.3 15.8c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3zm15.5 0c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3zm-.2 16.7c-2 1.8-4.7 2.8-7.6 2.8-2.8 0-5.4-1-7.5-2.7l-.9-.8c-.3-.2-.5-.3-1.1-.3-1.1 0-1.9.9-1.9 1.9 0 .5.2 1 .6 1.4l.7.6c2.7 2.4 6.3 3.8 10.1 3.8 3.9 0 7.5-1.5 10.2-3.9l.5-.5c.4-.4.6-.9.6-1.4 0-1.1-.9-1.9-1.9-1.9-.5 0-.9.2-1.2.4l-.6.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-55uf16qj42l";
freezeTemplate(tmpl);
