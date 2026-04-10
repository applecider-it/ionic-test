/**
 * APIのhttp関連
 */

/** JSON通信用のヘッダー */
export function jsonRequestHeaders() {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  return headers;
}
