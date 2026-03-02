import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'; 
import { 
  Phone, Globe, Linkedin, Download, 
  MessageSquare, Cpu, ShieldCheck, QrCode, User, Share2, Info
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { employees } from '../../utils/employees';

const DigitalBusinessCard = () => {
  const { username } = useParams(); 
  const [activeTab, setActiveTab] = useState('card');
  const [currentUrl, setCurrentUrl] = useState('');

  const data = employees[username] || employees["mriyank-roy"];

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [username]);

  const getBase64FromUrl = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob); 
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
      });
    } catch (err) {
      return null;
    }
  };

  const handleSaveContact = async () => {
    const photo = await getBase64FromUrl(data.profileImage);
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
      photo ? `PHOTO;ENCODING=b;TYPE=JPEG:${photo}` : "",
      "REV:" + new Date().toISOString(),
      "END:VCARD"
    ].filter(Boolean).join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Contact_${data.name.replace(/\s/g, '_')}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#1A1A1E] flex flex-col items-center justify-center p-4 font-sans selection:bg-[#BF092F] selection:text-white">
      
      {/* TAB NAVIGATION */}
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

      {/* MAIN CARD CONTAINER */}
      <div className="w-full max-w-md bg-[#44444E] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t-4 border-[#BF092F] overflow-hidden relative min-h-[700px] flex flex-col border border-white/5">
        
        {/* BACKGROUND TEXTURE & WATERMARK */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        {/* BIG WATERMARK LOGO */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0">
          <img src="https://res.cloudinary.com/dc912sjxj/image/upload/v1772287992/Gemini_Generated_Image_tler0wtler0wtler-removebg-preview_zhmv2k.png" alt="Watermark" className="w-[80%] object-contain grayscale" />
        </div>

        {activeTab === 'card' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full relative z-10">
            <div className="p-8 pb-0 flex justify-between items-start">
               <div className="bg-white/5 p-2 rounded-lg border border-white/10 shadow-inner">
                 <Cpu size={16} className="text-[#BF092F]" />
               </div>
               <button 
                 onClick={() => {
                   navigator.clipboard.writeText(currentUrl);
                   alert("Link copied!");
                 }} 
                 className="bg-white/5 p-2.5 rounded-lg border border-white/10 text-white/40 hover:text-white active:scale-90"
               >
                 <Share2 size={18} />
               </button>
            </div>

            <div className="p-8 pt-4 pb-4 text-center">
              <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-[#BF092F] shadow-2xl mx-auto bg-gray-800 mb-6">
                <img src={data.profileImage} alt={data.name} className="w-full h-full object-cover" />
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tight leading-none">
                {data.name.split(' ')[0]} <span className="text-[#BF092F]">{data.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.4em] mt-3">{data.role}</p>
            </div>

            {/* BIO SECTION */}
            {data.bio && (
              <div className="px-8 py-2">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-2 text-[#BF092F]">
                    <Info size={14} />
                    <span className="text-[8px] font-bold uppercase tracking-widest">Professional Profile</span>
                  </div>
                  <p className="text-white/60 text-[11px] leading-relaxed italic">
                    {data.bio}
                  </p>
                </div>
              </div>
            )}

            <div className="px-8 py-4 flex-grow">
              <div className="space-y-4 relative">
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/5" />
                {[
                  { icon: <Phone size={16} />, label: "Mobile", val: data.phone, link: `tel:${data.phone}` },
                  { icon: <MessageSquare size={16} />, label: "WhatsApp", val: "Instant Chat", link: `https://wa.me/${data.whatsapp}` },
                  { icon: <Globe size={16} />, label: "Portfolio", val: "artgpower.co.uk", link: data.website },
                  { icon: <Linkedin size={16} />, label: "LinkedIn", val: "View Profile", link: `https://${data.linkedin}` }
                ].map((node, i) => (
                  <a href={node.link} target="_blank" rel="noreferrer" key={i} className="group flex items-center gap-6 relative pl-8 py-1 transition-all">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-px bg-white/10 group-hover:bg-[#BF092F] transition-all" />
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/20 group-hover:text-[#BF092F] border border-white/5">{node.icon}</div>
                    <div>
                      <p className="text-[8px] font-bold text-[#BF092F] uppercase tracking-widest leading-none mb-1">{node.label}</p>
                      <p className="text-[13px] text-white/70 font-medium group-hover:text-white transition-colors">{node.val}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 mt-auto">
              <button 
                onClick={handleSaveContact} 
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#BF092F] hover:bg-[#d10a34] text-white rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all shadow-lg active:scale-95"
              >
                <Download size={16} /> Save Contact Info
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center justify-center h-full p-12 relative z-10 text-center">
            <div className="p-6 bg-white rounded-[2.5rem] shadow-2xl mb-8 border-4 border-white/10">
              <QRCodeSVG value={currentUrl} size={220} level="H" fgColor="#44444E" />
            </div>
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-1">Registry Access</h3>
            <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-mono">{data.id}</p>
            <p className="text-white/20 text-[10px] mt-6 max-w-[200px]">Scan this code to open the digital profile on any mobile device.</p>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="mt-8 flex items-center gap-2 opacity-10">
        <ShieldCheck size={14} className="text-white" />
        <span className="text-[10px] text-white uppercase tracking-[0.4em]">Official AGP Industrial ID</span>
      </div>
    </div>
  );
};

export default DigitalBusinessCard;