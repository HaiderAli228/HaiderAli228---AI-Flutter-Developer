import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, Quote, Building2, Link as LinkIcon, Check, Upload } from 'lucide-react';
import { SectionId } from '../types';

interface Reference {
  id: string;
  name: string;
  role: string;
  institution: string;
  description: string;
  email: string;
  phone: string;
  defaultImage: string;
}

const referencesData: Reference[] = [
  {
    id: "muhammad_bilal",
    name: "Muhammad Bilal",
    role: "Lecturer, Computer Science",
    institution: "Government Islamia Graduate College, Sargodha Road, Faisalabad",
    description: "An exceptional mentor with profound knowledge in Computer Science. He has been a pivotal figure in my academic journey, providing expert guidance in advanced computing concepts.",
    email: "gigccsoffice@gmail.com",
    phone: "+92 321-8868186",
    defaultImage: "/muhammad_bilal.jpg"
  },
  {
    id: "umar_bashir",
    name: "Umar Bashir",
    role: "HOD Computer Science & Lecturer",
    institution: "Government Islamia Graduate College, Sargodha Road, Faisalabad",
    description: "As the Head of Department, Sir Umar Bashir has been a beacon of academic leadership. His rigorous standards and supportive mentorship have significantly contributed to my professional development and understanding of institutional dynamics.",
    email: "gigccsoffice@gmail.com",
    phone: "+92 304-1044880",
    defaultImage: "/umar_bashir.jpg"
  }
];

const ReferenceCard: React.FC<{ reference: Reference }> = ({ reference }) => {
  const [imageSrc, setImageSrc] = useState<string>(reference.defaultImage);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const localStorageKey = `teacher_image_cache_${reference.id}`;

  // Check local storage on load
  useEffect(() => {
    const cachedImage = localStorage.getItem(localStorageKey);
    if (cachedImage) {
      setImageSrc(cachedImage);
    }
  }, [localStorageKey]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImageSrc(base64String);
        // Save to localStorage so it persists on refresh
        localStorage.setItem(localStorageKey, base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const copyImageLink = () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const shareableLink = `${origin}${reference.defaultImage}`;

    navigator.clipboard.writeText(shareableLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl bg-gray-900/40 border border-gray-800 p-8 md:p-12 rounded-3xl hover:border-neon-blue/30 transition-all group relative overflow-hidden backdrop-blur-sm">
        {/* Decorative Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-blue/10 rounded-full blur-[60px] -z-10 group-hover:bg-neon-blue/20 transition-colors" />

        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            
            {/* Large Image Section */}
            <div className="flex flex-col items-center gap-4 shrink-0">
                {/* Image Container with Upload Overlay */}
                <div className="relative group/image w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl group-hover:border-neon-blue/50 transition-all bg-gray-800">
                      <img 
                        src={imageSrc} 
                        alt={reference.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          // Fallback if image is missing
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(reference.name)}&background=0D8ABC&color=fff&size=256`;
                        }}
                      />
                      
                      {/* Upload Overlay - Visible on Hover */}
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 cursor-pointer backdrop-blur-sm z-10"
                      >
                        <Upload size={32} className="text-neon-blue mb-2" />
                        <span className="text-white text-xs font-bold uppercase tracking-wider">Upload Photo</span>
                      </div>
                      
                      {/* Hidden File Input */}
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                </div>
                
                {/* Copy Link Button */}
                <button 
                    onClick={copyImageLink}
                    className="flex items-center gap-2 px-5 py-2.5 bg-black/40 border border-gray-700 rounded-full text-xs font-mono text-gray-400 hover:text-white hover:border-neon-blue hover:bg-neon-blue/10 transition-all cursor-pointer group/btn active:scale-95"
                    title={`Copy link for ${reference.name}'s picture`}
                >
                    {copied ? <Check size={14} className="text-green-400" /> : <LinkIcon size={14} className="group-hover/btn:text-neon-blue" />}
                    <span>{copied ? "Link Copied!" : "Copy Picture Link"}</span>
                </button>
            </div>

            <div className="flex-1 space-y-6 text-center md:text-left">
                {/* Header Info */}
                <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                        {reference.name}
                    </h3>
                    <div className="text-neon-purple font-bold text-xl flex items-center justify-center md:justify-start gap-2 mb-2">
                        <Building2 size={20} />
                        {reference.role}
                    </div>
                    <div className="text-gray-400 text-base">
                        {reference.institution}
                    </div>
                </div>

                {/* Quote/Description */}
                <div className="p-6 bg-black/30 rounded-xl border border-white/5 relative text-left">
                    <Quote size={32} className="absolute -top-4 -left-2 text-neon-blue opacity-50 bg-[#050511] rounded-full p-1" />
                    <p className="text-gray-300 italic leading-relaxed text-lg pl-2">
                        "{reference.description}"
                    </p>
                </div>

                {/* Contact Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                    <a 
                        href={`mailto:${reference.email}`} 
                        className="flex items-center justify-center gap-3 text-gray-400 hover:text-white transition-colors text-sm bg-gray-800/50 px-6 py-3 rounded-xl border border-gray-700 hover:border-neon-blue/50 hover:bg-gray-800"
                    >
                        <Mail size={18} className="text-neon-blue" />
                        <span className="font-mono">{reference.email}</span>
                    </a>
                    <a 
                        href={`tel:${reference.phone.replace(/\s+/g, '')}`} 
                        className="flex items-center justify-center gap-3 text-gray-400 hover:text-white transition-colors text-sm bg-gray-800/50 px-6 py-3 rounded-xl border border-gray-700 hover:border-green-500/50 hover:bg-gray-800"
                    >
                        <Phone size={18} className="text-green-400" />
                        <span className="font-mono">{reference.phone}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

const References: React.FC = () => {
  return (
    <section id={SectionId.REFERENCES} className="py-24 px-4 bg-gradient-to-b from-gray-900 to-[#050511] relative border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Professional <span className="text-neon-blue">References</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Distinguished academic mentors who vouch for my technical expertise and dedication.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
            {referencesData.map((ref) => (
                <ReferenceCard key={ref.id} reference={ref} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default References;