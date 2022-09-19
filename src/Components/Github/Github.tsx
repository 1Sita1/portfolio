type props = {
    link: string
} 

function Github({ link }: props) {
  return (
    <a href={link} target="_blank" className="github-link">
        Github 
    </a>
  )
}

export default Github