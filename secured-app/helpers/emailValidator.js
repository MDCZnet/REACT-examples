export function emailValidator(email) {
  const check = /\S+@\S+\.\S+/
  if (!email) return "Prosím zadejte e-mailovou adresu!"
  if (!check.test(email)) return 'Neplatný e-mail.  Prosím zadejte znovu!'
  return ''
}