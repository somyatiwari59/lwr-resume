import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./job_profile.css";

import _implicitScopedStylesheets from "./job_profile.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M37.3 31.9h21.8c1.1 0 2-.9 2-2v-4c0-3.3-2.7-5.9-5.9-5.9H41.3c-3.3 0-5.9 2.7-5.9 5.9v4c-.1 1.1.8 2 1.9 2z"${3}/><path d="M70 24.9h-2c-.6 0-1 .4-1 1v4c0 4.4-3.6 7.9-7.9 7.9H37.3c-4.4 0-7.9-3.6-7.9-7.9v-4c0-.6-.4-1-1-1h-2c-3.3 0-5.9 2.7-5.9 5.9v40.6c0 3.3 2.7 5.9 5.9 5.9h20c2.8 0 3.1-2.3 3.1-3.1V52.8c0-2.3 1.3-2.8 2-2.8h21.6c2.4 0 2.8-2.1 2.8-2.8V31c.1-3.4-2.6-6.1-5.9-6.1z"${3}/><path d="M78.4 60.4H56.6c-.6 0-1.1-.5-1.1-1.1v-2.2c0-.6.5-1.1 1.1-1.1h21.8c.6 0 1.1.5 1.1 1.1v2.2c0 .6-.5 1.1-1.1 1.1zm0 9.8H56.6c-.6 0-1.1-.5-1.1-1.1v-2.2c0-.6.5-1.1 1.1-1.1h21.8c.6 0 1.1.5 1.1 1.1v2.2c0 .6-.5 1.1-1.1 1.1zm0 9.8H56.6c-.6 0-1.1-.5-1.1-1.1v-2.2c0-.6.5-1.1 1.1-1.1h21.8c.6 0 1.1.5 1.1 1.1v2.2c0 .6-.5 1.1-1.1 1.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ts2k3qobiu";
freezeTemplate(tmpl);
