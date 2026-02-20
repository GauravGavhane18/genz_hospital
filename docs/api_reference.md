# API Reference

The backend runs on `http://localhost:5000` by default.

## Endpoints

### 1. `GET /api/search?q={query}`
Search PubMed and return compressed results.
- **Query Params**: `q` (string) - The medical search term.
- **Response**: Array of paper objects.
- **Processing**: Automatically runs `batchCompress` on all result abstracts.

### 2. `GET /api/paper/:id`
Fetch detailed analysis for a specific paper.
- **Params**: `id` - PubMed ID (PMID).
- **Response**: Object containing `originalSnippet`, `summary`, `methodology`, `gaps`, and `citationGraphData`.

### 3. `GET /api/status`
Check system and model health.
- **Returns**: Status of the BioGPT model and ScaleDown engine version.

## Data Schema (Paper Object)
```json
{
  "id": "12345",
  "title": "Medical Paper Title",
  "abstract": "Original text...",
  "compressedAbstract": "Dense text...",
  "compressionRatio": "65%",
  "authors": "Name A, et al.",
  "journal": "Nature",
  "year": "2024",
  "methodology": "...",
  "researchGaps": []
}
```
