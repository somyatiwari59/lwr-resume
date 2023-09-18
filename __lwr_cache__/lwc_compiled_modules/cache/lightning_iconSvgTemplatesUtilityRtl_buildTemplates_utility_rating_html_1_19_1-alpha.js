import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./rating.css";

import _implicitScopedStylesheets from "./rating.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M27.413 3.101l4.6 15c.2.6.8.9 1.4.9h15c1.5 0 2.1 2 .9 2.9l-12.2 9c-.5.4-.7 1.1-.5 1.7l5.8 15.4c.4 1.4-1.1 2.6-2.3 1.7l-13.1-9.8c-.5-.4-1.2-.4-1.8 0l-13.2 9.8c-1.2.9-2.8-.3-2.3-1.7l5.6-15.4c.2-.6 0-1.3-.5-1.7l-12.2-9c-1.2-.9-.5-2.9.9-2.9h15c.7 0 1.2-.2 1.4-.9l4.7-15.1c.4-1.4 2.4-1.3 2.8.1zm-1.4 9.701C26 14.17 26 33.542 26 34.495c.187.153 2.933 2.194 8.24 6.125.7.525 1.574-.175 1.34-.992L32.31 31.02c-.35-.77 0-1.271.43-1.535l6.866-4.789c.7-.525.35-1.691-.525-1.691h-8.06c-.35 0-1.268-.117-1.517-1.016l-2.67-8.545a.89.89 0 00-.82-.642z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1nsn3lm045g";
freezeTemplate(tmpl);
