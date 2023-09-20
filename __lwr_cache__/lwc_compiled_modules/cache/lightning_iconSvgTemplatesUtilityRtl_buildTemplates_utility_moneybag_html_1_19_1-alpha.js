import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./moneybag.css";

import _implicitScopedStylesheets from "./moneybag.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20.5 9.1c.2.6.8.9 1.4.9H30c.6 0 1.2-.3 1.4-.9l3.2-5.9c.2-.6-.2-1.2-.8-1.2H18.2c-.6 0-1 .6-.7 1.1l3 6zM30.7 14.7h-9.4C13.4 14.7 7 21.2 7 29.2v16c0 2.6 2.1 4.8 4.8 4.8h28.4c2.6 0 4.8-2.2 4.8-4.8v-16c0-8-6.5-14.5-14.3-14.5zm-2.3 27v2.7c0 .5-.5.8-1 .8h-3.2c-.5 0-.6-.3-.6-.8v-2.6c-2.4-.5-4.4-1.5-4.9-2-.6-.6-.8-1.1-.3-1.8l1-1.6c.2-.4.7-.6 1.2-.6.3 0 .6.1.8.2h.1c1.6 1 3 1.4 4 1.4 1.1 0 2-.6 2-1.2 0-.5-.3-1.3-3.3-2.3-2.7-1-6-2.6-6-6.3 0-2.2 1.4-4.7 5.4-5.5v-2.4c0-.5.2-.8.6-.8h3.2c.5 0 1 .3 1 .8V22c1.6.4 3.3 1.2 3.9 1.6.3.2.5.6.6 1 .1.4-.1.8-.3 1L31.2 27c-.3.4-.9.7-1.3.7-.2 0-.5-.1-.7-.2-1.6-.9-2.9-1.4-3.8-1.4-1.3 0-1.9.6-1.9 1 0 .6.3 1.2 3 2.2 3.3 1.1 7 2.9 7 6.7.1 2.6-2 4.9-5.1 5.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-quqc0ah6f7";
freezeTemplate(tmpl);