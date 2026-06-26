import { useState, useEffect } from 'react';
import './App.css';

const PRODUCTS = [
  {
    id: 1,
    title: "Vintage Oversized Sweatshirt",
    category: "Streetwear",
    price: "Rp 185k",
    tag: "9/10 Condition",
    tagClass: "bg-vibrant-purple text-white",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzjOKIfEu6awAJ4a1gL4J2H-32eAaqRw5LYv2QSDFw39Hg-1sA_ysnhNOk2kYNZC_o0fRRkXUHjxC8J0VopYzvIwNS-8IU7pNBdJhN5UeK2TsK2aNl3EsbWymMnhK7413ZgNej85u43fLD3pkm5llOCL_jfqX1VBCMYLSPtIRo_B-0VeaIviH2T92GGXD_DDBFOC1JP54EhUGbAoyn1eBetrDa27Fey7s-VMLWwHtFdB0KNt3J4irbHJYIiTt8xq7OgezmrZFY5gU",
  },
  {
    id: 2,
    title: "Levi's 501 Classic Wash",
    category: "Denim",
    price: "Rp 320k",
    tag: "Rare Find",
    tagClass: "bg-caution-yellow text-on-background",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV_II-39J0NNxXHDXqzVkxHGZEVYG0XeH2dqtfrVi0WYH7vpQ_HWxSCrmsolikjwtJEZpzggkKCZE2skarIWwsPo6hkbiXMX9KepDknd3Ig7b3XOEPEsT2XmPGipyyvKolWkEq-kvgY4SnFvGR8zXQkaprzFPf_QBAoJXsmJTD4pY8O5st-_EMXSC7PJ-ei23I912P6Hn0MIk5Q8XgNYU176CRiIXYtWf_A6KQuI-uJ2DpGjMEEZU9miZpkvJsy7wOYqSbeMYCWBk",
  },
  {
    id: 3,
    title: "70s Psychedelic Shirt",
    category: "Vintage",
    price: "Rp 145k",
    tag: "8.5/10 Cond.",
    tagClass: "bg-vibrant-purple text-white",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3HLnjCbJoZPmxktSYxxKtCphTP-j0bsVzKBDRsOArSeYToAThrk0i1BFxsMEE_v8qSJfJe0jIE_KFjSPsBwzOeUzESQlYnr7caGwqh8ZMTfQbqvnDP7tW_zmV4imw0Vfv_rtUkYVQqciFBHwOL_AnzdBNqZ3oGN--y63b9FcacVtb5wBLsnomwcGvjpyGPZYzJyyc8zhBj_qmnyFhrLxa3DzptU4liT3SVMlxudKnNs0lxVWCeVyEbDZ8ce25CjmY3tFp0-yF1SI",
  },
  {
    id: 4,
    title: "Cognac Leather Bag",
    category: "Accessories",
    price: "Rp 450k",
    tag: "High Value",
    tagClass: "bg-secondary-fixed text-on-secondary-fixed",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLN7welmU9wxVuUW6mKlcObUsFseLSV674cawdtRugnWkznoeE1g4TVTZGgmW0CkVjIQ2fB3DSwdaAMCvtS6_BZn3GcsxsJYwECYe000MHJeOGd4sn-_nIypkaglC2vA-wyzSBOxQqD7cOMzvBdNNso10dOQpTaREhLDqv4PSphmYlxpzqDqPMfV6w7d6YUXuxkKmKS6TX-rxvbssXGobJJcjNn5fE3zSyA5w7o_qqRifkSdIW9kqyR1g8QUrTtvgO_KBO9vAI0Fo",
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');

  // Handle header shadow toggle on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Terima kasih sudah subscribe, Bestie! Info drop barang rare akan dikirim ke: ${email}`);
    setEmail('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Mencari: "${searchQuery}"...`);
  };

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      {/* TopNavBar Shared Component Implementation */}
      <header className={`w-full top-0 sticky z-50 bg-surface-bright dark:bg-on-background backdrop-blur-md border-b-2 border-sky-tint dark:border-on-surface-variant h-20 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="flex justify-between items-center px-container-margin py-base max-w-7xl mx-auto h-full">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <svg className="w-full h-full" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.89,7.69h-13.79l.8,7.11,6.68,3.06,6.31-10.18Z" fill="#fdda5c"></path>
                <path d="M13,32.95l3.35-8.71-3.35-9.12-7.82,11.9c-.34,.52-.18,1.21,.36,1.53l7.47,4.4Z" fill="#fce87b"></path>
                <path d="M13,15.11l-3.64,15.69,3.64,2.15,2.74-7.13-2.74-10.7Z" fill="#fdda5c"></path>
                <path d="M51,15.11l-4.75,10.5,4.75,7.33,7.47-4.4c.53-.31,.7-1.01,.36-1.53l-7.82-11.9Z" fill="#fce87b"></path>
                <path d="M51,15.11l3.64,15.69-3.64,2.15-2.74-7.13,2.74-10.7Z" fill="#fdda5c"></path>
                <path d="M14.14,13.6c-.63,0-1.14,.51-1.14,1.14V55.42c0,.63,.51,1.14,1.14,1.14H49.86c.63,0,1.14-.51,1.14-1.14V14.74c0-.63-.51-1.14-1.14-1.14h-6.16l-11.7,.43-11.7-.43h-6.16Z" fill="#62d9fa"></path>
                <path d="M32,14.03l2.9,5.91c.22,.45,.81,.57,1.2,.24l7.6-6.59-2.85-4.8-.54-.9c-.3-.5-.99-.61-1.42-.21l-6.89,6.34Z" fill="#fce87b"></path>
                <path d="M24.42,7.45c-.29,.02-.57,.18-.73,.45l-.54,.9-2.85,4.8,7.6,6.59c.38,.33,.97,.21,1.2-.24l2.9-5.91-6.89-6.34c-.16-.15-.36-.23-.56-.24-.04,0-.08,0-.12,0Z" fill="#fce87b"></path>
              </svg>
            </div>
            <div className="font-display-lg text-display-lg font-extrabold text-vibrant-purple dark:text-pastel-lavender leading-none">ThriftVibe</div>
          </div>
          <nav className="hidden md:flex gap-gutter font-body-md text-body-md items-center">
            <a className="text-primary dark:text-primary-fixed font-bold border-b-2 border-vibrant-purple hover:text-vibrant-purple transition-colors duration-200" href="#">Home</a>
            <a className="text-on-surface-variant dark:text-surface-variant hover:text-vibrant-purple transition-colors duration-200" href="#">Catalog</a>
            <a className="text-on-surface-variant dark:text-surface-variant hover:text-vibrant-purple transition-colors duration-200" href="#">Eco Mission</a>
            <a className="text-on-surface-variant dark:text-surface-variant hover:text-vibrant-purple transition-colors duration-200" href="#">Trending</a>
          </nav>
          <div className="flex items-center gap-gutter">
            <form onSubmit={handleSearchSubmit} className="hidden lg:flex items-center bg-surface-container rounded-lg px-base py-1">
              <span className="material-symbols-outlined text-outline">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-40 placeholder-outline focus:outline-none"
                placeholder="Cari harta karunmu..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <button className="text-primary dark:text-primary-fixed font-bold hover:text-vibrant-purple transition-colors duration-200 active:scale-95">Sign In</button>
            <button className="p-2 hover:bg-primary-container/10 rounded-full transition-colors active:scale-95" onClick={() => alert('Keranjang belanjaanmu masih kosong, Bestie!')}>
              <span className="material-symbols-outlined text-primary" data-icon="shopping_cart">shopping_cart</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-surface-container-low px-container-margin py-stack-lg lg:py-[100px]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-stack-md items-center">
            <div className="z-10">
              <span className="inline-block px-base py-1 bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md rounded-full mb-stack-sm">#ThriftVibeOnly</span>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-stack-sm leading-tight">
                Keren Maksimal, <br /><span className="text-primary">Sayang Lingkungan.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md max-w-lg">
                Gak perlu boncos buat tampil stand-out. Temukan outfit vintage unik yang bikin gaya kamu makin berkarakter sambil bantu bumi tetap hijau.
              </p>
              <div className="flex flex-col sm:flex-row gap-gutter">
                <button className="bg-primary text-on-primary px-stack-md py-base rounded-lg font-label-md text-label-md flex items-center justify-center gap-base hover:bg-on-primary-fixed-variant transition-colors active:scale-95 shadow-sm">
                  Mulai Thrifting, Bestie!
                  <span className="material-symbols-outlined">trending_flat</span>
                </button>
                <button className="bg-secondary-fixed text-on-secondary-fixed px-stack-md py-base rounded-lg font-label-md text-label-md hover:bg-secondary-fixed-dim transition-colors active:scale-95">
                  Cek Katalog
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-gutter">
                <div className="space-y-gutter pt-stack-md">
                  <div className="rounded-xl overflow-hidden aspect-[3/4] relative shadow-lg">
                    <img className="w-full h-full object-cover" alt="Streetwear photography of a stylish person in a vintage windbreaker" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoG--4dEnZ4-icqEX8QPQJfuQ0HdyCPIeL-L1lQg0xG5MfyqaNj8tLpxHNNXnWGFIKVIjgapE0I7nTSzxw4UrUWLS8mgT-Tc4TF4C3ZBMAT8txi-rvJrhrx6TytLQb7g5R65YtAGwUOySxCO78i9Vv5UuGnGXVjYWWrqsTyS277nSEk3O4OdiVVLoMesaVaNZwFrrD-41k4mtxPeFhMvx0hq1UOmdULBm5sQhJDFkPZvV7fzZqHzV66wSd1UBdxIwLlk1FpcgKKfk" />
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-square bg-pastel-lavender p-base flex items-end shadow-lg">
                    <span className="font-display-lg text-headline-md text-primary">VINTAGE<br />FINDS</span>
                  </div>
                </div>
                <div className="space-y-gutter">
                  <div className="rounded-xl overflow-hidden aspect-square shadow-lg">
                    <img className="w-full h-full object-cover" alt="Close-up of hand-picked accessories" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACb5zIMUTUFJWQJVlYlSUJBm0Dlo-pLOFyLDw8KyMwaDGBWpZF6xZLweK7N1GyD44cjflFJAAYw1mTmyY7naIgirJeU7yIDTndNozbLJQQhyzMS_8OgnY3UOz3daCqzdA9_m8kCQSE519jNqhm86y9VqK6SO97ttcHugc7v6owxLLt8bt8_fKVp-0kOBu9Soxj41ZIHBV4GIo4q8JZNZ_R6z-EXgwJtft_PDz4z20A23akrejW-tChHF8SBWvaBkNt7Fhtn_j2jfI" />
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-[3/4] relative shadow-lg">
                    <img className="w-full h-full object-cover" alt="Stylish gen-z individual in thrifted denim" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIYYSMOf00spqVEyHJGfxpd5jt28qIljASQRh95wkH1F8z8IP4a5kExUXK8iEqtujhu-QUToalQpAXgHoGpy4snstoDWKvY42SG65RJn67PmrBFiqdP1HtlBRfk6DsF3Ywpn1CS3BnqB5wKAKmDYRKzMR1WswerK72RY2SGACgTM0MeExtKMGcsJCfdm96H2B1p5c3jcxWrC8m4Eipqu8d0HtmbVWnZ0MwzW6XT5XvB3aKHPCdPNlTm8Q5Q5Lyf7DQ2a8esK89oT8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="py-stack-lg px-container-margin max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-stack-md">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-base">Lagi Trending Pekan Ini</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Harta karun pilihan yang lagi banyak dicari bestie-bestie lainnya.</p>
            </div>
            <button className="hidden md:flex items-center gap-base font-label-md text-label-md text-primary hover:text-vibrant-purple transition-colors">
              Lihat Semua <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {PRODUCTS.map(product => (
              <div key={product.id} className="bg-surface-container-lowest rounded-lg group flex flex-col h-full border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                <div className="relative overflow-hidden aspect-[4/5] rounded-t-lg">
                  <img alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={product.image} />
                  <div className={`absolute top-base left-base font-label-md text-[10px] px-2 py-1 rounded-full ${product.tagClass}`}>
                    {product.tag}
                  </div>
                </div>
                <div className="p-stack-sm flex flex-col flex-grow">
                  <span className="text-[12px] font-label-md text-outline uppercase mb-base">{product.category}</span>
                  <h3 className="font-headline-md text-body-lg text-on-surface line-clamp-1 mb-base">{product.title}</h3>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="font-headline-md text-headline-md text-primary">{product.price}</span>
                    <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eco-Mission Section */}
        <section className="bg-on-surface text-surface py-stack-lg">
          <div className="max-w-7xl mx-auto px-container-margin">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-surface-container-low text-on-surface p-stack-md rounded-xl relative">
                  <div className="absolute -top-6 -right-6 w-14 h-14 bg-caution-yellow text-on-background flex items-center justify-center rounded-full font-black text-lg border-2 border-on-surface rotate-12">100%</div>
                  <h2 className="font-display-lg text-headline-md mb-stack-md text-primary">Belanja Pintar, <span className="text-secondary">Bumi Senang.</span></h2>
                  <div className="space-y-gutter">
                    <div className="flex gap-gutter">
                      <div className="flex-shrink-0 w-12 h-12 bg-pastel-lavender text-primary flex items-center justify-center rounded-lg">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>wallet</span>
                      </div>
                      <div>
                        <h4 className="font-headline-md text-headline-md mb-1 text-on-surface">Hemat Dompet</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">Gak perlu bayar mahal buat brand ternama. Dapatkan kualitas premium dengan harga miring.</p>
                      </div>
                    </div>
                    <div className="flex gap-gutter">
                      <div className="flex-shrink-0 w-12 h-12 bg-eco-mint text-tertiary flex items-center justify-center rounded-lg">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                      </div>
                      <div>
                        <h4 className="font-headline-md text-headline-md mb-1 text-on-surface">Kurangi Limbah</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">Setiap item yang kamu beli adalah satu pakaian yang terselamatkan dari tempat pembuangan akhir.</p>
                      </div>
                    </div>
                    <div className="flex gap-gutter">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-fixed text-on-primary-fixed flex items-center justify-center rounded-lg">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>style</span>
                      </div>
                      <div>
                        <h4 className="font-headline-md text-headline-md mb-1 text-on-surface">Satu-Satunya</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">Gak ada lagi ceritanya kembaran baju di mall. Gaya kamu bakal bener-bener otentik.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-stack-sm">
                <h3 className="font-display-lg text-headline-lg-mobile md:text-display-lg leading-tight">Fashion Lambat,<br /><span className="text-secondary-fixed-dim underline underline-offset-8">Dampak Cepat.</span></h3>
                <p className="font-body-lg text-body-lg text-surface-dim">Kami percaya bahwa gaya yang keren tidak harus merusak alam. Di ThriftVibe, kami mengkurasi setiap potong pakaian untuk memastikan kamu mendapatkan yang terbaik dari segi gaya dan keberlanjutan.</p>
                <div className="pt-stack-sm">
                  <button className="font-label-md text-label-md px-stack-md py-base bg-secondary-fixed text-on-secondary-fixed rounded-lg hover:scale-105 transition-transform active:scale-95">Pelajari Visi Kami</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-stack-lg px-container-margin">
          <div className="max-w-4xl mx-auto bg-primary-container p-stack-md md:p-stack-lg rounded-xl text-center text-on-primary-container relative overflow-hidden">
            <h2 className="font-display-lg text-headline-lg mb-base relative z-10 text-on-primary">Mau Info Drop Barang Baru?</h2>
            <p className="font-body-lg text-body-lg mb-stack-md opacity-90 max-w-lg mx-auto relative z-10 text-on-primary">Daftar newsletter biar gak ketinggalan barang rare yang cuma ada satu di dunia.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-gutter max-w-md mx-auto relative z-10">
              <input
                className="flex-grow rounded-lg border-none px-stack-md py-base text-on-surface focus:ring-2 focus:ring-vibrant-purple focus:outline-none placeholder-gray-400 bg-white animate-none"
                placeholder="Email kamu di sini..."
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="bg-caution-yellow text-on-background px-stack-md py-base font-label-md text-label-md rounded-lg whitespace-nowrap hover:bg-yellow-400 transition-colors active:scale-95">Join Bestie!</button>
            </form>
            <p className="mt-base text-xs opacity-75 relative z-10 text-on-primary">Tenang, kita gak bakal spam kok. Janji bestie!</p>
          </div>
        </section>
      </main>

      {/* Footer Shared Component Implementation */}
      <footer className="w-full mt-stack-lg bg-surface-container-low dark:bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-container-margin py-stack-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-stack-md">
            <div className="space-y-base">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8">
                  <svg className="w-full h-full" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.89,7.69h-13.79l.8,7.11,6.68,3.06,6.31-10.18Z" fill="#fdda5c"></path>
                    <path d="M13,32.95l3.35-8.71-3.35-9.12-7.82,11.9c-.34,.52-.18,1.21,.36,1.53l7.47,4.4Z" fill="#fce87b"></path>
                    <path d="M14.14,13.6c-.63,0-1.14,.51-1.14,1.14V55.42c0,.63,.51,1.14,1.14,1.14H49.86c.63,0,1.14-.51,1.14-1.14V14.74c0-.63-.51-1.14-1.14-1.14h-6.16l-11.7,.43-11.7-.43h-6.16Z" fill="#62d9fa"></path>
                  </svg>
                </div>
                <div className="font-headline-md text-headline-md text-vibrant-purple">ThriftVibe</div>
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant max-w-xs">Destinasi thrifting online nomor satu buat anak muda yang melek gaya dan peduli lingkungan.</p>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-primary mb-base uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-base font-label-md text-label-md text-on-surface-variant">
                <li><a className="hover:text-vibrant-purple transition-colors cursor-pointer" href="#">Catalog</a></li>
                <li><a className="hover:text-vibrant-purple transition-colors cursor-pointer" href="#">Eco Mission</a></li>
                <li><a className="hover:text-vibrant-purple transition-colors cursor-pointer" href="#">Trending</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-primary mb-base uppercase tracking-wider">Support</h4>
              <ul className="space-y-base font-label-md text-label-md text-on-surface-variant">
                <li><a className="hover:text-vibrant-purple transition-colors cursor-pointer" href="#">Shipping FAQ</a></li>
                <li><a className="hover:text-vibrant-purple transition-colors cursor-pointer" href="#">Returns Policy</a></li>
                <li><a className="hover:text-vibrant-purple transition-colors cursor-pointer" href="#">Contact Bestie</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-primary mb-base uppercase tracking-wider">Legal</h4>
              <ul className="space-y-base font-label-md text-label-md text-on-surface-variant">
                <li><a className="hover:text-vibrant-purple transition-colors cursor-pointer" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-vibrant-purple transition-colors cursor-pointer" href="#">Terms of Service</a></li>
                <li><a className="hover:text-vibrant-purple transition-colors cursor-pointer" href="#">Sustainability Report</a></li>
              </ul>
            </div>
          </div>
          <div className="bg-sky-tint dark:bg-on-surface-variant h-[2px] w-full mb-stack-md"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-gutter font-label-md text-label-md text-on-surface-variant">
            <div>© 2024 ThriftVibe. All rights reserved.</div>
            <div className="flex gap-stack-md">
              <a className="hover:text-vibrant-purple cursor-pointer transition-colors">Instagram</a>
              <a className="hover:text-vibrant-purple cursor-pointer transition-colors">TikTok</a>
              <a className="hover:text-vibrant-purple cursor-pointer transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
