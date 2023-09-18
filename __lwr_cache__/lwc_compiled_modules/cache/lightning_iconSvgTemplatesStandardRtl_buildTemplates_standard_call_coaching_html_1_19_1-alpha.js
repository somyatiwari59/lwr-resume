import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./call_coaching.css";

import _implicitScopedStylesheets from "./call_coaching.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M41.8 20c2.9 0 5.3 2.6 4.9 5.5l-.7 6.6c-.3 2.2-2 4-4.2 4.4l-6 .9c-.8.1-1.4.8-1.4 1.6v21.9c0 .8.6 1.5 1.4 1.7l6 .9c2.3.3 4 2.2 4.2 4.4l.8 6.6c.4 2.9-1.9 5.6-4.9 5.4h-6.4c-1.4 0-2.8-.5-3.7-1.6C24.6 70.4 21 59.9 21 49.9s3.7-20.5 10.7-28.3c.9-1 2.3-1.6 3.7-1.6zm18.5 12.9c1.1 0 1.9.8 1.9 1.9v30.8c0 1.1-.9 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9V34.8c0-1 .8-1.9 1.9-1.9zm-8.5 7.3c1.1 0 1.9.8 1.9 1.9v16.2c0 1-.9 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9V42.1c0-1 .8-1.9 1.9-1.9zm17.2 0c1.1 0 1.9.8 1.9 1.9v15.7c0 1-.9 1.8-1.9 1.8-1 0-1.9-.8-1.9-1.9V42.1c0-1 .8-1.9 1.9-1.9zm8.9 5.6c1.1 0 1.9.8 1.9 1.9v3.6c0 1.1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9v-3.6c0-1 .8-1.9 1.9-1.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7s5vqbo7ju1";
freezeTemplate(tmpl);
