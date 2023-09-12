import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./magicwand.css";

import _implicitScopedStylesheets from "./magicwand.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M28.2 21c-.4-.4-1-.4-1.4 0L2.9 44.9c-1.2 1.2-1.2 3 0 4.2 1.2 1.2 3 1.2 4.2 0L31 25.2c.4-.4.4-1 0-1.4L28.2 21zM35.2 21l3.2-3.2c.6-.6.6-1.5 0-2.1l-2.1-2.1c-.6-.6-1.5-.6-2.1 0L31 16.8c-.4.4-.4 1 0 1.4l2.8 2.8c.4.4 1 .4 1.4 0zM10.4 11.6c3.8 1.2 6.8 4.1 8 8 .2.6 1 .6 1.2 0 1.2-3.8 4.1-6.8 8-8 .6-.2.6-1 0-1.2-3.8-1.2-6.8-4.1-8-8-.2-.6-1-.6-1.2 0-1.2 3.8-4.1 6.8-8 8-.5.2-.5 1 0 1.2zM49.6 30.5c-3.4-1.1-6-3.7-7.1-7.1-.2-.5-.9-.5-1.1 0-1.1 3.4-3.7 6-7.1 7.1-.5.2-.5.9 0 1.1 3.4 1.1 6 3.7 7.1 7.1.2.5.9.5 1.1 0 1.1-3.4 3.7-6 7.1-7.1.5-.2.5-1 0-1.1zM38.3 8.4c2.6.8 4.5 2.7 5.3 5.3.1.4.7.4.8 0 .8-2.6 2.7-4.5 5.3-5.3.4-.1.4-.7 0-.8-2.6-.8-4.5-2.7-5.3-5.3-.1-.4-.7-.4-.8 0-.8 2.6-2.7 4.5-5.3 5.3-.4.1-.4.7 0 .8z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6pnj1vskmp0";
freezeTemplate(tmpl);
