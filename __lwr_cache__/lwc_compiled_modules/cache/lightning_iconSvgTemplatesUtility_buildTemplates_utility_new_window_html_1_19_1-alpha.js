import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_window.css";

import _implicitScopedStylesheets from "./new_window.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M48.7 2H29.6c-.8 0-1.6.5-1.6 1.3v3c0 .8.7 1.7 1.6 1.7h7.9c.9 0 1.4 1 .7 1.6l-17 17c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0l17-17c.6-.6 1.6-.2 1.6.7v7.9c0 .8.8 1.7 1.6 1.7h2.9c.8 0 1.5-.9 1.5-1.7v-19c0-.9-.5-1.4-1.3-1.4z"${3}/><path d="M36.3 25.5L32.9 29c-.6.6-.9 1.3-.9 2.1v11.4c0 .8-.7 1.5-1.5 1.5h-21c-.8 0-1.5-.7-1.5-1.5v-21c0-.8.7-1.5 1.5-1.5H21c.8 0 1.6-.3 2.1-.9l3.4-3.4c.6-.6.2-1.7-.7-1.7H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V26.2c0-.9-1.1-1.3-1.7-.7z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-7edkq2f254i";
freezeTemplate(tmpl);
