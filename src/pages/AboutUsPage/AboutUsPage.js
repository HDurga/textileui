import React from 'react';
import { useTranslation } from 'react-i18next';
import TransparentNavbar from '../../components/TransparentNavbar'; // Adjust path if necessary
import './AboutUsPage.css'; // Import the CSS for this page

const AboutUsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us-page">
      <TransparentNavbar />
      <div className="hero-background-image"></div> {/* New div for the background image */}
      {/* All other sections have been removed */}
    </div>
  );
};

export default AboutUsPage;