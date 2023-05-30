export function markAccount(account) {
    const chunkedAccount = account.match(/(\d{3})(\d{6})(\d{2})/);
    if (chunkedAccount) {
      return `${chunkedAccount[1]}-${chunkedAccount[2]}-${chunkedAccount[3]}`;
    } else {
      return account;
    }
  }
  