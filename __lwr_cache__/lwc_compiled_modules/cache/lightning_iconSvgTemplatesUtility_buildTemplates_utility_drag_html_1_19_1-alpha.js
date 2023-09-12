import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./drag.css";

import _implicitScopedStylesheets from "./drag.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M30.9 34.3c0 1.8-2.2 2.5-3.2 1l-2-4.3c-1.1-1.9-3.5-2.3-5.3-1.1l-1.3 1 6.7 15.9c.3.7 1 1.1 1.8 1.1h17.6c.9 0 1.6-.6 1.8-1.4l3.1-11.1c.8-3.1-1-6.1-3.8-7.2l-8-2.7c-11.3-4.1-7.6 8.4-7.4 8.8zM1.8 28.5h5.8v5.8H1.8zM14.4 4h5.8v5.8h-5.8zM14.4 42h5.8v5.8h-5.8zM1.8 15.8h5.8v5.8H1.8zM1.8 4.1h5.8v5.8H1.8zM27.1 4h5.8v5.8h-5.8zM39.8 4h5.8v5.8h-5.8zM1.8 42.1h5.8v5.8H1.8zM39.8 16.8h5.8v5.8h-5.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5cqjs7seh9p";
freezeTemplate(tmpl);
