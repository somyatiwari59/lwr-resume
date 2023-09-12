import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./money.css";

import _implicitScopedStylesheets from "./money.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M30.1 26.1c0-2.3 1.4-4.3 3.3-5.3-.3-3.9-3.5-6.9-7.5-6.9-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5c1.5 0 3-.5 4.1-1.3v-1.5z"${3}/><path d="M30.1 36.4v-1.9c0-.7.1-1.3.3-1.9H12.8c0-2.9-2.3-5.3-5.3-5.3V16.1c2.9 0 5.3-2.3 5.3-5.3h26.3c0 2.9 2.3 5.3 5.3 5.3v4h3.8c.7 0 1.3.1 1.9.3V9.7c0-2.5-2-4.5-4.5-4.5H6.5C4 5.2 2 7.2 2 9.7v24.2c0 2.5 2 4.5 4.5 4.5h24c-.2-.6-.4-1.3-.4-2zM50 44.9c0 1-1 1.9-2 1.9H36c-1 0-1.9-.9-1.9-1.9V43c0-1 .9-1.9 1.9-1.9h12.1c1 0 1.9.9 1.9 1.9v1.9z"${3}/><path d="M50 36.5c0 1-1 1.9-2 1.9H36c-1 0-1.9-.9-1.9-1.9v-1.9c0-1 .9-1.9 1.9-1.9h12.1c1 0 1.9.9 1.9 1.9v1.9zM50 28c0 1-1 1.9-2 1.9H36c-1 0-1.9-.9-1.9-1.9v-1.9c0-1 .9-1.9 1.9-1.9h12.1c1 0 1.9.9 1.9 1.9V28z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-14u6ii3b9o5";
freezeTemplate(tmpl);
