import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pop_in.css";

import _implicitScopedStylesheets from "./pop_in.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M22 31.3h19.1c.8 0 1.6-.5 1.6-1.3v-3c0-.8-.7-1.7-1.6-1.7h-7.9c-.9 0-1.4-1-.7-1.6l17-17c.6-.6.6-1.5 0-2.1l-2.1-2.1c-.6-.6-1.5-.6-2.1 0l-17 17c-.6.6-1.6.2-1.6-.7v-7.9c0-.8-.8-1.7-1.6-1.7h-2.9c-.8 0-1.5.9-1.5 1.7v19c.1.9.5 1.3 1.3 1.4z"${3}/><path d="M37 35.3h-4c-.6 0-1 .4-1 1v6.2c0 .8-.7 1.5-1.5 1.5h-21c-.8 0-1.5-.7-1.5-1.5v-21c0-.8.7-1.5 1.4-1.5h6.3c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4v-9.7c0-.6-.4-1-1-1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1m7jigu7t13";
freezeTemplate(tmpl);
