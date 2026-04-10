import { ref, Ref } from 'vue'

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
function login() {
    authUser.value = {
        name: 'Test',
    };
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