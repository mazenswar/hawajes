# AQSWAR Digital Archive

**AQSWAR** is the private, family-maintained web archive preserving the lifetime of published journalism, essays, children’s books, plays, and poetry by **Aqeel Swar**, a pioneering Bahraini journalist and writer. This site exists solely to share and safeguard his cultural and historical legacy, and is **not** intended as an open-source or publicly reusable codebase.

## Purpose & Background
- **Legacy preservation**: Aggregates hundreds of articles, daily columns, children’s books, plays, and Bahraini poetry spanning 50+ years.  
- **Private initiative**: Built and maintained by the Alswar family to ensure reliable long-term access for researchers and loved ones.  
- **V1 (Production)**: A fully functional Next.js frontend backed by AWS Amplify DataStore and S3. Visitors can browse by:  
  - **Articles**  
  - **Photography**  
  - **Publications**  

## Architecture & Technology
- **Frontend**: Next.js 14 (App Router), React, SCSS Modules  
- **Backend & Data**: AWS Amplify (GraphQL DataStore models for articles, photos, publications)  
- **Storage & CDN**: AWS S3 hosts media assets (PDFs, images) and JSON metadata  


## Roadmap (V2)
1. **OCR & Indexing**: Custom Node.js scripts combine Tesseract and Google Vision to extract text and build a lightweight search index 
2. **Complete OCR pipeline** for all archived PDFs (5,000+ articles).  
3. **Editorial QA workflow** with dynamic JSON indexes to track review status.
4. **Full-text search** across every article and photo description.  
5. **Performance & SEO**: Optimize image delivery, page speed, and metadata for improved discoverability.  
6. **Enhanced archive features**: User-defined filters, faceted browsing, and historical timelines.

---

## Disclaimer
This repository and its contents are **not** intended for public cloning or direct reuse. Sensitive API keys, environment configurations, and proprietary data models are required to build and run the system. Unauthorized use or distribution is discouraged.

---

## Developer
**Mazen Alswar** — Software Engineer  

🔗 [👤 Website](https://mazenswar.dev) | [💼 LinkedIn](https://www.linkedin.com/in/mazen-alswar/)

© 2025 AQSWAR Project | All rights reserved by the Alswar family
