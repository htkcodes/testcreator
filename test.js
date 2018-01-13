//Textbox
if (!$.trim($("textarea").val())) {
$("textarea").val("hmm");
}

//checkbox
$('input[type=checkbox]').each(function () {
    $(this).prop('checked',true);
    console.log("checked");
    $(this).prop('checked',false);
    console.log("unchecked");
});

$('input[type=radio]').each(function(){
    $(this).prop('checked',true);
    console.log("checked");
    $(this).prop('checked',false);
    console.log("unchecked");
})
