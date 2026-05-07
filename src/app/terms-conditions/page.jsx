import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | SkillSphere',
  description: 'Terms and conditions for using the SkillSphere learning platform.',
};

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-base-content mb-6">
        Terms & <span className="text-primary">Conditions</span>
      </h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: May 6, 2026</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-base-content mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using SkillSphere, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-base-content mb-3">2. User Accounts & Security</h2>
          <p>
            To access certain courses, you must create an account. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-base-content mb-3">3. Course Material & Usage</h2>
          <p>
            All course materials, including videos and documentation, are for your personal and non-commercial use. You may not distribute, modify, or share these materials without prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-base-content mb-3">4. Limitation of Liability</h2>
          <p>
            SkillSphere will not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising from the use or the inability to use the platform or its courses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-base-content mb-3">5. Termination of Use</h2>
          <p>
            We reserve the right to terminate or suspend access to our platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-base-content mb-3">6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
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

export default TermsAndConditions;