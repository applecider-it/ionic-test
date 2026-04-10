import { ref, Ref } from 'vue'

import { jsonRequestHeaders } from '@/services/api/http';

import axios from 'axios';

let authUser: Ref<any>;

/** 認証のセットアップ */
function setupAuth() {
    authUser = ref(null);
}

/** 認証ユーザーを返す */
function user() {
    return authUser.value;
}

/** ログイン */
async function login(email: string, password: string) {
    const headers = jsonRequestHeaders();

    const data: any = { email, password };
    console.log(data);

    const url = 'http://127.0.0.1:3000/login';

    let response = null;

    try {
        response = await axios.post(url, data, {
            headers: headers,
        });

        authUser.value = {
            user: {
                email
            },
            token: response.data.token,
        };

        console.log(authUser.value);
    } catch (error: any) {
        console.error('error', error);
        response = error.response;
        if (error.response.status !== 401) {
            return
        }
    }

    console.log('response.data', response!.data);

    return response.status;
}

/** ログアウト */
function logout() {
    authUser.value = null;
}

export const auth = {
    setupAuth,
    user,
    login,
    logout,
}