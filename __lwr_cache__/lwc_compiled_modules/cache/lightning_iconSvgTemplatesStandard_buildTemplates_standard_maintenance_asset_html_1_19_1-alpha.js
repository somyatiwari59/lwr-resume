import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./maintenance_asset.css";

import _implicitScopedStylesheets from "./maintenance_asset.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46.5 30.5c.2.5.6.8 1.1.8h27.5c1.3 0 2.7.3 3.9.8.5.3 1.1-.1 1.1-.8.1-2.8-2.1-5-4.9-5.1H45c-.3 0-.6.2-.6.5 0 .1 0 .3.1.4l2 3.4z"${3}/><path d="M75.1 36.4H46.7c-1.8 0-3.4-1-4.4-2.5l-4.4-7.6c-.8-1.6-2.5-2.6-4.3-2.6h-8.5c-2.8 0-5 2.2-5 5v45.9c-.1 2.8 2.1 5 4.9 5.1h50.1c2.8 0 5-2.2 5-5V41.5c.1-2.8-2.1-5-4.9-5.1h-.1zM62 69.7c-1.1 1.2-2.9 1.2-4.1.1l-.1-.1-9.9-9.9c-.6.3-1.3.4-2 .5-4.2.5-8-2.6-8.5-6.8v-.8c0-.7.1-1.5.3-2.2.1-.2.3-.4.6-.3.1 0 .1 0 .1.1l4.3 4.3c.3.3.9.3 1.2 0l3-3c.3-.3.3-.9 0-1.2l-4.3-4.3c-.2-.2-.1-.5.1-.6l.1-.1c.7-.2 1.5-.3 2.2-.3 4.2 0 7.6 3.4 7.6 7.7v.8c-.1.7-.3 1.3-.5 2l9.9 9.9c1.3 1.1 1.5 2.9.4 4.2-.2 0-.2.1-.4 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1s5k4i28icp";
freezeTemplate(tmpl);
