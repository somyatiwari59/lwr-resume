import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./report_issue.css";

import _implicitScopedStylesheets from "./report_issue.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M22.8 45.7v1c0 1.2-.9 2.1-2.1 2.1H4.1c-1.2 0-2.1-.9-2.1-2.1v-1c0-2.5 3-4.1 5.7-5.3.1 0 .2-.1.3-.2.2-.1.5-.1.7 0 1.1.7 2.4 1.1 3.8 1.1 1.3 0 2.6-.4 3.8-1.1.2-.1.4-.1.6 0 .1 0 .2.1.3.2 2.7 1.3 5.6 2.8 5.6 5.3z"${3}/><path d="M34.8 3.2c-8.5 0-15.3 6.5-15.3 14.5 0 2.5.7 5 2 7.2.1.2.2.5.2.8L20 30.3c-.2.6.2 1.1.7 1.3.2.1.4.1.6 0l4.5-1.6c.3-.1.6-.1.8.1 2.4 1.4 5.2 2.2 8 2.2 8.5 0 15.3-6.6 15.3-14.6.1-8-6.8-14.5-15.1-14.5zm-1.1 5.7h3v7l-.3 4.6H34l-.2-4.6v-7zm1.5 17.3c-1.4 0-1.8-.8-1.8-1.8s.4-1.8 1.8-1.8 1.8.8 1.8 1.8c.1 1-.4 1.8-1.8 1.8z"${3}/><ellipse cx="12.4" cy="33.7" rx="5.2" ry="5.7"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-33fdt901lgf";
freezeTemplate(tmpl);