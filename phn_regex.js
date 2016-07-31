/*
 * Developed By Tanvir Chahal
 */
function phn_regex(str){
    /*
     * @param {String} str
     * @return {Bool} result
     */
    
    result = /[^+0-9\s\-()]/.test(str);
    
    //True if Failure 
    alert(result);
}