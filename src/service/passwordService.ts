export default function generatePass(passwordLength:number){
    let password: string = '';
    let characters: string = 'QWERTYUIOPASDFGHJKLÇZXCVBNMqwertyuiopasdfghjklçzxcvbnm@!#$%¨&*()_+=|<>,.-[]/?';

    for(let index = 0; index < passwordLength; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
        
    }

    return password;
}