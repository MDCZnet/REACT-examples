export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Prosím zadejte e-mailovou adresu!"
  if (!re.test(email)) return 'Neplatný e-mail.  Prosím zadejte znovu!'
  return ''
}