class SessionStorage {
    sessionStorage:any = window.sessionStorage;

    constructor () {}

    public getItem(key: string): string {
        return this.sessionStorage.getItem(key);
    }

    public setItem(key: string, value: string):void {
        return this.sessionStorage.setItem(key, value);
    }
}

export default SessionStorage;
