class LocalStorage {
    localStorage:any = window.localStorage;

    constructor () {}

    public getItem(key: string): string {
        return this.localStorage.getItem(key);
    }

    public setItem(key: string, value: string): void {
        this.localStorage.setItem(key, value);
    }
}

export default LocalStorage;