import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./exe.css";

import _implicitScopedStylesheets from "./exe.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M5.112.025A5.074 5.074 0 00.039 5.099V58.94a5.073 5.073 0 005.073 5.074h45.774a5.074 5.074 0 005.074-5.074V20.335L37.058.025H5.112z" fill-rule="evenodd" clip-rule="evenodd" fill="#747474"${3}/><path d="M17.455 53.919h-6.247a1.084 1.084 0 01-1.081-1.081V42.99c0-.594.486-1.08 1.081-1.08h6.247c.361 0 .648.288.648.684 0 .36-.287.648-.648.648h-5.833v3.871h5.708c.359 0 .648.288.648.685 0 .36-.289.648-.648.648h-5.708v4.141h5.833c.361 0 .648.288.648.648.001.396-.287.684-.648.684zm12.098.126a.643.643 0 01-.541-.27l-3.727-4.97-3.746 4.97a.64.64 0 01-.539.27.712.712 0 01-.721-.72c0-.144.036-.306.145-.432l3.889-5.131-3.619-4.825a.725.725 0 01-.145-.415c0-.342.289-.72.721-.72a.75.75 0 01.576.288l3.439 4.627 3.438-4.646a.641.641 0 01.54-.27c.379 0 .738.306.738.72a.694.694 0 01-.126.415l-3.618 4.808 3.889 5.149a.7.7 0 01.126.414c0 .396-.324.738-.719.738zm10.78-.126h-6.247a1.084 1.084 0 01-1.081-1.081V42.99c0-.594.486-1.08 1.081-1.08h6.247c.36 0 .648.288.648.684 0 .36-.288.648-.648.648H34.5v3.871h5.707c.36 0 .648.288.648.685 0 .36-.288.648-.648.648H34.5v4.141h5.833c.36 0 .648.288.648.648 0 .396-.288.684-.648.684z" fill="#fff"${3}/><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M55.961 20.377v1H43.162s-6.312-1.26-6.129-6.708c0 0 .208 5.708 6.004 5.708h12.924z" fill="#5C5C5C"${3}/><path d="M37.059.025v14.561c0 1.656 1.104 5.792 6.104 5.792h12.799L37.059.025z" fill="#C9C9C9"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-datrsfa41c";
freezeTemplate(tmpl);
