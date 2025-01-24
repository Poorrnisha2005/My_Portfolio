import React from 'react';
// import '/Projects.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Drug trafficking in social media</h3>
        <p>The "Drug Trafficking in Social Media" project aims to develop an AI-powered system that detects and tracks illicit drug-related activities on social media platforms like Instagram, Telegram, and WhatsApp. By analyzing posts, profiles, hashtags, and user behavior patterns, the system identifies suspicious content linked to drug trafficking. It leverages predefined keywords and behavioral analysis to flag posts and profiles for further investigation. The tool will provide real-time alerts to law enforcement, assisting in swift action while maintaining user privacy. Additionally, the system will continuously learn from new data to adapt to evolving trafficking methods.</p>
      </div>
      <div className="project">
        <h3>Stock Price Prediction</h3>
        <p>The "Stock Price Prediction" project focuses on building a data-driven model to forecast future stock prices using historical market data. This project employs machine learning algorithms and statistical techniques to analyze trends, patterns, and market indicators such as closing prices, volume, and moving averages. By leveraging features like time series analysis and sentiment data (e.g., news or social media), the model predicts short-term or long-term price movements. The aim is to provide investors and traders with actionable insights to make informed decisions, minimize risks, and optimize portfolio performance.</p>
      </div>
      <div className="project">
        <h3>Event Feedback Management System</h3>
        <p>The Event Feedback Management System is a Java-based application integrated with a DBMS to collect, store, and analyze participant feedback for events. It enables users to submit feedback on various event aspects, while organizers can view summarized results, generate reports, and identify areas for improvement. The system ensures efficient feedback management, enhancing event quality and participant satisfaction.</p>
      </div>
    </section>
  );
}

export default Projects;
