import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./engage.css";

import _implicitScopedStylesheets from "./engage.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M26.5 4.25c12.801 0 23.25 9.388 23.25 21.068 0 11.68-10.449 21.069-23.25 21.069-1.662 0-3.303-.158-4.9-.469l-.487-.101-.143.076c-2.032 1.04-5.305 1.882-9.913 2.597l-.517.08-1.128.162c-1.725.25-2.714-1.901-1.403-3.049 1.315-1.15 2.314-2.66 2.998-4.555l.025-.077-.317-.26c-4.595-3.848-7.338-9.241-7.46-15.066l-.005-.407C3.25 13.638 13.699 4.25 26.5 4.25zm7 26.75h-14a2 2 0 100 4h14a2 2 0 100-4zm4-7.5h-22a2 2 0 100 4h22a2 2 0 100-4zm-4-7.5h-14a2 2 0 100 4h14a2 2 0 100-4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7u7319s3f5q";
freezeTemplate(tmpl);
