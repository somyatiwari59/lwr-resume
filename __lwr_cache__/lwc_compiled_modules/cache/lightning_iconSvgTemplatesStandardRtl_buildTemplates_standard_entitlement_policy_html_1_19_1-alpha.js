import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entitlement_policy.css";

import _implicitScopedStylesheets from "./entitlement_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M25.4 34.9H36c2.2 0 4-1.8 4-4V20.3c0-.8-.6-1.4-1.4-1.4-.4 0-.7.1-1 .4L24.4 32.5c-.3.3-.4.6-.4 1 0 .8.6 1.4 1.4 1.4z"${3}/><path d="M46.4 78.8l4.7-6.4 4.3-5.8c-.1-.4-.1-.7-.2-1v-.1c-.7-.9-1.9-2.5-1.9-4.8s1.2-3.9 1.8-4.8c.1-1 .4-3.1 2.2-4.8 1.6-1.5 3.5-1.8 4.5-2h.1c.9-.7 2.5-1.9 4.8-1.9s3.9 1.2 4.8 1.8c.6.1 1.5.2 2.5.6V24.9c0-3.3-2.7-6-6-6H48c-1.1 0-2 .9-2 2v14c0 3.3-2.7 6-6 6H26c-1.1 0-2 .9-2 2v30c0 3.3 2.7 6 6 6h16.3l.1-.1z"${3}/></g><path d="M65.2 71.5L60 78.9l-1.3-3.5h-3.5l4.5-6.1c.9.5 1.8.6 2.5.8.2.1.5.1.6.1.1.1.3.2.5.3.4.3 1 .7 1.9 1zm8.4-2.3c-.9.5-1.8.6-2.5.8-.2.1-.5.1-.7.1-.1.1-.3.2-.5.3-.5.3-1.1.9-1.9 1.2l5.2 7.3 1.3-3.5H78l-4.4-6.2zm-7-11.6c-1.7 0-3.1 1.4-3.1 3.1s1.4 3.1 3.1 3.1c1.7 0 3.1-1.4 3.1-3.1s-1.4-3.1-3.1-3.1zm8.5 3.1c0 1.1-1.2 1.9-1.5 2.8-.4 1-.2 2.4-.9 3.1-.7.7-2.1.5-3.1.9-.9.4-1.8 1.5-2.8 1.5s-1.9-1.2-2.8-1.5c-1-.4-2.4-.2-3.1-.9-.7-.7-.5-2.1-.9-3.1-.4-.9-1.5-1.8-1.5-2.8s1.2-1.9 1.5-2.8c.4-1 .2-2.4.9-3.1.7-.7 2.1-.5 3.1-.9.9-.4 1.8-1.5 2.8-1.5s1.9 1.2 2.8 1.5c1 .4 2.4.2 3.1.9.7.7.5 2.1.9 3.1.3 1 1.5 1.8 1.5 2.8zm-2.7 0c0-3.2-2.5-5.8-5.8-5.8-3.2 0-5.8 2.5-5.8 5.8s2.5 5.8 5.8 5.8 5.8-2.6 5.8-5.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-54s0o72c5dp";
freezeTemplate(tmpl);
