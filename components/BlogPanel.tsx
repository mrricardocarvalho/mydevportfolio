interface BlogPost {
  title: string;
  tag: string;
  excerpt: string;
  content: string;
}

import React, { useState } from 'react';

interface BlogPanelProps {
  isActive: boolean;
  onOpenModal: (post: BlogPost) => void;
}

export default function BlogPanel({ isActive, onOpenModal }: BlogPanelProps) {
  const posts: BlogPost[] = [
    {
      title: "Designing Upgrade-Safe BC Extensions in 2026",
      tag: "Business Central · Architecture",
      excerpt: "Why I treat every customization as a future upgrade risk—and the patterns I use to keep clients safe.",
      content: `In the rapidly evolving world of Business Central, upgrades are inevitable. Every customization I make is designed with future-proofing in mind. I use **event-driven architecture**, avoid direct table modifications, and implement version-agnostic APIs. This approach ensures that clients can upgrade seamlessly without losing functionality.

Key patterns include using extension v2, implementing proper eventing, and creating modular code that can be easily maintained or replaced. By treating every customization as a potential upgrade risk, I ensure that clients' investments are protected.

The landscape of Business Central is changing fast. With Microsoft's commitment to regular updates and new features, developers must adapt. My methodology focuses on:

1. **Event-Driven Design**: Using publisher-subscriber patterns to decouple business logic from core functionality.
2. **API-First Approach**: Building integrations that work across versions through standardized interfaces.
3. **Modular Architecture**: Creating extensions that can be easily updated or replaced without affecting the entire system.

This future-oriented mindset has saved clients countless hours and dollars in upgrade costs. In 2026 and beyond, upgrade-safe design isn't just best practice—it's essential for business survival.`
    },
    {
      title: "Letting AI Co-Pilot My AL Development",
      tag: "AI · Developer Workflow",
      excerpt: "A practical look at how I use AI to generate scaffolding, tests, and documentation without losing control.",
      content: `AI has become an integral part of my development workflow. I use GitHub Copilot to generate initial code structures, unit tests, and documentation. However, I always review and refine the output to ensure it meets business requirements and follows best practices.

The key is balance: AI accelerates development, but human expertise ensures quality. For Business Central AL development, this means:

- **Rapid Prototyping**: Copilot generates boilerplate code for new objects, pages, and codeunits.
- **Test Generation**: AI suggests comprehensive test scenarios, which I then customize for specific business cases.
- **Documentation**: Automated generation of code comments and technical documentation.

But AI isn't infallible. I always:
1. Verify business logic accuracy
2. Ensure AL best practices are followed
3. Add edge cases that AI might miss
4. Optimize for performance

This hybrid approach has increased my productivity by 40% while maintaining the high-quality standards my clients expect. AI is a powerful tool, but it's most effective when guided by experienced human judgment.`
    },
    {
      title: "From Siloed Systems to a BC-Centric Ecosystem",
      tag: "Integrations · Strategy",
      excerpt: "Lessons from integrating BC with e-commerce, logistics and banking while keeping observability first.",
      content: `Integrating Business Central with external systems requires careful planning. I've learned that a BC-centric approach, where BC acts as the single source of truth, leads to better data consistency and operational efficiency.

Over the years, I've integrated BC with:
- E-commerce platforms (Shopify, WooCommerce)
- Logistics systems (various TMS and WMS solutions)
- Banking APIs (domestic and international)
- CRM systems (Dynamics 365 Sales, Salesforce)

The key lessons learned:

1. **Observability First**: Implement comprehensive logging, monitoring, and alerting from day one.
2. **Standard Protocols**: Use REST, OData, and SOAP for maximum compatibility.
3. **Error Handling**: Design for failure with retry mechanisms and graceful degradation.
4. **Data Synchronization**: Ensure bidirectional sync with conflict resolution strategies.

One major project involved connecting BC with a European banking system. We implemented real-time transaction processing with full audit trails and compliance reporting. The system now handles thousands of transactions daily with 99.9% uptime.

Another integration connected BC with a logistics platform, enabling real-time inventory updates and automated shipping notifications. This reduced order fulfillment time by 60%.

The BC-centric ecosystem approach has transformed how my clients operate, creating seamless workflows that span their entire business.`
    },
    {
      title: "Debugging BC Performance Issues: A Case Study",
      tag: "Business Central · Performance",
      excerpt: "How I identified and resolved a critical performance bottleneck in a client's production environment.",
      content: `A client reported slow performance in their Business Central system during peak hours. After analyzing the code, I found that a custom report was executing inefficient queries on large datasets. By optimizing the queries, adding proper indexing, and implementing caching, we reduced execution time from 10 minutes to under 30 seconds.

The debugging process involved:

1. **Performance Profiling**: Using SQL Profiler and BC's built-in performance tools to identify bottlenecks.
2. **Code Analysis**: Reviewing AL code for inefficient patterns like nested loops and unnecessary data fetches.
3. **Database Optimization**: Adding indexes and optimizing query structures.
4. **Caching Implementation**: Introducing server-side caching for frequently accessed data.

The root cause was a report that joined multiple tables without proper filtering, causing full table scans on million-row datasets. By implementing proper query optimization and adding database indexes, we achieved a 95% performance improvement.

This case study highlights the importance of:
- Regular performance monitoring
- Proper database design
- Efficient AL coding practices
- Proactive optimization before issues become critical

Since the fix, the client has experienced zero performance-related incidents and improved user satisfaction significantly.`
    },
    {
      title: "Building Resilient APIs for BC Integrations",
      tag: "APIs · Best Practices",
      excerpt: "Key considerations for designing APIs that handle failures gracefully and scale with business growth.",
      content: `APIs are the backbone of modern integrations. When building APIs for Business Central, I focus on resilience, scalability, and security. Implementing proper error handling, rate limiting, and retry mechanisms ensures that integrations remain stable even under load.

Key considerations for resilient BC APIs:

1. **Error Handling**: Comprehensive try-catch blocks with meaningful error messages.
2. **Rate Limiting**: Prevent abuse and ensure fair resource allocation.
3. **Retry Logic**: Implement exponential backoff for transient failures.
4. **Versioning**: Support multiple API versions for smooth transitions.
5. **Authentication**: Use OAuth 2.0 and API keys for secure access.
6. **Documentation**: Auto-generated OpenAPI specs for easy integration.

I've designed APIs that handle:
- Network failures and timeouts
- Data validation and sanitization
- Concurrent access and locking
- Large dataset pagination

One API I built handles real-time inventory synchronization between BC and an e-commerce platform. It processes thousands of updates per minute with sub-second response times.

Another API provides secure access to financial data for external reporting tools, with full audit logging and compliance features.

These resilient APIs have enabled my clients to scale their operations while maintaining system stability and security.`
    },
    {
      title: "The Future of ERP: AI-Driven Automation",
      tag: "AI · ERP Trends",
      excerpt: "Exploring how AI can transform ERP systems, with real examples from Business Central implementations.",
      content: `AI is poised to revolutionize ERP systems. In Business Central, AI can automate routine tasks, predict maintenance needs, and provide insights through data analysis. I've implemented AI-powered features that have transformed how my clients operate.

AI applications in BC I've worked on:

1. **Automated Invoice Processing**: AI extracts data from invoices and matches them to purchase orders.
2. **Predictive Maintenance**: ML models predict equipment failures based on usage patterns.
3. **Inventory Optimization**: AI forecasts demand and suggests optimal stock levels.
4. **Chatbot Support**: Natural language interfaces for user assistance and data queries.
5. **Fraud Detection**: Anomaly detection in financial transactions.

The implementation process involves:
- Data preparation and cleansing
- Model training with historical data
- Integration with BC through APIs and extensions
- Continuous monitoring and retraining

One client saw a 70% reduction in invoice processing time after implementing AI-powered automation. Another used predictive analytics to reduce inventory carrying costs by 25%.

However, successful AI implementation requires:
- Quality data as the foundation
- Human oversight for ethical considerations
- Continuous model improvement
- Clear ROI measurement

The future of ERP is intelligent automation that augments human capabilities rather than replacing them. BC with AI becomes not just a transaction system, but a strategic partner in business decision-making.`
    }
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 9; // 3x3 grid per page
  const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage));
  const startIndex = (currentPage - 1) * postsPerPage;
  const pagePosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <section className={`panel ${isActive ? 'active' : ''}`} id="panel-blog">
      <div className="panel-header">
        <div>
          <div className="panel-title">
            <span className="icon"><i className="fa-solid fa-pen-nib"></i></span>
            Blog · Business Central & Personal AI Experiments
          </div>
          <div className="panel-subtitle">
            Short, opinionated pieces on real-world BC challenges, architecture decisions, and how AI augments my day-to-day development.
          </div>
        </div>
        <div className="panel-actions">
          <div className="pill" role="button" tabIndex={0} onClick={() => onOpenModal(posts[0])} onKeyDown={(e) => { if (e.key === 'Enter') onOpenModal(posts[0]); }}>
            <i className="fa-regular fa-rss"></i>
            New entries in under 5 minutes of reading
          </div>
        </div>
      </div>

      <div className="blog-grid">
        {pagePosts.map((post, index) => (
          <div key={startIndex + index} className="blog-card" role="button" tabIndex={0} onClick={() => onOpenModal(post)} onKeyDown={(e) => { if (e.key === 'Enter') onOpenModal(post); }}>
            <div className="blog-card-title">{post.title}</div>
            <div className="blog-card-tag">{post.tag}</div>
            <div>
              {post.excerpt}
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="panel-actions pagination-actions" aria-label="Blog pagination">
          <button className="pagination-btn" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} aria-label="Previous page">
            ← Prev
          </button>

          <div className="pagination-pages" role="navigation" aria-label="Page numbers">
            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  className={`pagination-page ${page === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                  aria-current={page === currentPage ? 'page' : undefined}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button className="pagination-btn" onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} aria-label="Next page">
            Next →
          </button>
        </div>
      )}
    </section>
  );
}