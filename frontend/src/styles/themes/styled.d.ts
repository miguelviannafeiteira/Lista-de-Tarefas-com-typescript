import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme{
    title: string,

    colors: {
      primary: string,
      secondary: string,
      background: string,
      text:string,
      hover:string,
      footer: string,
      active: string,
      askComplete: string,
      borderColor: string,
      title:string,
    }

  }
}
