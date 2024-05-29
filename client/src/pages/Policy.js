import React from 'react'
import Layout from '../components/layout/Layout'

const Policy = () => {
  return (
    <Layout title={"PrivaCy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="/images/privacy.jpg" alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p>We use administrative, technical, and physical security measures to protect your personal information. While we strive to protect your information, no security measures are perfect or impenetrable, and we cannot guarantee the security of your information.</p>
         <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on our application and updating the "Effective Date" at the top of this policy. You are advised to review this Privacy Policy periodically for any changes.</p>
         <p>Our Services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under the age of 13, we will delete such information from our records.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy
