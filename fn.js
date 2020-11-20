// caplock alert
function check_CapsLock(e)
{
    //so basic idea is to check if you are typing Uppercase letters and not holding shift button (and vice versa)
    keycode = e.keyCode?e.keyCode:e.which;
    shift = e.shiftKey?e.shiftKey:((keycode == 16)?true:false);
    if(((keycode >= 65 && keycode <= 90) && !shift)||
        ((keycode >= 97 && keycode <= 122) && shift))
    {
        document.getElementById('caps_lock').style.display = 'block';
    }
    else
    {
        document.getElementById('caps_lock').style.display = 'none';
    }
}


// check email form
function Checkemail(str){
    var Email=/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z0-9]{2,5})$/
    if(!document.getElementById(str).value.match(Email)){
    alert('Please check your Email !!');
    document.getElementById(str).focus();
    return false;
    }
    }

// protect enter
function handleEnter (field, event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode == 13) {
        var i;
        for (i = 0; i < field.form.elements.length; i++)
            if (field == field.form.elements[i])
                break;
        i = (i + 1) % field.form.elements.length;
        field.form.elements[i].focus();
        return false;
    } 
    else
    return true;
}      

