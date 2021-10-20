import {
    action, makeObservable, observable, runInAction
} from 'mobx';
import { Alert } from 'react-native';
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
            setAuthData: action.bound,
            setPushAuthButton: action.bound,
            setLogout: action.bound,
        });
    }

    setAuthData(data: AuthData) { this.authData = data };

    async setPushAuthButton(body: Body) {
        await service.getAuthData(body)
            .then((data) => {
                this.setAuthTrue()
                this.setAuthData(data)
                useAsyncStorage('token').setItem(data.idToken)
            })
            .catch((e) => {
                console.log(e)
                Alert.alert("Неверный Email или пароль")
            });
    };

    setLogout() {
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
    };
    setAuthTrue() {
        runInAction(() => {
            this.auth = true
        })

    };
    setAuthFalse() {
        runInAction(() => {
            this.auth = false
        })
    };
};

export default new authStore();