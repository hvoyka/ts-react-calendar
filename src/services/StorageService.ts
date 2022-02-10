export class StorageService {
  static getItem(key: string) {
    const item = localStorage.getItem(key);
    try {
      if (item) return JSON.parse(item);
    } catch (error) {
      return item;
    }
  }

  static setItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
