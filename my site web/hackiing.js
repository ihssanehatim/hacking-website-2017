function verify(element1, element2)
// La fonction reçois en paramètre les 2 éléments
 {
  var passed=false
// On va donner à la variable passed la valeur false (fausse).
   if(element1.value!= element2.value) alert("please reset your password");
   else
           passed=true;
          return passed ;
 }