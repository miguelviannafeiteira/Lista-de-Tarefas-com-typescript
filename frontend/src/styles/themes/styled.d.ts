import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme{
    title: string,

    colors: {
      primary: string,
      secondary: string,
      background: string,
      text:string,
      hover:string
    }
    images: {
    backgroundImage: string
    }
  }
}
