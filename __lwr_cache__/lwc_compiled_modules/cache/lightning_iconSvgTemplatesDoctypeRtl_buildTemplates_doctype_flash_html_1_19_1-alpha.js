import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./flash.css";

import _implicitScopedStylesheets from "./flash.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M5.112.009A5.074 5.074 0 00.039 5.083v53.841a5.073 5.073 0 005.073 5.074h45.775a5.074 5.074 0 005.074-5.074V20.319L37.057.009H5.112z" fill-rule="evenodd" clip-rule="evenodd" fill="#EA001E"${3}/><path d="M17.466 43.105h-5.833v3.871h5.708c.36 0 .648.288.648.685 0 .36-.288.648-.648.648h-5.708v4.843a.734.734 0 01-.756.738.73.73 0 01-.738-.738V42.854c0-.594.486-1.081 1.081-1.081h6.248c.36 0 .648.288.648.685a.648.648 0 01-.65.647zm9.558 10.678h-5.456a1.085 1.085 0 01-1.081-1.081V42.385c0-.396.324-.72.774-.72.396 0 .72.324.72.72V52.45h5.042c.36 0 .648.288.648.648.001.397-.287.685-.647.685zm12.222.108a.776.776 0 01-.72-.486l-.9-2.287h-5.978l-.9 2.287a.776.776 0 01-.72.486.804.804 0 01-.811-.792c0-.09.018-.198.054-.288l4.141-10.335a1.304 1.304 0 011.225-.811c.522 0 .99.324 1.188.811l4.177 10.335c.036.09.054.198.054.288 0 .359-.324.792-.81.792zm-4.609-10.569l-2.557 6.464h5.095l-2.538-6.464z" fill="#fff"${3}/><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M55.961 20.346v1H43.162s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#BA0517"${3}/><path d="M37.059-.006v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.059-.006z" fill="#FE8F7D"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-2uog3m4cao9";
freezeTemplate(tmpl);