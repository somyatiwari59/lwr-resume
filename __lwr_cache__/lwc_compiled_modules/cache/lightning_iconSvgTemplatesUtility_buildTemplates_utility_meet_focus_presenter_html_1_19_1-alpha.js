import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./meet_focus_presenter.css";

import _implicitScopedStylesheets from "./meet_focus_presenter.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g fill-rule="evenodd"${3}><path d="M47.6 27.92H32.27a2.86 2.86 0 00-2.87 2.87v11.5a2.87 2.87 0 002.87 2.88H47.6a2.88 2.88 0 002.88-2.88v-11.5a2.87 2.87 0 00-2.88-2.87zm1 14.37a1 1 0 01-1 1H32.27a1 1 0 01-1-1v-9.58a1 1 0 011-1H47.6a1 1 0 011 1zM27.48 16.74c0-5.31-3.13-9.91-8.63-9.91s-8.62 4.6-8.62 9.91a9.71 9.71 0 002.82 7.08A5.71 5.71 0 0115 27.48c0 1.41-.46 2.58-3.6 4-4.49 2-8.76 4.26-8.87 8.49a4.91 4.91 0 004.64 5.19h20.12a5.73 5.73 0 01-.77-2.88V31.6l-.25-.12c-3-1.42-3.6-2.7-3.6-4a5.27 5.27 0 011.91-3.66 9.75 9.75 0 002.9-7.08z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6bgc4smql9l";
freezeTemplate(tmpl);
