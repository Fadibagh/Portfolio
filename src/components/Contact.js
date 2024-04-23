import { AtSymbolIcon } from "@heroicons/react/solid";
import './Contact.css'


const Contact = () => {
    return (
        <section id="contact">
            <div className='contact'>
                <AtSymbolIcon className="icon" />

                <h2 className="title">Contact Me</h2>
                <p className='info-item'><b>Email:</b> Fadi2002.ba@gmail.com</p>
                <p className='info-item'><b>Phone Number:</b> +1 (709) 330-4413</p>
                <p className='info-item'><b>Instagram:</b> @<a href="https://instagram.com/fadibagh">Fadibagh</a></p>
            </div>
        </section>
    );
}
 
export default Contact;