const express = require('express');
const router = express.Router();
const pubmedService = require('../services/pubmed');
const nlpService = require('../services/nlp');

// Search Endpoint
router.get('/search', async (req, res) => {
    try {
        const { q } = req.query;
        if (!q) return res.status(400).json({ error: 'Query required' });

        // Step 1: Search PubMed
        const papers = await pubmedService.search(q);

        // Step 2: "Compress" with ScaleDown (optional on search result list, usually done per paper)
        // For listing, we compress abstracts.
        const compressedPapers = nlpService.batchCompress(papers);

        res.json(compressedPapers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Analyze specific paper
router.get('/paper/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const fullText = await pubmedService.fetchFullContent(id); // Usually scraping or API fetch

        // Step 3: Run advanced NLP
        const analysis = nlpService.analyzePaper(fullText);

        res.json(analysis);
    } catch (error) {
        res.status(500).json({ error: 'Analysis failed' });
    }
});

module.exports = router;
