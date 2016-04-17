/*This file include parts of code */



/*TO SET DEFAULT VALUES*/
function documentTitle(theTitle)
  theTitle  = theTitle || "Untitled Document";
}

/*===end set def values====*/

/*&& USING TEMPLATE*/
function isAdult(age) {
   return age && age > 17 ;
}
/*===end====*/

/*IF ELSE*/

/*
if (userName) {
  logIn (userName);
}
 else {
   signUp ();
}

INSTEAD OF UPPER CODE USE!!!*/  userName && logIn (userName) || signUp ();
/*===end====*/



/*&& USING*/
Instead of this:

var userID;
​if (userName && userName.loggedIn) {
  userID = userName.id;
}
​else {
  userID = null;
}
/*USE THIS:*/var userID = userName && userName.loggedIn && userName.id;



 /*IMMEDIATELY INVOKED FUNCTION EXPRESSION:*/

(showName = function (name) {

console.log(name || "No Name");

}) (); // No Name​
​
showName ("Rich"); // Rich​
showName (); // No Name

/*===end====*/
/*GENERATE RANDOM NUMBER FROM 1 TO N*/

var random = Math.floor(Math.random() * N + 1);

/*===end====*/

/*ADDING PRIVATE MEMBERS TO MODULE*/

CalcModule = (function(){
        var pub = {};
        var mem = new Array(); //private variable
        var storeInMemory = function(val) {  //private function
                            mem.push(val);
                    };
        pub.add = function(a, b) {
                     var result = a + b;
                     storeInMemory(result); //call to private function
                     return result;
                  };
 
         pub.sub = function(a, b) {
                     var result = a - b;
                     storeInMemory(result); //call to private function
                     return result;
                  };
 
         pub.retrieveFromMemory = function() {
                     return mem.pop();
                 };
 
               return pub;
})();
/*Usage:*/
CalcModule.add(2,10);
CalcModule.add(5,15);
console.log(CalcModule.retrieveFromMemory()); //outputs 20
console.log(CalcModule.retrieveFromMemory()); //outputs 12


/*===end====*/






/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
/*===end====*/
