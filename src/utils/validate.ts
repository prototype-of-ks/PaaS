export function validateVPhone(value: string) {
    const pattern = new RegExp(/^[1][3, 5, 7, 8, 9][0-9]{9}$/)
    return pattern.test(value)
}
