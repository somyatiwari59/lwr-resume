import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./channel_program_members.css";

import _implicitScopedStylesheets from "./channel_program_members.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.7 68.1c0-5.9 2.8-11.2 7.2-14.5-1.3-.6-2.6-1.2-4-1.8-4.3-1.8-4.9-3.4-4.9-5.2 0-1.8 1.2-3.4 2.6-4.7 2.5-2.3 3.9-5.4 3.9-9.1 0-6.9-4.3-12.8-11.9-12.8-7.6 0-11.9 5.9-11.9 12.8 0 3.7 1.4 6.9 3.9 9.1 1.4 1.3 2.6 3 2.6 4.7 0 1.7-.7 3.4-4.9 5.2-6.2 2.6-12.1 5.6-12.2 11.2 0 3.7 2.8 7 6.3 7h22.7c.3 0 .5-.1.7-.1 0-.6-.1-1.2-.1-1.8zM67 56.3c-6.5 0-11.9 5.3-11.9 11.9S60.5 80.1 67 80.1s11.9-5.3 11.9-11.9S73.6 56.3 67 56.3zM76.5 67h-3.1c-.1-2.8-.8-5.3-1.7-7.1 2.5 1.4 4.4 4.1 4.8 7.1zm-10.6-7.8V67h-2.7c.1-3.7 1.3-6.6 2.7-7.8zm0 10.2v7.8c-1.3-1.1-2.5-4.1-2.7-7.8h2.7zm2.3 7.8v-7.8H71c-.2 3.7-1.4 6.6-2.8 7.8zm0-10.2v-7.8c1.3 1.1 2.5 4.1 2.7 7.8h-2.7zm-5.8-7.1c-1 1.9-1.5 4.3-1.7 7.1h-3.1c.4-3 2.2-5.7 4.8-7.1zm-4.8 9.5h3.1c.1 2.8.8 5.3 1.7 7.1-2.6-1.5-4.4-4.1-4.8-7.1zm14 7.1c1-1.9 1.5-4.3 1.7-7.1h3.1c-.3 3-2.2 5.6-4.8 7.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2hv4kf681n9";
freezeTemplate(tmpl);
