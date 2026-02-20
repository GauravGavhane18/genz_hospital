# Medical Research Assistant with BioGPT & ScaleDown

An AI-powered medical research engine that integrates **PubMed** with a custom **ScaleDown** algorithm to compress dense literature by 70% while preserving critical findings. The platform features a premium **glassmorphism dashboard** for real-time methodology extraction, research gap identification, and interactive citation network visualization. Designed for high-efficiency analysis, it leverages **BioGPT-inspired scoring** to reduce API costs and cognitive load by enabling simultaneous multi-paper synthesis.

## Features
- **PubMed Integration**: Search real medical papers.
- **ScaleDown Compression**: Reduces token count by ~70% while retaining key PICO elements.
- **Paper Analyzer**: Extracts methodology and research gaps.
- **Citation Graph**: Visualizes citation networks.

## Documentation
- [System Architecture](./docs/architecture.md)
- [ScaleDown™ Specification](./docs/scaledown_spec.md)
- [API Reference](./docs/api_reference.md)

## Getting Started

### Prerequisites
- Node.js installed

### 1. Backend Setup
```bash
cd backend
npm install
npm start
```
The server will run on `http://localhost:5000`.

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The application will be available at the URL provided by Vite (usually `http://localhost:5173`).

## Usage
1. Enter a medical query (e.g., "CRISPR in oncology").
2. View the list of papers with "ScaleDown" summaries.
3. Click "Analyze" on a paper to see the detailed report, citation graph, and compression comparison.
