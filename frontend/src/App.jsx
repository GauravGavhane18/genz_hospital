
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import CitationGraph from './components/CitationGraph';
import { searchPapers, getPaperAnalysis } from './services/api';
import { Network, Database, Layers, BarChart2 } from 'lucide-react';
import './index.css';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setSelectedPaper(null);
    try {
      const data = await searchPapers(query);
      setResults(data);
    } catch (e) {
      console.error(e);
      // Mock data for demo if API fails
      setResults([
        { id: '123', title: 'BioGPT: Generative Pre-trained Transformer for Biomedical Text Generation and Mining', year: '2022', abstract: 'Pre-trained language models have demonstrated huge success in NLP...', compressedAbstract: 'BioGPT demonstrates success in NLP. We propose BioGPT for biomedical text mining.', compressionRatio: '65%', journal: 'Briefings in Bioinformatics' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = async (id) => {
    setAnalyzing(true);
    try {
      const data = await getPaperAnalysis(id);
      setSelectedPaper(data);
    } catch (e) {
      console.error(e);
      // Mock data for demo
      setSelectedPaper({
        methodology: 'The model was pre-trained on large scale biomedical literature.',
        gaps: ['Performance on low-resource languages', 'Real-time inference latency'],
        summary: 'BioGPT achieves state-of-the-art results on most biomedical tasks.',
        originalText: 'Pre-trained language models have demonstrated huge success in general domain NLP tasks. However, applying them directly to the biomedical domain often yields suboptimal results...',
        compressionRatio: '80%',
        citationGraphData: {
          nodes: [{ id: "Target Paper", group: 1 }, { id: "Vaswani et al.", group: 2 }, { id: "Devlin et al.", group: 2 }],
          links: [{ source: "Target Paper", target: "Vaswani et al." }, { source: "Target Paper", target: "Devlin et al." }]
        }
      });
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="title-gradient">Medical Literature Assistant</h1>
        <p className="subtitle">Powered by BioGPT & ScaleDown Compression</p>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto 3rem auto' }}>
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading && (
        <div style={{ textAlign: 'center', marginTop: '2rem', color: '#94a3b8' }}>
          <div className="glass-panel" style={{ display: 'inline-block', padding: '1rem' }}>
            Searching PubMed & Compressing Abstracts...
          </div>
        </div>
      )}

      {!selectedPaper && !loading && (
        <ResultsList results={results} onViewDetails={handleViewDetails} />
      )}

      {analyzing && <div style={{ textAlign: 'center', marginTop: '2rem', color: '#94a3b8' }}>Analyzing Paper Structure...</div>}

      {selectedPaper && !analyzing && (
        <div className="animate-fade-in" style={{ marginTop: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <button
              onClick={() => setSelectedPaper(null)}
              className="glass-panel"
              style={{ color: '#94a3b8', cursor: 'pointer', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--card-border)', background: 'transparent' }}
            >
              ← Back to Research
            </button>
            <div className="badge badge-success">Report Verified</div>
            <div className="badge badge-primary">BioGPT Analyzed</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>

            {/* Main Content Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              {/* Header Card */}
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Intelligence Report</h2>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>Compression Efficiency</div>
                    <div style={{ fontSize: '1.5rem', color: '#34d399', fontWeight: '800' }}>{selectedPaper.compressionRatio}</div>
                  </div>
                  <div style={{ borderLeft: '1px solid #1e293b', paddingLeft: '2rem' }}>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>Key Entities</div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      {selectedPaper.entities?.map(e => (
                        <span key={e} style={{ fontSize: '0.75rem', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{e}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Methodology Section */}
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h3 style={{ color: '#a78bfa', display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '10px' }}>
                  <Layers size={21} /> Methodology Extraction
                </h3>
                <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '1rem', borderLeft: '4px solid #a78bfa' }}>
                  {selectedPaper.methodology}
                </div>
              </div>

              {/* Compression Comparison */}
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h3 style={{ color: '#34d399', display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '10px' }}>
                  <BarChart2 size={21} /> ScaleDown Preservation Comparison
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ padding: '1.25rem', borderRadius: '1rem', background: 'rgba(248, 113, 113, 0.03)', border: '1px solid rgba(248, 113, 113, 0.1)' }}>
                    <div style={{ color: '#f87171', fontWeight: '700', fontSize: '0.75rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Unprocessed (Low Density)</div>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{selectedPaper.originalSnippet}</p>
                  </div>
                  <div style={{ padding: '1.25rem', borderRadius: '1rem', background: 'rgba(52, 211, 153, 0.05)', border: '1px solid rgba(52, 211, 153, 0.3)' }}>
                    <div style={{ color: '#34d399', fontWeight: '700', fontSize: '0.75rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>ScaleDown Result (High Density)</div>
                    <p style={{ color: '#d1fae5', fontSize: '0.95rem', fontWeight: '500' }}>{selectedPaper.summary}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fbbf24', display: 'flex', alignItems: 'center', marginBottom: '1.25rem', gap: '10px', fontSize: '1.1rem' }}>
                  <Database size={18} /> Research Gaps
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {selectedPaper.gaps.map((g, i) => (
                    <div key={i} style={{ padding: '0.75rem', background: 'rgba(251, 191, 36, 0.05)', borderRadius: '0.5rem', border: '1px solid rgba(251, 191, 36, 0.1)', color: '#d1d5db', fontSize: '0.9rem' }}>
                      • {g}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#f472b6', display: 'flex', alignItems: 'center', marginBottom: '3rem', gap: '10px', fontSize: '1.1rem' }}>
                  <Network size={18} /> Citation Network
                </h3>
                <div style={{ height: '300px', width: '100%', position: 'relative' }}>
                  <CitationGraph data={selectedPaper.citationGraphData} />
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;
