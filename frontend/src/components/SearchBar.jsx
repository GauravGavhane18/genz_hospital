import { useState } from 'react';
import { Search, Filter, Cpu } from 'lucide-react';

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div className="glass-panel" style={{ padding: '0.5rem', borderRadius: '1rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Search
                        size={20}
                        style={{ position: 'absolute', left: '1.25rem', color: '#64748b' }}
                    />
                    <input
                        type="text"
                        className="glass-input"
                        placeholder="Search medical literature (e.g., 'BioGPT on cancer genomics')..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{ paddingLeft: '3.25rem', border: 'none', background: 'transparent' }}
                    />
                </div>

                <button type="button" className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.875rem 1.25rem', color: '#94a3b8', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                    <Filter size={18} />
                    Refine
                </button>

                <button type="submit" className="btn-primary">
                    <Cpu size={18} />
                    Analyze
                </button>
            </form>
            <div style={{ padding: '0.5rem 1.25rem', display: 'flex', gap: '1rem', fontSize: '0.8rem', color: '#64748b' }}>
                <span>Suggested: <span style={{ color: '#38bdf8', cursor: 'pointer' }}>"mRNA vaccines"</span>, <span style={{ color: '#38bdf8', cursor: 'pointer' }}>"CRISPR safety"</span></span>
                <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#34d399', borderRadius: '50%' }}></span>
                    BioGPT Model Online
                </span>
            </div>
        </div>
    );
}
