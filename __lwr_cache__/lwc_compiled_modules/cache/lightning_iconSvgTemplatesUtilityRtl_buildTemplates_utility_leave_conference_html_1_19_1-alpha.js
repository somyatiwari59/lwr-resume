import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./leave_conference.css";

import _implicitScopedStylesheets from "./leave_conference.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M25.7 22.4c-.5.7-.2 1.7.6 2.2 1.6.9 3.4 1.9 4.9 3.3 2.5-1.9 5.5-3 8.8-3.2-1.1-1.9-3.4-3.2-5.8-4.3-2.3-1-2.8-1.9-2.8-3 0-1 .7-1.9 1.4-2.8 1.4-1.3 2.1-3.1 2.1-5.3.1-4-2.2-7.5-6.4-7.5-2.5 0-4.2 1.3-5.4 3.1 2.9 2.2 4.6 6 4.6 10.3-.1 2.8-.8 5.2-2 7.2zM31.8 34.7l6 6-6 6c-.6.6-.6 1.6 0 2.1l.7.7c.6.6 1.6.6 2.1 0l6-6 6 6c.6.6 1.6.6 2.1 0l.7-.7c.6-.6.6-1.6 0-2.1l-6-6 6-6c.6-.6.6-1.6 0-2.1l-.7-.7c-.6-.6-1.6-.6-2.1 0l-6 6-6-6c-.6-.6-1.6-.6-2.1 0l-.7.7c-.5.5-.5 1.5 0 2.1z"${3}/><path d="M28.2 30.7c-1.4-1.4-3.5-2.3-5.6-3.3-2.6-1.1-3-2.2-3-3.3 0-1.1.7-2.3 1.6-3.1 1.5-1.5 2.3-3.6 2.3-6 0-4.5-2.6-8.4-7.2-8.4h-.5c-4.6 0-7.2 3.9-7.2 8.4 0 2.4.8 4.5 2.3 6 .9.8 1.6 1.9 1.6 3.1 0 1.1-.3 2.2-3 3.3-3.8 1.7-7.3 3.4-7.5 7 .2 2.5 1.9 4.4 4.1 4.4h18.6c.5-3.1 1.7-5.9 3.5-8.1z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-40sof717v33";
freezeTemplate(tmpl);
