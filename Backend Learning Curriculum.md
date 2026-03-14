# Software Engineering Curriculum — Learn by Building

A project-based curriculum across 8 tracks and 86 projects. Each level builds on the previous one, teaching new concepts through real, deployable apps.

---

## How to Use This Curriculum

- **Track A** is the core path — start here
- **Tracks B–H** can be interleaved alongside Track A
- Each project lists what you build, what you learn, and what tech to use
- Don't skip levels within a track — each one adds building blocks you need later
- Suggested interleaving order at the bottom

---

# Track A: Backend & Web (Levels 0–23)

> From zero to platform engineer

---

### A0: Git & Version Control — Collaborative Story Writer

**Build:** A collaborative story project where multiple "authors" (you simulating different people) contribute chapters using Git branches, merging, and resolving conflicts

**Concepts:**
- **Git fundamentals** (init, add, commit, log, diff)
- Branches and merging
- Merge conflicts and how to resolve them
- Pull requests and code review workflow
- Rebasing vs merging — when and why
- `.gitignore` and what not to commit
- GitHub/GitLab as a collaboration platform

**Tech:** Git + GitHub

---

### A1: Static Site + Form Handler

**Build:** A personal portfolio site with a contact form that emails you

**Concepts:**
- What a server actually does (receives requests, sends responses)
- HTTP methods (GET vs POST)
- Environment variables (storing your email API key)
- Deploying something live (Vercel, Railway, or Render)

**Tech:** Next.js or Express.js

---

### A2: CRUD App — Todo List or Bookmark Manager

**Build:** A todo app where items persist (don't disappear on refresh)

**Concepts:**
- What a **database** is and why you need one
- CRUD operations (Create, Read, Update, Delete) — the backbone of almost every app
- SQL basics or an ORM like Prisma
- REST API design (`GET /todos`, `POST /todos`, `DELETE /todos/:id`)
- How frontend talks to backend (fetch/axios)

**Tech:** Express or Next.js API routes + SQLite or Postgres

---

### A3: Auth App — Notes App with Login

**Build:** A notes app where each user only sees their own notes

**Concepts:**
- **Authentication** (who are you?) vs **Authorization** (what can you access?)
- Sessions, cookies, or JWT tokens
- Password hashing (bcrypt)
- Protected routes / middleware
- Database relationships (users have many notes)

**Tech:** Add NextAuth, Lucia, or Clerk to your stack

---

### A4: File Uploads — Image Gallery or Meme Generator

**Build:** An app where users upload images, optionally add text, and browse a gallery

**Concepts:**
- File uploads and multipart form data
- Cloud storage (S3, Cloudflare R2, or Supabase Storage)
- Image processing/resizing
- Serving static assets vs dynamic content
- Pagination (loading 20 images at a time)

**Tech:** Add an S3-compatible storage provider

---

### A5: Real-time App — Chat Room or Collaborative Whiteboard

**Build:** A group chat where messages appear instantly without refreshing

**Concepts:**
- **WebSockets** — persistent two-way connection (vs HTTP request/response)
- Real-time events and broadcasting
- Online/offline presence
- Scaling challenges (what happens with 1000 users?)

**Tech:** Socket.io or Partykit or Supabase Realtime

---

### A6: API + Third-Party Integrations — Dashboard App

**Build:** A personal dashboard that pulls weather, GitHub commits, calendar events, and news

**Concepts:**
- Consuming **external APIs** (REST, OAuth)
- API keys vs OAuth tokens
- Rate limiting and caching (don't hit APIs every second)
- Background jobs / cron tasks ("refresh data every hour")
- Error handling when external services fail

**Tech:** Add Redis for caching, node-cron or Trigger.dev for scheduled jobs

---

### A7: AI-Powered App — AI Writing Assistant or Chatbot

**Build:** An app where users type a prompt and get AI-generated responses, with conversation history

**Concepts:**
- Working with **LLM APIs** (Claude API, streaming responses)
- Streaming data to the frontend (Server-Sent Events)
- Token usage tracking and cost management
- Prompt engineering on the backend
- Storing conversation history in a database

**Tech:** Claude API / Anthropic SDK + streaming

---

### A8: Marketplace / SaaS — Paid Tool or Marketplace

**Build:** A SaaS tool (e.g., invoice generator, resume builder) with free/paid tiers

**Concepts:**
- **Payments** (Stripe Checkout, subscriptions, webhooks)
- Webhook architecture (Stripe tells YOUR server when payment succeeds)
- Role-based access (free vs pro users)
- Billing portals, cancellation flows
- Transactional emails (Resend, SendGrid)

**Tech:** Add Stripe + a transactional email service

---

### A9: Queue-Based App — Video Processing Platform or Bulk Emailer

**Build:** An app where users upload videos and get a processed/compressed version back later

**Concepts:**
- **Job queues** — why some work can't happen during a request
- Background workers and async processing
- Job status tracking (pending → processing → done)
- Retry logic and failure handling
- Horizontal scaling (multiple workers)

**Tech:** BullMQ + Redis, or Inngest

---

### A10: Full Platform — Multi-tenant App with Admin Panel

**Build:** A project management tool (mini Linear/Trello) where teams have workspaces

**Concepts:**
- **Multi-tenancy** (data isolation between organizations)
- Complex database schema design (workspaces → projects → tasks → comments)
- Role-based permissions (owner, admin, member, viewer)
- Audit logs and activity feeds
- Database migrations and schema evolution
- Performance at scale (indexing, query optimization)

**Tech:** Full stack of everything above, add an admin dashboard

---

### A11: Search — Recipe App or Knowledge Base

**Build:** An app with thousands of entries where users can search by keyword, filter, and sort with instant results

**Concepts:**
- **Full-text search** vs simple `WHERE LIKE '%term%'`
- Search engines (Meilisearch, Typesense, or Elasticsearch)
- Indexing strategies — why search is a separate concern from your database
- Faceted filtering (by category, rating, date)
- Relevance ranking and fuzzy matching
- Debouncing and search-as-you-type UX

**Tech:** Meilisearch or Typesense + Postgres

---

### A12: Notifications System — Social App or Team Tool

**Build:** A social feed app where users follow each other, post updates, and get notified

**Concepts:**
- **Push notifications** (web push, mobile push)
- Notification channels (in-app, email, SMS, push)
- Fan-out problem (user posts → notify 10,000 followers)
- Read/unread state management
- User preference management ("mute this thread")
- Event-driven architecture

**Tech:** Add web push API, Novu or Knock for multi-channel notifications

---

### A13: Geolocation — Delivery Tracker or Store Finder

**Build:** An app that shows nearby restaurants/stores on a map, with real-time delivery tracking

**Concepts:**
- **Geospatial queries** (find all points within 5km)
- PostGIS or geospatial indexes
- Maps integration (Mapbox, Google Maps)
- Real-time location updates
- Distance and route calculations
- Geofencing ("alert when driver is near")

**Tech:** PostGIS + Mapbox or Leaflet

---

### A14: GraphQL API — E-commerce Storefront

**Build:** An online store with products, categories, reviews, cart, and flexible querying

**Concepts:**
- **GraphQL** vs REST — when and why
- Schemas, resolvers, queries, mutations
- N+1 query problem and DataLoaders
- Nested relationships (product → reviews → reviewer)
- API versioning strategies
- Frontend flexibility (fetch exactly what you need)

**Tech:** Apollo Server or Pothos + Postgres

---

### A15: Testing & CI/CD — Refactor Any Previous Project

**Build:** Take your A8 SaaS app and make it production-grade with full test coverage and automated deploys

**Concepts:**
- **Unit tests**, integration tests, end-to-end tests
- Test databases and fixtures/seeding
- Mocking external services (Stripe, email)
- CI pipelines (GitHub Actions)
- Automated deploys on merge
- Database migrations in CI
- Staging vs production environments

**Tech:** Vitest or Jest + Playwright + GitHub Actions

---

### A16: Rate Limiting & Security — Public API Platform

**Build:** A developer platform where others can sign up, get API keys, and call your API

**Concepts:**
- **Rate limiting** (token bucket, sliding window)
- API key generation and management
- Request throttling and abuse prevention
- CORS, CSRF, and common attack vectors
- Input validation and sanitization
- Logging, monitoring, and alerting
- API documentation (OpenAPI/Swagger)

**Tech:** Add rate-limiter-flexible + Swagger UI

---

### A17: Microservices — Event Ticketing Platform

**Build:** A concert/event ticketing system with separate services for events, orders, payments, and notifications

**Concepts:**
- **Microservices** vs monolith — tradeoffs
- Service-to-service communication (HTTP, gRPC, message queues)
- Event-driven architecture (order placed → payment processed → ticket issued → email sent)
- Message brokers (RabbitMQ, Kafka, or Redis Streams)
- Distributed transactions and eventual consistency
- Service discovery and API gateways
- Docker and containerization

**Tech:** Docker + RabbitMQ or Kafka + multiple services

---

### A18: Caching & Performance — High-Traffic News Aggregator

**Build:** A Reddit/HackerNews clone that handles thousands of concurrent readers with fast page loads

**Concepts:**
- **Caching layers** (in-memory, Redis, CDN)
- Cache invalidation strategies (the hard problem)
- Database read replicas
- Connection pooling
- Load testing (how many requests can you handle?)
- N+1 queries and query optimization
- Edge computing and CDN caching

**Tech:** Redis + k6 or Artillery for load testing

---

### A19: Data Pipeline — Analytics Dashboard

**Build:** A tool that ingests millions of events (page views, clicks) and shows real-time analytics charts

**Concepts:**
- **Event ingestion** at scale (batching, buffering)
- Time-series data and aggregations
- OLTP vs OLAP databases
- ClickHouse or TimescaleDB for analytics queries
- ETL pipelines (Extract, Transform, Load)
- Data retention policies
- Pre-aggregation vs query-time aggregation

**Tech:** ClickHouse or TimescaleDB + a streaming ingestion layer

---

### A20: Infrastructure as Code — Deploy Everything from Scratch

**Build:** Take your A17 microservices app and deploy it to the cloud with full infrastructure automation

**Concepts:**
- **Infrastructure as Code** (Terraform, Pulumi, or SST)
- Cloud services (AWS/GCP: VPC, load balancers, managed databases)
- Container orchestration (Docker Compose → Kubernetes basics)
- Secrets management
- SSL/TLS certificates and DNS
- Blue-green and canary deployments
- Monitoring and observability (logs, metrics, traces)
- Cost optimization

**Tech:** Terraform or SST + AWS or Fly.io + Grafana

---

### A21: Observability — Instrument a Production App

**Build:** Take any previous project and add full observability — you should be able to answer "why is it slow?" and "what just broke?" from your dashboards alone

**Concepts:**
- **The three pillars**: logs, metrics, traces
- Structured logging (JSON logs, log levels, correlation IDs)
- Distributed tracing (follow a request across services)
- Metrics and dashboards (request rate, error rate, latency — the RED method)
- Alerting rules and on-call (PagerDuty, OpsGenie)
- Error tracking (Sentry)
- How to debug production issues without SSH-ing into a server

**Tech:** OpenTelemetry + Grafana + Loki + Tempo, or Datadog

---

### A22: Database Diversity — Multi-Database Content Platform

**Build:** A content platform that uses the right database for each job — Postgres for users/posts, Redis for sessions/cache, MongoDB for flexible content schemas, Neo4j for social graph ("people you may know")

**Concepts:**
- **Polyglot persistence** — different databases for different problems
- Document databases (MongoDB) — when schema flexibility matters
- Graph databases (Neo4j) — relationships as first-class citizens
- Key-value stores (Redis) — beyond just caching
- Column-oriented databases (Cassandra, ScyllaDB) — write-heavy workloads
- How to choose the right database for a given problem
- Data synchronization across multiple databases

**Tech:** Postgres + MongoDB + Redis + Neo4j

---

### A23: Feature Flags & Experimentation — A/B Testing Platform

**Build:** A system where you can roll out features to 10% of users, run A/B tests, and measure which version performs better

**Concepts:**
- **Feature flags** (toggle features without deploying)
- Gradual rollouts and canary releases
- A/B testing and statistical significance
- User segmentation (show feature X to premium users only)
- Kill switches (instantly disable a broken feature)
- How LaunchDarkly, Statsig, and Optimizely work

**Tech:** Custom feature flag service or GrowthBook + your analytics backend

---

# Track B: Algorithms & Data Structures (Levels 1–6)

> Build algorithmic thinking through real projects

---

### B1: Array & String Challenges — CLI Quiz Game

**Build:** A terminal game that scrambles words, checks anagrams, and scores the player

**Concepts:**
- **Arrays, strings, loops, sorting**
- Big O notation — why one solution is faster than another
- Hash maps for fast lookups
- Basic problem-solving patterns (two pointers, sliding window)

**Tech:** Python or JavaScript (no framework — raw code)

---

### B2: Stacks & Queues — Markdown Parser or Calculator

**Build:** A calculator that handles parentheses and operator precedence, or a Markdown-to-HTML converter

**Concepts:**
- **Stacks** (LIFO) and **queues** (FIFO)
- Parsing and tokenization
- Recursion vs iteration
- How programming languages actually evaluate expressions

**Tech:** Pure Python or TypeScript

---

### B3: Trees — File Explorer or Org Chart Builder

**Build:** A visual file tree browser, or an app that displays an organizational hierarchy

**Concepts:**
- **Tree data structures** (binary trees, n-ary trees)
- Tree traversal (depth-first, breadth-first)
- Recursion in practice
- Parent-child relationships in databases

**Tech:** Python/JS + a simple UI to visualize the tree

---

### B4: Graphs — Route Planner or Social Network Visualizer

**Build:** An app that finds the shortest path between two cities, or shows "degrees of separation" between people

**Concepts:**
- **Graphs** (nodes and edges)
- BFS and DFS on graphs
- Dijkstra's shortest path
- Adjacency lists vs matrices
- Real-world graph problems (recommendations, routing, dependencies)

**Tech:** Python + NetworkX or D3.js for visualization

---

### B5: Dynamic Programming — Budget Optimizer or Game AI

**Build:** A tool that finds the best combination of items within a budget (knapsack), or a tic-tac-toe AI that never loses

**Concepts:**
- **Dynamic programming** (breaking big problems into subproblems)
- Memoization vs tabulation
- Minimax algorithm (game theory)
- When brute force fails and you need smarter approaches

**Tech:** Pure Python

---

### B6: Sorting & Searching at Scale — Build Your Own Database Index

**Build:** A mini database engine that can insert, search, and range-query millions of records

**Concepts:**
- **B-trees** — how databases actually find data fast
- Binary search and its variations
- Sorting algorithms and their tradeoffs
- How indexing works under the hood
- Disk vs memory tradeoffs

**Tech:** Python or Rust

---

# Track C: Security & Compliance (Levels 1–8)

> Think like an attacker, build like a defender, ship like a regulated company

---

### C1: Vulnerable App — Build It Broken on Purpose

**Build:** A deliberately insecure web app (like a mini OWASP Juice Shop)

**Concepts:**
- **SQL injection** — how and why it works
- **XSS** (Cross-Site Scripting) — injecting scripts into pages
- **CSRF** (Cross-Site Request Forgery)
- Why input validation matters
- How to think like an attacker

**Tech:** Express + raw SQL (no ORM, no sanitization — on purpose)

---

### C2: Fix It — Harden Your Vulnerable App

**Build:** Take your C1 app and patch every vulnerability

**Concepts:**
- **Parameterized queries** (prevent SQL injection)
- Content Security Policy headers
- CSRF tokens
- Helmet.js and security headers
- HTTPS, HSTS, secure cookies
- Dependency auditing (`npm audit`)

**Tech:** Same app, now with security layers

---

### C3: Auth Deep Dive — OAuth Provider

**Build:** Your own OAuth2 authorization server that other apps can log into

**Concepts:**
- **OAuth2 flows** (authorization code, PKCE)
- Token lifecycle (access tokens, refresh tokens, expiry)
- JWTs in depth (header, payload, signature, RS256 vs HS256)
- Scopes and consent screens
- How "Login with Google" actually works under the hood

**Tech:** Node.js or Python from scratch (no auth library)

---

### C4: Encryption — Encrypted Messaging App

**Build:** A chat app where messages are encrypted end-to-end (only sender and receiver can read them)

**Concepts:**
- **Symmetric vs asymmetric encryption**
- Public/private key pairs
- End-to-end encryption design
- Key exchange (Diffie-Hellman)
- Hashing vs encryption vs encoding
- Why you never roll your own crypto in production (but doing it once teaches you why)

**Tech:** Node.js + Web Crypto API or Python + cryptography library

---

### C5: Network Security — Port Scanner & Packet Analyzer

**Build:** A tool that scans a network for open ports and analyzes traffic patterns (on YOUR network only)

**Concepts:**
- **TCP/IP fundamentals** (how the internet actually works)
- Ports, protocols, handshakes
- How tools like Nmap work
- Packet structure and analysis
- Firewalls and network segmentation
- Ethical hacking principles

**Tech:** Python + scapy (authorized testing only)

---

### C6: CTF Challenges — Solve Capture The Flag Problems

**Build:** Solve 20+ CTF challenges across categories, then build your own CTF platform

**Concepts:**
- **Reverse engineering** basics
- Binary exploitation concepts
- Web exploitation techniques
- Forensics and steganography
- Cryptography attacks
- How security professionals think

**Tech:** Python + CTF platforms (PicoCTF, OverTheWire, HackTheBox)

---

### C7: Compliance & Privacy — GDPR-Compliant User Data Platform

**Build:** A user data platform that handles consent, data export ("download my data"), account deletion, and audit trails for regulators

**Concepts:**
- **GDPR** — right to access, right to deletion, consent management
- **SOC2** — what it means and how it affects engineering
- **HIPAA** basics — if you ever touch health data
- Data retention policies and automated deletion pipelines
- Consent banners that actually work (not just a cookie popup)
- Audit trails for regulatory review
- Data anonymization and pseudonymization
- Privacy by design — building it in, not bolting it on

**Tech:** Postgres + data export pipeline + consent management system

---

### C8: Supply Chain Security — Secure Build Pipeline

**Build:** A CI/CD pipeline that verifies every dependency, signs every artifact, and catches vulnerabilities before they reach production

**Concepts:**
- **Software supply chain attacks** (how SolarWinds, Log4Shell happened)
- Dependency scanning and Software Bill of Materials (SBOM)
- Container image scanning
- Code signing and artifact verification
- Secrets scanning (preventing leaked API keys)
- Reproducible builds
- How to evaluate and trust open-source dependencies

**Tech:** GitHub Actions + Snyk or Trivy + Sigstore

---

# Track D: Hardware & Robotics (Levels 1–7)

> From blinking LEDs to autonomous robots

---

### D1: Blink & Sense — LED Controller + Sensor Reader

**Build:** An Arduino that blinks LEDs in patterns and reads temperature/light sensors, displayed on a serial monitor

**Concepts:**
- **Digital vs analog signals**
- GPIO pins (General Purpose Input/Output)
- Serial communication (Arduino ↔ computer)
- Basic circuits (resistors, LEDs, breadboards)
- The Arduino IDE and C/C++ basics
- What "embedded programming" means

**Tech:** Arduino Uno + LEDs + sensors

---

### D2: Connected Device — WiFi Thermometer with Web Dashboard

**Build:** A sensor that reads temperature and humidity and sends data to a web dashboard over WiFi

**Concepts:**
- **IoT (Internet of Things)** fundamentals
- WiFi-enabled microcontrollers (ESP32)
- MQTT protocol (lightweight messaging for devices)
- Sending sensor data to a backend
- Bridging hardware and your web skills from Track A

**Tech:** ESP32 + MQTT + your A2 or A6 backend

---

### D3: Motor Control — Robot Car or Robotic Arm

**Build:** A wheeled robot you can control from your phone, or a robotic arm that picks up objects

**Concepts:**
- **Motors** (DC, servo, stepper) and how to drive them
- PWM (Pulse Width Modulation) for speed control
- Motor drivers (H-bridge, L298N)
- Bluetooth or WiFi remote control
- Power management (batteries, voltage regulators)
- Basic mechanical concepts

**Tech:** Arduino or ESP32 + motor driver + chassis kit

---

### D4: Autonomous Robot — Line Follower or Obstacle Avoider

**Build:** A robot that navigates on its own using sensors — follows a line on the floor or avoids walls

**Concepts:**
- **Sensor fusion** (combining multiple sensor inputs)
- PID control (smooth, proportional reactions)
- IR sensors, ultrasonic distance sensors
- Decision loops (sense → think → act)
- Tuning and calibration
- The basics of autonomous systems

**Tech:** Arduino + IR/ultrasonic sensors + motor chassis

---

### D5: Computer Vision Robot — Raspberry Pi Face Tracker

**Build:** A robot with a camera that detects and follows faces or specific objects

**Concepts:**
- **Computer vision** basics (OpenCV)
- Camera modules and image processing
- Running Python on Raspberry Pi
- Servo control based on vision input
- Processing constraints on limited hardware
- Edge computing (processing on-device vs cloud)

**Tech:** Raspberry Pi + Pi Camera + OpenCV + servos

---

### D6: Home Automation — Smart Home System

**Build:** A system that controls lights, reads sensors, and automates rules ("if motion detected after 10pm, turn on hallway light")

**Concepts:**
- **Home automation protocols** (MQTT, Zigbee, Z-Wave)
- Relay modules (controlling high-voltage devices safely)
- Rule engines and automation logic
- Scheduling and timers on embedded devices
- Building a web/mobile control panel
- Safety with mains electricity

**Tech:** Raspberry Pi + ESP32 nodes + relays + Home Assistant or custom backend

---

### D7: Drone or Balancing Robot — PID & Flight Control

**Build:** A self-balancing two-wheeled robot or a basic quadcopter

**Concepts:**
- **IMU sensors** (accelerometer + gyroscope)
- Advanced PID tuning
- Real-time control loops (microsecond timing matters)
- Sensor filtering (Kalman filter basics)
- 3D orientation and math
- Why robotics is one of the hardest engineering disciplines

**Tech:** Arduino/ESP32 + MPU6050 IMU + motors

---

# Track E: Architectures & Platforms (Levels 1–24)

> Same backend skills, radically different shapes

---

### E1: Static Site + Headless CMS — Blog or Magazine

**Build:** A blog where a non-technical person can write and publish articles from a CMS dashboard, and the site auto-updates

**Concepts:**
- **Headless CMS** (content managed separately from how it's displayed)
- Static Site Generation (SSG) vs Server-Side Rendering (SSR)
- Webhooks ("content changed → rebuild site")
- CDN deployment (site is just files, served globally fast)
- Structured content modeling (authors, categories, tags, rich text)
- How most marketing sites and blogs actually work

**Tech:** Astro or Next.js + Sanity, Strapi, or Contentful

---

### E2: Traditional CMS — Client Website with Page Builder

**Build:** A small business website where the owner can drag-and-drop pages, edit text, upload photos — no code needed

**Concepts:**
- **Traditional/monolithic CMS** (WordPress, Payload CMS)
- Themes and templates
- Plugin/extension architecture
- WYSIWYG editors and page builders
- The difference between headless and traditional CMS
- Why WordPress powers 40% of the web (and its tradeoffs)

**Tech:** WordPress (PHP) or Payload CMS (Node.js)

---

### E3: Admin Dashboard — Internal Tool for a Business

**Build:** A dashboard for a fictional e-commerce company: manage orders, view sales charts, edit products, manage users

**Concepts:**
- **Admin panels** and internal tools
- Role-based access (super admin, manager, support agent)
- Data tables with sort, filter, search, pagination
- Charts and data visualization
- Bulk actions (approve 50 orders at once)
- Audit logs ("who changed what and when")
- Why internal tools are 80% of enterprise software

**Tech:** Refine, AdminJS, or React Admin + your own API

---

### E4: Monolith with Server-Rendered Pages — Forum or Reddit Clone

**Build:** A classic forum with threads, replies, upvotes, user profiles, moderation tools

**Concepts:**
- **Monolithic architecture** (one app does everything)
- Server-side rendering with templates (not a SPA)
- Session-based auth with cookies
- Database-heavy read patterns
- Pagination, sorting, threading
- How the "old web" was built (and why it was fast)
- MVC pattern (Model-View-Controller)

**Tech:** Rails, Django, or Laravel — pick one to understand the pattern

---

### E5: Single Page App (SPA) + REST API — Project Management Tool

**Build:** A Trello-like kanban board with drag-and-drop, real-time updates, and a completely separate frontend and backend

**Concepts:**
- **SPA architecture** (frontend and backend are separate apps)
- REST API design in depth (versioning, pagination, error formats)
- CORS (why your frontend can't talk to your backend at first)
- JWT auth between separate frontend/backend
- State management on the frontend
- API documentation (Swagger/OpenAPI)
- Deploying two separate apps that talk to each other

**Tech:** React or Vue (frontend) + Express or FastAPI (backend)

---

### E6: Serverless — URL Shortener or Image Resizer

**Build:** A link shortener (like bit.ly) that handles millions of redirects with zero server management

**Concepts:**
- **Serverless functions** (no server to manage, pay per request)
- Cold starts and their tradeoffs
- Edge functions (code runs close to the user)
- Serverless databases (PlanetScale, Neon, DynamoDB)
- When serverless makes sense vs when it doesn't
- Vendor lock-in concerns

**Tech:** AWS Lambda or Cloudflare Workers + DynamoDB or Turso

---

### E7: Mobile App + Shared Backend — Fitness Tracker

**Build:** A mobile app (iOS/Android) AND a web app that share the same backend — track workouts, see progress charts, sync across devices

**Concepts:**
- **Shared API serving multiple clients** (web, iOS, Android)
- React Native or Flutter for cross-platform mobile
- Mobile-specific concerns (offline support, push notifications, app store)
- API design for mobile (bandwidth, battery, latency)
- Token-based auth for mobile (no cookies)
- Deep linking and app/web handoff
- How one backend serves many frontends

**Tech:** React Native or Flutter + your existing API backend

---

### E8: Progressive Web App (PWA) — Offline-First Recipe Book

**Build:** A recipe app that works fully offline — browse, save, and even add recipes without internet, then syncs when back online

**Concepts:**
- **Service Workers** (code that runs in the background of a browser)
- Cache strategies (cache-first, network-first, stale-while-revalidate)
- IndexedDB (browser-side database)
- Offline-first architecture
- Sync conflicts ("you edited offline, someone else edited online")
- Installable web apps (add to home screen)
- Background sync

**Tech:** Next.js or Vite + Workbox + IndexedDB

---

### E9: Desktop App — Markdown Editor or Music Player

**Build:** A native desktop app (Mac/Windows/Linux) that works with local files — a markdown editor with preview, or a local music library player

**Concepts:**
- **Desktop app architecture** (Electron or Tauri)
- Working with the local filesystem
- Native menus, keyboard shortcuts, system tray
- IPC (Inter-Process Communication) — frontend ↔ backend within one app
- Auto-updates
- Packaging and distribution (DMG, EXE, AppImage)
- Why Electron apps use so much RAM (and how Tauri fixes it)

**Tech:** Tauri (Rust backend, web frontend) or Electron

---

### E10: Browser Extension — Tab Manager or Web Clipper

**Build:** A Chrome/Firefox extension that saves articles, highlights text, or manages tabs — with a backend that syncs across devices

**Concepts:**
- **Browser extension architecture** (content scripts, background scripts, popup)
- Chrome/Firefox extension APIs
- Injecting UI into other people's websites
- Message passing between extension parts
- Extension store publishing
- Privacy considerations (extensions can see everything)

**Tech:** Vanilla JS or React + Chrome Extension Manifest V3

---

### E11: Event-Driven Architecture — Order Processing System

**Build:** An e-commerce order system where: order placed → payment charged → inventory updated → warehouse notified → email sent — all as separate, independent steps

**Concepts:**
- **Event-driven architecture** (services react to events, not direct calls)
- Message brokers and event buses
- Event sourcing (storing what happened, not just current state)
- CQRS (separate read and write models)
- Saga pattern (coordinating multi-step processes)
- Dead letter queues (when events fail)
- Eventually consistent systems

**Tech:** Node.js + RabbitMQ or Kafka + multiple services

---

### E12: Multi-Tenant SaaS with White-Label — Form Builder Platform

**Build:** A Typeform-like form builder where each customer gets their own subdomain (acme.yourapp.com), custom branding, and isolated data

**Concepts:**
- **Multi-tenancy strategies** (shared DB vs DB per tenant vs schema per tenant)
- Subdomain routing and wildcard DNS
- White-labeling (custom logos, colors, domains per customer)
- Tenant data isolation and security
- Usage-based billing
- Tenant-aware background jobs
- How platforms like Shopify or Notion actually work

**Tech:** Next.js + Postgres (row-level security) + Stripe + wildcard subdomains

---

### E13: Monorepo Full Platform — Slack Clone (Web + Desktop + Mobile + API)

**Build:** A team messaging app with web app, desktop app, mobile app, shared component library, and API — all in one repository

**Concepts:**
- **Monorepo architecture** (one repo, many apps)
- Shared packages (UI components, API client, types, validation)
- Turborepo or Nx for build orchestration
- Code sharing between web, mobile, and desktop
- Consistent design system across platforms
- Managing complexity at scale
- How big companies actually organize code

**Tech:** Turborepo or Nx + Next.js + React Native + Tauri + shared packages

---

### E14: Plugin System — Note-Taking App with Extensions

**Build:** A note-taking app (like Obsidian) where third-party developers can write plugins that add features

**Concepts:**
- **Plugin architecture** (how to let others extend your app safely)
- Sandboxed execution (plugins can't break your app)
- Plugin API design (what do you expose?)
- Plugin marketplace and distribution
- Hooks and lifecycle events
- Security boundaries (plugins shouldn't access other users' data)
- How VS Code, Figma, and Obsidian extension systems work

**Tech:** Your choice of stack + iframe sandboxing or WASM for plugin isolation

---

### E15: API Gateway + BFF — Travel Booking Aggregator

**Build:** A travel site that searches flights, hotels, and car rentals from multiple providers, with a mobile app and web app each getting a tailored API

**Concepts:**
- **API Gateway pattern** (single entry point to many services)
- **BFF (Backend for Frontend)** — different APIs for web vs mobile
- Request aggregation (one frontend call → multiple backend calls)
- Circuit breaker pattern (graceful degradation when a provider is down)
- Response transformation and caching per client
- GraphQL federation as an alternative
- How Expedia/Kayak-type sites actually work

**Tech:** Kong or custom Node.js gateway + multiple upstream APIs

---

### E16: Headless E-Commerce — Custom Storefront

**Build:** An online store with a fully custom frontend, but using a headless commerce backend for products, cart, checkout, and inventory

**Concepts:**
- **Headless commerce** (Shopify Hydrogen, Medusa, Saleor)
- Separation of commerce logic from presentation
- Cart and checkout flows
- Inventory management
- Order lifecycle (placed → paid → fulfilled → shipped → delivered)
- Why companies move away from all-in-one platforms

**Tech:** Medusa or Shopify Storefront API + Next.js

---

### E17: Streaming / Media Platform — Video Course Site or Podcast Host

**Build:** A platform where creators upload video/audio content, and users can stream it with adaptive quality

**Concepts:**
- **Media streaming** (HLS, DASH — adaptive bitrate)
- Video transcoding pipelines (upload → process → multiple qualities)
- CDN for media delivery
- DRM basics (protecting paid content)
- Progress tracking and resume playback
- Large file handling and chunked uploads
- Why Netflix/YouTube are engineering marvels

**Tech:** FFmpeg + Mux or Cloudflare Stream + your backend

---

### E18: Low-Code / No-Code Builder — App Builder Platform

**Build:** A platform where users visually build simple apps (forms, dashboards, workflows) without writing code

**Concepts:**
- **Visual programming / low-code architecture**
- Schema-driven UI rendering (JSON → UI)
- Drag-and-drop editors
- User-defined data models at runtime
- Workflow/automation engines ("when X happens, do Y")
- How Retool, Airtable, and Zapier work under the hood
- The meta-problem: building a tool that builds tools

**Tech:** React + a custom JSON schema renderer + a workflow engine

---

### E19: Accessible App — Government Services Portal

**Build:** A public-facing portal (apply for permits, check status, upload documents) that is fully accessible to people with disabilities

**Concepts:**
- **WCAG 2.2** compliance levels (A, AA, AAA)
- Semantic HTML — why divs with click handlers are not buttons
- ARIA attributes — when and how to use them
- Keyboard navigation — every feature must work without a mouse
- Screen reader testing (VoiceOver, NVDA)
- Color contrast, focus indicators, skip links
- Accessible forms (labels, error messages, required fields)
- Automated testing (axe-core) + manual testing
- Why accessibility is a legal requirement in many countries

**Tech:** Next.js + axe-core + screen reader testing

---

### E20: Internationalized App — Multi-Language Marketplace

**Build:** A marketplace app that works in English, Spanish, Arabic (RTL), and Japanese — with localized dates, currencies, and content

**Concepts:**
- **i18n** (internationalization) vs **l10n** (localization)
- Translation management (key-value files, translation platforms)
- RTL (right-to-left) layout support
- Date, time, number, and currency formatting per locale
- Pluralization rules (English: 1 item/2 items; Arabic has 6 plural forms)
- URL strategies (/en/products vs en.site.com)
- Content translation workflows (human translators, machine translation)
- Unicode and character encoding edge cases

**Tech:** next-intl or i18next + Crowdin or Lokalise

---

### E21: Web3 dApp — Token-Gated Community or NFT Gallery

**Build:** A decentralized app where users connect their crypto wallet, and access to content is based on tokens they hold

**Concepts:**
- **Blockchain fundamentals** (blocks, transactions, consensus)
- Smart contracts (Solidity basics)
- Wallet connection (MetaMask, WalletConnect)
- Reading on-chain data
- Token standards (ERC-20, ERC-721)
- Gas fees and transaction lifecycle
- Decentralized storage (IPFS)
- When Web3 makes sense vs when it doesn't (honest assessment)

**Tech:** Ethers.js or Viem + Hardhat + IPFS

---

### E22: 3D & Spatial — AR Product Viewer or Virtual Gallery

**Build:** A web app where users can view 3D products (rotate, zoom) or walk through a virtual gallery, with optional AR ("see this furniture in your room")

**Concepts:**
- **3D on the web** (Three.js, React Three Fiber)
- 3D model formats (glTF, USDZ)
- Lighting, cameras, and scene composition
- WebXR for augmented reality
- Performance optimization for 3D (LOD, instancing)
- Spatial computing concepts (Apple Vision Pro, Meta Quest)
- How IKEA, Shopify, and Apple use AR

**Tech:** Three.js or React Three Fiber + WebXR

---

### E23: Voice Interface — Voice-Controlled Smart Assistant

**Build:** A voice-controlled app that understands spoken commands, performs actions, and speaks responses back

**Concepts:**
- **Speech-to-text** (Web Speech API, Whisper, Deepgram)
- **Text-to-speech** (natural-sounding voice synthesis)
- Intent recognition (understanding what the user wants)
- Wake words and continuous listening
- Conversation state management for voice
- Multimodal interfaces (voice + screen)
- Alexa Skill or Google Action development
- Privacy concerns with always-on microphones

**Tech:** Web Speech API or Whisper + your backend + an LLM for intent

---

### E24: Developer Tooling — CLI Tool, Linter, or Code Generator

**Build:** A developer tool that other engineers use — a CLI that scaffolds projects, a custom ESLint plugin, or a code generator that reads a schema and outputs typed API clients

**Concepts:**
- **CLI architecture** (commands, flags, arguments, interactive prompts)
- Terminal UI (colors, progress bars, spinners)
- Publishing to npm/PyPI
- AST (Abstract Syntax Tree) manipulation for linters/codemods
- Code generation from schemas (OpenAPI → TypeScript client)
- Versioning and changelogs (semver)
- How tools like Vite, ESLint, and Prisma are built

**Tech:** Commander.js or oclif (CLI) + AST tools (ts-morph, jscodeshift)

---

# Track F: AI & Machine Learning (Levels 1–8)

> From API calls to building intelligent systems

---

### F1: RAG App — Chat With Your Documents

**Build:** An app where you upload PDFs/docs and then ask questions — the AI answers based on YOUR documents, not its general knowledge

**Concepts:**
- **RAG** (Retrieval Augmented Generation) — the most important AI pattern of 2024–2026
- Text chunking strategies (how to split documents for search)
- **Embeddings** — turning text into numbers that capture meaning
- **Vector databases** (Pinecone, Weaviate, pgvector)
- Semantic search vs keyword search
- Context window management (what fits in the prompt?)
- Citation and source attribution
- Hallucination reduction techniques

**Tech:** Claude API + pgvector or Pinecone + a document parser

---

### F2: AI Agent — Multi-Step Task Automation

**Build:** An AI agent that can browse the web, read files, call APIs, and complete multi-step tasks like "research competitors and write a summary report"

**Concepts:**
- **AI agents** — LLMs that take actions, not just generate text
- Tool use / function calling (giving AI access to tools)
- Planning and reasoning chains
- ReAct pattern (Reason → Act → Observe → Repeat)
- Agent memory (short-term and long-term)
- Guardrails and safety (preventing the agent from doing harmful things)
- Human-in-the-loop (agent asks for approval before dangerous actions)
- How Claude Code, Devin, and similar tools work

**Tech:** Claude API with tool use + custom tools

---

### F3: Semantic Search & Recommendations — "Find Similar" Engine

**Build:** A content platform where users can say "find me articles like this one" and get semantically similar results, plus personalized recommendations

**Concepts:**
- **Embeddings in depth** — sentence, paragraph, and document level
- Cosine similarity and nearest neighbor search
- Hybrid search (combining keyword + semantic)
- Recommendation algorithms (collaborative filtering, content-based)
- Cold start problem (new user, no data)
- Embedding models (OpenAI, Cohere, open-source sentence-transformers)

**Tech:** Sentence transformers + pgvector or Qdrant

---

### F4: Fine-Tuning — Custom Model for Your Domain

**Build:** Fine-tune a model on your specific data (customer support conversations, legal documents, medical notes) so it performs better than the base model on your domain

**Concepts:**
- **Fine-tuning** vs prompting vs RAG — when to use which
- Training data preparation and formatting
- Evaluation metrics (how do you know your fine-tuned model is better?)
- Overfitting and underfitting
- LoRA and QLoRA (efficient fine-tuning)
- Cost/benefit analysis of fine-tuning
- When NOT to fine-tune (most of the time, RAG is better)

**Tech:** OpenAI fine-tuning API or Hugging Face + a small open model

---

### F5: Local AI — Run Models Without an API

**Build:** A fully private AI assistant that runs on your machine — no data leaves your computer

**Concepts:**
- **Open-source models** (Llama, Mistral, Phi)
- Model quantization (making models small enough to run locally)
- Ollama, llama.cpp, vLLM
- GPU vs CPU inference (and Apple Silicon)
- Model selection (size vs quality tradeoffs)
- Privacy advantages of local models
- Hybrid architecture (local for simple tasks, cloud for complex ones)

**Tech:** Ollama + a local model + your own UI

---

### F6: Computer Vision — Image Classification & Object Detection

**Build:** An app that identifies objects in photos (is this a dog or a cat? where are the faces? is this product defective?)

**Concepts:**
- **Convolutional Neural Networks** (CNNs) — how machines "see"
- Image classification vs object detection vs segmentation
- Transfer learning (start with a pre-trained model)
- Training data and data augmentation
- Model accuracy metrics (precision, recall, F1)
- Edge deployment (running vision models on phones/Pi)
- Multimodal models (Claude, GPT-4V) vs specialized vision models

**Tech:** PyTorch + a pre-trained model (ResNet, YOLO) or Claude Vision API

---

### F7: ML Pipeline — Full Training to Production

**Build:** An end-to-end ML system: collect data → clean it → train a model → evaluate → deploy → monitor → retrain when data drifts

**Concepts:**
- **ML lifecycle** (it's not just training a model)
- Data cleaning and feature engineering
- Train/test/validation splits
- Experiment tracking (MLflow, Weights & Biases)
- Model serving (REST API, batch inference)
- Model monitoring and data drift detection
- CI/CD for ML (retrain on new data automatically)
- MLOps vs traditional DevOps

**Tech:** Python + scikit-learn or PyTorch + MLflow + a serving framework

---

### F8: AI Safety & Evaluation — Guardrails and Red-Teaming

**Build:** A safety layer for any AI app: content filtering, prompt injection detection, output validation, and an evaluation framework that measures quality over time

**Concepts:**
- **Prompt injection** — how users trick AI into ignoring instructions
- Output validation and content filtering
- Evaluation frameworks (automated evals, human evals)
- Red-teaming your AI (trying to break it systematically)
- Bias detection and fairness testing
- Cost optimization (caching, routing to smaller models)
- Responsible AI principles in practice
- How to build AI systems you can trust

**Tech:** Custom guardrails + an eval framework + prompt injection test suite

---

# Track G: Systems & Low-Level Programming (Levels 1–7)

> Understand what's happening under the hood

---

### G1: Build a CLI Tool — File Organizer or Task Runner

**Build:** A command-line tool that organizes messy download folders by file type and date, or a task runner like a mini `make`

**Concepts:**
- **Command-line interfaces** (arguments, flags, stdin/stdout)
- File system operations (read, write, move, watch)
- Process exit codes and piping
- Cross-platform considerations (Mac/Windows/Linux)
- Compiled vs interpreted languages for CLI tools
- Why the terminal is still the fastest interface for many tasks

**Tech:** Rust, Go, or Python

---

### G2: Build a Shell — Your Own Terminal

**Build:** A working shell that can execute commands, handle pipes (`ls | grep foo`), manage environment variables, and support basic scripting

**Concepts:**
- **How a shell actually works** (read → parse → execute → loop)
- Process creation (fork/exec on Unix)
- File descriptors and I/O redirection
- Pipes and how data flows between processes
- Environment variables and PATH resolution
- Signal handling (Ctrl+C, Ctrl+Z)
- How bash, zsh, and fish are built

**Tech:** C or Rust

---

### G3: Build an HTTP Server — From Raw Sockets

**Build:** A working HTTP server that can serve files, handle routes, and process POST data — without using any HTTP library

**Concepts:**
- **TCP sockets** — the foundation of all network communication
- HTTP protocol in detail (parsing requests, building responses by hand)
- Connection handling (one thread per connection, non-blocking I/O)
- What Express/Nginx actually do under the hood
- Headers, status codes, content types — built from scratch
- Why understanding this makes you debug any web issue faster

**Tech:** Python, Rust, or Go (using only socket/net standard library)

---

### G4: Concurrency — Multi-Threaded Web Scraper

**Build:** A web scraper that can crawl thousands of pages concurrently, respecting rate limits, and combining results

**Concepts:**
- **Threads vs processes vs async** — three models of concurrency
- Race conditions and why they're terrifying
- Mutexes, semaphores, and locks
- Deadlocks (and how to prevent them)
- Async/await deep dive (event loops, promises, futures)
- Thread pools and worker patterns
- The GIL (Python's Global Interpreter Lock) and its implications
- Go's goroutines / Rust's ownership model as alternatives

**Tech:** Python (threading + asyncio) or Go or Rust

---

### G5: Build a Database — Key-Value Store From Scratch

**Build:** A persistent key-value store that supports get, set, delete, and range queries — surviving restarts and handling concurrent access

**Concepts:**
- **How databases store data on disk** (write-ahead log, SSTables, LSM trees)
- Memory-mapped files vs buffered I/O
- Crash recovery (what happens if power dies mid-write?)
- Concurrency control (multiple readers, single writer)
- Compaction and garbage collection
- Benchmarking and performance testing
- Why Redis, LevelDB, and RocksDB made their design choices

**Tech:** Rust or Go

---

### G6: Build an Interpreter — Your Own Programming Language

**Build:** A working interpreter for a simple language with variables, functions, loops, and conditionals — then write programs in YOUR language

**Concepts:**
- **Lexing** (turning text into tokens)
- **Parsing** (turning tokens into an AST)
- **Evaluation** (walking the AST and executing it)
- Scope and variable binding
- Call stacks and function execution
- Error reporting and line numbers
- How JavaScript, Python, and Ruby actually work inside
- The foundation for understanding every language better

**Tech:** Python, TypeScript, or Rust (follow "Crafting Interpreters" by Bob Nystrom)

---

### G7: Operating System Concepts — Mini OS or Scheduler

**Build:** A process scheduler that manages multiple tasks, allocates CPU time, and handles priorities — or a minimal OS kernel that boots and prints to screen

**Concepts:**
- **How an OS manages processes** (scheduling algorithms: round-robin, priority)
- Memory management (stack vs heap, virtual memory, paging)
- System calls (how user programs talk to the kernel)
- Context switching (saving/restoring process state)
- File systems at a low level (inodes, blocks, directories)
- Why understanding this helps you write better application code
- What happens between pressing Enter and seeing output

**Tech:** C or Rust (bare metal or simulation)

---

# Track H: Game Development (Levels 1–6)

> Unique engineering patterns you won't learn anywhere else

---

### H1: Terminal Game — Snake or Tetris in the Terminal

**Build:** A fully playable Snake or Tetris game running in the terminal with keyboard controls and scoring

**Concepts:**
- **Game loops** (update → render → repeat at 60fps)
- State machines (menu → playing → paused → game over)
- Keyboard input handling in real-time
- Collision detection (basic)
- Score tracking and persistence
- Fixed time step vs variable time step
- Why games are great for learning programming fundamentals

**Tech:** Python (curses) or Rust (crossterm) or JavaScript (blessed)

---

### H2: 2D Browser Game — Platformer or Top-Down RPG

**Build:** A 2D game with character movement, enemies, tile-based levels, and collectibles — playable in the browser

**Concepts:**
- **Canvas/WebGL rendering** (drawing sprites, tiles, animations)
- Game physics (gravity, velocity, acceleration)
- Sprite sheets and animation frames
- Tile maps and level design
- Camera systems (following the player)
- Sound effects and music
- Entity management (enemies, items, projectiles)

**Tech:** Phaser.js, Kaboom.js, or raw HTML5 Canvas

---

### H3: Multiplayer Game — Real-Time Online Arena

**Build:** A multiplayer game where 2–8 players compete in real-time (battle arena, racing, or co-op survival)

**Concepts:**
- **Authoritative server** (server is the source of truth, not the client)
- Client-side prediction and server reconciliation
- Lag compensation and interpolation
- Tick rate and network bandwidth
- Cheating prevention (never trust the client)
- Lobby systems and matchmaking
- The hardest real-time networking problem in software

**Tech:** Node.js or Go server + WebSockets + your H2 game

---

### H4: 3D on the Web — First-Person Walker or Racing Game

**Build:** A 3D environment you can walk through, or a simple racing game with physics

**Concepts:**
- **3D graphics fundamentals** (vertices, meshes, textures, shaders)
- Scene graphs and transforms (position, rotation, scale)
- Lighting models (ambient, directional, point lights)
- Camera controls (first-person, third-person, orbit)
- 3D physics (rigid bodies, raycasting)
- Performance budgets (draw calls, triangle count)
- How Unreal/Unity/Godot do it vs doing it yourself

**Tech:** Three.js or Babylon.js + Rapier (physics)

---

### H5: Game Engine Basics — Build a 2D Engine

**Build:** A reusable 2D game engine with: entity-component system, physics, rendering, input, audio, and scene management — then build 2 different games with it

**Concepts:**
- **Entity-Component-System (ECS)** architecture
- Separating engine from game logic
- Physics engines (broad phase vs narrow phase collision)
- Asset loading and management
- Scene/level management
- Debug tools (hitbox visualization, FPS counter, entity inspector)
- Why game engine architecture influenced modern web frameworks (React's component model)

**Tech:** TypeScript or Rust + your own rendering layer

---

### H6: Physics Simulation — Particle System or Rigid Body Engine

**Build:** A physics sandbox where you can drop objects, apply forces, and watch realistic collisions, stacking, and bouncing

**Concepts:**
- **Rigid body dynamics** (mass, force, torque, inertia)
- Collision detection algorithms (AABB, SAT, GJK)
- Collision response (impulse resolution, restitution, friction)
- Constraint solving (joints, hinges, springs)
- Numerical integration (Euler, Verlet, RK4)
- Spatial partitioning (quad-trees, grid-based)
- How Box2D, Rapier, and PhysX work

**Tech:** TypeScript or Rust + HTML5 Canvas or WebGL for visualization

---

# Reference Tables

## Complete Map — All Tracks

| Track | Focus | Levels | You become |
|-------|-------|--------|------------|
| **A** (0–23) | Backend & Web | 24 | Full-stack → Platform engineer |
| **B** (1–6) | Algorithms | 6 | Strong problem solver |
| **C** (1–8) | Security & Compliance | 8 | Security-aware developer |
| **D** (1–7) | Hardware & Robotics | 7 | Embedded/IoT engineer |
| **E** (1–24) | Architectures & Platforms | 24 | Software architect |
| **F** (1–8) | AI & Machine Learning | 8 | AI engineer |
| **G** (1–7) | Systems & Low-Level | 7 | Systems engineer |
| **H** (1–6) | Game Development | 6 | Game developer |

**Total: 90 projects**

---

## Architecture Decision Cheat Sheet

| When you need... | Architecture | Level |
|---|---|---|
| Content-driven site, non-tech editors | Headless CMS or Traditional CMS | E1, E2 |
| Internal business tools | Admin dashboard | E3 |
| Simple, fast, SEO-friendly | Server-rendered monolith | E4 |
| Rich interactive UI | SPA + API | E5 |
| Cheap, auto-scaling, simple logic | Serverless | E6 |
| Web + mobile from one codebase | Shared API + cross-platform | E7 |
| Works without internet | PWA / offline-first | E8 |
| Local files, native OS features | Desktop app | E9 |
| Extend other websites | Browser extension | E10 |
| Complex workflows, many moving parts | Event-driven | E11 |
| One product, many customers/brands | Multi-tenant white-label | E12 |
| Many apps, shared code | Monorepo | E13 |
| Third-party extensibility | Plugin system | E14 |
| Many backends, multiple frontends | API Gateway + BFF | E15 |
| Custom storefront, managed commerce | Headless e-commerce | E16 |
| Audio/video content delivery | Streaming platform | E17 |
| Users build apps without code | Low-code platform | E18 |
| Public-facing, legally required a11y | Accessible-first app | E19 |
| Global audience, multiple languages | Internationalized app | E20 |
| Decentralized, token-based access | Web3 dApp | E21 |
| 3D/AR product experiences | Spatial / WebXR | E22 |
| Hands-free / spoken interaction | Voice interface | E23 |
| Tools for other engineers | Developer tooling / CLI | E24 |

---

## AI Decision Cheat Sheet

| When you need... | Approach | Level |
|---|---|---|
| AI that knows your documents | RAG + vector search | F1 |
| AI that takes actions | Agents + tool use | F2 |
| "Find similar" or recommendations | Embeddings | F3 |
| Better performance on your domain | Fine-tuning | F4 |
| Full privacy, no API dependency | Local models | F5 |
| Understanding images/video | Computer vision | F6 |
| Full ML lifecycle | ML pipelines + MLOps | F7 |
| Safe, reliable AI in production | Guardrails + evals | F8 |

---

## Suggested Learning Order

You don't have to finish one track before starting another. A recommended interleaving:

1. **A0–A3** → Git + backend basics (you need this for everything)
2. **B1–B2** → Build algorithmic thinking
3. **A4–A7** → Expand backend skills
4. **G1** → Build a CLI tool (understand terminal deeply)
5. **C1–C2** → Understand security before you go further
6. **D1–D2** → Taste hardware, connect it to your backend
7. **E1–E5** → See how architecture shapes everything
8. **F1–F2** → RAG and AI agents (essential in 2026)
9. **A8–A12** → Go deeper into backend
10. **H1–H2** → Game dev teaches unique patterns
11. **B3–B5** → Level up problem-solving
12. **C3–C4** → Security gets serious
13. **F3–F5** → Deeper AI/ML skills
14. **G2–G4** → Systems programming and concurrency
15. **E6–E10** → Explore more platform types
16. **A13–A20** → Senior/staff-level backend
17. **D3–D7** → Robotics gets real
18. **H3–H4** → Multiplayer and 3D
19. **B6, C5–C8** → Advanced algorithms, security, and compliance
20. **F6–F8** → ML pipelines and AI safety
21. **A21–A23** → Observability, database diversity, experimentation
22. **G5–G7** → Build a database, interpreter, and OS concepts
23. **E11–E24** → Architect-level platform design
24. **H5–H6** → Engine building and physics

---

## Milestone Checkpoints

- After **A0–A3**: You can build and deploy a basic web app with users
- After **A0–A7 + F1**: You can build most indie SaaS products (including AI features)
- After **A0–A10 + E1–E5**: You're a capable full-stack developer
- After **+ F1–F2 + G1–G3**: You understand AI, systems, and the full stack
- After **A0–A16 + B1–B4**: You're a senior-level engineer
- After **+ C1–C7 + E19–E20**: You build production-grade, compliant, accessible software
- After **A0–A23 + E1–E18**: You're thinking like a software architect
- After **+ G1–G7**: You understand computing from silicon to cloud
- After **+ F1–F8**: You can design and ship AI-native products
- After **all 90 projects**: You've covered the full spectrum of a 2026 software engineer

---

## What This Curriculum Covers

| Domain | Coverage | Tracks |
|--------|----------|--------|
| Web Backend | Deep | A |
| Frontend & UI | Moderate (through backend projects) | A, E |
| Databases | Deep (relational, document, graph, vector, time-series) | A, F |
| AI / Machine Learning | Deep | F |
| Security & Compliance | Deep | C |
| DevOps / Infrastructure | Solid | A15, A20–A21, C8 |
| Algorithms & CS Fundamentals | Solid | B, G |
| Mobile Development | Moderate | E7 |
| Desktop Development | Moderate | E9 |
| Hardware / IoT / Robotics | Solid | D |
| Game Development | Solid | H |
| Accessibility | Covered | E19 |
| Internationalization | Covered | E20 |
| Web3 / Blockchain | Covered | E21 |
| AR / Spatial Computing | Covered | E22 |
| Voice / Conversational UI | Covered | E23 |
| Developer Tooling | Covered | E24, G1 |
| Systems Programming | Deep | G |
| Observability | Covered | A21 |
| Feature Flags / Experimentation | Covered | A23 |
| Privacy / GDPR / Compliance | Covered | C7 |
| Supply Chain Security | Covered | C8 |
