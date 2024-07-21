const form = document.querySelector("form")

form.addEventListener("submit",(e)=>
{
   e.priventDefault()
   const username = form.username.value
   const password = form.password.value


   const authentication = authentication(username,password)

   if(authentication)
   {
    alert("correct")
   }
   else
   {
    alert("wrong")
   }

})

// function for checking username and password

function authentication(username,password)
{
    if(username == "admin" && password == "1234567")
    {
        return true
    }    
    else
    {
        return false
    }
}