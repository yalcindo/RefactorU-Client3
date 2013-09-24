// ***Experimentation trying to use loops
var questions=[" Enter Your Phone Number with Dashes:","Birth Date format xx/xx/xx:","Postal Code:","State Abbrv:","Married"];


for(var i=0;i<questions.length;i++)
{
   
   // --------------Phone number info------------------------
   if (i===0)
   {
   	    var answer=prompt(questions[i]);
         var correctAn= answer.charAt(3)=== "-" && answer.charAt(7) === "-";

        if(correctAn)
        {
     	   alert("True");
        }
        else
        {
     	    while(!correctAn)
     	    {
         		  alert("False");
         	    var answer=prompt(questions[i]);
             	var correctAn= answer.charAt(3)=== "-" && answer.charAt(7) === "-";

          		if(correctAn)
              	{
     	      			alert("True");
             		}
          }
        }
    }

 // -------------Birth date----------------------------
    if (i===1)
   {
   	    var answer=prompt(questions[i]);
        var correctAn= answer.charAt(2)=== "/" && answer.charAt(5) === "/";

        if(correctAn)
        {
     	    alert("True");
        }
         else
         {
     	     while(!correctAn)
     	     {
         		  alert("False");
         	    var answer=prompt(questions[i]);
             	var correctAn= answer.charAt(2)=== "/" && answer.charAt(5) === "/";

          		if(correctAn)
              {
     	      		alert("True");
             	}
            }
          }
    }

// --------------------Postal Code------------

if (i===2)
   {
   	    var answer=prompt(questions[i]);
        var correctAn= answer.length===5 || (answer.length ===10 && answer.charAt(5)==="-");

        if(correctAn)
       {
     	    alert("True");
       }
         else
         {
       	     while(!correctAn)
       	    {
       		     alert("False");
       	       var answer=prompt(questions[i]);
           	   var correctAn= answer.length===5 || (answer.length ===10 && answer.charAt(5)==="-");

            		if(correctAn)
                {
       	      	 alert("True");
               	}
            }
          }
    }

   // -------------------- State Abbrevetion ------------

   if (i===3)
   {
   	      var answer=prompt(questions[i]);
          var correctAn= answer.length===2 && answer === answer.toUpperCase();

        if(correctAn)
        {
     	    alert("True");
        }  
        else
        {
     	     while(!correctAn)
     	     {
     		     alert("False");
     	       var answer=prompt(questions[i]);
         	   var correctAn= answer.length===2 && answer === answer.toUpperCase();

          		if(correctAn)
              {
     	      			 alert("True");
             	}
            }
        }
   }

     //-------------------- MArried ------------
   if (i===4)
   {
   	     var answer=prompt(questions[i]);
         var correctAn= answer.toLowerCase()==="yes" || answer.toUpperCase() ==="no";

        if(correctAn)
        {
     	    alert("Cool!");
         }
         else
         {
     	      while(!correctAn)
     	      {
     		    alert("Enter yes or No");
     	      var answer=prompt(questions[i]);
         	  var correctAn= answer.toLowerCase()==="yes" || answer.toUpperCase() ==="no";

          		if(correctAn)
              {
     	      		alert("Cool!");
             	}
            }
          }
    }
         
 // ---------------------------Playing around----------------------------

}











 

