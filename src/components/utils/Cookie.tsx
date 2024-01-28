export function setCookie(expireTime: number, name: string, value: string): void {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + expireTime * 1000); // Convert seconds to milliseconds
  
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

//   setCookie(3600, "exampleCookie", "exampleValue");
  