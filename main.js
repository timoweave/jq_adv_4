$(document).ready(function() {
    $("#sorting_ninjas").children("li").each(function() { $(this).addClass("ui-state-default"); });
    $("#sorting_ninjas").sortable().disableSelection();
});
