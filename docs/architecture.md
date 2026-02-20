# System Architecture

## Overview
The Medical Literature Assistant is built with a decoupled architecture consisting of a React-based frontend and a Node.js/Express backend. It integrates with the PubMed (NCBI E-utilities) API and employs a custom NLP engine for text processing.

## Tech Stack
- **Frontend**: React (Vite), D3.js (Visualizations), Lucide React (Icons), Vanilla CSS (Glassmorphism).
- **Backend**: Node.js, Express, Natural (NLP), Stopword removal, Axios.
- **External API**: PubMed E-utilities (`esearch` and `efetch`).

## Component Structure
1. **Search Layer**: Handles semantic query expansion and PubMed retrieval.
2. **Analysis Layer (ScaleDown)**:
   - Tokenizes and scores sentences based on medical entity density.
   - Compresses text by ~70% while maintaining accuracy.
   - Identifies methodology and research gaps.
3. **Visualization Layer**:
   - D3.js Force-directed graph for citation mapping.
   - Responsive dashboard for multi-paper comparison.

## Data Flow
1. User submits query -> Backend translates and fetches from PubMed.
2. Backend processes raw abstracts through the **ScaleDown** engine.
3. Compressed data + extracted metadata (Gaps/Methodology) sent to Frontend.
4. UI renders cards and expands into detailed analysis on request.
