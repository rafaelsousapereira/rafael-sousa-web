type MetadataType = {
  person: {
    name: string
    sirName: string
    position: string
    image: string
  },
  description: {
    greeting: string
  },
  socialMedia: {
    url: {
      linkedin: string,
      github: string
    }
  }
}

export const metadata: MetadataType = {
  person: {
    name: 'Rafael',
    sirName: 'Sousa Pereira',
    position: 'Desenvolvedor Web Full Stack',
    image: './.github/avatar.png'
  },
  description: {
    greeting: 'Bem-vindos ao meu portfólio!'
  },
  socialMedia: {
    url: {
      linkedin: 'https://www.linkedin.com/in/rafael-sousa-pereira-/',
      github: 'https://github.com/rafaelsousapereira/'
    }
  }
}