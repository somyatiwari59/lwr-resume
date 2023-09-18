import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom78.css";

import _implicitScopedStylesheets from "./new_custom78.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.6 9.5L34.2 2.3c-.6-.3-1.4-.3-2.2 0L18.8 8.9 5.4 2.3c-.7-.4-1.6-.4-2.3 0C2.4 2.8 2 3.6 2 4.4v36c0 .9.5 1.8 1.4 2.2l14.4 7.2c.6.3 1.4.3 2.2 0l13.3-6.6 13.4 6.6c.3.2.7.2 1 .2.4 0 .9-.2 1.3-.3.7-.5 1.1-1.3 1.1-2.1v-36c-.1-.9-.6-1.7-1.5-2.1zm-3.4 4.6v19c0 1.1-1.1 1.9-2.2 1.5-3.7-1.4-.8-7.6-3.4-11-2.5-3.1-5.8.1-8.8-4.8-3-4.7 1-8.1 4.6-9.9.5-.2 1-.2 1.4 0l7.4 3.8c.7.2 1 .8 1 1.4zM24.8 41.9c-.6.3-1.3.2-1.8-.2-1-.9-1.8-2.3-1.8-3.7 0-2.4-4-1.6-4-6.4 0-3.8-4.7-5-8.6-4.6-1 .1-1.8-.6-1.8-1.6V10.9c0-1.2 1.3-2 2.3-1.4l8.6 4.3c.1 0 .2.1.2.1l.3.2c3.6 2.1 2.9 3.8 1.4 6.4-1.7 2.9-2.4 0-4.8-.8s-4.8.8-4 2.4 3.2 0 4.8 1.6c1.6 1.6 1.6 4 6.4 2.4 4.8-1.6 5.6-.8 7.2.8 1.6 1.6 2.4 4.8 0 7.2-1.4 1.4-2 4.3-2.6 6.4-.2.4-.4.8-.8 1l-1 .4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2tt1qtm2cla";
freezeTemplate(tmpl);
