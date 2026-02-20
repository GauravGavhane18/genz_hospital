# Technical Architecture & Stack

## Frontend (User Experience)
- **React.js (Vite)**: A high-performance framework for building the reactive dashboard.
- **Glassmorphism UI**: Using Modern Vanilla CSS to create a premium, translucent design system.
- **D3.js**: Powering the citation network graph with live force-directed simulations.
- **Lucide React**: Vector-based iconography for a clean, professional aesthetic.

## Backend (Logic & NLP)
- **Node.js & Express**: Handling the API orchestration and search forwarding.
- **ScaleDown™ Engine**: Built on the `natural` and `stopword` libraries to perform real-time sentence scoring and context preservation.
- **PubMed Integration**: Direct connection to NCBI E-utilities for real-time medical data fetching.

## Security & Performance
- **CORS Handling**: Secure communication between frontend and backend.
- **Model Simulation**: Fast, local heuristic processing that mimics BioGPT's behavior without the GPU latency.
