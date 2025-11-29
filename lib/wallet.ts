declare global {
  interface Window {
    aptos?: any;
    petra?: any;
    martian?: any;
    fewcha?: any;
  }
}

export function getAptosWallet() {
  if (typeof window !== "undefined") {
    if (window.petra) return window.petra
    if (window.aptos) return window.aptos
    if (window.martian) return window.martian
    if (window.fewcha) return window.fewcha
  }
  return null
}
