import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./follow.css";

import _implicitScopedStylesheets from "./follow.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2 39.5v3c0 .8.7 1.5 1.5 1.5H8v4.5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5V44h4.5c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H14v-4.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5V38H3.5c-.8 0-1.5.7-1.5 1.5zM24 38v6.4c-.1.9.6 1.6 1.5 1.6H48c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H12C9.8 2 8 3.8 8 6v20.5c0 .8.7 1.5 1.5 1.5H14c2.2 0 4 1.8 4 4v1c0 .6.4 1 1 1h1c2.2 0 4 1.8 4 4zm4-25c0 .6-.4 1-1 1H17c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2zm0 8c0 .6-.4 1-1 1H17c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2zm16 0c0 .6-.4 1-1 1H33c-.6 0-1-.4-1-1V11c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v10zM28 35c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H29c-.6 0-1-.4-1-1v-2zm-5-5c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h20c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H23z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4o4lren7c6u";
freezeTemplate(tmpl);