import React from "react";
import "./EllasCafe.css";

import ellasCafeLogo from "../Images/Ellas_Cafe_Logo.jpg";

function EllasCafe() {
  return (
    <div className="ellas-portfolio-container container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="ellas-clearfix-custom">
            <div className="ellas-logo-container rounded">
              <a
                href="https://ellasbakery.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="ellas-inline-link"
              >
                <img
                  src={ellasCafeLogo}
                  alt="Ella's Café Logo"
                  className="ellas-portfolio-logo img-fluid"
                />
              </a>
            </div>

            <h2 className="h5 mt-4">1. Business Purpose</h2>
            <p>
              The client is{" "}
              <a
                href="https://ellasbakery.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="ellas-inline-link"
              >
                Ella&apos;s Café
                <span className="ellas-external-icon">&#x2197;</span>
              </a>
              , a newly established independent café in Winchmore Hill, London,
              looking to establish a strong local presence and attract customers
              through a professional website. I developed a bespoke web
              application to complement the café&apos;s physical presence by
              providing an online platform where visitors can discover the
              business, explore its food and beverage menus, read customer
              reviews, and find essential information such as its location and
              opening hours.
            </p>
            <p>
              A key objective was to create a visual identity that preserves the
              authenticity and charm of Greek culture while introducing a more
              modern and luxurious aesthetic. The design was intended to reflect
              the character of the café and create a cohesive experience between
              its physical environment and online presence.
            </p>
            <p>
              The application also provides an administrative interface,
              allowing the client to manage menu items, pricing and website
              content without requiring ongoing developer involvement.
            </p>

            <h2 className="h5 mt-4">2. My Role</h2>
            <p>
              I gathered the client&apos;s requirements and designed and
              developed the application end-to-end.
            </p>
            <p>
              This included translating the client&apos;s branding preferences
              and functional requirements into a responsive website, designing
              the menu catalogue and its filtering functionality, integrating
              Google customer reviews through the Google Places API, and
              developing a custom administrative dashboard.
            </p>
            <p>
              I was responsible for the frontend implementation, backend
              functionality and database design, ensuring that the application
              provided an intuitive experience for visitors while remaining
              straightforward for the client to maintain.
            </p>

            <h2 className="h5 mt-4">3. Technical Highlights</h2>
            <p>
              The application uses a React, Bootstrap and CSS frontend, with a
              PHP backend and MySQL database.
            </p>
            <p>
              A key technical feature is the interactive food and beverage
              catalogue, which allows visitors to filter menu products by
              category and dietary requirements. This provides a more accessible
              way to explore the menu, particularly for customers looking for
              products that meet specific dietary preferences.
            </p>
            <p>
              The application also integrates the Google Places API to display
              live customer reviews, allowing the website to present up-to-date
              feedback and ratings from Google.
            </p>
            <p>
              A custom administrative dashboard provides the client with control
              over menu items, pricing and website content. This separates
              content management from the application code, allowing routine
              updates to be made without requiring changes to the underlying
              application.
            </p>
            <p>
              The frontend is fully responsive, adapting to desktop, tablet and
              mobile devices to provide a consistent browsing experience across
              different screen sizes.
            </p>

            <h2 className="h5 mt-4">4. Key Features</h2>
            <ul>
              <li>
                <strong>Responsive brand showcase and hero section</strong> -
                presenting the café&apos;s identity through a modern, visually
                engaging design
              </li>
              <li>
                <strong>Interactive food and beverage catalogue</strong> -
                allowing visitors to explore the available menu items and
                pricing
              </li>
              <li>
                <strong>Menu category filtering</strong> - enabling visitors to
                narrow down products by their respective categories
              </li>
              <li>
                <strong>Dietary filtering</strong> - allowing visitors to filter
                menu products according to dietary tags and requirements
              </li>
              <li>
                <strong>About Us section</strong> - communicating the
                café&apos;s story, coffee origins and connection to Greek
                culture
              </li>
              <li>
                <strong>Live Google Reviews integration</strong> - displaying
                customer ratings and reviews through the Google Places API
              </li>
              <li>
                <strong>Interactive location guide</strong> - providing visitors
                with access to the café&apos;s location and directions
              </li>
              <li>
                <strong>Opening hours</strong> - displaying business hours and
                relevant holiday opening times
              </li>
              <li>
                <strong>Administrative dashboard</strong> - providing a
                dedicated interface for managing website content
              </li>
              <li>
                <strong>Menu and pricing management</strong> - allowing the
                client to add, update and maintain food and beverage listings
              </li>
              <li>
                <strong>Responsive design</strong> - optimised for desktop,
                tablet and mobile users
              </li>
            </ul>

            <h2 className="h5 mt-4">5. Outcome</h2>
            <p>
              The application provides the café with a professional online
              presence that supports local brand awareness and makes it easier
              for potential customers to discover the business.
            </p>
            <p>
              By combining an interactive menu catalogue, live Google reviews
              and accessible location information, the website gives visitors
              the information they need when deciding whether to visit the café.
            </p>
            <p>
              The administrative dashboard also gives the client greater
              independence in managing their online presence. Menu items, prices
              and website content can be updated through a dedicated interface
              rather than requiring modifications to the application itself.
            </p>
            <p>
              From a development perspective, the project provided an
              opportunity to implement dynamic menu filtering based on multiple
              criteria, integrate an external API for live customer feedback,
              and build a content management interface tailored to the
              operational needs of an independent café.
            </p>

            <p className="ellas-github-inspection-block">
              Interested in the implementation details?{" "}
              <a
                href="https://github.com/Alec-Hajinoff/Ellas_Cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="ellas-inline-link"
              >
                Browse code on GitHub
                <span className="ellas-external-icon">&#x2197;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EllasCafe;
