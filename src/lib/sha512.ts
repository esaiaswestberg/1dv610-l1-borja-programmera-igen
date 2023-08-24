// Credit: https://stackoverflow.com/a/55926440
const sha512 = async (str: string) => {
  const hash = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export default sha512
