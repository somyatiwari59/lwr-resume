import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./reassign.css";

import _implicitScopedStylesheets from "./reassign.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M23.2 10.2C18.1 5.1 10 3.5 2.9 5.7c-.3 0-.7.5-.7 1.3v3.9c0 .8.7 1 1.1.9 5.4-2.2 12-1.2 16.3 3.3l1.1 1.1c.6.6.1 1.7-.7 1.7h-7.8c-.8 0-1.5.6-1.5 1.5v3c0 .8.6 1.5 1.5 1.5l19.2.2c.8 0 1.5-.6 1.5-1.5L33 3.5c0-.8-.6-1.5-1.5-1.5h-3c-.8 0-1.6.6-1.6 1.4l-.1 7.9c0 .8-1.1 1.3-1.7.7.1.1-1.9-1.8-1.9-1.8z"${3}/><path d="M3.5 27.8h3c.8 0 1.5.7 1.5 1.5v13.2c0 .8.7 1.5 1.5 1.5h33c.8 0 1.5-.7 1.5-1.5V16.9c0-.8-.7-1.5-1.5-1.5h-4c-.8 0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5H46c2.2 0 4 1.8 4 4V46c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4V29.3c0-.8.7-1.5 1.5-1.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6q13ha33n78";
freezeTemplate(tmpl);
