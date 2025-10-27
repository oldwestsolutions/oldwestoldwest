import Link from 'next/link';

export default function Newspaper() {
  return (
    <div className="min-h-screen bg-gray-100 text-black" style={{fontFamily: 'Georgia, serif'}}>
      
      {/* Header */}
      <header className="w-full flex justify-start items-center py-4 px-8 bg-white shadow-sm border-b">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/black logo.png" alt="OldWestSolutions Logo" className="w-6 h-6" />
            <span className="ml-2 text-lg md:text-xl font-bold text-black">OldWestSolutions</span>
          </Link>
        </div>
      </header>

      {/* Newspaper Header */}
      <div className="bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-2 tracking-tight" style={{fontFamily: 'serif'}}>
              Old West Solutions Press
            </h1>
            <div className="flex justify-center items-center mb-3">
              <div className="w-20 h-0.5 bg-black"></div>
              <span className="mx-6 text-black font-bold text-sm uppercase tracking-wider">Daily Edition</span>
              <div className="w-20 h-0.5 bg-black"></div>
            </div>
             <p className="text-gray-700 text-sm italic mb-2">&quot;All the Infrastructure News That&apos;s Fit to Deploy&quot;</p>
            <div className="text-xs text-gray-600 border-t border-gray-300 pt-2">
              <span className="mr-6">Monday, October 27, 2025</span>
              <span className="mr-6">Vol. 1, No. 1</span>
              <span>50¢</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Breaking News Banner */}
        <div className="bg-red-600 text-white py-1 px-4 mb-4 text-center font-bold text-sm uppercase tracking-wide">
          🚨 Breaking News: OldWestSolutions Achieves 99.9% Uptime Across All Data Centers 🚨
        </div>

        {/* Main Headlines - Traditional Newspaper Layout */}
        <div className="grid grid-cols-12 gap-4 mb-6">
          {/* Lead Story - Takes up 8 columns */}
          <div className="col-span-12 md:col-span-8 border border-gray-300 p-4">
            <div className="mb-3">
              <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold uppercase tracking-wide">Exclusive</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3 leading-tight">
              DALLAS TECH STARTUP REVOLUTIONIZES SERVER DEPLOYMENT WITH 60-SECOND LAUNCH TIMES
            </h2>
            <div className="flex items-center mb-3 text-xs text-gray-600 border-b border-gray-200 pb-2">
               <span className="mr-4 font-semibold">By John &quot;Rusty&quot; Serverman</span>
              <span className="mr-4">•</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-800 leading-relaxed mb-3">
                  In a move that has sent shockwaves through the cloud computing industry, OldWestSolutions has announced 
                  a breakthrough in server deployment technology that reduces launch times from industry-standard 5-10 minutes 
                  to an unprecedented 60 seconds.
                </p>
                <p className="text-sm text-gray-800 leading-relaxed mb-3">
                  &quot;We&apos;re not just deploying servers, we&apos;re deploying dreams,&quot; said CEO Sarah &quot;Lightning&quot; Cloud, speaking 
                  from the company&apos;s Dallas headquarters. &quot;When a developer has an idea at 2 AM, they shouldn&apos;t have to 
                  wait until sunrise to see it come to life.&quot;
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-800 leading-relaxed mb-3">
                  The technology, dubbed "Lightning Deploy," uses advanced containerization and pre-configured templates 
                  to achieve these remarkable speeds. Industry experts are calling it a game-changer for startups and 
                  enterprise clients alike.
                </p>
                <p className="text-sm text-gray-800 leading-relaxed">
                  The announcement comes as OldWestSolutions prepares to expand its Dallas operations, with plans to 
                  hire 200 additional engineers over the next year.
                </p>
              </div>
            </div>
            <div className="mt-3 text-xs text-gray-500 italic border-t border-gray-200 pt-2">
              CONTINUED ON PAGE 3
            </div>
          </div>

          {/* Side Stories - Takes up 4 columns */}
          <div className="col-span-12 md:col-span-4 space-y-4">
            <div className="border border-gray-300 p-3">
              <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                GPU PRICES PLUMMET AS AI BOOM CONTINUES
              </h3>
              <div className="text-xs text-gray-600 mb-2">By Tech Reporter</div>
              <p className="text-sm text-gray-800 leading-relaxed">
                NVIDIA RTX 4000 series now available at OldWestSolutions for $350/month, down from $450. 
                The price drop comes as demand for AI computing resources reaches new heights...
              </p>
            </div>
            
            <div className="border border-gray-300 p-3">
              <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                CYBERSECURITY EXPERT WARNS OF "DIGITAL OUTLAWS"
              </h3>
              <div className="text-xs text-gray-600 mb-2">By Security Correspondent</div>
              <p className="text-sm text-gray-800 leading-relaxed">
                "Fortress-level security isn't optional anymore," says Chief Security Officer Maria Rodriguez. 
                "The digital frontier has its share of outlaws, and we're the sheriffs..."
              </p>
            </div>

            <div className="border border-gray-300 p-3">
              <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                STORAGE CAPACITY REACHES NEW FRONTIERS
              </h3>
              <div className="text-xs text-gray-600 mb-2">By Infrastructure Reporter</div>
              <p className="text-sm text-gray-800 leading-relaxed">
                Petabyte-scale storage solutions now available for enterprise clients. 
                The new offering represents a 500% increase in available capacity...
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Stories Row */}
        <div className="grid grid-cols-12 gap-4 mb-6">
          <div className="col-span-12 md:col-span-6 border border-gray-300 p-4">
            <h3 className="text-xl font-bold text-black mb-3 leading-tight">
              DALLAS TECH SCENE BOOMS WITH INFRASTRUCTURE INNOVATION
            </h3>
            <div className="flex items-center mb-3 text-xs text-gray-600 border-b border-gray-200 pb-2">
              <span className="mr-4 font-semibold">By Maria &quot;Data&quot; Johnson</span>
              <span className="mr-4">•</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed mb-3">
              The Big D has become the epicenter of a new technological revolution, with OldWestSolutions 
              leading the charge in infrastructure innovation. Local businesses are reporting unprecedented 
              growth since adopting the company's lightning-fast deployment solutions.
            </p>
            <p className="text-sm text-gray-800 leading-relaxed">
              "Dallas has always been a business-friendly city," said Mayor Eric Johnson. "Now we're becoming 
              a tech-friendly city too. OldWestSolutions is putting us on the map in ways we never imagined."
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 border border-gray-300 p-4">
            <h3 className="text-xl font-bold text-black mb-3 leading-tight">
              DEVELOPER TESTIMONIALS: "IT'S LIKE MAGIC"
            </h3>
            <div className="flex items-center mb-3 text-xs text-gray-600 border-b border-gray-200 pb-2">
              <span className="mr-4 font-semibold">By Tech Reporter</span>
              <span className="mr-4">•</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed mb-3">
              "I've been deploying servers for 15 years, and I've never seen anything like this," said 
              veteran developer Mike &quot;Code&quot; Rodriguez. "One minute I'm clicking deploy, the next minute 
              my application is live. It's like watching a digital frontier unfold before your eyes."
            </p>
            <p className="text-sm text-gray-800 leading-relaxed">
              Other developers echo Rodriguez's sentiment, with many reporting 90% reduction in deployment 
              time and significantly improved productivity.
            </p>
          </div>
        </div>

        {/* Classified Ads Section */}
        <div className="border-t-2 border-black pt-4 mb-6">
          <h2 className="text-2xl font-bold text-black mb-4 text-center uppercase tracking-wide">Classified Advertisements</h2>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 border border-gray-300 p-3">
              <h4 className="font-bold text-black mb-2 text-sm uppercase">WANTED: CLOUD ARCHITECTS</h4>
              <p className="text-xs text-gray-800 leading-relaxed">
                Seeking experienced cloud architects to join our growing team. 
                Must have experience with lightning-fast deployments. 
                Competitive salary and benefits. 
                Contact: careers@oldwestsolutions.com
              </p>
            </div>
            
            <div className="col-span-12 md:col-span-4 border border-gray-300 p-3">
              <h4 className="font-bold text-black mb-2 text-sm uppercase">FOR SALE: VPS SERVERS</h4>
              <p className="text-xs text-gray-800 leading-relaxed">
                High-performance VPS servers available immediately. 
                Starting at $43/month. No contracts required. 
                24/7 support included. 
                Call: 1-800-DEPLOY-NOW
              </p>
            </div>
            
            <div className="col-span-12 md:col-span-4 border border-gray-300 p-3">
              <h4 className="font-bold text-black mb-2 text-sm uppercase">LOST & FOUND</h4>
              <p className="text-xs text-gray-800 leading-relaxed">
                Found: One misplaced database query. 
                Owner can claim at our Dallas data center. 
                Reward: 60 seconds of free server time.
                Contact: lost@oldwestsolutions.com
              </p>
            </div>
          </div>
        </div>

        {/* Weather Section */}
        <div className="border border-gray-300 p-4 mb-6">
          <h3 className="text-xl font-bold text-black mb-4 text-center uppercase tracking-wide">Digital Weather Report</h3>
          <div className="grid grid-cols-12 gap-4 text-center">
            <div className="col-span-6 md:col-span-3">
              <h4 className="font-bold text-black mb-2 text-sm uppercase">Server Uptime</h4>
              <p className="text-green-600 text-xl font-bold">99.9%</p>
              <p className="text-gray-700 text-xs">Sunny with zero downtime</p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <h4 className="font-bold text-black mb-2 text-sm uppercase">Deployment Speed</h4>
              <p className="text-blue-600 text-xl font-bold">60s</p>
              <p className="text-gray-700 text-xs">Lightning fast</p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <h4 className="font-bold text-black mb-2 text-sm uppercase">Security Level</h4>
              <p className="text-red-600 text-xl font-bold">Fortress</p>
              <p className="text-gray-700 text-xs">Impenetrable</p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <h4 className="font-bold text-black mb-2 text-sm uppercase">Customer Satisfaction</h4>
              <p className="text-yellow-600 text-xl font-bold">5★</p>
              <p className="text-gray-700 text-xs">Outstanding</p>
            </div>
          </div>
        </div>

      </main>

      {/* Minimal Footer */}
      <footer className="w-full bg-gray-100 text-gray-600 mt-8 border-t border-gray-300">
        <div className="max-w-6xl mx-auto py-8 px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} OldWestSolutions. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}