import Link from 'next/link';
import TopBar from '../components/TopBar';

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white font-sans">
      {/* Top Bar */}
      <TopBar />
      
      {/* Header */}
      <header className="w-full flex justify-center items-center py-8 px-8 bg-[#2a2a2a] shadow-md">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-extrabold tracking-tight flex items-center">
            <img src="/bell.png" alt="OldWestSolutions Logo" className="w-8 h-8 mr-3" />
            OldWestSolutions
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-[#1a1a1a] text-center border-b border-[#333]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Transparent Pricing</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            No hidden fees, no long-term contracts. Pay only for what you use.
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="w-full max-w-7xl py-16 px-4">
        
        {/* Premium CPU Plans */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Premium CPU Plans</h2>
            <p className="text-gray-300 mb-6">
              Minimum hardware model for consistent performance on dedicated resources. See product details.
            </p>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1a1a1a]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Plan</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">$/Mo</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">$/Hr</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">RAM</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">CPUs</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Storage</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Transfer</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Network In/Out</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">Premium 4 GB</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$43.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$0.06</td>
                    <td className="px-6 py-4 text-sm text-gray-300">4 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">2</td>
                    <td className="px-6 py-4 text-sm text-gray-300">80 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">4 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/4 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">Premium 8 GB</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$86.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$0.13</td>
                    <td className="px-6 py-4 text-sm text-gray-300">8 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">4</td>
                    <td className="px-6 py-4 text-sm text-gray-300">160 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">5 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/5 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">Premium 16 GB</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$173.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$0.26</td>
                    <td className="px-6 py-4 text-sm text-gray-300">16 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">8</td>
                    <td className="px-6 py-4 text-sm text-gray-300">320 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">6 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/6 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">Premium 32 GB</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$346.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$0.52</td>
                    <td className="px-6 py-4 text-sm text-gray-300">32 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">16</td>
                    <td className="px-6 py-4 text-sm text-gray-300">640 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">7 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/7 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">Premium 64 GB</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$691.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$1.04</td>
                    <td className="px-6 py-4 text-sm text-gray-300">64 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">32</td>
                    <td className="px-6 py-4 text-sm text-gray-300">1280 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">8 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/8 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">Premium 96 GB</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$1,037.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$1.56</td>
                    <td className="px-6 py-4 text-sm text-gray-300">96 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">48</td>
                    <td className="px-6 py-4 text-sm text-gray-300">1920 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">9 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/9 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">Premium 128 GB</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$1,382.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$2.07</td>
                    <td className="px-6 py-4 text-sm text-gray-300">128 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">50</td>
                    <td className="px-6 py-4 text-sm text-gray-300">2500 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">10 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/10 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">Premium 256 GB</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$2,765.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$4.15</td>
                    <td className="px-6 py-4 text-sm text-gray-300">256 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">56</td>
                    <td className="px-6 py-4 text-sm text-gray-300">5000 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">11 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/11 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">Premium 512 GB</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$5,530.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$8.29</td>
                    <td className="px-6 py-4 text-sm text-gray-300">512 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">64</td>
                    <td className="px-6 py-4 text-sm text-gray-300">7200 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">12 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/12 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* GPU Plans */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">GPU Plans</h2>
            <p className="text-gray-300 mb-6">
              Dedicated virtual machines equipped with NVIDIA GPUs to speed up complex compute jobs. See product details.
            </p>
            <div className="text-sm text-gray-400 mb-4">
              <p>RTX 4000 Ada Generation | Quadro RTX 6000</p>
            </div>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1a1a1a]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Plan</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">$/Mo</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">$/Hr</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">RAM</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">GPUs</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">CPUs</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Storage</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Transfer</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Network In/Out</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-white w-40">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">RTX4000 Ada GPU x1 Small</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$350.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$0.52</td>
                    <td className="px-6 py-4 text-sm text-gray-300">16 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">1</td>
                    <td className="px-6 py-4 text-sm text-gray-300">4</td>
                    <td className="px-6 py-4 text-sm text-gray-300">500 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">0 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/16 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">RTX4000 Ada GPU x1 Medium</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$446.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$0.67</td>
                    <td className="px-6 py-4 text-sm text-gray-300">32 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">1</td>
                    <td className="px-6 py-4 text-sm text-gray-300">8</td>
                    <td className="px-6 py-4 text-sm text-gray-300">500 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">0 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/16 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">RTX4000 Ada GPU x1 Large</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$638.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$0.96</td>
                    <td className="px-6 py-4 text-sm text-gray-300">64 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">1</td>
                    <td className="px-6 py-4 text-sm text-gray-300">16</td>
                    <td className="px-6 py-4 text-sm text-gray-300">500 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">0 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/16 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">RTX4000 Ada GPU x1 X-Large</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$1,022.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$1.53</td>
                    <td className="px-6 py-4 text-sm text-gray-300">128 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">1</td>
                    <td className="px-6 py-4 text-sm text-gray-300">32</td>
                    <td className="px-6 py-4 text-sm text-gray-300">500 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">0 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/16 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">RTX4000 Ada GPU x2 Small</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$700.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$1.05</td>
                    <td className="px-6 py-4 text-sm text-gray-300">32 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">2</td>
                    <td className="px-6 py-4 text-sm text-gray-300">8</td>
                    <td className="px-6 py-4 text-sm text-gray-300">1 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">0 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/16 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">RTX4000 Ada GPU x2 Medium</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$892.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$1.34</td>
                    <td className="px-6 py-4 text-sm text-gray-300">64 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">2</td>
                    <td className="px-6 py-4 text-sm text-gray-300">16</td>
                    <td className="px-6 py-4 text-sm text-gray-300">1 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">0 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/16 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">RTX4000 Ada GPU x2 Medium High Storage</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$992.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$1.49</td>
                    <td className="px-6 py-4 text-sm text-gray-300">64 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">2</td>
                    <td className="px-6 py-4 text-sm text-gray-300">16</td>
                    <td className="px-6 py-4 text-sm text-gray-300">2 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">0 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/16 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">RTX4000 Ada GPU x4 Small</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$1,976.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$2.96</td>
                    <td className="px-6 py-4 text-sm text-gray-300">128 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">4</td>
                    <td className="px-6 py-4 text-sm text-gray-300">32</td>
                    <td className="px-6 py-4 text-sm text-gray-300">2 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">0 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/16 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">RTX4000 Ada GPU x4 Medium</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$2,384.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$3.57</td>
                    <td className="px-6 py-4 text-sm text-gray-300">196 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">4</td>
                    <td className="px-6 py-4 text-sm text-gray-300">48</td>
                    <td className="px-6 py-4 text-sm text-gray-300">2 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">0 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/16 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Accelerated Compute Plans */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Accelerated Compute Plans</h2>
            <p className="text-gray-300 mb-6">
              Dedicated access to cloud ASICs for specialized workloads, including media transcoding with NETINT VPUs. See product details.
            </p>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1a1a1a]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Plan</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">$/Mo</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">$/Hr</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">RAM</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">VPUs</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">CPUs</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Storage</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Transfer</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Network In/Out</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">NETINT Quadra T1U VPU x1 Small</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$280.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$0.42</td>
                    <td className="px-6 py-4 text-sm text-gray-300">16 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">1</td>
                    <td className="px-6 py-4 text-sm text-gray-300">8</td>
                    <td className="px-6 py-4 text-sm text-gray-300">200 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">0 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/16 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">NETINT Quadra T1U VPU x1 Medium</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$352.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$0.53</td>
                    <td className="px-6 py-4 text-sm text-gray-300">24 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">1</td>
                    <td className="px-6 py-4 text-sm text-gray-300">12</td>
                    <td className="px-6 py-4 text-sm text-gray-300">300 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">0 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/16 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                  <tr className="hover:bg-[#333] transition-colors">
                    <td className="px-6 py-4 text-sm text-white">NETINT Quadra T1U VPU x2 Small</td>
                    <td className="px-6 py-4 text-sm text-green-400 font-semibold">$488.00</td>
                    <td className="px-6 py-4 text-sm text-gray-300">$0.73</td>
                    <td className="px-6 py-4 text-sm text-gray-300">24 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">2</td>
                    <td className="px-6 py-4 text-sm text-gray-300">12</td>
                    <td className="px-6 py-4 text-sm text-gray-300">300 GB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">0 TB</td>
                    <td className="px-6 py-4 text-sm text-gray-300">40/16 Gbps</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Storage Plans */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Storage</h2>
            <p className="text-gray-300 mb-6">Egress overage costs = US$0.005 per GB</p>
          </div>

          {/* Block Storage */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Block Storage Plans</h3>
            <p className="text-gray-300 mb-6">Increase storage capacity by attaching high-speed volumes. See product details.</p>
            
            <div className="bg-[#2a2a2a] rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#1a1a1a]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Storage</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">$/Mo</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">10 GB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$1.00</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">20 GB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$2.00</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">40 GB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$4.00</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">80 GB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$8.00</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">160 GB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$16.00</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">320 GB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$32.00</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">640 GB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$64.00</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">1280 GB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$128.00</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">2560 GB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$256.00</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">5120 GB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$512.00</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">10240 GB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$1,024.00</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Object Storage */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Object Storage Plans</h3>
            <p className="text-gray-300 mb-6">Amazon S3-compatible storage for backups, big data, and archiving needs. Overall storage capacity is based on the number of objects, per bucket, per account. See product details.</p>
            
            <div className="bg-[#2a2a2a] rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#1a1a1a]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Storage</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">$/Mo</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Outbound Transfer</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Objects / Cluster*</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">250 GB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$5.00</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 TB</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 Billion</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">500 GB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$10.00</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 TB</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 Billion</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">1 TB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$20.00</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 TB</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 Billion</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">5 TB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$100.00</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 TB</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 Billion</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">10 TB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$200.00</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 TB</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 Billion</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">50 TB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$1,000.00</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 TB</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 Billion</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">100 TB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$2,000.00</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 TB</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 Billion</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">500 TB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$10,000.00</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 TB</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 Billion</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">1 PB</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$20,000.00</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 TB</td>
                      <td className="px-6 py-4 text-sm text-gray-300">1 Billion</td>
                    <td className="px-6 py-4 text-sm text-right w-40"><Link href="/rent" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Sign up</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">$0.02 / GB Additional Storage, $0.005 / GB Additional Outbound Transferred. Some usage limits and specifications vary by region. For larger workloads and expanded capacity requests, contact us.</p>
          </div>
        </div>

        {/* Networking */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Networking</h2>
            <p className="text-gray-300 mb-6">Egress overage costs = US$0.005 per GB</p>
          </div>

          {/* NodeBalancers */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">NodeBalancers Plan</h3>
            <p className="text-gray-300 mb-6">Maintain uptime, scale efficiently, and manage traffic at predictable costs. See product details.</p>
            
            <div className="bg-[#2a2a2a] rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#1a1a1a]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Plan</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">$/Mo</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">$/Hr</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="hover:bg-[#333] transition-colors">
                      <td className="px-6 py-4 text-sm text-white">NodeBalancer</td>
                      <td className="px-6 py-4 text-sm text-green-400 font-semibold">$10</td>
                      <td className="px-6 py-4 text-sm text-gray-300">$0.15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-[#2a2a2a] rounded-xl shadow p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-300 mb-4">Yes! There are no long-term contracts. You can cancel your server rental at any time with no penalties.</p>
              
              <h3 className="text-lg font-bold text-white mb-2">How quickly can I get my server?</h3>
              <p className="text-gray-300 mb-4">Most servers are deployed and ready to use in under 60 seconds after payment confirmation.</p>
              
              <h3 className="text-lg font-bold text-white mb-2">Do you offer refunds?</h3>
              <p className="text-gray-300">We offer a 7-day money-back guarantee for all new customers. Contact support for assistance.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">What operating systems are available?</h3>
              <p className="text-gray-300 mb-4">We support Ubuntu, CentOS, Windows Server, Debian, and many other popular operating systems.</p>
              
              <h3 className="text-lg font-bold text-white mb-2">Is there a setup fee?</h3>
              <p className="text-gray-300 mb-4">No setup fees! The price you see is exactly what you pay. No hidden costs or surprises.</p>
              
              <h3 className="text-lg font-bold text-white mb-2">Can I upgrade my server?</h3>
              <p className="text-gray-300">Yes, you can upgrade your server resources at any time. Changes take effect immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="w-full bg-[#2a2a2a] text-gray-400 mt-16 border-t border-[#333]">
        <div className="max-w-6xl mx-auto py-8 px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} OldWestSolutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}