import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./rtf.css";

import _implicitScopedStylesheets from "./rtf.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M5.113.006A5.074 5.074 0 00.039 5.08v53.841a5.073 5.073 0 005.074 5.074h45.774a5.074 5.074 0 005.074-5.074V20.316L37.058.006H5.113z" fill-rule="evenodd" clip-rule="evenodd" fill="#1B96FF"${3}/><path d="M15.611 48.825l2.575 3.907a.756.756 0 01.108.378c0 .36-.306.72-.738.72a.699.699 0 01-.594-.324l-2.935-4.555h-2.395v4.141a.734.734 0 01-.756.738.73.73 0 01-.738-.738V42.793c0-.594.486-1.081 1.081-1.081h3.745c2.197 0 3.763 1.405 3.763 3.619 0 2.161-1.477 3.35-3.116 3.494zm-3.979-5.78v4.591h3.151c1.422 0 2.395-.954 2.395-2.305 0-1.35-.972-2.287-2.395-2.287h-3.151zm17.463 0h-3.277v10.047a.734.734 0 01-.756.738.73.73 0 01-.738-.738V43.045h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.031c.36 0 .648.288.648.685a.647.647 0 01-.649.647zm10.295 0h-5.833v3.871h5.708c.36 0 .648.288.648.685 0 .36-.288.648-.648.648h-5.708v4.843a.734.734 0 01-.756.738.73.73 0 01-.738-.738V42.793c0-.594.486-1.081 1.081-1.081h6.248c.36 0 .648.288.648.685a.648.648 0 01-.65.648z" fill="#fff"${3}/><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#0B5CAB"${3}/><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z" fill="#AACBFF"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-7undo7bttqb";
freezeTemplate(tmpl);
