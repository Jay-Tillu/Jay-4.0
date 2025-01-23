import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Jay Tillu</h1>
        <br />
        <br />
        <Image
          width={210}
          height={210}
          src="https://avatars.githubusercontent.com/u/26956655?v=4"
          alt="Jay Tillu Logo"
          priority
        />
        <br />
        <br />

        <p>
          When the world around me believed that a formal degree was all I
          needed, I denied it.
        </p>
        <br />

        <p>Hey There, Welcome to my Home page 🙏🏻</p>
        <br />

        <p>
          My Name is Jay Tillu and I am a Software Developer by Profession, Tech
          Enthucist by Passion and Content Creator by hobby. I have been coding
          for more than 3 years now. When it comes to coding, I specialize in
          React, NextJs, JavaScript, HTML, CSS, TailwindCSS and Appwrite. In
          past, I have worked with many companies and on various roles such as
          Team Member Operations, Flutter Developer and Frontend Developer.
          These days, I am working at Frontend Developer at Simple2Call. As a
          hobby, I love to write about Technology, I authored more than 120
          Blogs on various platforms including Medium, Hashnode and Dev.to. Till
          date my blogs served more than 500K+ readers worldwide, crazy right
          😱?
        </p>

        <br />

        <p>
          I think we have already complicated the front end too much, so I am
          opting for a simpler solution for my home page and this is one of the
          fastest web page on the internet.
        </p>
      </div>

      <br />

      <div>
        <h2>You are here for...</h2>
        <br />

        <p>
          In my last 3 years of experience in technology, I have learned so much
          more than any book will ever teach me. I think you are here to get to
          know me. Best way is to start with my work.
        </p>
 
        <br />
        <div className="button-container">
          <a href="https://github.com/Jay-Tillu" target="_blank">
            <button className="link-buttons">Github</button>
          </a>
          <a href="https://www.linkedin.com/in/jaytillu/" target="_blank">
            <button className="link-buttons">LinkedIn</button>
          </a>
          <a href="https://jaytillu.com/blogs" target="_blank">
            <button className="link-buttons">My Blogs</button>
          </a>
          <a href="https://jaytillu.medium.com/" target="_blank">
            <button className="link-buttons">Medium</button>
          </a>
          <a href="https://hashnode.com/@jaytillu" target="_blank">
            <button className="link-buttons">Hashnode</button>
          </a>
          <a href="https://dev.to/jay_tillu" target="_blank">
            <button className="link-buttons">Dev</button>
          </a>
          <a href="https://community.aws/@jaytillu" target="_blank">
            <button className="link-buttons">AWS Community</button>
          </a>
          <a href="https://x.com/jay_tillu" target="_blank">
            <button className="link-buttons">X (Twitter)</button>
          </a>
          <a href="https://www.instagram.com/jay.tillu/" target="_blank">
            <button className="link-buttons">Instagram</button>
          </a>
          <a href="https://www.youtube.com/@jay_tillu" target="_blank">
            <button className="link-buttons">YouTube</button>
          </a>
        </div>
      </div>
    </main>
  );
}
