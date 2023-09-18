import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./link.css";

import _implicitScopedStylesheets from "./link.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M5.15.006A5.074 5.074 0 00.078 5.08v53.841a5.072 5.072 0 005.072 5.073h45.775a5.074 5.074 0 005.074-5.073V20.316L37.096.006H5.15z" fill-rule="evenodd" clip-rule="evenodd" fill="#1B96FF"${3}/><path d="M28.25 35.611c-2.074-2.097-5.448-2.097-7.545 0l-3.055 3.055c-2.073 2.073-2.073 5.447 0 7.545a1.226 1.226 0 001.734 0 1.19 1.19 0 000-1.732 2.9 2.9 0 010-4.079l3.076-3.055a2.874 2.874 0 014.056 0 2.875 2.875 0 010 4.057l-1.458 1.482c.363.979.502 2.006.41 3.053l2.781-2.781c2.097-2.096 2.097-5.471.001-7.545zm-7.704 5.951a1.251 1.251 0 000 1.755 2.838 2.838 0 010 4.059l-3.055 3.053a2.874 2.874 0 01-4.058 0 2.875 2.875 0 010-4.057l1.459-1.459a7.036 7.036 0 01-.411-3.077l-2.802 2.803c-2.075 2.075-2.075 5.447 0 7.546 2.094 2.074 5.47 2.074 7.544 0l3.076-3.077c2.075-2.075 2.075-5.449 0-7.545a1.246 1.246 0 00-1.753-.001z" fill="#fff"${3}/><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#0B5CAB"${3}/><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z" fill="#AACBFF"${3}/></g></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 56 64",
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
tmpl.stylesheetToken = "lwc-49cs4s656u0";
freezeTemplate(tmpl);
