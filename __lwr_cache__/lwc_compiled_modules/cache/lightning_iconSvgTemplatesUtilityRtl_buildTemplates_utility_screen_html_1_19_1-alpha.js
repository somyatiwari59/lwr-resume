import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./screen.css";

import _implicitScopedStylesheets from "./screen.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6v27.7c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V6zm-6 24.2c0 .8-.7 1.5-1.5 1.5h-33c-.8 0-1.5-.7-1.5-1.5V9.5C8 8.7 8.7 8 9.5 8h33c.8 0 1.5.7 1.5 1.5v20.7zM19 44c-2.2 0-4 1.8-4 4v.5c0 .8.7 1.5 1.5 1.5h19c.8 0 1.5-.7 1.5-1.5V48c0-2.2-1.8-4-4-4H19z"${3}/><path d="M18 26.7h-4.1c-.6 0-1-.5-1-1V14c0-.6.4-1 1-1H18c.5 0 1 .4 1 1v11.7c0 .6-.5 1-1 1zM38.1 26.7H24.8c-.6 0-1-.4-1-1V14c0-.6.4-1 1-1h13.3c.5 0 1 .4 1 1v11.7c0 .6-.5 1-1 1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4fge393qup";
freezeTemplate(tmpl);
