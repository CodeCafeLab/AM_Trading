export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="prose max-w-4xl mx-auto">
        <h1 className="text-center">Privacy Policy</h1>
        <p className="text-center">Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>
        <h2>Collecting and Using Your Personal Data</h2>
        <h3>Types of Data Collected</h3>
        <h4>Personal Data</h4>
        <p>
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Usage Data</li>
        </ul>
        <h4>Usage Data</h4>
        <p>
          Usage Data is collected automatically when using the Service.
        </p>
        <p>
          Usage Data may include information such as Your Device's Internet
          Protocol address (e.g. IP address), browser type, browser version,
          the pages of our Service that You visit, the time and date of Your
          visit, the time spent on those pages, unique device identifiers and
          other diagnostic data.
        </p>
        <h2>Use of Your Personal Data</h2>
        <p>The Company may use Personal Data for the following purposes:</p>
        <ul>
          <li>
            <strong>To provide and maintain our Service</strong>, including to
            monitor the usage of our Service.
          </li>
          <li>
            <strong>To contact You:</strong> To contact You by email, telephone
            calls, SMS, or other equivalent forms of electronic communication.
          </li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, You can contact us
          by email at info@amtco.in.
        </p>
      </div>
    </div>
  );
}
