"use client";
import React from 'react';

export default function ConciseCV() {
  return (
    <main className="cv-page prose prose-invert max-w-none p-6">
      <h1>Ricardo Carvalho — Concise Profile</h1>
      <p className="lead">Senior Business Central Developer · Integration & Support Specialist</p>

      <section>
        <h2>Quick Snapshot</h2>
        <p>
          20+ years orchestrating ERP solutions, implementing Business Central extensions, and delivering integrations that scale. I focus on upgrade-safe customizations, robust APIs, and operational efficiency.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:ricardo.sampaio@gmail.com">ricardo.sampaio@gmail.com</a>
        </p>
      </section>

      <section>
        <h2>What I Do</h2>
        <ul>
          <li>Business Central development and extensions (AL)</li>
          <li>System integrations (REST, OData, SOAP)</li>
          <li>Performance tuning and upgrade-safe architecture</li>
        </ul>
      </section>

      <section>
        <h2>Download</h2>
        <p>If you want a downloadable CV, ask via email and I will send the PDF directly.</p>
      </section>
    </main>
  );
}
