import { toast } from 'react-toastify'
import "./_contact.scss"

const Contact: React.FC = () => {

    return (
        <section className="contact central-scope section">
            <h3 className="z20">Contact Me</h3>
            <div className="contacts-wrapper">
                <a 
                    className="contact-block z20" 
                    data-tip={"Click to copy email"} 
                    onClick={() => {
                        navigator.clipboard.writeText("arsenii.alkhimenko@gmail.com")
                        toast.success("Copied to clipboard!")
                    }}
                >
                    <img src="/Img/Contacts/gmail.png" alt="Gmail" />
                    <span>Email</span>
                </a>
                <a 
                    target="_blank"
                    href="https://github.com/1Sita1"
                    className="contact-block z20" 
                    data-tip={"Github"} 
                >
                    <img src="/Img/Contacts/github.png" alt="Github" />
                    <span>GitHub</span>
                </a>
                <a 
                    className="contact-block z20" 
                    data-tip={"Click to copy discord username"} 
                    onClick={() => {
                        navigator.clipboard.writeText("_⛟#3644")
                        toast.success("Copied to clipboard!")
                    }}
                >
                    <img src="/Img/Contacts/discord.png" alt="Discord" />
                    <span>Discord</span>
                </a>
            </div>
        </section>
    )
}

export default Contact