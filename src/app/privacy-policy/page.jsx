import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | SkillSphere',
  description: 'Privacy policy for SkillSphere learning platform.',
};

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold  text-heading text-base-content mb-6">
        Privacy Policy for <span className="text-primary">SkillSphere</span>
      </h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: May 6, 2026</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-base-content mb-3">1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, photo URL, and usage data when you register, log in, or interact with our courses on the SkillSphere platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-base-content mb-3">2. How We Use Your Information</h2>
          <p>
            Your information is used to manage your account, provide access to courses, personalize your learning experience, and send important updates regarding the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-base-content mb-3">3. Data Security & Cookies</h2>
          <p>
            We use industry-standard security measures, including environment variables and encrypted BetterAuth sessions, to protect your data. Cookies are used strictly to maintain your logged-in state and preferences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-base-content mb-3">4. Profile Updates & Retention</h2>
          <p>
            You can update your name and profile picture at any time via the My Profile page. We retain your data only as long as your account remains active.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-base-content mb-3">5. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will take effect immediately once posted on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-base-content mb-3">6. Contact Us</h2>
          <p>
            If you have any questions about this policy, please reach out to our support team through our contact page.
          </p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="btn btn-primary px-8">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;