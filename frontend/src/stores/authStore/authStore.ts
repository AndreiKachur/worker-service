import {
    action, makeObservable, observable,
} from 'mobx';
import { Alert} from 'react-native';
import { useAsyncStorage } from '@react-native-community/async-storage'

import service from './authStore.service';

type AuthData = {
    displayName: string;
    email: string;
    expiresIn: string;
    idToken: string;
    kind: string;
    localId: string;
    refreshToken: string;
    registered: boolean;
};

type Body = {
    email: string;
    password: string;
    returnSecureToken: boolean;
};

class authStore {
    auth: boolean = false;
    loader: boolean = false;
    emailValue: string = 'test@mail.ru';
    passwordValue: string = '123456';
    authData: AuthData = {
        displayName: '',
        email: '',
        expiresIn: '',
        idToken: '',
        kind: '',
        localId: '',
        refreshToken: '',
        registered: false,
    };
    

    constructor() {
        makeObservable(this, {
            auth: observable,
            loader: observable,
            emailValue: observable,
            passwordValue: observable,
            setAuthData: action.bound,
            setEmailValue: action.bound,
            setPasswordValue: action.bound,
            setPushAuthButton: action.bound,
            setLogout: action.bound,
        });
    }

    setAuthData(data: AuthData) { this.authData = data };

    setEmailValue(e: React.ChangeEvent<HTMLInputElement>) {
        this.emailValue = e.target.value
    };
    setPasswordValue(e: React.ChangeEvent<HTMLInputElement>) {
        this.passwordValue = e.target.value
    };
    setPushAuthButton() {
        const body: Body = {
            email: this.emailValue,
            password: this.passwordValue,
            returnSecureToken: true,
        };

        service.getAuthData(body)
            .then((data) => {
                this.auth = true
                this.setAuthData(data)
                useAsyncStorage('token').setItem( data.idToken )
            })
            .catch((e) => { 
                console.log(e)
                Alert.alert("Неверный Email или пароль") 
            });
    };
    setLogout() {
        this.emailValue = ''
        this.passwordValue = ''
        this.authData = {
            displayName: '',
            email: '',
            expiresIn: '',
            idToken: '',
            kind: '',
            localId: '',
            refreshToken: '',
            registered: false,
        }
        this.setAuthFalse()
    }
    setAuthFalse() {
        this.auth = false
    }
}

export default new authStore();