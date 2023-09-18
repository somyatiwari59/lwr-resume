import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pause_alt.css";

import _implicitScopedStylesheets from "./pause_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M9.009 8.977c9.395-9.303 24.587-9.303 33.982 0 9.295 9.402 9.395 24.706 0 34.009s-24.687 9.402-33.982 0c-9.295-9.403-9.395-24.707 0-34.01zm16.991-1c-9.895 0-17.99 8.102-17.99 18.004 0 9.903 8.095 18.005 17.99 18.005 9.995 0 17.99-8.002 17.99-18.005S35.896 7.977 26 7.977zM21.75 15c.966 0 1.75.895 1.75 2v18c0 1.105-.784 2-1.75 2h-3.5c-.966 0-1.75-.895-1.75-2V17c0-1.105.784-2 1.75-2zm12 0c.966 0 1.75.895 1.75 2v18c0 1.105-.784 2-1.75 2h-3.5c-.966 0-1.75-.895-1.75-2V17c0-1.105.784-2 1.75-2z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-17fbt38fspc";
freezeTemplate(tmpl);
