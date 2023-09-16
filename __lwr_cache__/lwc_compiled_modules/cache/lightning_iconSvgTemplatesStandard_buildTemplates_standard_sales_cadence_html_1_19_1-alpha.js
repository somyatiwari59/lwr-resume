import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sales_cadence.css";

import _implicitScopedStylesheets from "./sales_cadence.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M41.7 66.7c.7.7 1.9.7 2.6 0l15.3-15.2c.8-.7.8-1.9.2-2.6l-.2-.2-15.3-15.3c-.7-.8-1.9-.8-2.6-.2l-.2.2-2.8 2.8c-.8.7-.8 1.9-.2 2.6l.2.2 4.8 4.8c.5.5.5 1.4 0 1.9-.2.2-.6.4-.9.4H22.1c-1.1 0-2.1.9-2.1 2v4c.1 1.1 1 1.9 2.1 2h20.7c.7 0 1.3.6 1.3 1.3 0 .3-.1.7-.4.9l-4.8 4.8c-.8.7-.8 1.9-.2 2.6l.2.2 2.8 2.8z"${3}/><path d="M63.5 56.3l-4.8 4.8c-.8.7-.8 1.9-.2 2.6l.2.2 2.8 2.8c.7.7 1.9.7 2.6 0l15.3-15.2c.8-.7.8-1.9.2-2.6l-.2-.2-15.3-15.3c-.7-.8-1.9-.8-2.6-.2l-.2.2-2.8 2.8c-.8.7-.8 1.9-.2 2.6l.2.2 4.8 4.8 6.4 6.3-6.2 6.2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-8crf9ff50f";
freezeTemplate(tmpl);
