export default function Home() {
    return (
        <div className="home">
            <img src="path/to/your/profile-picture.jpg" alt="Sally Wanga" className="profile-picture" />
            <h1 className="home-title">
                Hi, My Name is Sally Wanga
            </h1>
            <h2 className="home-subtitle">
                I am a Software Developer (Web) and Data Analyst with an interest in Artificial Intelligence and Machine Learning
            </h2>
            <p className="home-bio">
               
                 I specialize in web development using React and have a strong background in data 
                 analysis with SQL. I am also proefficient in Agile methodologies and AI training.
                  Currently, I'm expanding my skill set by learning Python.
            
            </p>
            <div className="cta-buttons">
                <a href="#projects" className="btn">View My Work</a>
                <a href="#contact" className="btn">Get in Touch</a>
            </div>
            <div className="social-links">
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">Medium</a>
            </div>
        </div>
    );
}
