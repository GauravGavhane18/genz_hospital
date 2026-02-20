import { ArrowRight, FileText, Zap, User, Clock } from 'lucide-react';

export default function ResultsList({ results, onViewDetails }) {
    if (!results || results.length === 0) return null;

    return (
        <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
            {results.map((paper, idx) => (
                <div key={paper.id || idx} className="glass-panel animate-fade-in" style={{ padding: '2rem', animationDelay: `${idx * 0.1}s`, position: 'relative', overflow: 'hidden' }}>

                    {/* Background decoration */}
                    <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)', borderRadius: '50%' }}></div>

                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                        <div style={{ flex: 1 }}>
                            <div className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
                                <FileText size={12} style={{ marginRight: '6px' }} />
                                {paper.journal || 'Medical Journal'}
                            </div>
                            <h3 style={{ margin: '0 0 0.5rem 0', color: '#f8fafc', fontSize: '1.4rem', fontWeight: '700', lineHeight: '1.3' }}>
                                {paper.title}
                            </h3>
                            <div style={{ display: 'flex', gap: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={14} /> {paper.authors || 'Unknown'}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {paper.year}</span>
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ color: '#34d399', fontWeight: '800', fontSize: '1.25rem' }}>-{paper.compressionRatio || '65%'}</div>
                            <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Size Reduction</div>
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="glass-panel" style={{ background: 'rgba(255,255,255,0.02)', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '0.75rem', marginBottom: '1.5rem' }}>
                        <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: '1.7' }}>
                            <span style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>
                                <Zap size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> ScaleDown Context
                            </span>
                            {paper.compressedAbstract || paper.abstract}
                        </p>
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                                Saved <span style={{ color: '#34d399', fontWeight: 'bold' }}>{paper.tokensSaved || 120}</span> tokens
                            </div>
                        </div>
                        <button
                            onClick={() => onViewDetails(paper.id)}
                            className="btn-primary"
                            style={{ padding: '0.6rem 1.25rem', borderRadius: '0.6rem', fontSize: '0.9rem' }}
                        >
                            Analyze Insights <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
