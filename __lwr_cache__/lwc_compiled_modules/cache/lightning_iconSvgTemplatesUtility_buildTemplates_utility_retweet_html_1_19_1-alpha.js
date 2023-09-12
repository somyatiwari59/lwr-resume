import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./retweet.css";

import _implicitScopedStylesheets from "./retweet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M51.6 28.8l-2.1-2.1c-.6-.6-1.5-.6-2.1 0l-2.7 2.7c-.7.7-1.7.2-1.7-.7V12c0-2.2-1.8-4-4-4H24.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5.7 1.5 1.5v13.2c0 .9-1.1 1.3-1.8.7l-2.6-2.6c-.6-.6-1.6-.6-2.1 0L28.4 29c-.6.6-.6 1.5 0 2.1l10.5 10.5c.6.6 1.5.6 2.1 0L51.6 31c.5-.6.5-1.6 0-2.2zM27.5 38h-11c-.8 0-1.5-.7-1.5-1.5V23.3c0-.9 1.1-1.3 1.8-.7l2.6 2.6c.6.6 1.6.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1L13.2 10.4c-.6-.6-1.5-.6-2.1 0L.4 21c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0l2.7-2.7c.6-.6 1.7-.2 1.7.7V40c0 2.2 1.9 4 4.1 4h14.5c.8 0 1.5-.7 1.5-1.5v-3c-.1-.8-.8-1.5-1.6-1.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-33hbclomjee";
freezeTemplate(tmpl);
