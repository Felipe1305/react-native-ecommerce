import api from '../config/api.config'

interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}


export function signIn(creds, token): Promise<Response> {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({

                
                token: token,
                user: { 
                    name: 'creds',
                    email: "@@@@@",
                }
            });
        }, 2000);
    });
}