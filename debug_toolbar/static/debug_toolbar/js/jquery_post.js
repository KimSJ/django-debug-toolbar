var djdt = {jQuery: jQuery.noConflict(true)};
if (typeof window.define is "function" && window.define.amd) {
    window.define.amd = _djdt_define_amd_backup;
}
