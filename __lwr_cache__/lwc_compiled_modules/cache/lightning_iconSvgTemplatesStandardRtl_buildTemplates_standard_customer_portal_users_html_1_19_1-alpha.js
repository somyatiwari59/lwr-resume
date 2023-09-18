import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer_portal_users.css";

import _implicitScopedStylesheets from "./customer_portal_users.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M32 45.8c0-1.1.9-2 2-2h18.6c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2H34c-1.1 0-2-.9-2-2v-3zm28.6 0c0-1.1.9-2 2-2H66c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3.4c-1.1 0-2-.9-2-2v-3zm0 13c0-1.1.9-2 2-2H66c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3.4c-1.1 0-2-.9-2-2v-3zm-28.6 0c0-1.1.9-2 2-2h18.6c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2H34c-1.1 0-2-.9-2-2v-3zM20 26.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V26.2c0-3.4-2.8-6.2-6.2-6.2H26.2c-3.4 0-6.2 2.8-6.2 6.2zm32.6 4.2c0 .8-.6 1.6-1.4 1.6H27.8c-.8 0-1.6-.6-1.6-1.4v-3c0-.8.6-1.6 1.4-1.6H51c.8 0 1.6.6 1.6 1.4v3zm11-1.4c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3zM74 29c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3zM26 39.6c0-.8.6-1.6 1.4-1.6h45c.8 0 1.6.6 1.6 1.4v33c0 .8-.6 1.6-1.4 1.6H68v-2.3c0-1.1-.9-2-2-2h-3.4c-1.1 0-2 .9-2 2V74h-6v-2.3c0-1.1-.9-2-2-2H34c-1.1 0-2 .9-2 2V74h-4.4c-.8 0-1.6-.6-1.6-1.4v-33z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6sgaa8nm6ut";
freezeTemplate(tmpl);
