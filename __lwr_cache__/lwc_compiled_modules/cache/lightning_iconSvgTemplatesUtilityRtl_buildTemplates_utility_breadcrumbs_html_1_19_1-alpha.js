import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./breadcrumbs.css";

import _implicitScopedStylesheets from "./breadcrumbs.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M35.7 42.1c-.5 0-1-.2-1.3-.6L22.7 26.9c-.4-.6-.4-1.4 0-1.9l11.6-14.6c.3-.3.8-.5 1.2-.5h8.1c.6 0 1 .4 1 1V41c0 .6-.4 1-1 1l-7.9.1zM7.7 27l11.7 14.6c.6.6 1.4.7 2.1.2l2.3-1.9c.6-.5.7-1.5.2-2.1L14.5 26 24 14.3c.6-.6.5-1.6-.2-2.1l-2.3-1.9c-.7-.6-1.6-.4-2.1.2L7.7 25c-.4.5-.4 1.2 0 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ct8vtk538";
freezeTemplate(tmpl);
