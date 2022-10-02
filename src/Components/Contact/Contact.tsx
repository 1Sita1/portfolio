import "./_contact.scss"

const Contact: React.FC = () => {
    return (
        <section className="contact central-scope section">
            <h3>Contact Me</h3>
            <div className="contacts-wrapper">
                <a href="#" className="contact-block">
                    <img src="" alt="" />
                    <span>Email</span>
                </a>
                <a className="contact-block">
                    <img src="" alt="" />
                    <span>GitHub</span>
                </a>
                <a className="contact-block">
                    <img src="" alt="" />
                    <span>Discord</span>
                </a>
            </div>
        </section>
    )
}

export default Contact