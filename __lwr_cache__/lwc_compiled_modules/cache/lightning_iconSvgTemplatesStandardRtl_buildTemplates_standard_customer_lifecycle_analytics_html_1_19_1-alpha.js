import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer_lifecycle_analytics.css";

import _implicitScopedStylesheets from "./customer_lifecycle_analytics.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M60.6 20.2a18.2 18.2 0 11-18.1 18.2 18.12 18.12 0 0118.1-18.2zM65 33.3c0 1.8 1 3.1 2.3 3.1s2.3-1.5 2.3-3.1c0-1.8-1-3.1-2.3-3.1s-2.1 1.4-2.3 3.1zm-13.5 0c0 1.8 1 3.1 2.3 3.1s2.3-1.5 2.3-3.1c0-1.8-1-3.1-2.3-3.1s-2.3 1.4-2.3 3.1zm-2.3 7.4a11.28 11.28 0 0011.5 10.6c6.5 0 10.7-4.9 11.2-10.6z"${3}/><path d="M20.2 59.9a1.29 1.29 0 001.4 1.3h2.6a1.37 1.37 0 001.4-1.4l.1-4.5a.88.88 0 011.5-.6l23.2 23.4a1.17 1.17 0 001.9 0l10.2-10.3a1.87 1.87 0 012.6.1l10.4 10.3a1.39 1.39 0 001.9 0l1.9-1.9a1.39 1.39 0 000-1.9L66.7 61.8a.1.1 0 01-.1-.1l-1.9-1.9-.1-.1a1.37 1.37 0 00-1.8.1L52.1 70.7a1 1 0 01-.9.2l-20-20.1a.89.89 0 01.6-1.5l4.5-.1a1.37 1.37 0 001.4-1.4v-2.6a1.29 1.29 0 00-1.4-1.3l-14.6.1a1.37 1.37 0 00-1.4 1.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1dv8gl38e9n";
freezeTemplate(tmpl);
