/* eslint-disable import/no-anonymous-default-export */
const prefix = "@reserve.io:";

function set(key: string, value: string): void {
  localStorage.setItem(`${prefix}${key}`, value);
}

function get(key: string): string | null {
  const item = localStorage.getItem(`${prefix}${key}`);

  return item ? item : null;
}

function remove(key: string): void {
  localStorage.removeItem(`${prefix}${key}`);
}

export default { set, get, remove };
