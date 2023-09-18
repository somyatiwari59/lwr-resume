import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./delegated_account.css";

import _implicitScopedStylesheets from "./delegated_account.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M76.8 42.4H54.3c-2 0-2.3 2.1-2.3 2.3v34.2h26.8V45.2c.2-2.2-1.4-2.8-2-2.8zM63.4 73c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1V73zm0-10.5c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1v2.1zm0-10.5c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1V52zm10.3 21c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1V73zm0-10.5c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1v2.1zm0-10.5c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1V52z"${3}/><path d="M56 19.2H21.3c-2 0-2.3 2.1-2.3 2.3v57.3h26.8V38.6s0-2.5 2.3-2.5h8c.9-.1 2-.5 2-2.1V22c.1-2.2-1.4-2.8-2.1-2.8zM30.4 72.1c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1V70c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1v2.1zm0-10.6c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1v2.1zm0-10.6c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1v2.1zm0-10.6c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1v2.1zm0-10.5c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1v2.1zm11.3 42.3c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1V70c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1v2.1zm0-10.6c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1v2.1zm0-10.6c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1v2.1zm0-10.6c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1v2.1zm0-10.5c0 1.1-.9 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1h2.1c1.1 0 2.1.9 2.1 2.1v2.1zm11.4 0c0 1.1-1 2.1-2.1 2.1h-2.1c-1.1 0-2.1-.9-2.1-2.1v-2.1c0-1.1.9-2.1 2.1-2.1H51c1.1 0 2.1.9 2.1 2.1v2.1zM79.5 30.5c-.6-.5-1.6-.4-2.1.2l-.8 1c-.7-6.1-5.2-8.6-8.6-9.4l.8-.5c.7-.4.9-1.4.5-2.1s-1.4-.9-2.1-.5l-4 2.6c-.4.2-.6.6-.7 1s0 .8.3 1.2l3.3 4.2c.3.4.7.6 1.2.6.3 0 .7-.1.9-.3.7-.5.8-1.5.3-2.1l-.8-1.1c2.1.5 5.4 2.2 5.9 6.8l-.7-.8c-.6-.6-1.5-.6-2.1 0s-.6 1.5 0 2.1l3.3 3.4c.3.3.7.4 1.1.4h.1c.4 0 .8-.2 1.1-.5l3.4-4.2c.4-.5.3-1.5-.3-2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-1bhjfhoihde";
freezeTemplate(tmpl);
