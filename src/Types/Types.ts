export type Technology = {
    img: string
    name: string
    origin: string
}

export type Project = {
    header: string
    img: string
    body: string
    source: string
    link: string
    technologies: Technology[]
}