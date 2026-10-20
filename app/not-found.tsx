import Link from "next/link";
export default function NotFound(){return <section className="page-content"><div className="container empty"><div className="empty-icon">🌿</div><h1>Page not found</h1><p className="muted">The page you are looking for may have moved.</p><Link className="btn" href="/">Back to home</Link></div></section>}
