import { ref, Ref } from 'vue'

import { jsonRequestHeaders, apiUrl } from '@/services/api/http';

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

    const url = apiUrl('/login');

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
        console.log('error', error);
        response = error.response;
        console.log('response', response);
        if (!response) return 500;
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