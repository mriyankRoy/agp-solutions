import React, { useState, useEffect } from 'react';
import { 
  Phone, Globe, Linkedin, Download, 
  MessageSquare, Cpu, ShieldCheck, QrCode, User, Share2, Wallet 
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const DigitalBusinessCard = () => {
  const [activeTab, setActiveTab] = useState('card');
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.origin + "/me");
  }, []);

  const data = {
    name: "Mriyank Roy",
    role: "Web Designer",
    company: "Art G Power",
    id: "REG-882-MR",
    phone: "5434323444",
    email: "mriyank@artgpower.co.uk",
    website: "https://www.artgpower.co.uk/",
    linkedin: "linkedin.com/in/mriyankroy",
    whatsapp: "5434323444",
    profileImage: "https://media.licdn.com/dms/image/v2/C4D03AQGWl3hr_5Hgwg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1631744890167?e=2147483647&v=beta&t=HjNo8kXRIppSz5qOydFE14gMT9ojtfQ_hm6Tmuy3W6c",
    // Integrated your PassKit ID into a smart link
    passKitUrl: "https://pub1.pskt.io/7mSY3CFhheG8gxcFhlZtvm" 
  };

  // 1. NATIVE SHARE (Opens WhatsApp/Instagram/System Share)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${data.name} | Art G Power ID`,
          text: `Check out my digital business card:`,
          url: currentUrl,
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      navigator.clipboard.writeText(currentUrl);
      alert("Link copied to clipboard!");
    }
  };

  // 2. UPDATED WALLET LOGIC (Opens PassKit Smart Pass)
  const handleGoogleWallet = () => {
    // This will open the PassKit landing page which works for both 
    // Apple Wallet and Google Wallet without certificate errors.
    window.open(data.passKitUrl, '_blank');
  };

  // 3. CONTACT FILE GENERATION (.vcf)
  const handleSaveContact = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${data.name}`,
      `ORG:${data.company}`,
      `TITLE:${data.role}`,
      `TEL;TYPE=CELL,VOICE:${data.phone}`,
      `TEL;TYPE=WHATSAPP,VOICE:${data.whatsapp}`,
      `EMAIL;TYPE=INTERNET,PREF:${data.email}`,
      `URL:${data.website}`,
      "REV:" + new Date().toISOString(),
      "END:VCARD"
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Contact_${data.name.replace(/\s/g, '_')}.vcf`);
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#1A1A1E] flex flex-col items-center justify-center p-4 font-sans selection:bg-[#BF092F] selection:text-white">
      
      {/* TABS CONTROLLER */}
      <div className="flex bg-[#44444E] p-1.5 rounded-2xl mb-8 border border-white/10 w-full max-w-[300px] shadow-2xl z-20">
        <button 
          onClick={() => setActiveTab('card')} 
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${activeTab === 'card' ? 'bg-[#BF092F] text-white shadow-lg' : 'text-white/40 hover:text-white'}`}
        >
          <User size={14} /> Profile
        </button>
        <button 
          onClick={() => setActiveTab('qr')} 
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${activeTab === 'qr' ? 'bg-[#BF092F] text-white shadow-lg' : 'text-white/40 hover:text-white'}`}
        >
          <QrCode size={14} /> QR Code
        </button>
      </div>

      {/* CARD MAIN BODY */}
      <div className="w-full max-w-md bg-[#44444E] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t-4 border-[#BF092F] overflow-hidden relative min-h-[660px] flex flex-col border border-white/5">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        {activeTab === 'card' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full relative z-10">
            
            {/* Action Bar */}
            <div className="p-8 pb-0 flex justify-between items-start">
               <div className="bg-white/5 p-2 rounded-lg border border-white/10 shadow-inner"><Cpu size={16} className="text-[#BF092F]" /></div>
               <button 
                 onClick={handleNativeShare} 
                 className="bg-white/5 p-2.5 rounded-lg border border-white/10 hover:bg-[#BF092F] hover:border-[#BF092F] transition-all text-white/40 hover:text-white active:scale-90"
               >
                 <Share2 size={18} />
               </button>
            </div>

            {/* Profile Info */}
            <div className="p-8 pt-4 pb-4 text-center">
              <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-[#BF092F] shadow-[0_0_30px_rgba(191,9,47,0.2)] mx-auto bg-gray-800 mb-6">
                <img src={data.profileImage} alt={data.name} className="w-full h-full object-cover" />
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tight leading-none">
                {data.name.split(' ')[0]} <span className="text-[#BF092F]">{data.name.split(' ')[1]}</span>
              </h1>
              <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.4em] mt-3">{data.role}</p>
            </div>

            {/* Contact Grid */}
            <div className="px-8 py-4 flex-grow">
              <div className="space-y-4 relative">
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/5" />
                {[
                  { icon: <Phone size={16} />, label: "Mobile", val: data.phone, link: `tel:${data.phone}` },
                  { icon: <MessageSquare size={16} />, label: "WhatsApp", val: "Instant Chat", link: `https://wa.me/${data.whatsapp}` },
                  { icon: <Globe size={16} />, label: "Portfolio", val: "artgpower.co.uk", link: data.website },
                  { icon: <Linkedin size={16} />, label: "LinkedIn", val: "mriyankroy", link: `https://${data.linkedin}` }
                ].map((node, i) => (
                  <a href={node.link} target="_blank" rel="noreferrer" key={i} className="group flex items-center gap-6 relative pl-8 py-1 transition-all hover:translate-x-1">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-px bg-white/10 group-hover:bg-[#BF092F] group-hover:w-6 transition-all" />
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/20 group-hover:text-[#BF092F] transition-all border border-white/5 group-hover:border-[#BF092F]/30">{node.icon}</div>
                    <div>
                      <p className="text-[8px] font-bold text-[#BF092F] uppercase tracking-widest leading-none mb-1">{node.label}</p>
                      <p className="text-[13px] text-white/70 font-medium transition-colors group-hover:text-white">{node.val}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Primary Actions */}
            <div className="p-8 mt-auto space-y-3">
              <button onClick={handleSaveContact} className="w-full flex items-center justify-center gap-3 py-4 bg-[#BF092F] hover:bg-[#d10a34] text-white rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all shadow-lg active:scale-95">
                <Download size={16} /> Save to Contacts
              </button>
              
              <button 
                onClick={handleGoogleWallet} 
                className="w-full flex items-center justify-center gap-3 py-3.5 bg-black text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] border border-white/5 hover:border-white/20 hover:bg-zinc-900 transition-all active:scale-95 group"
              >
                <Wallet size={16} className="text-[#4285F4] group-hover:scale-110 transition-transform" /> 
                Add to Wallet
              </button>
            </div>

          </div>
        ) : (
          /* QR CODE PANEL */
          <div className="animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center justify-center h-full p-12 relative z-10 text-center">
            <div className="p-6 bg-white rounded-[2.5rem] shadow-[0_0_60px_rgba(191,9,47,0.25)] mb-8 border-4 border-white/10">
              <QRCodeSVG value={currentUrl} size={220} level="H" fgColor="#44444E" />
            </div>
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-1">Registry Access</h3>
            <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-mono">{data.id}</p>
            
            <button 
              onClick={handleNativeShare} 
              className="mt-10 flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white/60 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BF092F] hover:text-white hover:border-[#BF092F] transition-all active:scale-95"
            >
              <Share2 size={14} /> Share Card Link
            </button>
          </div>
        )}
      </div>

      {/* Industrial Footer Branding */}
      <div className="mt-8 flex items-center gap-2 opacity-10">
        <ShieldCheck size={14} className="text-white" />
        <span className="text-[10px] text-white uppercase tracking-[0.4em]">Official AGP Industrial ID</span>
      </div>
    </div>
  );
};

export default DigitalBusinessCard;