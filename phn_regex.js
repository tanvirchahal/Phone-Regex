/*
 * Developed By Tanvir Chahal
 */
function phn_regex(str){
    /*
     * @param {String} str
     * @return {Bool} result
     */
    
    result = /^[+0-9\s\-()]{6,16}$/.test(str);
    
    //False if Failure 
    alert(result);
}