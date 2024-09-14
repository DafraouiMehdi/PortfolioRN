import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// NavBar
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #EEEEEE;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    text-align: center;
  }
`;

// Logo
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  animation: ${fadeIn} 0.5s ease-out;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// LogoImage
const LogoImage = styled.img`
  height: 40px;
  width: auto;
  display: block;
  margin-right: 10px;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

// Menu
const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// MenuItem
const MenuItem = styled.li`
  font-size: 18px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #333;
  font-weight: bold;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #00bcd4;
    transition: width 0.3s ease;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: #576366;
    transform: scale(1.1);
    transition: color 0.3s ease, transform 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const Home = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 60px 20px;
  background: #e2e8f0;
 
`;

const IntroText = styled.div`
  flex: 1;
  margin-left: 20px;
  color: #333;
  margin-top : 20px ;

  h1 {
    font-size: 3rem;
    margin: 0;
    color: #222;
    line-height: 1.2;
  }

  h4 {
    font-size: 1.5rem;
    color: #666;
  }
`;

const IntroImage = styled.img`
  font-size: 24px;
  font-weight: bold;
  animation: ${fadeIn} 0.5s ease-out;
  display: flex;
  align-items: center;
  margin-right: 100px;
  width : 280px ; 
  height : 280px ;
  
`;

const Welcome = styled.h3`
  font-size: 2rem; /* Large font size for emphasis */
  color: #333;
  font-family: Times New Roman; /* Use Monospace font */
  font-weight: 600; /* Semi-bold text for emphasis */
  line-height: 1.3; /* Improved readability with better line spacing */
  margin: 0;
  padding: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  transition: color 0.3s ease, transform 0.3s ease; /* Smooth transitions */
  max-width: 80%; /* Limit the width of the text */
  display: inline-block; /* Ensure width is controlled by max-width */
  overflow-wrap: break-word; /* Ensure text wraps properly */
  word-break: break-word; /* Break long words if needed */
`;

const Name = styled.h1`
  font-size: 3rem; /* Large font size for emphasis */
  color : #333;
  font-weight: 600; /* Semi-bold text for emphasis */
  line-height: 1.3; /* Improved readability with better line spacing */
  margin: 0;
  padding: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  transition: color 0.3s ease, transform 0.3s ease; /* Smooth transitions */
  max-width: 80%; /* Limit the width of the text */
  display: inline-block; /* Ensure width is controlled by max-width */
  overflow-wrap: break-word; /* Ensure text wraps properly */
  word-break: break-word; /* Break long words if needed */
  
`;

const Span = styled.span`
    color : #4B8EDB;
`;


const SpanSkills = styled.h1`
    text-align: center; /* Center-aligns the text */
    font-size: 2.5rem; /* Adjust the font size as needed */
    color: #9F69F0; /* Set the text color */
    margin: 20px 0; /* Add some margin for spacing */
    font-weight: 600; /* Optional: Set the font weight */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow for depth */
`;


const Domain = styled.h3`
  font-size: 2rem; /* Large font size for emphasis */
  color: #333; 
  font-weight: 200; /* Semi-bold text for emphasis */
  line-height: 1.3; /* Improved readability with better line spacing */
  margin: 0;
  padding: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  transition: color 0.3s ease, transform 0.3s ease; /* Smooth transitions */
  max-width: 80%; /* Limit the width of the text */
  display: inline-block; /* Ensure width is controlled by max-width */
  overflow-wrap: break-word; /* Ensure text wraps properly */
  word-break: break-word; /* Break long words if needed */
`;

const Description = styled.h5`
    margin-top : -10px ;
    font-family : Helvetica;
`;

const ButtonResumer = styled.button`
    padding : 14px 20px ; 
    background-color : #4B8EDB ;
    border : 0px solid #4B8EDB;
    margin : 20px ;
    color : white;
    border-radius : 15px;
`;

const Title = styled.h1`
    text-align: center; /* Center-aligns the text */
    font-size: 2.5rem; /* Adjust the font size as needed */
    color: #9F69F0; /* Set the text color */
    margin: 20px 0; /* Add some margin for spacing */
    font-weight: 600; /* Optional: Set the font weight */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow for depth */
    text-decoration : underline ;
`;

const Para = styled.p`
    font-family: Helvetica; /* Use Montserrat font-family */
    text-align: center; /* Center-aligns the text */
    color: #333; /* Set the text color */
    margin: 20px auto; /* Add vertical margins and center horizontally */
    width: 60%; /* Set the width of the paragraph */
    font-weight: 600; /* Optional: Set the font weight */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow for depth */
`;



const About = styled.div`
    align-items: center;
    justify-content: space-between;
    padding: 60px 20px;
    background: #D1D9E5; 
`;

const Skills = styled.div`
    align-items: center;
    justify-content: space-between;
    padding: 60px 20px;
    background: #C3CCDB; 
`;

// Define keyframes for the bounce-in animation
const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(-30px); /* Start small and slightly above */
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1) translateY(10px); /* Slightly larger and lower */
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0); /* Back to normal size and position */
  }
`;


// Define keyframes for the animation (scaling, rotating, and background color change)
const hoverAnimation = keyframes`
  0% {
    transform: scale(1) rotate(0deg); /* Normal size and no rotation at the start */
    background-color: #ffffff; /* Initial background color */
  }
  50% {
    transform: scale(1.05) rotate(3deg); /* Slight scale up and rotate clockwise */
    background-color: #f0f0f0; /* Intermediate background color */
  }
  100% {
    transform: scale(1) rotate(0deg); /* Return to normal size and no rotation */
    background-color: #ffffff; /* Return to initial background color */
  }
`;

// Styling for the container holding the cards
const DivCard = styled.div`
  display: flex; /* Enables flexbox for layout */
  justify-content: space-between; /* Space between the two cards */
  align-items: center; /* Vertically centers the cards */
  margin-top: 80px; /* Adds space above the cards */
  padding: 20px; /* Adds padding around the container */
  gap: 20px; /* Adds space between the cards */
  flex-wrap: wrap; /* Allows the cards to wrap on smaller screens */
`;

// Styling for individual cards with hover animation
const Card = styled.div`
  background: #ffffff; /* Sets a white background for the card */
  border-radius: 10px; /* Rounds the corners of the card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for depth */
  padding: 20px; /* Adds padding inside the card */
  width: 45%; /* Sets the width of each card */
  display: flex;
  flex-direction: column; /* Aligns card content vertically */
  justify-content: center; /* Centers content vertically */
  align-items: center; /* Centers items horizontally */
  text-align: center; /* Centers text inside the card */
  margin-bottom: 20px; /* Adds space between rows on smaller screens */
  transition: box-shadow 0.3s ease; /* Smooth transition for the shadow effect */

  &:hover {
    animation: ${hoverAnimation} 0.6s ease-in-out; /* Applies the hover animation */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Increases shadow for depth effect */
  }

  h1 {
    font-size: 1.5rem; /* Sets the font size for the heading */
    color: #333; /* Dark gray color for the text */
    margin-bottom: 10px; /* Space below the heading */
    font-family: 'Times New Roman', Times, serif; /* Uses Times New Roman font */
  }

  h4 {
    font-size: 1rem; /* Sets the font size for the subheading */
    color: #666; /* Lighter gray for secondary text */
    margin: 0; /* Removes margin */
  }
`;



const Progress = styled.div`
  display: flex;
  justify-content: space-between; /* Space out the bars */
  align-items: flex-start; /* Align items to the top */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  margin-top : 90px ;
`;

// Individual Bar container
const Bar = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%; /* Adjust the width as needed */
`;

// Progress bar styles
const ProgressBar = styled.div`
  background: #eee; /* Light gray background for the progress track */
  border-radius: 4px;
  height: 20px; /* Height of the progress bar */
  width: 100%; /* Full width of the parent container */
  margin-bottom: 10px; /* Space between progress bars */
  position: relative; /* Ensure proper positioning of progress fill */
  overflow: hidden; /* Hide overflow for smooth progress fill */
  margin : 12px ;
`;

const ProgressFill = styled.div`
  background: #00bcd4; /* Color for the progress fill */
  height: 100%;
  width: ${({ width }) => width || '0%'};
  transition: width 0.3s ease; /* Smooth transition for the fill width */
`;

const ProgressText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #333;
  font-size: 0.875rem; /* Smaller text size */
  font-weight: bold; /* Bold text for emphasis */
`;

// Projects style

const ProjectDiv = styled.div`
  display: grid; /* Utilise la grille pour la mise en page */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Définit une grille avec des colonnes adaptatives */
  gap: 20px; /* Espace entre les cartes */
  padding: 20px; /* Ajoute du padding autour du conteneur */
`;

const CardProj = styled.div`
  background: #ffffff; /* Fond blanc pour la carte */
  border-radius: 10px; /* Coins arrondis de la carte */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre subtile pour la profondeur */
  padding: 20px; /* Ajoute du padding à l'intérieur de la carte */
  display: flex;
  flex-direction: column; /* Aligne le contenu de la carte verticalement */
  justify-content: center; /* Centre le contenu verticalement */
  align-items: center; /* Centre le contenu horizontalement */
  text-align: center; /* Centre le texte à l'intérieur de la carte */
  transition: box-shadow 0.3s ease; /* Transition douce pour l'effet d'ombre */
  
  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Augmente l'ombre au survol */
  }
  
  img {
    width: 100%; /* Ajuste la largeur de l'image pour qu'elle remplisse la carte */
    border-radius: 10px 10px 0 0; /* Arrondit les coins supérieurs de l'image */
  }

  h1 {
    font-size: 1.5rem; /* Taille de la police pour le titre */
    color: #333; /* Couleur du texte */
    margin-bottom: 10px; /* Espace en dessous du titre */
    font-family: 'Times New Roman', Times, serif; /* Utilise Times New Roman pour le titre */
  }

  h4 {
    font-size: 1rem; /* Taille de la police pour le sous-titre */
    color: #666; /* Couleur plus claire pour le texte secondaire */
    margin: 0; /* Supprime la marge */
  }

  
`;

const Frameimg = styled.img`
    width : 5%;
    height : 25%;
`;

const DivGlobal = styled.div`
    align-items: center;
    justify-content: space-between;
    background: #A3B1C6; 
    margin-top : -20px;
`;

const Flow = styled.div`
  display: flex;

  h4 {
    flex-direction: row;
    color : #4B80C4 ;
    text-decoration : underline ;
    cursor : pointer;
  }
`;

const H4style = styled.h4`
  text-decoration: underline;
  cursor: pointer;
`;

const Flayer = styled.div`
  display: flex;
  gap: 30px; /* Space between items if there are multiple elements */
  margin-left : 196px;

  img {
    width: 400px;
    height: 400px;
    object-fit: cover; /* Ensures the image covers the area without distortion */
  }
`;

// style contact

const SpanContact = styled.h1`
    text-align: center; /* Center-aligns the text */
    font-size: 2.5rem; /* Adjust the font size as needed */
    color: #9F69F0; /* Set the text color */
    margin: 0px 0; /* Add some margin for spacing */
    font-weight: 600; /* Optional: Set the font weight */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow for depth */
    padding : 30px ;
    
`;

const ContactGLB = styled.div`
  background-color: #e2e8f0;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  height: 90vh; /* Make the container take the full height of the viewport */
  
  img {
    max-width: 70%; /* Ensure image scales down to fit within container */
    max-height: 70%; /* Ensure image scales down to fit within container */
    object-fit: contain; /* Maintain aspect ratio and fit within the container */
    margin-left : 170px;
    padding : 30px;
  }
`;

const Header = () => {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    // Set active section and scroll to it
    const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleCv = () => {
    window.open('/CV_REDOUANE NAOUASS .pdf', '_blank');
    };

    const handleJuiceweb = () => {
      window.open('https://www.figma.com/design/a9wDsBzXjzSMcfoL5JsF21/les-interface-juice?node-id=0%3A1&t=QljNse1uCQNTPnzR-1' , '_blank');
    }

    const handleJuicemobile = () => {
      window.open('https://www.figma.com/file/vFWwAPbkXFazhrdCZ6XUIz/app-juice?type=design&node-id=46%3A152&mode=design&t=Laffof54B6EKCwaY-1' , '_blank');
    }

    const handleAid = () => {
      window.open('https://www.figma.com/design/ZS6ebg2WgMb7x9DXZf5eW1/Eid-al-adha?node-id=0-1&t=ELNqTx0wftRqNpPV-1' , '_blank')
    }

    const handlefadaa = () => {
      window.open('https://www.figma.com/design/11YvwXc2swqa10eDM51KsH/FADAA?node-id=0-1&t=kKdk4sn97R4a2JE8-1' , '_blank')
    }

    const handleopoo = () => {
      window.open('https://www.figma.com/design/MqY0XebAG4KZTnyHg1Wwoa/Odoo?t=kKdk4sn97R4a2JE8-1' , '_blank')
    }

    const handleHome = () => handleScrollTo(homeRef);
    const handleAbout = () => handleScrollTo(aboutRef);
    const handleSkills = () => handleScrollTo(skillsRef);
    const handleProjects = () => handleScrollTo(projectsRef);
    const handleContact = () => handleScrollTo(contactRef);

    return <>
        <NavBar>
        <Logo>
            <LogoImage src="./LOGO NOIR.png" alt="Logo" />
            {/* You can add text next to the logo image if needed */}
        </Logo>
        <Menu>
            <MenuItem onClick={handleHome}>HOME</MenuItem>
            <MenuItem onClick={handleAbout}>ABOUT</MenuItem>
            <MenuItem onClick={handleSkills}>SKILLS</MenuItem>
            <MenuItem onClick={handleProjects}>PROJECTS</MenuItem>
            <MenuItem onClick={handleContact}>CONTACT</MenuItem>
        </Menu>
        </NavBar>
                <Home ref={homeRef}>
                    <IntroText>
                        <Welcome>WELCOME TO MY WORLD</Welcome>
                        <Name><b>Hi, I'm <Span>REDOUANE NAOUASS</Span></b></Name>
                        <Domain>a Professional UX & UI Designer</Domain>
                        <br /><br />
                        <Description>Passionate about visual identity and creativity and solving user problems, and creative ui design proficient in FIGMA,XD,SKETCH</Description>
                        <ButtonResumer onClick={handleCv}>Show CV</ButtonResumer>
                    </IntroText>
                    <IntroImage src="./PHOTO 1.png" alt="Intro Image" />
                </Home>
                <About ref={aboutRef}>
                    <Title>About Me</Title>
                    <Para>Hey , i'm ui/ux designer in morrocco, casablanca Passionate about visual identity and creativity and solving user problems, and creative ui design proficient in figma,XD,Sketch</Para>
                    <DivCard>
                        <Card>
                            <h1>2021 - 2022</h1>
                            <h4>Baccalauréat Option : Sc Physics and Chimical / ABI CHOUAIB DOUKALI / CASABLANCA</h4>
                        </Card>
                        <Card>
                            <h1>2022 - 2024</h1>
                            <h4>Diploma Technicien Specialized in digital design / Institut Specialiser de technologie appliquee ART Graphique</h4>
                        </Card>
                    </DivCard>
                </About>

                <Skills ref={skillsRef}>
                    <SpanSkills>My Skills</SpanSkills>
                    <Para>Here is my skills to represent my Expertise</Para>
                    <Progress>
                    <Bar>
                    <ProgressBar>
                        <ProgressFill width="90%" />
                        <ProgressText>90% figma</ProgressText>
                    </ProgressBar>
                    <ProgressBar>
                        <ProgressFill width="85%" />
                        <ProgressText>85% Adobe XD</ProgressText>
                    </ProgressBar>
                    <ProgressBar>
                        <ProgressFill width="80%" />
                        <ProgressText>80% Identité visuelle</ProgressText>
                    </ProgressBar>
                    <ProgressBar>
                        <ProgressFill width="90%" />
                        <ProgressText>90% Wireframing</ProgressText>
                    </ProgressBar>
                    {/* Add more progress bars as needed */}
                    </Bar>
                    <Bar>
                    <ProgressBar>
                        <ProgressFill width="80%" />
                        <ProgressText>80% Recherche Utilisateur</ProgressText>
                    </ProgressBar>
                    <ProgressBar>
                        <ProgressFill width="70%" />
                        <ProgressText>70% Adobe Photoshope</ProgressText>
                    </ProgressBar>
                    <ProgressBar>
                        <ProgressFill width="80%" />
                        <ProgressText>80% Adobe Illustrator</ProgressText>
                    </ProgressBar>
                    <ProgressBar>
                        <ProgressFill width="90%" />
                        <ProgressText>90% Prototyping</ProgressText>
                    </ProgressBar>
                    {/* Add more progress bars as needed */}
                    </Bar>
                    </Progress>
                </Skills>
                <DivGlobal ref={projectsRef}>
                <SpanSkills>Projects</SpanSkills>
                <Para>Here is my all Projects to represent my Expertise</Para>
                    <ProjectDiv>
                    <CardProj>
                        <img className="card-img-top" src="/juice.jfif" alt="Card image" />
                        <div className="card-body">
                        <h3 className="card-title" style={{ marginTop: '10px' }}>Application mobile & Web Juice</h3>
                        <p className="card-text">Une plateforme de vente de jus énergétiques pour sportives, offrant des produits optimisant les performances avec commande en ligne et livraison rapide.</p>
                        <Flow>
                          <h4 onClick={handleJuiceweb}>Application web</h4>
                          <h4 onClick={handleJuicemobile}>Application mobile</h4>
                        </Flow>
                        </div>
                    </CardProj>
                    <CardProj>
                        <Frameimg className="card-img-top" src="/Frame.png" alt="Card image" />
                        <div className="card-body">
                        <h3 className="card-title" style={{ marginTop: '10px' }}>Application mobile Aid EL adha</h3>
                        <p className="card-text">L'application aide les musulmans à célébrer l'Aïd al-Adha en fournissant des informations sur les dates, rituels, gestion du Qurbani, et en facilitant les interactions sociales.</p>
                        <H4style style={{color : '#4B80C4'}} onClick={handleAid}>Show this</H4style>
                        </div>
                    </CardProj>
                    <CardProj>
                        <img className="card-img-top" src="/fadaa.jfif" alt="Card image" />
                        <div className="card-body">
                        <h3 className="card-title" style={{ marginTop: '10px' }}>Redesign Web site universitaire Fadaa</h3>
                        <p className="card-text">Le site "Fadaa" facilite la gestion académique et administrative, optimisant la communication et l'accès aux services universitaires.</p>
                        <H4style style={{color : '#4B80C4'}} onClick={handlefadaa}>Show this</H4style>
                        </div>
                    </CardProj>
                    <CardProj>
                        <img className="card-img-top" src="/Frame 1 (1).png" alt="Card image" />
                        <div className="card-body">
                        <h3 className="card-title" style={{ marginTop: '10px' }}>Redesign Web site Support Odoo</h3>
                        <p className="card-text">Odoo support de tickets optimise la gestion des demandes d'assistance et la communication avec les clients.</p>
                        <H4style style={{color : '#4B80C4'}} onClick={handleopoo}>Show this</H4style>
                        </div>
                    </CardProj>
                    <Flayer>
                      <img src="./fjuice.jfif" alt="" />
                      <img src="./facejuice.jfif" alt="" />
                    </Flayer>
                    </ProjectDiv>
                </DivGlobal>
                <ContactGLB ref={contactRef} >
                  <SpanContact>Contact Me</SpanContact>
                  <img src="./17482313_34_email_signature.png" alt="" />
                </ContactGLB>
    </>
};

export default Header;





