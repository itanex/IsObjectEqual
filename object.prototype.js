/*!
* IsObject Primitive Object Definition v0.0.5
* <website>
*
* Distributed in whole under the terms of the MIT
*
* Copyright 2010, Bryan Wood
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* Released under the MIT, BSD, and GPL Licenses.
* Date: October 10, 2010
*/

/* Primitive Prototype of object */

var ObjectCompare = function (Obj1, Obj2, ValCompare) {
    ///	<summary>
    ///		1: ObjectCompare(Object1, Object2, ValueCompare) - Compares Two Objects and their contained values.
    ///		2: ObjectCompare(Object1, Object2) - Compare Two objects.
    ///	</summary>
    ///	<param name="Object1" type="object">
    ///		1: Object - Expected an Object to compare with Object2
    ///	</param>
    ///	<param name="Object2" type="object">
    ///		1: Object - Expected an Object to compare with Object1
    ///	</param>
    ///	<param name="ValueCompare" type="Boolean">
    ///		1: Boolean - Value to signify comparison of values between both objects. (optional -> Assumes false)
    ///	</param>
    ///	<returns type="Boolean" />

    //Assume that if no ValCompare is provided that we are only checking the object form and not including the values
    //If a non-boolean is provided then we force a false as well
    ValCompare = (typeof (ValCompare) === "boolean") ? ValCompare : false;

    //Test if both of the objects are of the same type
    //Objects should be of the same JavaScript Type
    if (typeof (Obj1) !== typeof (Obj2)) { return false; }
    
    //Test if both of the objects are null
    //Objects should be objects not nulls
    if (Obj1 === null || Obj2 === null) { return false; }

    //Test if both objects are JavaScript Objects
    //Objects should be JavaScript Objects that we can properly examine
    if (typeof (Obj1) === "object" && typeof (Obj2) === "object") {
        
        //Test to find if all items in Obj1 are in Obj2
        //Obj2 should have all the members of Obj1
        for (var Member in Obj1) {
            //Test if the member of Obj1 is in Obj2
            if (!Obj2.hasOwnProperty(Member)) { return false; }

            if (ValCompare) {
                //Test the current Obj1 Member's Value against that of the value of the same Member in Obj2
                if (Obj1[Member].valueOf() !== Obj2[Member].valueOf()) { return false; }
            }
        }

        //Test to find if all items in Obj2 are in Obj1
        //Obj1 should have all the members of Obj2
        for (var Member in Obj2) {
            //test if the member we have is in Obj1; return out with false if not
            if (!Obj1.hasOwnProperty(Member)) { return false; }

            //No need to check the values again since at this point we should have already checked them
        }
    }

    //Return true if execution can successfully get to this point
    return true;
};
