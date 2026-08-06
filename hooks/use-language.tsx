"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "nl" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

const translations = {
  nl: {
    // Navigatie
    about: "Over mij",
    projects: "Projecten",
    hobbies: "Hobby's",
    contact: "Contact",

    // Hero Sectie
    heroTitle: "Maarten Van der Schueren",
    heroSubtitle: "Bachelor in Toegepaste Informatica",
    heroDescription:
      "Engineering stopt niet bij theorie, maar begint pas echt wanneer je iets creëert dat echt werkt.",
    viewWork: "Bekijk Mijn Werk",

    // Education Section
    education: "Opleiding",

    // Werkervaring Sectie
    workExperience: "Werkervaring",
    WorkDescription: "Mijn professionele reis",
    current: "Huidig",
    technologiesUsed: "Vaardigheden",
    collaborateMessage: "Geïnteresseerd in samenwerking?",
    getInTouch: "Neem Contact Op",

    // Over Sectie
    aboutTitle: "Over Mij",
    aboutDescription: `Aangenaam! Ik ben Maarten, ${calculateAge("2004-08-17")} jaar en heb een passie voor praktijk en technologie. Momenteel ben ik een schakelstudent in faculteit Ingenieurs-wetenschappen aan de UGent. Na mijn studie Toegepaste Informatica AI & Data Engineering, wou ik me nog meer verdiepen op hands-on specialisaties. Door mijn vooropleiding Elektromechanica in het secundair onderwijs en mijn bachelor Informatica, leek Elektronica-ICT een evidente keuze. Naast mijn opleiding hou ik mij in m'n vrije tijd ook met verschillende zaken bezig die hieronder terug te vinden zijn!`,

    // Projecten Sectie
    projectsTitle: "Uitgelichte Projecten",
    project1Title: "Geïntegreerde proef Elektromechanica",
    project1Description:
      "In de richting Elektromechanica heb ik een geïntegreerde proef gemaakt waarin we alle aspecten van onze opleiding moesten toepassen. Hier hebben we een vicieuze cirkel gemaakt waarin een kubus van het begin naar het einde moest gaan, waarbij het einde weer het begin was. We gebruikten pneumatische en elektrische componenten. Ook hebben we een PLC geprogrammeerd die de werking van de cirkel bestuurde.",
    project2Title: "Voorspellen van Zonnepaneelopbrengst met Machine Learning",
    project2Description:
      "In dit project heb ik een script gemaakt dat de opbrengst van zonnepanelen voorspelt op basis van weergegevens. Het programma gebruikt historische weergegevens om een model te trainen dat de opbrengst van zonnepanelen in realtime kan voorspellen. Dit is nuttig voor het optimaliseren van energieverbruik en het plannen van energieproductie.",
    project3Title: "AI Chatbot - Bachelorproef",
    project3Description:
      "Voor mijn bachelorproef heb ik een AI-chatbot ontwikkeld voor ArcelorMittal, een staalproductiebedrijf. De chatbot is ontworpen om medewerkers te helpen bij het zoeken naar informatie over het staalproces.",
    project4Title: "3D Print Projecten",
    project4Description:
      "In mijn vrije tijd ontwerp en print ik allerlei 3D-modellen. Van functionele onderdelen tot decoratieve items, ik gebruik software zoals Solidworks en Bambu Studio om mijn ideeën tot leven te brengen.",
    project5Title: "Musical decoratie - Het Magisch Kompas",
    project5Description:
      "Het kompas is ontworpen als een rekwisiet dat door de acteurs op het podium kon worden gebruikt, en het werd ook gebruikt om enkele van de lichteffecten tijdens de uitvoering te regelen. Dit in samenwerking met Vivo Kampen gegeven door Muziekschool De Pinte.",

    // Hobby's Sectie
    hobbiesTitle: "Mijn Hobby's",
    hobby1: "Fotografie",
    hobby1Description:
      "Met mijn camera maak ik graag foto's van natuur en cultuur. Meestal focus ik mij op zaken waarbij ik kan spelen met shuttertijden en diafragma waarden.",
    hobby2: "Gamen",
    hobby2Description:
      "Als ontspanning speel ik af en toe wel computergames. Ik heb het meeste affiniteit met actie of competitieve games.",
    hobby3: "Muziek",
    hobby3Description:
      "In mijn vrije tijd luister ik vaak muziek zoals Jazz, Rock en pop. Naast muziek luisteren speel ik zelf ook Piano & Drum",
    hobby4: "Techniek",
    hobby4Description:
      "Mechanische en elektronische projecten tekenen en bouwen in mijn vrije tijd, zoals 3D-printen en Arduino-projecten.",

    // Contact Sectie
    clickForInfo: "Klik voor meer info",
    contactTitle: "Neem Contact Op",
    contactDescription:
      "Neem gerust contact op als een praatje wilt maken of meer wilt te weten komen!",
    email: "E-mail",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  en: {
    education: "Education",

    // Navigation
    about: "About",
    projects: "Projects",
    hobbies: "Hobbies",
    contact: "Contact",

    // Hero Section
    heroTitle: "Maarten Van der Schueren",
    heroSubtitle: "Bachelor of Science in Applied Computer Science",
    heroDescription:
      "Engineering doesn't stop at theory, but only begins when you create something that really works.",
    viewWork: "View My Work",

    // About Section
    aboutTitle: "About Me",
    aboutDescription: `Nice to meet you! I'm Maarten, ${calculateAge("2004-08-17")} years old, and I have a passion for hands-on work and technology. I'm currently a bridging student in the Faculty of Engineering at Ghent University. After finishing my degree in Applied Informatics – AI & Data Engineering, I wanted to dive deeper into hands-on specializations. Thanks to my background in Electromechanics in secondary school and my bachelor's in Informatics, Electronics-ICT felt like an obvious choice. Besides my studies, I spend my free time on various things you can find below!`,

    // work Section
    workExperience: "Work Experience",
    WorkDescription: "My professional journey",
    current: "Current",
    technologiesUsed: "Skills",
    collaborateMessage: "Interested in working together?",
    getInTouch: "Get in Touch",

    // events
    graduated: "Graduated",
    graduatedDescription:
      "Graduated with a Bachelor of Applied Computer Science from HoGent.",
    internship: "Internship at ArcelorMittal Gent",
    internshipDescription:
      "Training segmentation networks for defect detection in steel production.",
    certificate: "VCA Basic Safety Certificate Obtained",
    certificateDescription:
      "Safety Certificate (VCA) Basic Safety obtained, valid until 2031.",
    tsoGraduated: "Diploma Electromechanics Obtained",
    tsoGraduatedDescription:
      "Diploma Electromechanics 3rd degree obtained at Edugo Campus Glorieux.",
    studentJob: "Student Job at Zero Latency VR",
    studentJobDescription:
      "Supporting VR experiences and customer service in a high-tech environment.",

    // Projects Section
    projectsTitle: "Featured Projects",
    project1Title: "Graduation Project Elektromechanics",
    project1Description:
      "In the Electromechanics direction, I made a graduation project where we had to apply all aspects of our course. Here we made a vicious circle where a cube had to go from the beginning to the end, the end being the beginning. Here we used pneumatic and electrical components. We also programmed a PLC that controlled the operation of the circle.",
    project2Title: "Predicting Solar Panel Output with Machine Learning",
    project2Description:
      "In this project, I created a program that predicts the output of solar panels based on weather data. The program uses historical weather data to train a model that can predict the output of solar panels in real-time. This is useful for optimizing energy consumption and planning energy production.",
    project3Title: "AI Chatbot - Bachelor Thesis",
    project3Description:
      "For my thesis, I developed an AI chatbot for ArcelorMittal, a steel manufacturing company. The chatbot is designed to assist employees searching for information in the steelprocess.",
    project4Title: "3D Printing Projects",
    project4Description:
      "In my free time I design and print all kinds of 3D objects. From functional parts to decorative items, I use software like Solidworks and Bambu Studio to bring my ideas to life.",
    project5Title: "Musical decoration - The Magical Compass",
    project5Description:
      "The compass was designed to be a prop that could be used by the actors on stage, and it was also used to control some of the lighting effects during the performance. This in partnership with Vivo Camps given by school of music De Pinte.",

    // Hobbies Section
    hobbiesTitle: "My Hobbies",
    hobby1: "Photography",
    hobby1Description:
      "Capturing moments through the lens of my camera to recieve memories and explore creative perspectives.",
    hobby2: "Gaming",
    hobby2Description:
      "Enjoying adventure and shooting games with friends in my free time.",
    hobby3: "Music",
    hobby3Description:
      "Playing piano and drums to unwind and express creativity.",
    hobby4: "Engineering",
    hobby4Description:
      "Drawing and building mechanical and electronic projects in my spare time. Such as 3D printing and Arduino projects.",

    // Contact Section
    clickForInfo: "Click for more info",
    contactTitle: "Get In Touch",
    contactDescription:
      "Feel free to reach out if you want to collaborate or just have a chat!",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("nl");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["nl"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
