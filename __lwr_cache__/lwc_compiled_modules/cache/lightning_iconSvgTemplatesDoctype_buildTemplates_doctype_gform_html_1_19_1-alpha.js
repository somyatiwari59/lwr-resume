import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gform.css";

import _implicitScopedStylesheets from "./gform.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#5A1BA9" d="M5.113-.026A5.074 5.074 0 00.039 5.048v53.841a5.073 5.073 0 005.074 5.074h45.773a5.074 5.074 0 005.074-5.074V20.284L37.059-.026H5.113z"${3}/><path fill="#300B60" d="M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z"${3}/><path fill="#AD7BEE" d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z"${3}/><path fill="#FFF" d="M12.739 39.41c0-.4-.3-.7-.7-.7h-1.3c-.4 0-.7.3-.7.7v1.3c0 .4.3.7.7.7h1.3c.4 0 .7-.3.7-.7v-1.3zm18.8 0c0-.4-.3-.7-.7-.7h-15.7c-.4 0-.7.3-.7.7v1.3c0 .4.3.7.7.7h15.7c.4 0 .7-.3.7-.7v-1.3zm-18.8 6.3c0-.4-.3-.7-.7-.7h-1.3c-.4 0-.7.3-.7.7v1.3c0 .4.3.7.7.7h1.3c.4 0 .7-.3.7-.7v-1.3zm18.8 0c0-.4-.4-.7-.8-.7h-15.5c-.4 0-.8.3-.8.7v1.3c0 .4.4.7.8.7h15.5c.4 0 .8-.3.8-.7v-1.3zm-18.8 6.2c0-.4-.3-.7-.7-.7h-1.3c-.4 0-.7.3-.7.7v1.3c0 .4.3.7.7.7h1.3c.4 0 .7-.3.7-.7v-1.3zm18.8 0c0-.4-.3-.7-.7-.7h-15.7c-.4 0-.7.3-.7.7v1.3c0 .4.3.7.7.7h15.7c.4 0 .7-.3.7-.7v-1.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5c51gg31ce3";
freezeTemplate(tmpl);
