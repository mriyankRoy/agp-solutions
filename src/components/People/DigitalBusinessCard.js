import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, Globe, Linkedin, Download, 
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
  };

  // NATIVE SHARE FUNCTION
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${data.name} - ${data.role}`,
          text: `Check out ${data.name}'s digital business card.`,
          url: currentUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(currentUrl);
      alert("Link copied to clipboard!");
    }
  };

  // GOOGLE WALLET REDIRECT
  const handleGoogleWallet = () => {
    // Replace with your generated Google Wallet JWT link
    const walletLink = "https://pay.google.com/gp/v/save/YOUR_JWT_HERE";
    window.open(walletLink, '_blank');
  };

  const handleSaveContact = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "REV:" + new Date().toISOString(),
      `FN:${data.name}`,
      `ORG:${data.company}`,
      `TITLE:${data.role}`,
      `TEL;TYPE=CELL,VOICE:${data.phone}`,
      `TEL;TYPE=WHATSAPP,VOICE:${data.whatsapp}`,
      `EMAIL;TYPE=INTERNET,PREF:${data.email}`,
      `URL:${data.website}`,
      "END:VCARD"
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Contact_Mriyank_Roy.vcf`);
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#1A1A1E] flex flex-col items-center justify-center p-4 font-sans selection:bg-[#BF092F] selection:text-white">
      
      {/* TABS */}
      <div className="flex bg-[#44444E] p-1.5 rounded-2xl mb-8 border border-white/10 w-full max-w-[300px] shadow-2xl z-20">
        <button onClick={() => setActiveTab('card')} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${activeTab === 'card' ? 'bg-[#BF092F] text-white shadow-lg' : 'text-white/40 hover:text-white'}`}>
          <User size={14} /> Profile
        </button>
        <button onClick={() => setActiveTab('qr')} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${activeTab === 'qr' ? 'bg-[#BF092F] text-white shadow-lg' : 'text-white/40 hover:text-white'}`}>
          <QrCode size={14} /> QR Code
        </button>
      </div>

      <div className="w-full max-w-md bg-[#44444E] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t-4 border-[#BF092F] overflow-hidden relative min-h-[650px] flex flex-col border border-white/5">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        {activeTab === 'card' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full relative z-10">
            {/* Header Icons */}
            <div className="p-8 pb-0 flex justify-between items-start">
               <div className="bg-white/5 p-2 rounded-lg border border-white/10"><Cpu size={16} className="text-[#BF092F]" /></div>
               <button onClick={handleNativeShare} className="bg-white/5 p-2 rounded-lg border border-white/10 hover:bg-[#BF092F] transition-colors group">
                 <Share2 size={16} className="text-white/50 group-hover:text-white" />
               </button>
            </div>

            <div className="p-8 pt-4 pb-4 text-center">
              <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-[#BF092F] shadow-2xl mx-auto bg-gray-800 mb-6">
                <img src={data.profileImage} alt={data.name} className="w-full h-full object-cover" />
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tight">{data.name.split(' ')[0]} <span className="text-[#BF092F]">{data.name.split(' ')[1]}</span></h1>
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.4em] mt-2">{data.role}</p>
            </div>

            <div className="px-8 py-4 flex-grow">
              <div className="space-y-4 relative">
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/10" />
                {[
                  { icon: <Phone size={16} />, label: "Call", val: data.phone, link: `tel:${data.phone}` },
                  { icon: <MessageSquare size={16} />, label: "WhatsApp", val: "Instant Chat", link: `https://wa.me/${data.whatsapp}` },
                  { icon: <Globe size={16} />, label: "Website", val: "artgpower.co.uk", link: data.website },
                  { icon: <Linkedin size={16} />, label: "LinkedIn", val: "Mriyank Roy", link: `https://${data.linkedin}` }
                ].map((node, i) => (
                  <a href={node.link} target="_blank" rel="noreferrer" key={i} className="group flex items-center gap-6 relative pl-8 py-1 transition-all">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-px bg-white/20 group-hover:bg-[#BF092F] group-hover:w-6 transition-all" />
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/30 group-hover:text-[#BF092F] transition-all border border-white/5">{node.icon}</div>
                    <div>
                      <p className="text-[8px] font-bold text-[#BF092F] uppercase tracking-widest">{node.label}</p>
                      <p className="text-[13px] text-white/70 font-medium group-hover:text-white">{node.val}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="p-8 mt-auto space-y-3">
              <button onClick={handleSaveContact} className="w-full flex items-center justify-center gap-3 py-4 bg-[#BF092F] hover:bg-[#d10a34] text-white rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all shadow-lg active:scale-95">
                <Download size={16} /> Save to Contacts
              </button>
              
              <button onClick={handleGoogleWallet} className="w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] border border-white/10 hover:bg-zinc-900 transition-all active:scale-95">
                <Wallet size={16} className="text-[#4285F4]" /> Add to Google Wallet
              </button>
            </div>
          </div>
        ) : (
          /* QR CODE TAB */
          <div className="animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center justify-center h-full p-12 relative z-10 text-center">
            <div className="p-6 bg-white rounded-[2.5rem] shadow-[0_0_60px_rgba(191,9,47,0.25)] mb-8">
              <QRCodeSVG value={currentUrl} size={220} level="H" fgColor="#44444E" />
            </div>
            <p className="text-white text-sm font-bold tracking-tight mb-1">Scan Registry Entry</p>
            <p className="text-white/30 text-[9px] uppercase tracking-[0.3em]">Direct link to {data.name}</p>
            
            <button onClick={handleNativeShare} className="mt-8 flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/60 text-[10px] uppercase font-bold tracking-widest hover:bg-white/10 transition-all">
              <Share2 size={14} /> Send Link
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center gap-2 opacity-10">
        <ShieldCheck size={14} className="text-white" />
        <span className="text-[10px] text-white uppercase tracking-[0.4em]">Official AGP Digital ID</span>
      </div>
    </div>
  );
};

export default DigitalBusinessCard;