import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./partner_fund_claim.css";

import _implicitScopedStylesheets from "./partner_fund_claim.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M56.5 34h9.4c.7 0 1.3-.6 1.3-1.3 0-.3-.1-.6-.3-.9L55.1 20.3c-.3-.2-.6-.3-.9-.3-.7 0-1.3.6-1.3 1.3v9.2c.1 1.9 1.7 3.5 3.6 3.5z"${3}/><path d="M38.6 65c0-3.5 2-6.6 5.2-7.8 2.6-1 5.2-1.6 8-1.6 4 0 7.4 1.1 10.5 2 1.7.5 3.3 1 4.8 1.3l.2-18c0-.9-.8-1.7-1.7-1.7H53c-3 0-5.2-2.4-5.2-5.2V21.7c0-.9-.8-1.7-1.8-1.7H28.2c-2.9 0-5.2 2.4-5.2 5.2v42c0 2.9 2.4 5.2 5.2 5.2h10.4V65z"${3}/><path d="M72.4 64.9c-9.1 2.8-16.3-5.8-26.2-1.7-.8.3-1.2 1-1.2 1.8v10.4c0 1.4 1.2 2.2 2.4 1.8 9.9-3 17 5.6 26.3 1.7.7-.3 1.3-1 1.3-1.8V66.8c0-1.3-1.3-2.2-2.6-1.9zm-12.1 9.7c-2.1 0-3.9-1.7-3.9-3.9 0-2.1 1.7-3.9 3.9-3.9s3.9 1.7 3.9 3.9-1.7 3.9-3.9 3.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-34elibn8i4g";
freezeTemplate(tmpl);
