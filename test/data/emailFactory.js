
class EmailFactory {


    generateRandomString(){
        return Math.random().toString(36).substring(7);;
    }

    generateEmail(generatedDomain='@generatedEmail.com'){
        return this.generateRandomString()+generatedDomain; 
    }

    generatePass(diff=null){
        if(diff==null){
            return "123aBc";
        } else {
            return "123ABC"+diff;
        }
    }

    checkGen(email,gEmail,flag=false){
        const pattern = '^\w+@\w+.com$';
    if(!flag){
    
        if((gEmail != null || gEmail != '') && gEmail.match(pattern)!=null){
            email.addValue(gEmail);
        } else {
            browser.pause(3000);
            email.addValue(gEmail);
        }
    } else {
        browser.pause(3000);
        email.addValue(gEmail);
    }
    

}
}

module.exports = new EmailFactory();