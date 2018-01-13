//Textarea


function checkTextArea()
{
    isWorking=false;
    if (!$.trim($("textarea").val())) {
        $("textarea").val("Lorem Ipsum");
      isWorking=true;
        }
        else
        isWorking=false;

return isWorking;
}


function checkTextBox()
{
    let isWorking=false;
    let failedRequired=[];
    let pass=[];
    $('input[type=text]').each(function(){
      
       if($(this).prop('required'))
       {
        if(!$.trim($(this).val()))
        {
            failedRequired.push($(this).prop('name'));
        }
        else
        {
            pass.push($(this).prop('name'));
            isWorking=true;
        }
       
       }
       else{

        if(!$.trim($(this).val())){
            $(this).val('Lorem Ipsum');
            $(this).val('');
        pass.push($(this).prop('name'));
           if(failedRequired.length===0)
           {
            isWorking=true;
           }
           else
           isWorking=false;
        }
        else
        isWorking=false;
       }

    });
    //console.log(failedRequired);
//console.log(pass);
if(isWorking===false)
{
    for(i=0;i<failedRequired.length;i++)
    {
        $("input[name="+failedRequired[i]).css("background-color","yellow")
    }
  // $("input[name='First Name']").css("background-color","yellow");

}
else
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




    function urlExists(){
        $.ajax({
          type: 'GET',
          url: 'http://localhost/linkchecker.php',
          success: function(){
        console.log('here');
          },
          error: function() {
              
            console.log('failed');
          }
        });
      }

//console.log(urlExists());

function UrlExists(url, cb){
    jQuery.ajax({
        url:      url,
        dataType: 'text',
        type:     'GET',
        complete:  function(xhr){
            if(typeof cb === 'function')
               cb.apply(this, [xhr.status]);
        }
    });
}

UrlExists('http://localhost/index.php', function(status) {
    if(status === 200) {
     console.log('ok')
    } else if(status === 404) {
     console.log('boo')
    }else{
     console.log('nopee')
    }
});

$("form").submit(function (e) {
    console.log("submitted")
});

function hasLinkChanged()
{
    let intialPage=window.location.href;

    return intialPage;
}

console.log(hasLinkChanged());
    