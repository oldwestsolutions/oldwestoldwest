import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="w-full bg-white text-gray-800 py-2 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-end">
        <Link 
          href="/newspaper" 
          className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-1 rounded-md transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
          <span>Newspaper</span>
        </Link>
      </div>
    </div>
  );
}
