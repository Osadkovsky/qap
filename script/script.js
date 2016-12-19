$(document).ready(function(){
    $('.checkbox__doc:button').toggle(function(){
        $('input:checkbox_doc11').attr('checked','checked');
        $(this).val('uncheck all')
    },function(){
        $('input:checkbox_doc11').removeAttr('checked');
        $(this).val('check all');        
    })
})
