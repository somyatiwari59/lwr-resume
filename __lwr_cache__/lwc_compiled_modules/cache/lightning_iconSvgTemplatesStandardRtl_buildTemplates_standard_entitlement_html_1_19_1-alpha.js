import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entitlement.css";

import _implicitScopedStylesheets from "./entitlement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M71.9 19.9H35.2c-3.7 0-6.9 3.4-6.9 6.9H26c-2.6 0-4.6 2.1-4.6 4.7s2 4.6 4.6 4.6h2.3v9.3H26c-2.6 0-4.6 2-4.6 4.6s2 4.6 4.6 4.6h2.3v9.3H26c-2.6 0-4.6 2.1-4.6 4.6 0 2.6 2 4.6 4.6 4.6h2.3c0 4.6 3.2 6.9 6.9 6.9h36.7c3.7 0 6.9-3.2 6.9-6.9V26.8c-.1-3.7-3.2-6.9-6.9-6.9zM68.1 70c0 1.1-.9 2-2 2H40c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h26.1c1.1 0 2 .9 2 2v2zM40 50.3l2.1-2.1c.6-.6 1.5-.6 2.1 0l5.2 5.1 12.8-12.7c.6-.6 1.5-.6 2.1 0l2.1 2.1c.5.6.5 1.6 0 2.1l-15 14.8c-.6.6-1.3.8-2.1.8s-1.5-.2-2.1-.8L40 52.4c-.7-.6-.7-1.5 0-2.1zm28.1-17.9c0 1.1-.9 2-2 2H40c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h26.1c1.1 0 2 .9 2 2v2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2grq4ev9ckk";
freezeTemplate(tmpl);
