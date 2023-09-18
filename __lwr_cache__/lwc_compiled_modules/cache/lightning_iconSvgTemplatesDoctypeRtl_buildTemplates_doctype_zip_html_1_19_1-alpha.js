import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./zip.css";

import _implicitScopedStylesheets from "./zip.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M5.113-.026A5.074 5.074 0 00.039 5.048v53.841a5.073 5.073 0 005.074 5.074h45.773a5.074 5.074 0 005.074-5.074V20.284L37.059-.026H5.113z" fill-rule="evenodd" clip-rule="evenodd" fill="#747474"${3}/><path d="M18.438 53.906h-7.581c-.378 0-.756-.342-.756-.828 0-.18.054-.36.162-.504l6.68-9.345h-6.212c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h7.454c.378 0 .756.342.756.829 0 .18-.054.36-.162.504l-6.68 9.345h6.338c.36 0 .648.288.648.648.001.395-.287.683-.647.683zm4.012.108a.73.73 0 01-.738-.738V42.509c0-.396.324-.721.774-.721.396 0 .72.324.72.721v10.767a.735.735 0 01-.756.738zm8.839-4.879h-3.331v4.141a.734.734 0 01-.756.738.73.73 0 01-.738-.738V42.977c0-.594.486-1.081 1.081-1.081h3.745c2.413 0 3.763 1.657 3.763 3.619s-1.387 3.62-3.764 3.62zm-.18-5.906h-3.151v4.573h3.151c1.422 0 2.395-.936 2.395-2.287-.001-1.35-.973-2.286-2.395-2.286z" fill="#fff"${3}/><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#5C5C5C"${3}/><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z" fill="#C9C9C9"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-1j9l7qtqa29";
freezeTemplate(tmpl);
