
var names=["rahul","TANAI","piyush",
           "jhonny","jhons","amrit",
           "stifen","rakul","harpit",
           "Falkner","Jeffery","jayant",
           "jackov",];
for(var i=0;i<names.length;i++)
{
  var copy=names[i];
  for(var j=0;j<copy.length;j++)
  {
    if(copy[0]=='j' || copy[0]=='J')
    {
   console.log("Good Bye!" + names[i]);
      break;
    } 
    
    else{
      console.log("hello! " + names[i]);
      break;
    }
  }
}
 
