import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/expenses.png";
import emotion from "../../Assets/Projects/ecommerces.png";
import editor from "../../Assets/Projects/weathers.png";
import chatify from "../../Assets/Projects/youtube.PNG";
import suicide from "../../Assets/Projects/covids.png";
import bitsOfCode from "../../Assets/Projects/food.png";
import netflix from "../../Assets/Projects/netflixs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few personal projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="I implemented a Netflix app using React.js, Tailwind CSS, and Redux Toolkit. In this project, I integrated a live Netflix API to display movies categorized by genres. Additionally, I incorporated a live chat functionality powered by GPT for enhanced interactivity. The app also features user authentication with sign-in and sign-up functionalities, along with session management."
              ghLink="https://github.com/rahulcdev13/Namaste-Netflix-GPT/"
              demoLink="https://namaste-netflix-gpt-zeta.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Food Delivery App"
              description="The Food Delivery App built with React.js is a responsive web application allowing users to browse nearby restaurants, view menus, customize orders. The app integrates with a backend API for fetching real time swiggy API restaurant data. The frontend is developed using React.js with React Router for navigation and state management using Redux."
              ghLink="https://github.com/rahulcdev13/Namaste-React-Food-Order"
              demoLink="https://namaste-react-food-order.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Youtube Clone"
              description="The YouTube Clone project is a web application that replicates key features of YouTube, allowing users to view videos. The frontend, built with React.js, provides a responsive user interface with features like video playback, search functionality. This project aims to YouTube while showcasing modern web development practices and technologies."
              ghLink="https://github.com/rahulcdev13/Namaste-Youtube-App"
              demoLink="https://namaste-youtube-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather App"
              description="A weather app using React.js is a responsive web application that displays current weather conditions, forecasts. Users can search for specific locations to view weather details, including temperature, humidity, wind speed, and precipitation. The app integrates with a weather API to fetch real-time weather information and updates dynamically."
              ghLink="https://github.com/rahulcdev13/Weather-App-With-API"
              demoLink="https://weather-app-with-api.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Daily Expenses App"
              description="A Daily Expenses App built with React.js is a web application designed to help users track their daily expenses and manage their budgets efficiently. The app allows users to log expenses with details such as category, amount, and date. Users can view their spending history, categorize expenses, and set budget limits for different categories."
              ghLink="https://github.com/rahulcdev13/daily-expenses"
              demoLink="https://daily-expenses-nu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Covid Live Tracker"
              description="A COVID-19 Live Tracker App built with React.js is a web application that provides real-time updates and statistics related to the COVID-19 pandemic. The app fetches data from reliable sources such as the World Health Organization (WHO) display country-specific COVID-19 metrics. Users can view statistics such as total cases, active, recovered cases, and deaths."
              ghLink="https://github.com/rahulcdev13/Covid-19-Live-Tracker-App"
              demoLink="https://covid-19-live.vercel.app/"
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="E-Commerce Website"
              description="An E-commerce App built with React.js is a dynamic web application that enables users to browse products, add items to cart, make purchases, and manage orders. The app integrates with a backend API to fetch product data, handle user authentication, process payments, and manage inventory."
              ghLink="https://github.com/rahulcdev13/Redux-Ecommerce-app"
              demoLink="https://e-commerce-react-context-api.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
