import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./channel_program_levels.css";

import _implicitScopedStylesheets from "./channel_program_levels.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M77.9 47.2l-3.7-1.7c-.5-.3-1.2-.3-1.7 0l-11 5.3c1.8-.6 3.7-.9 5.6-.9 3.1 0 6 .8 8.6 2.2l2.1-1c1.7-.9 1.7-3.1.1-3.9zM20.2 36.9L47 49.6c1.2.6 2.7.6 3.9 0l26.9-12.7c1.6-.8 1.6-2.9 0-3.7L50.9 20.5c-1.2-.6-2.7-.6-3.9 0L20.2 33.3c-1.7.7-1.7 2.9 0 3.6zM20.2 50.9L47 63.7c.7.4 1.5.5 2.3.4 1-4.8 3.9-8.8 7.9-11.4l-6.2 3c-1.2.6-2.7.6-3.9 0L25.6 45.5c-.5-.3-1.2-.3-1.7 0l-3.7 1.7c-1.7.8-1.7 2.9 0 3.7zM49 70.2c-.7 0-1.3-.2-1.9-.4L25.5 59.5c-.5-.3-1.2-.3-1.7 0l-3.6 1.7c-1.6.8-1.6 2.9 0 3.7L47 77.7c1.2.6 2.7.6 3.9 0l.6-.3c-1.3-2.2-2.2-4.6-2.5-7.2z"${3}/></g><path d="M67.2 56.2c-6.5 0-11.9 5.3-11.9 11.9S60.6 80 67.2 80s11.9-5.3 11.9-11.9-5.4-11.9-11.9-11.9zm9.4 10.7h-3.1c-.1-2.8-.8-5.3-1.7-7.1 2.6 1.5 4.4 4.1 4.8 7.1zM66 59.1v7.8h-2.7c.2-3.7 1.3-6.6 2.7-7.8zm0 10.2v7.8c-1.3-1.1-2.5-4.1-2.7-7.8H66zm2.4 7.8v-7.8h2.7c-.2 3.7-1.4 6.7-2.7 7.8zm0-10.2v-7.8c1.3 1.1 2.5 4.1 2.7 7.8h-2.7zm-5.8-7.1c-1 1.9-1.5 4.3-1.7 7.1h-3.1c.3-3 2.2-5.6 4.8-7.1zm-4.8 9.5h3.1c.1 2.8.8 5.3 1.7 7.1-2.6-1.4-4.5-4-4.8-7.1zm14 7.1c1-1.9 1.5-4.3 1.7-7.1h3.1c-.4 3.1-2.2 5.7-4.8 7.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-l2lacs3lsv";
freezeTemplate(tmpl);
