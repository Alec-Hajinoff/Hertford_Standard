import React from "react";
import "./LovedayAuto.css";
import lovedayAutoLogo from "../Images/Loveday_Auto_Logo.svg";

function LovedayAuto() {
  return (
    <div className="loveday-portfolio-container container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="loveday-clearfix-custom">
            <div className="loveday-logo-container rounded">
              <a
                href="https://lovedayauto.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="loveday-inline-link"
              >
                <img
                  src={lovedayAutoLogo}
                  alt="Loveday Auto Logo"
                  className="loveday-portfolio-logo img-fluid"
                />
              </a>
            </div>

            <h2 className="h5 mt-4">1. Business Purpose</h2>
            <p>
              <a
                href="https://lovedayauto.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="loveday-inline-link"
              >
                Loveday Auto Repairs
                <span className="loveday-external-icon">&#x2197;</span>
              </a>{" "}
              is an auto repair garage that traditionally manages customer
              bookings through telephone calls and walk-ins. I developed a web
              application to complement this existing process by providing an
              automated online booking and appointment management system.
            </p>
            <p>
              The application allows customers to learn about the garage,
              explore its services and business information, and book
              appointments online at a time that suits them. The aim is to
              reduce the administrative burden of managing appointments manually
              while making the booking process more convenient for customers.
            </p>

            <h2 className="h5 mt-4">2. My Role</h2>
            <p>
              I gathered the requirements directly from the client and designed
              and built the application end-to-end.
            </p>
            <p>
              This included designing the booking workflow and database schema,
              developing the customer-facing application and administrative
              interface, building the appointment booking engine, and
              implementing automated email confirmations and reminders using
              PHPMailer and scheduled cron jobs.
            </p>

            <h2 className="h5 mt-4">3. Technical Highlights</h2>
            <p>
              The application uses a React, CSS and Bootstrap frontend, with a
              PHP backend and MySQL database.
            </p>
            <p>
              The system combines a customer-facing website with a transactional
              booking platform. Garage administrators can configure opening
              hours, manage services and control appointment availability, while
              customers can select available time slots and manage their
              bookings through their own account.
            </p>
            <p>
              The application is responsive and designed to provide a consistent
              experience across desktop and mobile devices. Automated email
              notifications and scheduled reminders reduce the need for manual
              follow-up and help keep customers informed throughout the booking
              process.
            </p>

            <h2 className="h5 mt-4">4. Key Features</h2>
            <ul>
              <li>
                <strong>Public-facing garage information</strong> - including
                contact details and business information
              </li>
              <li>
                <strong>Service catalogue</strong> - allowing customers to
                explore the repairs and services offered
              </li>
              <li>
                <strong>Online appointment booking</strong> - with real-time
                availability and time-slot selection
              </li>
              <li>
                <strong>Automated confirmations</strong> - and appointment
                reminders using PHPMailer and cron jobs
              </li>
              <li>
                <strong>Customer accounts</strong> - with access to upcoming and
                previous appointments
              </li>
              <li>
                <strong>Profile management</strong> - and account deletion
              </li>
              <li>
                <strong>Customer dashboard</strong> - for managing bookings
              </li>
              <li>
                <strong>Administrative dashboard</strong> - showing upcoming
                appointments and schedules
              </li>
              <li>
                <strong>Administration</strong> - of garage opening hours,
                availability and services
              </li>
              <li>
                <strong>Customer notes</strong> - access to notes to support
                appointment preparation and management
              </li>
              <li>
                <strong>Responsive design</strong> - for desktop and mobile
                users
              </li>
            </ul>

            <h2 className="h5 mt-4">5. Outcome</h2>
            <p>
              The application reduces the amount of time the garage spends
              managing appointments manually, allowing mechanics to remain
              focused on their work rather than interrupting jobs to answer
              booking calls.
            </p>
            <p>
              Automated confirmations and reminders help reduce missed
              appointments and the associated loss of time and revenue. At the
              same time, the public-facing application gives potential customers
              an accessible way to discover the garage, understand its services
              and make a booking online.
            </p>
            <p>
              The application combines a customer acquisition channel with an
              operational booking system, helping the garage improve its online
              presence while reducing the administrative effort involved in
              managing appointments.
            </p>

            <p className="loveday-github-inspection-block">
              Interested in the implementation details?{" "}
              <a
                href="https://github.com/Alec-Hajinoff/Loveday_Auto"
                target="_blank"
                rel="noopener noreferrer"
                className="loveday-inline-link"
              >
                Browse code on GitHub
                <span className="loveday-external-icon">&#x2197;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LovedayAuto;
