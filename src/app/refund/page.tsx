export default function RefundPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="prose max-w-4xl mx-auto">
        <h1 className="text-center">Refund Policy</h1>
        <p className="text-center">Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Thank you for your business with AM Trading & Co.
        </p>
        <h2>General Policy</h2>
        <p>
          Due to the nature of our products and services (diesel generators, installation, and maintenance), all sales are final. We do not offer refunds or returns once a product has been delivered or a service has been rendered.
        </p>
        <p>
          This policy is in place because of the significant costs associated with logistics, installation, and customization of power solutions.
        </p>
        <h2>Defective or Damaged Products</h2>
        <p>
          In the rare event that a product is delivered in a defective or damaged state, please contact us immediately within 24 hours of delivery. We will work with you and the manufacturer to address the issue, which may involve repair or replacement as covered under the manufacturer's warranty.
        </p>
        <p>
          Any claims for defects or damages are subject to the terms and conditions of the manufacturer's warranty. We will facilitate this process to ensure a satisfactory resolution.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Refund Policy, please contact us at contact@amtrading.com.
        </p>
      </div>
    </div>
  );
}
