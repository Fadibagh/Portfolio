import "./About.css"
import { BookOpenIcon } from "@heroicons/react/solid";


const About = () => {
    return (
        <section id="about">
            <BookOpenIcon className="book-icon" />
            <h2>About Me</h2>
            <div>
                <p>
                    As a Computer Science student at Memorial University of Newfoundland with a side of Business minor, I've dived into the world where tech meets practical problem-solving. Driven by a knack for tackling puzzles, I chose computer science to sharpen my mind across diverse challenges. It's not all about codes and algorithms, though—they're my strong suit, sure, but soccer, music, and whipping up new recipes keep me balanced and inventive. I'm all about learning by doing, exploring different paths, and soaking up experiences along the way. Whether it's navigating through complex data structures or experimenting in the kitchen, my mantra is to keep trying, learning, and evolving.
                </p>
            </div>
        </section>
    );
}
 
export default About;