import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./following.css";

import _implicitScopedStylesheets from "./following.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26.6 33.6l-2.2-2.2c-.6-.6-1.6-.6-2.2 0L12.8 41c-.4.4-1.1.4-1.5 0l-4.4-4.5c-.6-.6-1.6-.6-2.2 0l-2.2 2.2c-.6.6-.6 1.6 0 2.2l8.4 8.6c.6.6 1.6.6 2.2 0l13.4-13.7c.7-.5.7-1.5.1-2.2z"${3}/><path d="M46 2H10.1c-2.2 0-4 1.8-4 4v26.1c1.4.1 2.7.6 3.7 1.6l2.3 2.3 7.3-7.5c.2-.2.4-.3.6-.5v-1c0-.6.4-1 1-1h20c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H28.6l.8.8.1.1.1.1c1.1 1.2 1.6 2.8 1.4 4.4-.2 1.3-.8 2.5-1.8 3.4L22.1 46H46c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zm-4.1 35c0 .6-.4 1-.9 1h-6.1c-.5 0-.9-.4-.9-1v-2c0-.6.4-1 .9-1H41c.5 0 .9.4.9 1v2zM26 21c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2zm0-8c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2zm16 8c0 .6-.4 1-1 1H31c-.6 0-1-.4-1-1V11c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5irma92ogn8";
freezeTemplate(tmpl);
