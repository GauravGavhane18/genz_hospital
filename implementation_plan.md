# Medical Research Assistant - Implementation Plan

## 1. Project Overview
A medical literature search assistant that integrates PubMed, uses BioGPT-based semantic search (or simulated equivalent for prototype), and implements "ScaleDown" for paper compression.

## 2. Architecture

### Frontend (User Interface)
- **Framework**: React (Vite)
- **Styling**: Vanilla CSS (Modern, Glassmorphism, Responsive)
- **Key Components**:
    - **Dashboard**: Search bar, query refinement.
    - **Results View**: List of papers with "ScaleDown" summaries.
    - **Paper Analyzer**: Detailed view with methodology extraction.
    - **Citation Graph**: Visual network of citations (using D3.js or similar).
    - **Compression Comparison**: Visual diff of Original vs Compressed text.

### Backend (API & Logic)
- **Runtime**: Node.js (Express)
- **Services**:
    - **PubMed Integration**: Fetches data from NCBI E-utilities API.
    - **NLP Service (BioGPT & ScaleDown)**:
        - *Note*: Running full BioGPT requires significant compute. We will implement a lightweight version logic or mock the embedding generation for the prototype unless an inference API is provided.
        - **ScaleDown Algorithm**: A heuristic text summarization and compression algorithm to reduce token count by ~70% while retaining key medical entities (PICO framework: Population, Intervention, Comparison, Outcome).

## 3. Data Flow
1. User enters query -> Backend fetches from PubMed API.
2. Backend retrieves abstracts/full-text (where available).
3. "ScaleDown" service processes text -> Generates dense representation.
4. Backend analyzes for "Methodology" and "Research Gaps".
5. Frontend displays results + Citation Graph.

## 4. Tech Stack
- **Frontend**: React, Vite, D3.js (for graphs), Lucide React (icons).
- **Backend**: Express, Axios, Cheerio (for scraping if needed), Natural/Compromise (for basic NLP).
- **External APIs**: PubMed (E-utilities), Hugging Face (optional for BioGPT).

## 5. Development Steps
1. **Setup**: Initialize Frontend and Backend.
2. **Backend Core**: Implement PubMed search endpoint.
3. **Frontend Core**: Build Search UI and Results display.
4. **ScaleDown Engine**: Implement text compression logic (Frequency/Entity-based summarization).
5. **Visualization**: Implement Citation Network Graph.
6. **Polishing**: Apply premium UI/UX designs.

## 6. Directory Structure
```
/genz_hackthon
  /frontend (Vite + React)
  /backend (Express)
  /docs (Documentation)
```
