import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./html.css";

import _implicitScopedStylesheets from "./html.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M5.135.008A5.074 5.074 0 00.061 5.082v53.84a5.073 5.073 0 005.074 5.074H50.91a5.074 5.074 0 005.074-5.074V20.317L37.081.008H5.135z" fill-rule="evenodd" clip-rule="evenodd" fill="#FF5D2D"${3}/><path d="M18.942 50.841a.87.87 0 01-.336-.063l-7.58-3.38c-.483-.21-.798-.714-.798-1.28 0-.504.315-1.008.798-1.219l7.58-3.4a.89.89 0 011.218.84.89.89 0 01-.525.818l-7.034 3.002 7.034 2.982a.868.868 0 01.525.818c0 .546-.462.882-.882.882zm8.464-11.044l-4.43 13.291c-.126.398-.504.629-.903.629-.525 0-.924-.398-.924-.881a.75.75 0 01.063-.295l4.43-13.29a.934.934 0 01.903-.63c.525 0 .903.42.903.902l-.042.274zm10.184 7.6l-7.58 3.38a.886.886 0 01-1.218-.819c0-.357.189-.672.525-.818l7.034-2.982-7.034-3.002a.876.876 0 01-.546-.818c-.021-.547.441-.903.903-.903.105 0 .231.021.336.063l7.58 3.4c.483.211.798.715.798 1.219 0 .567-.315 1.071-.798 1.28z" fill="#fff"${3}/><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M55.976 20.352v1H43.177s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#D83A00"${3}/><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z" fill="#FEB9A5"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3qptaq5q6kr";
freezeTemplate(tmpl);
