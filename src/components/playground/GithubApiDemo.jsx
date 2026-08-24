// src/components/playground/GithubApiDemo.jsx
import { useEffect, useState } from 'react';
import { FaStar, FaCodeBranch, FaArrowRotateRight } from 'react-icons/fa6';

const GITHUB_USER = 'olastech-1';

function GithubApiDemo() {
  const [status, setStatus] = useState('loading');
  const [repos, setRepos] = useState([]);
  async function fetchRepos() {
    setStatus('loading');
    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=4`
      );
      if (!response.ok) throw new Error('GitHub API request failed');
      const data = await response.json();
      setRepos(data);
      setStatus(data.length === 0 ? 'empty' : 'success');
    } catch (err) {
      setStatus('error');
    }
  }

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-slate2 text-xs font-mono2 truncate">
          GET api.github.com/users/{GITHUB_USER}/repos
        </p>
        <button
          onClick={fetchRepos}
          aria-label="Refetch repos"
          className="text-slate2 hover:text-gold shrink-0 ml-2"
        >
          <FaArrowRotateRight className={status === 'loading' ? 'animate-spin' : ''} />
        </button>
      </div>

      {status === 'loading' && (
        <div className="space-y-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-14 rounded-xl bg-ink/5 animate-pulse"></div>
          ))}
        </div>
      )}

      {status === 'error' && (
        <p className="text-red-500 text-sm">
          Couldn't reach the GitHub API just now — this is the genuine error state, not a fake one.
          Try the refresh icon.
        </p>
      )}

      {status === 'empty' && <p className="text-slate2 text-sm">No public repos returned.</p>}

      {status === 'success' && (
        <div className="space-y-3">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener"
              className="flex justify-between items-center p-3 rounded-xl border border-ink/10 hover:border-gold transition"
            >
              <span className="text-sm font-medium truncate">{repo.name}</span>
              <span className="flex items-center gap-3 text-slate2 text-xs shrink-0 ml-2">
                <span className="flex items-center gap-1">
                  <FaStar className="text-gold" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch />
                  {repo.forks_count}
                </span>
              </span>
            </a>
          ))}
        </div>
      )}

      <p className="text-slate2 text-xs mt-4 font-mono2">Live data from my real GitHub account.</p>
    </div>
  );
}

export default GithubApiDemo;
