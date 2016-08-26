function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (run) {
buf.push("<div class=\"test\"><h3>jade runtime " + (jade.escape((jade_interp = run) == null ? '' : jade_interp)) + "</h3><p>this is for jade pre-compile</p></div>");}.call(this,"run" in locals_for_with?locals_for_with.run:typeof run!=="undefined"?run:undefined));;return buf.join("");
}