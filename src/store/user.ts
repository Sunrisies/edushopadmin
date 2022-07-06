import {defineStore} from 'pinia';

export interface IUserState {
    token: string;
    username: string;
    avatar: string;
    permissions: string[];
    info: Object;
}

export const useUserStore = defineStore({
    id: 'app-user',
    state: ():IUserState => ({
        token: localStorage.getItem('token') || '',
        username:'',
        avatar:'',
        permissions:[],
        info:{},
    }),
    getters: {
        getToken(): string {
            return this.token;
        },
        getAvatar(): string {
            return this.avatar;
        },
        getUserName(): string {
            return this.username;
        },
        getPermissions(): string[] {
            return this.permissions;
        },
        getUserInfo(): Object {
            return this.info;
        }
    },
    actions: {
        setToken(token: string) {
            localStorage.setItem('token',token);
            this.token = token;
        },
        setAvatar(avatar: string) {
            this.avatar = avatar;
        },
        setUserInfo(info:Object) {
            this.info = info;
        },
        setUserName(username:string) {
            this.username = username;
        },
        setPermissions(permissions:string[]) {
            this.permissions = permissions;
        },
    }
})

