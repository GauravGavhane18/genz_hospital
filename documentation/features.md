# Features Deep Dive

## 1. ScaleDown™ Compression
The core innovation of the project. It doesn't just "summarize"—it **compresses** based on medical density. 
- **PICO Framework**: Prioritizes Population, Intervention, Comparison, and Outcome.
- **Statistical Weighting**: Sentences containing p-values or confidence intervals are automatically boosted in importance.

## 2. Citation Network Visualization
Interactive mapping of how studies relate to one another. 
- **Glow Nodes**: Visual indicators of a paper's centrality in a research field.
- **Relationship Links**: Lines representing citations, showing the intellectual heritage of a discovery.

## 3. Paper Intelligence Report
A comprehensive dashboard view for a single study containing:
- **Methodology Synthesis**: What exactly was done?
- **Research Gap Identification**: What did the authors miss? What should we study next?
- **Textual Diff**: A visual comparison of Original vs. ScaleDown text to prove data integrity.

## 4. Semantic Search
Search that understands medical context rather than just keyword matching, expanding queries to include related biomedical terms.
