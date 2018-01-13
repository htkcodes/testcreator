//Textarea


function checkTextArea()
{
    if (!$.trim($("textarea").val())) {
        $("textarea").val("Lorem Ipsum");
        return true;
        }
        else
        return false;
}

console.log(checkTextArea());

function checkTextBox()
{
    let isWorking=false;
    $('input[type=text]').each(function(){
        if(!$.trim($(this).val())){
            $(this).val("Lorem Ipsum");
            isWorking=true;
        }
        else
        isWorking=false;
    });
return isWorking;
}

console.log(checkTextBox());

//Required 

if( $(this).prop('required'))
        {
            console.log($(this).val());
        }

//checkbox
function checkCheckBox()
{
   let isWorking=false;
    $('input[type=checkbox]').each(function () {

        if($(this).prop('disabled'))
        {
            $(this).prop('checked',false);
        }
        else
        {
            $(this).prop('checked',true);

            if($(this).prop('checked'))
            {
            isWorking=true;
            }
            else
            isWorking=false;
        }

        
     });
     return isWorking;
}

console.log(checkCheckBox());

function checkRadioButtons(){
    let isWorking=false;
    $('input[type=radio]').each(function () {

        if($(this).prop('disabled'))
        {
            $(this).prop('checked',false);
        }
        else
        {
            $(this).prop('checked',true);

            if($(this).prop('checked'))
            {
            isWorking=true;
            }
            else
            isWorking=false;
        }

        
     });
     return isWorking;
}

console.log(checkRadioButtons());

function checkButtons()
{
    let isWorking=false;
 $('button[type=submit]').each(function(){
    $(this).trigger('click');
    isWorking=true;
 })
 $('input[type=submit]').each(function(){
    $(this).trigger('click');
    isWorking=true;
})

return isWorking;
    
}

//console.log(checkButtons() + ' button');

function checkDatePicker(){
    let isWorking=false;
    $("input[type=date]").each(function(){
        var rn = new Date();
        var day = ("0" + rn.getDate()).slice(-2);
        var month = ("0" + (rn.getMonth() + 1)).slice(-2);
        var today = rn.getFullYear()+"-"+(month)+"-"+(day) ;
        $(this).val(today);
        isWorking=true;
    });

    return isWorking;
}

console.log(checkDatePicker());


    function urlExists(){
        $.ajax({
          type: 'GET',
          url: 'http://localhost/linkchecker.php?URL='+"http://gmail.com",
          success: function(){
        console.log('here');
          },
          error: function() {
              
            console.log('failed');
          }
        });
      }

console.log(urlExists());






$("form").submit(function (e) {
    console.log("submitted")
});