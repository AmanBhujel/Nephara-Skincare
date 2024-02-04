export function setCookie(expireTime: number, name: string, value: string): void {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + expireTime * 1000); // Convert seconds to milliseconds

  const expires = "expires=" + expirationDate.toUTCString();
  const sameSite = "SameSite=None; Secure"; // Add SameSite attribute

  document.cookie = `${name}=${value}; ${expires}; path=/; ${sameSite}`;
}


//   setCookie(3600, "exampleCookie", "exampleValue");
  