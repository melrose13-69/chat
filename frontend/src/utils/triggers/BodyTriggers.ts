export class BodyLock {

  public static trigger (v: boolean) {
    if (v) {
      document.querySelector('.wrapper')?.classList.add('lock')
    } else {
      document.querySelector('.wrapper')?.classList.remove('lock')
    }
  }
}

export class BodyTheme {

  public static BodyClassTrigger (isDark: boolean) {

    if (isDark) {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    }

    if (!isDark) {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }
  }
}
