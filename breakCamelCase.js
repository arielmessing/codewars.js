export function solution(string) {
    return string.replace(/[A-Z]/g, ' $&');
}