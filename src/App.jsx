import { useEffect, useMemo, useState } from 'react';
import './App.css';

const heroImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDoG--4dEnZ4-icqEX8QPQJfuQ0HdyCPIeL-L1lQg0xG5MfyqaNj8tLpxHNNXnWGFIKVIjgapE0I7nTSzxw4UrUWLS8mgT-Tc4TF4C3ZBMAT8txi-rvJrhrx6TytLQb7g5R65YtAGwUOySxCO78i9Vv5UuGnGXVjYWWrqsTyS277nSEk3O4OdiVVLoMesaVaNZwFrrD-41k4mtxPeFhMvx0hq1UOmdULBm5sQhJDFkPZvV7fzZqHzV66wSd1UBdxIwLlk1FpcgKKfk',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuACb5zIMUTUFJWQJVlYlSUJBm0Dlo-pLOFyLDw8KyMwaDGBWpZF6xZLweK7N1GyD44cjflFJAAYw1mTmyY7naIgirJeU7yIDTndNozbLJQQhyzMS_8OgnY3UOz3daCqzdA9_m8kCQSE519jNqhm86y9VqK6SO97ttcHugc7v6owxLLt8bt8_fKVp-0kOBu9Soxj41ZIHBV4GIo4q8JZNZ_R6z-EXgwJtft_PDz4z20A23akrejW-tChHF8SBWvaBkNt7Fhtn_j2jfI',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCIYYSMOf00spqVEyHJGfxpd5jt28qIljASQRh95wkH1F8z8IP4a5kExUXK8iEqtujhu-QUToalQpAXgHoGpy4snstoDWKvY42SG65RJn67PmrBFiqdP1HtlBRfk6DsF3Ywpn1CS3BnqB5wKAKmDYRKzMR1WswerK72RY2SGACgTM0MeExtKMGcsJCfdm96H2B1p5c3jcxWrC8m4Eipqu8d0HtmbVWnZ0MwzW6XT5XvB3aKHPCdPNlTm8Q5Q5Lyf7DQ2a8esK89oT8',
];

const products = [
  {
    id: 'jaket-vintage-90',
    title: 'Jaket Vintage 90-an Kece Parah',
    shortTitle: 'Jaket Vintage 90-an',
    category: 'Outerwear',
    price: 285000,
    originalPrice: 450000,
    displayPrice: 'Rp 285.000',
    oldPrice: 'Rp 450.000',
    tag: 'Kondisi 9.5/10',
    tagClass: 'bg-secondary-fixed text-on-secondary-fixed',
    badge: 'PILIHAN BESTIE',
    size: 'XL (Oversized)',
    material: 'Taslan Premium',
    condition: '9.5/10',
    description:
      'Bahannya adem banget, cocok buat nongkrong sore atau motoran tipis-tipis. Warna-warnanya masih nyala dan gak ada noda sama sekali. Udah dicuci bersih, tinggal pakai!',
    impact: 'Kamu baru saja menghemat 2000 liter air dengan membeli baju ini. Keren banget kan?',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDb05PluiAaPxcHtGlRvW5aUX8LkovV8VmGiw_gqTRvoBO2BcnxiIN7JK7PxmMqIaTCnf8b4LyGmxA_xhh5lWttOPNMndAMM-2Taz47o-KYMr72iRfHzeXC3Z5YTf0SHTeGi80lwjzZzClkVYcnLYzLee2zfAxlIs7E1-9AanGkY7W6urm10UsAt0q5QZinvUyqDvT7f9Zz20E6cDznRsb6fxeC8wXJEh3kvTt-H0GHgUCX8IvNppgWz5DfNKY5rc2Tft7AyFqrcEo',
    thumbs: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_SawMTrM9w9RQIEQ9qHVbopYEXkzKub4Pi84aD3RROiuXsdYY8S1wcBLocWfzgIQvM1LBrhALRUnYCDbfnFYeWwiTQYp4wpaSwDvpkLULyB63Vwuzklq6ubcjH89l53bAJ7IqXO7VKQI_jdWyPPxQj8sYX0X1Sr7PfAJFdk7I_1IhOG8yxVFPpSf7C-ZGzgu4--ImC9bNHBNJCWFISVpUvkCTKkNrFFgD5QXYntq7dbomxcBkaTN4zFK-joHncKPP3jwPi_Argu0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALHg9fEwJZV0iDVTXeUW5LpTw78uW5HvDI_FQFFwzmHfVp4eeZT7jYHF9Cd8jDHEaJz_gjitiZgcH0MvJ_CN0Yq3gJ-ZKsaG99Gyp5lkZKOrnfapMShzygztHXQlKUywkWWiVbZXPV7jl6ZHmWeIRTBHE-R-YBmVsw6hRWvxUF_tim7vlrtSVZT7X5WPQKcHpTuxp8JmCMVLQx5Vk8Xtil45lg55TjhLJYWDv0MmBwBFY0Mh_vCnLKBX0XkbUhv_ZGlJavDFIn3PQ',
    ],
  },
  {
    id: 'sweatshirt-oversized',
    title: 'Vintage Oversized Sweatshirt',
    shortTitle: 'Oversized Sweatshirt',
    category: 'Streetwear',
    price: 185000,
    displayPrice: 'Rp 185k',
    tag: '9/10 Condition',
    tagClass: 'bg-vibrant-purple text-white',
    condition: '9/10',
    size: 'L',
    material: 'Cotton Fleece',
    description: 'Sweatshirt oversized yang empuk, hangat, dan gampang dipadukan buat streetwear santai.',
    impact: 'Menghemat sekitar 1500 liter air dari siklus produksi baru.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzjOKIfEu6awAJ4a1gL4J2H-32eAaqRw5LYv2QSDFw39Hg-1sA_ysnhNOk2kYNZC_o0fRRkXUHjxC8J0VopYzvIwNS-8IU7pNBdJhN5UeK2TsK2aNl3EsbWymMnhK7413ZgNej85u43fLD3pkm5llOCL_jfqX1VBCMYLSPtIRo_B-0VeaIviH2T92GGXD_DDBFOC1JP54EhUGbAoyn1eBetrDa27Fey7s-VMLWwHtFdB0KNt3J4irbHJYIiTt8xq7OgezmrZFY5gU',
  },
  {
    id: 'levis-501',
    title: "Levi's 501 Classic Wash",
    shortTitle: "Levi's 501",
    category: 'Denim',
    price: 320000,
    displayPrice: 'Rp 320k',
    tag: 'Rare Find',
    tagClass: 'bg-caution-yellow text-on-background',
    condition: '9/10',
    size: '32',
    material: 'Denim',
    description: 'Jeans klasik dengan wash vintage, potongan timeless, dan karakter fade yang pas.',
    impact: 'Satu denim thrift bisa menghemat ribuan liter air dibanding produksi baru.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDV_II-39J0NNxXHDXqzVkxHGZEVYG0XeH2dqtfrVi0WYH7vpQ_HWxSCrmsolikjwtJEZpzggkKCZE2skarIWwsPo6hkbiXMX9KepDknd3Ig7b3XOEPEsT2XmPGipyyvKolWkEq-kvgY4SnFvGR8zXQkaprzFPf_QBAoJXsmJTD4pY8O5st-_EMXSC7PJ-ei23I912P6Hn0MIk5Q8XgNYU176CRiIXYtWf_A6KQuI-uJ2DpGjMEEZU9miZpkvJsy7wOYqSbeMYCWBk',
  },
  {
    id: 'psychedelic-shirt',
    title: '70s Psychedelic Shirt',
    shortTitle: 'Psychedelic Shirt',
    category: 'Vintage',
    price: 145000,
    displayPrice: 'Rp 145k',
    tag: '8.5/10 Cond.',
    tagClass: 'bg-vibrant-purple text-white',
    condition: '8.5/10',
    size: 'M',
    material: 'Rayon Blend',
    description: 'Kemeja motif retro yang langsung bikin look lebih hidup tanpa usaha berlebihan.',
    impact: 'Memperpanjang umur pakaian dan mengurangi limbah tekstil.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3HLnjCbJoZPmxktSYxxKtCphTP-j0bsVzKBDRsOArSeYToAThrk0i1BFxsMEE_v8qSJfJe0jIE_KFjSPsBwzOeUzESQlYnr7caGwqh8ZMTfQbqvnDP7tW_zmV4imw0Vfv_rtUkYVQqciFBHwOL_AnzdBNqZ3oGN--y63b9FcacVtb5wBLsnomwcGvjpyGPZYzJyyc8zhBj_qmnyFhrLxa3DzptU4liT3SVMlxudKnNs0lxVWCeVyEbDZ8ce25CjmY3tFp0-yF1SI',
  },
  {
    id: 'cognac-leather-bag',
    title: 'Cognac Leather Bag',
    shortTitle: 'Leather Bag',
    category: 'Accessories',
    price: 450000,
    displayPrice: 'Rp 450k',
    tag: 'High Value',
    tagClass: 'bg-secondary-fixed text-on-secondary-fixed',
    condition: '9/10',
    size: 'One Size',
    material: 'Genuine Leather',
    description: 'Tas kulit warna cognac yang mature, kokoh, dan cocok buat outfit rapi maupun kasual.',
    impact: 'Memilih aksesoris preloved membantu mengurangi kebutuhan material baru.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBLN7welmU9wxVuUW6mKlcObUsFseLSV674cawdtRugnWkznoeE1g4TVTZGgmW0CkVjIQ2fB3DSwdaAMCvtS6_BZn3GcsxsJYwECYe000MHJeOGd4sn-_nIypkaglC2vA-wyzSBOxQqD7cOMzvBdNNso10dOQpTaREhLDqv4PSphmYlxpzqDqPMfV6w7d6YUXuxkKmKS6TX-rxvbssXGobJJcjNn5fE3zSyA5w7o_qqRifkSdIW9kqyR1g8QUrTtvgO_KBO9vAI0Fo',
  },
  {
    id: 'varsity-jacket',
    title: 'Vintage 90s Varsity Jacket',
    shortTitle: 'Varsity Jacket',
    category: 'Outerwear',
    price: 450000,
    displayPrice: 'Rp 450.000',
    tag: 'Hype!',
    tagClass: 'bg-caution-yellow text-on-surface',
    condition: '9/10',
    size: 'L',
    material: 'Wool Blend',
    description: 'Varsity jacket dengan embroidery detail dan patina vintage yang kuat.',
    impact: 'Pilihan outerwear thrift mengurangi jejak produksi fashion baru.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ4Glk1guAWllZJihmU_JAztkWhEc7MgfFutJAxyi7MT3ix_xtkm7zXxDkLrHme4rM7rFwAdHBlbPFZmKEtGSWlCA_yygdUpDOuyTAWD-5yLobo00iPVU0FVCO4gi71i8gvGOPEoGgepqnKIRSZ9dsk8CoTHCFk71RkNSwqax26VM9dRvaH2cbMNuaObLy0k-8ITDxp8y5TnLyZEPisLY51EpjgtFwKhyQXJCod-6UTxuE-Kwmj6XN8Pj--1l6FFkstaKkgLnqG3M',
  },
  {
    id: 'retro-kicks',
    title: 'Classic 80s Retro Kicks',
    shortTitle: 'Retro Kicks',
    category: 'Shoes',
    price: 1200000,
    displayPrice: 'Rp 1.200.000',
    tag: 'Rare Find',
    tagClass: 'bg-pastel-lavender text-primary',
    condition: '8.5/10',
    size: '42',
    material: 'Leather Suede',
    description: 'Sneakers retro dengan aksen neon dan karakter wear yang justru bikin autentik.',
    impact: 'Sepatu preloved memberi umur kedua untuk material yang masih layak pakai.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMHDLQUhDxRjVwcs_neTh2qAAV6ww3F8ivRUZtNOL1lW4iBl6Z19LuEjJMwOVJmPjUgCRwVCb5F8CrNn2XJkBStuaikpTrSh7qrXyTadPdBmaKouwwXJqX6zbPNM8kjIN93UuaPhGVWLXGNzPfbAZBCrUk5hH25BirJ90GsqLh7K0WfviHv50RB1d7K1IIWMNm9E-kh0dg3xA_wddQhyi1LI4JmHs-Xx6uVE9lDOR7t4oRTe_vpCcX7U_vcYVWL1vCAMiGN62gc2A',
  },
  {
    id: 'organic-knitwear',
    title: 'Handmade Organic Knitwear',
    shortTitle: 'Organic Knitwear',
    category: 'Knitwear',
    price: 325000,
    displayPrice: 'Rp 325.000',
    tag: 'Eco Choice',
    tagClass: 'bg-eco-mint text-tertiary',
    condition: '9/10',
    size: 'M',
    material: 'Organic Cotton',
    description: 'Knitwear lembut dengan tone natural, nyaman untuk gaya slow fashion yang bersih.',
    impact: 'Mendukung pilihan fashion yang lebih panjang umur dan rendah limbah.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBs2mP0U2ozlexVFnRh7Wu6ljQl0W70VtyrvSeOuCQnZw7sx5Rlg8NYhxgN6QAO4XqCQrzjL27uCtr3hDhlUfBguZMcuwcIaTOwX5pVvYZnela5hAzzYcL_k5GioJAiu1KuUZzTjo5pk01DhiJh0zdF-_JVkmGBwlj09jgQvNClvRFccmd0V65oafGarxALvuDNRjulTOA_v-bz9jS0JD5oCUbU_q5UVLhrw1FtHZ32pHCaTDeN6bJy3yS2ClxupC_slzOQcd5iiuQ',
  },
];

const similarItems = [
  {
    title: 'Jaket Jeans Oversize',
    price: 'Rp 150rb',
    condition: '9/10',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvUTrySZBMLN0anwRs0Knxt0BC0TNd7MPTeauDm4kGG8y-IZArFf854gwaaoy3UFqepOowzh6B4Ig-n6-1RNnS_cfQui2dV7flomSK3nKR7hGyi_SjgPggyJYp3Qor6kJgFGS6LdQHa-3H4R0rZlIbiOGebbIEQrclNvjfJ3lEZNnRTyj4HOU6pr1qdpz7g0u1mOSHgcPA15SRHBJACSJBbSWCFZnR9pL9OB8PR3mG7-LdKJMaHoUDUQ0kYyFxQUpags0SWsh4NAE',
  },
  {
    title: 'Varsity Jacket Merah',
    price: 'Rp 210rb',
    condition: '8.5/10',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAc8CLWRQW6u0kY84G6_mRMcImmYWV1zl9WT5yPbX07BjA11r1rou524Oun52dtAT_uZkNVFrcSMzFqeVm5uRZzJkvGi8c50LnstN676Ix9TL9J8xRZdbaDfO5W1vo97lcVbSjpwLms-sFLC5GKbswSG-yHIRBpxZY1X43pD6Yvo1F60f60n7bNbFFlcWu_TmZxnYmTVAhQ0_whFut0Y2IsknGLJKCIW4JST-5RYagUp_sc2mBNp4LzxTauikKnEZU5KDt9WgNnU5w',
  },
  {
    title: 'Tracktop Neon Vintage',
    price: 'Rp 195rb',
    condition: '9.8/10',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkcWi3qqqZutprkH57w1SfNQRjUmBTxOMnnW5ICnu-lfMftpFvyJkAw_EoK7wSrhRthoi9XmWWrH6n7qrfSovD9Yipm5OXl7rA9goRUE17bbgeQ2Z-hQPDC9EySusunY-UncsZUy77oZoHpHYhWqAHMDwl-EkJsAF0iLHcYQZBiDZZOyDmrDW9Jb4Zzv4szzUOpha9IIICKfDZlqX-Mkj4dH8y29mD3rD-5f62fQ84heh7pqIQBPDSXhCy14G_C3Eg_ZCcgyU96TA',
  },
  {
    title: 'Kemeja Flanel Tebal',
    price: 'Rp 120rb',
    condition: '10/10',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1XqWLvpmTc0dNu9LkUSXXS0qkTmvWt-ZIwOGVrV61vYhp-VxwEDfBI02yOs-FBpr17qaZIatg7xPHbeXZeD3zVQdnQatkIPYAOqfyqLcNOugVSBiOy0KD_fOf74mfIkSCW11FZ5FF2IiHgEEW1-qgeP9Cg6JR7r08jyDT4paSXS-l8k_PMnijAIquguNbROB61gSVX10yzsE_ZBsQnokFPV2iPgacvZX0CRMzxzLJmb4doPWKPNV0YywrtVVEgmGFaawWimIz-VQ',
  },
];

function money(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}

function getInitialPath() {
  const path = window.location.pathname;
  if (path === '/' || path === '/index.html') return '/index.html';
  if (path === '/catalog.html') return '/catalog.html';
  if (path === '/eco-mission.html') return '/eco-mission.html';
  if (path === '/trending.html') return '/trending.html';
  if (path === '/cart.html') return '/cart.html';
  if (path.startsWith('/catalog/')) return path;
  return '/index.html';
}

function App() {
  const [path, setPath] = useState(getInitialPath);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handlePop = () => setPath(getInitialPath());
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePop);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePop);
    };
  }, []);

  useEffect(() => {
    const titles = {
      '/index.html': 'ThriftVibe | Keren Maksimal, Sayang Lingkungan',
      '/catalog.html': 'Catalog | ThriftVibe',
      '/eco-mission.html': 'Misi Kita Buat Bumi | ThriftVibe',
      '/trending.html': 'Trending | ThriftVibe',
      '/cart.html': 'Cart | ThriftVibe',
    };
    document.title = titles[path] || 'ThriftVibe | Detail Produk';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [path]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(''), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);
  const cartTotal = cart.reduce((total, item) => total + item.product.price * item.qty, 0);

  const navigate = (href) => {
    window.history.pushState({}, '', href);
    setPath(href);
  };

  const handleLink = (event, href) => {
    event.preventDefault();
    navigate(href);
  };

  const addToCart = (product) => {
    setCart((items) => {
      const existing = items.find((item) => item.product.id === product.id);
      if (existing) {
        return items.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...items, { product, qty: 1 }];
    });
    setToast(`${product.shortTitle} masuk ke keranjang!`);
  };

  const removeFromCart = (productId) => {
    setCart((items) => items.filter((item) => item.product.id !== productId));
  };

  const updateQty = (productId, nextQty) => {
    setCart((items) =>
      items
        .map((item) => (item.product.id === productId ? { ...item, qty: Math.max(0, nextQty) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email) return;
    setToast(`Terima kasih sudah subscribe, Bestie!`);
    setEmail('');
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate('/catalog.html');
  };

  const detailProduct = useMemo(() => {
    if (!path.startsWith('/catalog/')) return products[0];
    const slug = path.replace('/catalog/', '').replace('.html', '');
    return products.find((product) => product.id === slug) || products[0];
  }, [path]);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Header
        cartCount={cartCount}
        currentPath={path}
        handleLink={handleLink}
        handleSearchSubmit={handleSearchSubmit}
        isScrolled={isScrolled}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {path === '/catalog.html' ? (
        <CatalogPage addToCart={addToCart} handleLink={handleLink} />
      ) : path === '/eco-mission.html' ? (
        <EcoMissionPage handleLink={handleLink} />
      ) : path === '/trending.html' ? (
        <TrendingPage addToCart={addToCart} handleLink={handleLink} />
      ) : path === '/cart.html' ? (
        <CartPage
          cart={cart}
          cartTotal={cartTotal}
          handleLink={handleLink}
          removeFromCart={removeFromCart}
          updateQty={updateQty}
        />
      ) : path.startsWith('/catalog/') ? (
        <ProductDetailPage addToCart={addToCart} handleLink={handleLink} product={detailProduct} />
      ) : (
        <HomePage
          addToCart={addToCart}
          email={email}
          handleLink={handleLink}
          handleSubscribe={handleSubscribe}
          setEmail={setEmail}
        />
      )}

      <Footer handleLink={handleLink} />

      {toast && (
        <div className="fixed bottom-6 right-6 z-[100] max-w-xs rounded-lg bg-vibrant-purple px-6 py-3 text-on-primary shadow-lg font-label-md animate-bounce">
          {toast}
        </div>
      )}
    </div>
  );
}

function Header({
  cartCount,
  currentPath,
  handleLink,
  handleSearchSubmit,
  isScrolled,
  searchQuery,
  setSearchQuery,
}) {
  const links = [
    { href: '/index.html', label: 'Home' },
    { href: '/catalog.html', label: 'Catalog' },
    { href: '/eco-mission.html', label: 'Eco Mission' },
    { href: '/trending.html', label: 'Trending' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 h-20 w-full bg-surface-bright/95 backdrop-blur-md border-b-2 border-sky-tint transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-container-margin py-base">
        <a className="flex items-center gap-2" href="/index.html" onClick={(event) => handleLink(event, '/index.html')}>
          <Logo size="large" />
          <span className="font-display-lg text-headline-lg md:text-display-lg font-extrabold leading-none text-vibrant-purple">
            ThriftVibe
          </span>
        </a>
        <nav className="hidden items-center gap-gutter font-body-md text-body-md md:flex">
          {links.map((link) => {
            const active =
              currentPath === link.href || (link.href === '/catalog.html' && currentPath.startsWith('/catalog/'));
            return (
              <a
                className={
                  active
                    ? 'text-primary font-bold border-b-2 border-vibrant-purple transition-colors duration-200'
                    : 'text-on-surface-variant hover:text-vibrant-purple transition-colors duration-200'
                }
                href={link.href}
                key={link.href}
                onClick={(event) => handleLink(event, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-gutter">
          <form
            className="hidden items-center rounded-lg bg-surface-container px-base py-1 lg:flex"
            onSubmit={handleSearchSubmit}
          >
            <span className="material-symbols-outlined text-outline">search</span>
            <input
              className="w-40 border-none bg-transparent text-sm placeholder-outline focus:outline-none focus:ring-0"
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Cari harta karunmu..."
              type="text"
              value={searchQuery}
            />
          </form>
          <button className="hidden font-bold text-primary transition-colors duration-200 hover:text-vibrant-purple sm:block">
            Sign In
          </button>
          <a
            className="relative rounded-full p-2 transition-colors hover:bg-primary-container/10 active:scale-95"
            href="/cart.html"
            onClick={(event) => handleLink(event, '/cart.html')}
          >
            <span className="material-symbols-outlined text-primary">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-caution-yellow px-1 text-[10px] font-black text-on-background">
                {cartCount}
              </span>
            )}
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo({ size = 'small' }) {
  const className = size === 'large' ? 'h-10 w-10' : 'h-8 w-8';
  return (
    <span className={className}>
      <svg className="h-full w-full" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.89,7.69h-13.79l.8,7.11,6.68,3.06,6.31-10.18Z" fill="#fdda5c" />
        <path
          d="M13,32.95l3.35-8.71-3.35-9.12-7.82,11.9c-.34,.52-.18,1.21,.36,1.53l7.47,4.4Z"
          fill="#fce87b"
        />
        <path d="M13,15.11l-3.64,15.69,3.64,2.15,2.74-7.13-2.74-10.7Z" fill="#fdda5c" />
        <path
          d="M14.14,13.6c-.63,0-1.14,.51-1.14,1.14V55.42c0,.63,.51,1.14,1.14,1.14H49.86c.63,0,1.14-.51,1.14-1.14V14.74c0-.63-.51-1.14-1.14-1.14h-6.16l-11.7,.43-11.7-.43h-6.16Z"
          fill="#62d9fa"
        />
        <path
          d="M32,14.03l2.9,5.91c.22,.45,.81,.57,1.2,.24l7.6-6.59-2.85-4.8-.54-.9c-.3-.5-.99-.61-1.42-.21l-6.89,6.34Z"
          fill="#fce87b"
        />
        <path
          d="M24.42,7.45c-.29,.02-.57,.18-.73,.45l-.54,.9-2.85,4.8,7.6,6.59c.38,.33,.97,.21,1.2-.24l2.9-5.91-6.89-6.34c-.16-.15-.36-.23-.56-.24-.04,0-.08,0-.12,0Z"
          fill="#fce87b"
        />
      </svg>
    </span>
  );
}

function HomePage({ addToCart, email, handleLink, handleSubscribe, setEmail }) {
  return (
    <main>
      <section className="relative overflow-hidden bg-surface-container-low px-container-margin py-stack-lg lg:py-[100px]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-stack-md lg:grid-cols-2">
          <div className="z-10">
            <span className="mb-stack-sm inline-block rounded-full bg-secondary-fixed px-base py-1 font-label-md text-label-md text-on-secondary-fixed">
              #ThriftVibeOnly
            </span>
            <h1 className="mb-stack-sm font-display-lg text-headline-lg-mobile leading-tight text-on-surface md:text-display-lg">
              Keren Maksimal, <br />
              <span className="text-primary">Sayang Lingkungan.</span>
            </h1>
            <p className="mb-stack-md max-w-lg font-body-lg text-body-lg text-on-surface-variant">
              Gak perlu boncos buat tampil stand-out. Temukan outfit vintage unik yang bikin gaya kamu makin
              berkarakter sambil bantu bumi tetap hijau.
            </p>
            <div className="flex flex-col gap-gutter sm:flex-row">
              <a
                className="flex items-center justify-center gap-base rounded-lg bg-primary px-stack-md py-base font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-on-primary-fixed-variant active:scale-95"
                href="/catalog.html"
                onClick={(event) => handleLink(event, '/catalog.html')}
              >
                Mulai Thrifting, Bestie!
                <span className="material-symbols-outlined">trending_flat</span>
              </a>
              <a
                className="rounded-lg bg-secondary-fixed px-stack-md py-base text-center font-label-md text-label-md text-on-secondary-fixed transition-colors hover:bg-secondary-fixed-dim active:scale-95"
                href="/catalog.html"
                onClick={(event) => handleLink(event, '/catalog.html')}
              >
                Cek Katalog
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-gutter">
            <div className="space-y-gutter pt-stack-md">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
                <img
                  alt="Streetwear thrift outfit"
                  className="h-full w-full object-cover"
                  src={heroImages[0]}
                />
              </div>
              <div className="flex aspect-square items-end overflow-hidden rounded-xl bg-pastel-lavender p-base shadow-lg">
                <span className="font-display-lg text-headline-md text-primary">
                  VINTAGE
                  <br />
                  FINDS
                </span>
              </div>
            </div>
            <div className="space-y-gutter">
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                <img alt="Thrift accessories" className="h-full w-full object-cover" src={heroImages[1]} />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
                <img alt="Denim thrift outfit" className="h-full w-full object-cover" src={heroImages[2]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-container-margin py-stack-lg">
        <div className="mb-stack-md flex items-end justify-between">
          <div>
            <h2 className="mb-base font-headline-lg text-headline-lg text-on-surface">Lagi Trending Pekan Ini</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Harta karun pilihan yang lagi banyak dicari bestie-bestie lainnya.
            </p>
          </div>
          <a
            className="hidden items-center gap-base font-label-md text-label-md text-primary transition-colors hover:text-vibrant-purple md:flex"
            href="/catalog.html"
            onClick={(event) => handleLink(event, '/catalog.html')}
          >
            Lihat Semua <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <ProductGrid addToCart={addToCart} handleLink={handleLink} items={products.slice(1, 5)} />
      </section>

      <section className="bg-on-surface py-stack-lg text-surface">
        <div className="mx-auto max-w-7xl px-container-margin">
          <div className="grid grid-cols-1 items-center gap-stack-lg lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-xl bg-surface-container-low p-stack-md text-on-surface">
                <div className="absolute -right-6 -top-6 flex h-14 w-14 rotate-12 items-center justify-center rounded-full border-2 border-on-surface bg-caution-yellow text-lg font-black text-on-background">
                  100%
                </div>
                <h2 className="mb-stack-md font-display-lg text-headline-md text-primary">
                  Belanja Pintar, <span className="text-secondary">Bumi Senang.</span>
                </h2>
                <Feature icon="wallet" title="Hemat Dompet">
                  Gak perlu bayar mahal buat brand ternama. Dapatkan kualitas premium dengan harga miring.
                </Feature>
                <Feature icon="eco" title="Kurangi Limbah">
                  Setiap item yang kamu beli adalah satu pakaian yang terselamatkan dari tempat pembuangan akhir.
                </Feature>
                <Feature icon="style" title="Satu-Satunya">
                  Gak ada lagi ceritanya kembaran baju di mall. Gaya kamu bakal bener-bener otentik.
                </Feature>
              </div>
            </div>
            <div className="order-1 space-y-stack-sm lg:order-2">
              <h3 className="font-display-lg text-headline-lg-mobile leading-tight md:text-display-lg">
                Fashion Lambat,
                <br />
                <span className="text-secondary-fixed-dim underline underline-offset-8">Dampak Cepat.</span>
              </h3>
              <p className="font-body-lg text-body-lg text-surface-dim">
                Kami percaya bahwa gaya yang keren tidak harus merusak alam. Di ThriftVibe, kami mengkurasi setiap
                potong pakaian untuk memastikan kamu mendapatkan yang terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-container-margin py-stack-lg">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl bg-primary-container p-stack-md text-center text-on-primary-container md:p-stack-lg">
          <h2 className="relative z-10 mb-base font-display-lg text-headline-lg text-on-primary">
            Mau Info Drop Barang Baru?
          </h2>
          <p className="relative z-10 mx-auto mb-stack-md max-w-lg font-body-lg text-body-lg text-on-primary opacity-90">
            Daftar newsletter biar gak ketinggalan barang rare yang cuma ada satu di dunia.
          </p>
          <form className="relative z-10 mx-auto flex max-w-md flex-col gap-gutter sm:flex-row" onSubmit={handleSubscribe}>
            <input
              className="flex-grow rounded-lg border-none bg-white px-stack-md py-base text-on-surface placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-vibrant-purple"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email kamu di sini..."
              required
              type="email"
              value={email}
            />
            <button
              className="whitespace-nowrap rounded-lg bg-caution-yellow px-stack-md py-base font-label-md text-label-md text-on-background transition-colors hover:bg-yellow-400 active:scale-95"
              type="submit"
            >
              Join Bestie!
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Feature({ children, icon, title }) {
  return (
    <div className="mb-gutter flex gap-gutter last:mb-0">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-eco-mint text-tertiary">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          {icon}
        </span>
      </div>
      <div>
        <h4 className="mb-1 font-headline-md text-headline-md text-on-surface">{title}</h4>
        <p className="font-body-md text-body-md text-on-surface-variant">{children}</p>
      </div>
    </div>
  );
}

function CatalogPage({ addToCart, handleLink }) {
  return (
    <main className="mx-auto max-w-7xl px-container-margin py-stack-lg">
      <section className="mb-stack-lg flex flex-col justify-between gap-gutter md:flex-row md:items-end">
        <div>
          <span className="mb-4 inline-block rounded-full bg-vibrant-purple px-3 py-1 font-label-md text-label-md text-on-primary">
            KATALOG THRIFT
          </span>
          <h1 className="font-display-lg text-display-lg text-on-surface">Pilih Harta Karunmu</h1>
          <p className="mt-4 max-w-2xl text-body-lg text-on-surface-variant">
            Koleksi pilihan dari `html/catalog.html` dan `html/trending.html`, disusun jadi katalog React yang bisa
            dibuka sampai detail produk.
          </p>
        </div>
        <div className="glass-card rounded-xl p-4">
          <p className="text-xs uppercase font-bold text-outline">Total Item</p>
          <p className="font-headline-md text-primary">{products.length} Produk</p>
        </div>
      </section>

      <section className="mb-stack-md flex flex-wrap gap-stack-sm">
        {['All', 'Outerwear', 'Denim', 'Streetwear', 'Accessories', 'Shoes'].map((category) => (
          <button
            className="rounded-full border border-sky-tint bg-surface px-4 py-2 text-body-md text-primary transition-colors hover:bg-pastel-lavender"
            key={category}
          >
            #{category}
          </button>
        ))}
      </section>

      <ProductGrid addToCart={addToCart} handleLink={handleLink} items={products} />
    </main>
  );
}

function ProductGrid({ addToCart, handleLink, items }) {
  return (
    <div className="grid grid-cols-2 gap-gutter md:grid-cols-3 lg:grid-cols-4">
      {items.map((product) => (
        <ProductCard addToCart={addToCart} handleLink={handleLink} key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ addToCart, handleLink, product }) {
  const detailHref = `/catalog/${product.id}.html`;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md">
      <a
        className="relative block aspect-[4/5] overflow-hidden"
        href={detailHref}
        onClick={(event) => handleLink(event, detailHref)}
      >
        <img
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={product.image}
        />
        <span className={`absolute left-base top-base rounded-full px-2 py-1 font-label-md text-[10px] ${product.tagClass}`}>
          {product.tag}
        </span>
      </a>
      <div className="flex flex-grow flex-col p-stack-sm">
        <span className="mb-base text-[12px] font-label-md uppercase text-outline">{product.category}</span>
        <a
          className="mb-base line-clamp-1 font-headline-md text-body-lg text-on-surface hover:text-primary"
          href={detailHref}
          onClick={(event) => handleLink(event, detailHref)}
        >
          {product.title}
        </a>
        <div className="mt-auto flex items-center justify-between gap-base">
          <span className="font-headline-md text-headline-md text-primary">{product.displayPrice}</span>
          <button
            className="rounded-lg bg-primary px-3 py-2 text-on-primary transition-colors hover:bg-on-primary-fixed-variant active:scale-95"
            onClick={() => addToCart(product)}
            title="Masukkan ke Keranjang"
            type="button"
          >
            <span className="material-symbols-outlined text-lg">shopping_bag</span>
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductDetailPage({ addToCart, handleLink, product }) {
  return (
    <main className="mx-auto max-w-7xl px-container-margin pb-stack-lg pt-8">
      <nav className="mb-gutter flex items-center gap-base font-label-md text-label-md text-outline">
        <a className="transition-colors hover:text-primary" href="/catalog.html" onClick={(event) => handleLink(event, '/catalog.html')}>
          Katalog
        </a>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span>{product.category}</span>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-on-surface">{product.shortTitle}</span>
      </nav>

      <div className="mt-base grid grid-cols-1 gap-stack-lg md:grid-cols-12">
        <section className="space-y-gutter md:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-outline-variant bg-white shadow-sm">
            <img alt={product.title} className="h-full w-full object-cover" src={product.image} />
            <div className="absolute left-4 top-4">
              <span className="rounded-full border border-outline-variant/30 bg-secondary-fixed px-4 py-2 font-label-md text-on-secondary-fixed">
                Kondisi {product.condition}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-gutter">
            {(product.thumbs || [product.image, product.image]).map((thumb) => (
              <div className="aspect-square overflow-hidden rounded-lg border border-outline-variant" key={thumb}>
                <img alt={`${product.title} detail`} className="h-full w-full object-cover" src={thumb} />
              </div>
            ))}
            <div className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border border-primary/20 bg-pastel-lavender/20 text-primary transition-colors hover:bg-pastel-lavender/30">
              <span className="material-symbols-outlined text-3xl">add_a_photo</span>
              <span className="mt-1 font-label-md text-[12px]">+3 Detail</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-stack-md md:col-span-5">
          <div className="space-y-base">
            <div className="inline-flex items-center gap-1 rounded-full bg-tertiary-fixed px-3 py-1 font-label-md text-[12px] text-on-tertiary-fixed">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                eco
              </span>
              {product.badge || 'PILIHAN BESTIE'}
            </div>
            <h1 className="font-display-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
              {product.title}
            </h1>
            <div className="flex items-baseline gap-base">
              <span className="font-headline-lg text-primary">{product.displayPrice}</span>
              {product.oldPrice && <span className="font-body-md text-outline line-through">{product.oldPrice}</span>}
            </div>
          </div>

          <div className="eco-impact-card relative space-y-base overflow-hidden rounded-xl border border-eco-mint/50 p-gutter">
            <div className="absolute -bottom-4 -right-4 text-tertiary opacity-20">
              <span className="material-symbols-outlined text-8xl">nest_eco_leaf</span>
            </div>
            <div className="flex items-center gap-base font-headline-md text-tertiary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                savings
              </span>
              Eco Impact
            </div>
            <p className="relative z-10 font-body-md text-on-tertiary-container">{product.impact}</p>
          </div>

          <div className="space-y-base">
            <h3 className="font-label-md text-[12px] uppercase tracking-wider text-on-surface-variant">
              Kenapa Kamu Butuh Ini?
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-gutter">
            <Spec label="Ukuran" value={product.size} />
            <Spec label="Bahan" value={product.material} />
          </div>

          <div className="space-y-gutter pt-base">
            <button
              className="flex w-full items-center justify-center gap-base rounded-lg bg-primary py-4 font-headline-md text-on-primary shadow-sm transition-all hover:bg-on-primary-fixed-variant active:scale-95"
              onClick={() => addToCart(product)}
              type="button"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              Masukkan ke Keranjang
            </button>
            <button
              className="flex w-full items-center justify-center gap-base rounded-lg border-2 border-primary py-4 font-headline-md text-primary transition-all hover:bg-primary/5 active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined">chat_bubble</span>
              Tawar Harga
            </button>
          </div>

          <div className="flex items-center justify-between px-base pt-base">
            <TrustBadge icon="verified" label="Ori 100%" />
            <TrustBadge icon="local_shipping" label="Cepat Sampai" />
            <TrustBadge icon="nest_eco_leaf" label="Go Green" />
          </div>
        </section>
      </div>

      <section className="mt-stack-lg">
        <div className="mb-gutter flex items-end justify-between">
          <h2 className="font-display-lg text-headline-lg">Harta Karun Lainnya</h2>
          <a
            className="flex items-center gap-1 font-label-md text-primary hover:underline"
            href="/catalog.html"
            onClick={(event) => handleLink(event, '/catalog.html')}
          >
            Lihat Semua <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-gutter md:grid-cols-4">
          {similarItems.map((item) => (
            <div className="group cursor-pointer" key={item.title}>
              <div className="mb-base overflow-hidden rounded-xl border border-outline-variant bg-white transition-all group-hover:border-primary/50 group-hover:shadow-md">
                <div className="relative aspect-square">
                  <img alt={item.title} className="h-full w-full object-cover" src={item.image} />
                  <div className="absolute left-2 top-2 rounded-full border border-outline-variant/30 bg-surface px-2 py-0.5 text-[10px] font-bold">
                    {item.condition}
                  </div>
                </div>
                <div className="p-base">
                  <h4 className="line-clamp-1 font-label-md text-on-surface">{item.title}</h4>
                  <p className="mt-1 font-headline-md text-primary">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Spec({ label, value }) {
  return (
    <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-gutter">
      <span className="mb-1 block text-[10px] font-label-md uppercase text-outline">{label}</span>
      <span className="font-headline-md text-on-surface">{value}</span>
    </div>
  );
}

function TrustBadge({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined text-primary">{icon}</span>
      <span className="text-[10px] font-label-md uppercase">{label}</span>
    </div>
  );
}

const ecoTestimonials = [
  {
    name: '@SiskaVibe',
    quote: 'Gak nyangka bisa dapet outer gemes di sini sambil tau kalo aku bantu hemat air. Bestie parah sih!',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRLPdS0BfK-mP6_Nbn-z2U2N7Aq6e9HGomjvuugbcA5qUhNlqUT_-exInOnJOrsGTvTOGAEPx_nIPiNo-NpAXiBQNJWXoDvMPlSE3_O3M1DlXkUhSKRl9-wnE7YAJiGXd8NeThIueHAGyQwrgUMAe5uv1DvHjayetL-jJ5jplxS4qIhwlC27ajrs1oWouqgW-oemjkFJRZlVaySyWd8mdhUJq5pgoBOJCfBlIJSztMkmTnEL0jcRrsUL2QhH3ocEa0VymYqruqrM',
  },
  {
    name: '@ArisEco',
    quote: 'ThriftVibe emang juaranya soal misi lingkungan. Packaging-nya pun udah zero plastic!',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOQCs4BtENug9HarZI-5zyFBhNOg9CxNbm4QJEUWawjWnMGhcF88fz7a1fUm7TQWbYror4GD6QjKaBVX4KruPtvolXauJYnmpHqRAbGxewEGPu6lluaL-DcDm-vYImcaBXNpho1wB_w7vs54I32iJWIUvv2bez_2yy3an48hf_vMkHg_DjZHaSp7DgYubVLIgBVRE4pECNKRDFCbQ99rtnlEcL4-A-M1R5EuVnzgDmT9edDDU2vdm0v0UJFW_XJlKI94XncXGj0BY',
  },
  {
    name: '@MayaVibe',
    quote: 'Cuma di sini belanja berasa jadi pahlawan Bumi. Misi kalian gokil banget!',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBiPP9DzsPEebSXRxr-rjZNWkrDlEhxTwdmv1CDNUQd_E9RcJ4X4-mlUr6eCVtK-UB4pZR3vu4VV6eoC0snVlvQq17QDOW9eh420NIyxTb6nay-FZZ04tO6-URY2Vgnyb7SdFMZqI-7hshbKS4UM8l17QoqlzdbUnsMcasH6ZTlQG1YDhjS8C2xmYTBt3qipmM7oafPHkWAqVoFtic9igQKur2DH8gDqVobyOsgdsBiqVM429h_U0EEt3Cqgh-mG36bZWFNNEiYMt4',
  },
];

const ootdImages = [
  {
    title: 'Retro Grunge Mix',
    subtitle: 'pake @vibe_official blazer',
    className: 'md:col-span-2 md:row-span-2',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQJtN9b_vT_-rDLKcr69_wWnP_7qsj4yPYOvCVPU9UXZRAXGuFwBmeq3t0SI360PGR1VHUiy93peJfG-gu0g988baq4P4wOm1jwvtjqa4ULXygPNc-0JvnVTbjTYkkCsdKPNrnn12ecgg6IF21szR9fCk3uKpFDXpu_9EvNuz3dGtPQCqipWtsMpSrux7zEQw8WVL-kzN9OgMOS-rKakrBIr0P7Ke6K3sn9IRWhxjODekaHRzyYvZsK38hAascDTUa3HgcVo7v9sk',
  },
  {
    title: 'Cafe Layers',
    subtitle: 'graphic tee dan shades',
    className: '',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1khHCK6YaL-nZH0jiQflp25rFyhqV5T0e2PMSrNJAxG1waxr4SgZ-ihrHs3QI5LOmti5Q2na2jScPAHMYE6qjJtcJJp5BvlLbbVHCdg8-DWnZ8lTeXAJXXsudxK5ssrySJu7EbThRznqdlMWHWSmjNEkPGEDFlxunjKuS_PhjcvEQvBBqIQ5gHXNMrPEtcoWv_cv77oZ8wVFNpeKiv47YKOUyqA6WAQCm25iI0XgQ41kRdx1dSD3EsGDdPkeXhIdpxaj9HDu1IRs',
  },
  {
    title: 'Boho Park Fit',
    subtitle: 'flowy vintage dress',
    className: '',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB735--MTf5ty97u-NnSUdjF4jrLxOvc7Dkww920YA-wmywySWYM61BKmDwJD1VaaDp-A9z1qlxdK2Fy-IJX7bq4f4soFQhgXwQaEWooEQm8YGD8ptCQxniDshRSbxnJhW8CX10TInohWmZPUyK13hGjEJB82XkeNDmYQ2OIrIfao0GC0Pqj5Wrb8NOhCUmgh1zQdcJFnm1KinZGXCHpF8C4mCOxpDDQHUDML01bAMwysD9Lz7O4BhlixZS2yCa3Pzo5mZANZUcJes',
  },
  {
    title: 'Flatlay Finds',
    subtitle: 'Shop the look',
    className: 'md:col-span-2',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD2X0vdjXsKD4MUwBQRa-HGe3zSby05blSI_T1SlCabseo_wsjZuKUsgKOOeyuRyV-iZqElwPoZHJmTolOCLgQyVY4E28v2j7LmwPlO3u-dDZ4g6NtszWHLJpDWcQ8NGwjK7CVzflqoHc92fZHJyByy_fA_iZN48G37Ry6fu4m_NQK56WYCM1gEo_fJlOZcX72D-4r31lIOeEd11YNTFd8FVImac08Pj9Lcr0uS4efVJl10z9BNK66OcGClZIUJ-IBoilgodQiRlz4',
  },
];

function EcoMissionPage({ handleLink }) {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden px-container-margin pb-stack-lg pt-stack-md">
      <section className="relative mb-stack-lg flex flex-col items-center justify-between gap-gutter overflow-hidden rounded-[2rem] bg-pastel-lavender/20 p-stack-lg md:flex-row">
        <div className="eco-blob absolute -right-10 -top-10 h-64 w-64 bg-eco-mint opacity-50 blur-3xl" />
        <div className="z-10 text-center md:w-3/5 md:text-left">
          <div className="mb-4 inline-block rounded-full bg-eco-mint px-4 py-1 text-label-md text-tertiary">
            #SahabatBumi
          </div>
          <h1 className="mb-4 font-display-lg text-display-lg leading-tight text-primary">Misi Kita Buat Bumi</h1>
          <p className="mb-base font-body-lg text-body-lg text-on-surface-variant">
            Halo, Bestie! Tahu nggak kalau pilihan outfit kamu hari ini bisa nentuin masa depan planet kita?
            Yuk, kepoin gimana aksi thrifting kamu bikin Bumi makin happy.
          </p>
        </div>
        <div className="flex justify-center md:w-2/5">
          <div className="relative w-full max-w-[300px]">
            <div className="eco-blob absolute inset-0 scale-110 bg-vibrant-purple opacity-20" />
            <img
              alt="Thrifted fashion items with green leaves"
              className="relative z-10 h-auto w-full rounded-2xl drop-shadow-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBvTPyf-NJ8by0g-KNMgUYP8ddF6VmjZetkdh3tZWfwYXngReA_4yfDuNOp23CdMkh592U_kXpSamc9nNAXDbM1pIYWjzAmgpOKkA4IGkhToaXFqXe1PuT-NNVcOuZmf8EgMb999lnTi3qH4rn54Bp4oFhlsIulkKNYvGZ0IvXXUSJtxBjInAo9iiEAfsEOeTdwqzf-892cf-2v9nUZc7t_-g-0fAPla2R2eEqIBVNxXa8h_Im57W9GI4KsNsqtZ6E5J4EvfVx5UQ"
            />
          </div>
        </div>
      </section>

      <section className="mb-stack-lg">
        <div className="mb-stack-sm flex items-center justify-between gap-gutter">
          <h2 className="font-headline-lg text-headline-lg text-primary">Kenapa Thrifting Itu Keren?</h2>
          <span className="hidden font-bold text-vibrant-purple sm:inline">#ImpactThrift</span>
        </div>
        <div className="bento-grid">
          <div className="glass-card col-span-12 overflow-hidden rounded-[1.5rem] p-stack-md md:col-span-8">
            <div className="flex flex-col items-center gap-gutter md:flex-row">
              <div className="rounded-2xl bg-sky-tint p-stack-sm">
                <span className="material-symbols-outlined text-[48px] text-primary">water_drop</span>
              </div>
              <div>
                <h3 className="mb-2 font-headline-md text-headline-md text-on-primary-container">
                  Hemat Air Gila-gilaan!
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Bikin satu kaos baru butuh sekitar 2.700 liter air. Dengan thrift, kita nggak buang-buang air
                  cuma buat gaya.
                </p>
              </div>
            </div>
            <div className="mt-stack-sm h-2 overflow-hidden rounded-full bg-sky-tint">
              <div className="h-full w-4/5 bg-primary-container" />
            </div>
          </div>
          <ImpactCard className="bg-eco-mint md:col-span-4" icon="eco" title="Potong Emisi CO2">
            Nggak ada pabrik ngepul, nggak ada pengiriman jauh. Thrifting ngurangin jejak karbon kamu.
          </ImpactCard>
          <ImpactCard className="border-2 border-caution-yellow bg-caution-yellow/30 md:col-span-5" icon="delete_sweep" title="Kurangi Gunungan Sampah">
            Setiap detik, satu truk sampah tekstil dibakar atau dibuang ke landfill. Mari kita hentikan siklus ini.
          </ImpactCard>
          <div className="relative col-span-12 flex items-center gap-gutter overflow-hidden rounded-[1.5rem] bg-primary p-stack-md text-on-primary md:col-span-7">
            <div className="z-10 w-2/3">
              <h3 className="mb-2 font-headline-md text-headline-md">Filosofi Cerita Kita</h3>
              <p className="font-body-md opacity-90">
                Baju thrift punya banyak lipatan cerita. Dari tangan satu ke tangan lain, tetap berharga dan cantik.
              </p>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-30">
              <span className="material-symbols-outlined text-[180px]">inventory_2</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-stack-lg rounded-[2rem] bg-surface-container p-stack-md md:p-stack-lg">
        <div className="mx-auto mb-stack-md max-w-2xl text-center">
          <h2 className="mb-2 font-headline-lg text-headline-lg text-primary">Perjalanan Baju Thrift Kamu</h2>
          <p className="text-on-surface-variant">
            Dari lemari seseorang, jadi harta karun buat kamu, tanpa ngerusak lingkungan.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-gutter md:flex-row md:gap-stack-lg">
          <JourneyStep icon="person_search" label="Kurasi Teliti" tone="bg-pastel-lavender text-primary" />
          <Connector />
          <JourneyStep icon="clean_hands" label="Deep Cleaned" tone="bg-eco-mint text-tertiary" />
          <Connector />
          <JourneyStep icon="local_shipping" label="Eco Packaging" tone="bg-caution-yellow text-on-surface" />
          <Connector />
          <JourneyStep icon="volunteer_activism" label="Happy You & Earth" tone="bg-primary text-on-primary" />
        </div>
      </section>

      <section className="mb-stack-lg">
        <h2 className="mb-stack-md font-headline-lg text-headline-lg text-primary">Cerita Sahabat Bumi</h2>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {ecoTestimonials.map((item) => (
            <div className="glass-card flex flex-col gap-base rounded-2xl p-stack-sm" key={item.name}>
              <div className="flex items-center gap-base">
                <img
                  alt={item.name}
                  className="h-12 w-12 rounded-full border-2 border-vibrant-purple object-cover"
                  src={item.image}
                />
                <div>
                  <p className="font-label-md text-on-surface">{item.name}</p>
                  <div className="flex text-caution-yellow">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span className="material-symbols-outlined text-[16px]" key={index} style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-body-md italic text-on-surface-variant">"{item.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.5rem] bg-primary-container p-stack-lg text-center">
        <div className="relative z-10">
          <h2 className="mb-4 font-headline-lg text-headline-lg text-on-primary-container">
            Siap Jadi Bagian dari Solusi?
          </h2>
          <p className="mx-auto mb-stack-md max-w-xl font-body-lg text-on-primary-container">
            Setiap klik checkout kamu adalah suara buat masa depan yang lebih hijau. Yuk, mulai koleksi fashion
            berkelanjutan kamu sekarang.
          </p>
          <a
            className="inline-flex rounded-full bg-vibrant-purple px-10 py-4 font-headline-md text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            href="/catalog.html"
            onClick={(event) => handleLink(event, '/catalog.html')}
          >
            Mulai Thrifting Sekarang
          </a>
        </div>
      </section>
    </main>
  );
}

function ImpactCard({ children, className, icon, title }) {
  return (
    <div className={`col-span-12 flex flex-col justify-between rounded-[1.5rem] p-stack-md ${className}`}>
      <span className="material-symbols-outlined mb-stack-sm text-[48px] text-primary">{icon}</span>
      <div>
        <h3 className="mb-2 font-headline-md text-headline-md text-on-surface">{title}</h3>
        <p className="font-body-md text-on-surface-variant">{children}</p>
      </div>
    </div>
  );
}

function JourneyStep({ icon, label, tone }) {
  return (
    <div className="flex max-w-[150px] flex-col items-center text-center">
      <div className={`mb-3 flex h-16 w-16 items-center justify-center rounded-full shadow-lg ${tone}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <span className="font-label-md">{label}</span>
    </div>
  );
}

function Connector() {
  return <div className="hidden w-12 border-t-2 border-dashed border-outline-variant md:block" />;
}

function TrendingPage({ addToCart, handleLink }) {
  const trendingProducts = products.slice(5, 8).concat(products[2]);

  return (
    <main className="pb-stack-lg pt-stack-md">
      <section className="relative mx-auto mb-stack-lg max-w-7xl px-container-margin">
        <div className="absolute -left-12 -top-12 -z-10 h-64 w-64 rounded-full bg-pastel-lavender/30 blur-3xl" />
        <div className="flex flex-col justify-between gap-gutter md:flex-row md:items-end">
          <div>
            <span className="mb-4 inline-block rounded-full bg-vibrant-purple px-3 py-1 font-label-md text-label-md text-on-primary">
              MINGGU INI
            </span>
            <h1 className="font-display-lg text-display-lg text-on-surface">Lagi Hits Pekan Ini</h1>
            <p className="mt-4 max-w-2xl text-body-lg text-on-surface-variant">
              Dapetin koleksi paling hot yang lagi diincer banyak bestie. Jangan sampe keduluan, thrift gems ini
              nggak bakal datang dua kali.
            </p>
          </div>
          <div className="flex gap-gutter">
            <div className="glass-card flex items-center gap-3 rounded-xl p-4">
              <span className="material-symbols-outlined text-4xl text-vibrant-purple" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_fire_department
              </span>
              <div>
                <p className="text-xs font-bold uppercase text-outline">Active Users</p>
                <p className="font-headline-md text-primary">12.4K+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-stack-lg max-w-7xl px-container-margin">
        <div className="grid grid-cols-2 gap-gutter md:grid-cols-3 lg:grid-cols-4">
          {trendingProducts.map((product) => (
            <TrendingProductCard addToCart={addToCart} handleLink={handleLink} key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-sky-tint/50 py-stack-lg">
        <div className="mx-auto max-w-7xl px-container-margin">
          <div className="mb-stack-md flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">OOTD Inspirasi</h2>
              <p className="text-body-md text-on-surface-variant">Cek gaya keren Vibe-Mates kita pake barang thrift.</p>
            </div>
            <button className="rounded-full border-2 border-vibrant-purple bg-white px-6 py-2 font-label-md text-vibrant-purple transition-all hover:bg-vibrant-purple hover:text-white">
              Submit OOTD-mu
            </button>
          </div>
          <div className="grid h-auto grid-cols-2 gap-gutter lg:h-[600px] md:grid-cols-4">
            {ootdImages.map((item) => (
              <div className={`group relative overflow-hidden rounded-2xl ${item.className}`} key={item.title}>
                <img
                  alt={item.title}
                  className="h-full min-h-[180px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={item.image}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-on-surface/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-bold text-white">"{item.title}"</p>
                  <p className="text-sm text-sky-tint">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-stack-lg max-w-7xl px-container-margin">
        <h3 className="mb-gutter font-headline-md text-on-surface">Paling Banyak Dicari</h3>
        <div className="flex flex-wrap gap-stack-sm">
          {['Y2KAesthetic', 'BlokeCore', 'EarthToneVibes', 'BaggyJeans', 'VintageNike', 'EcoFriendlyFabric'].map(
            (keyword) => (
              <span
                className="cursor-pointer rounded-full border border-sky-tint bg-surface px-4 py-2 text-body-md text-primary transition-colors hover:bg-pastel-lavender"
                key={keyword}
              >
                #{keyword}
              </span>
            )
          )}
        </div>
      </section>
    </main>
  );
}

function TrendingProductCard({ addToCart, handleLink, product }) {
  const detailHref = `/catalog/${product.id}.html`;
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-sky-tint bg-surface transition-all duration-300 hover:border-vibrant-purple hover:bg-white">
      <a className="relative block aspect-[4/5] overflow-hidden" href={detailHref} onClick={(event) => handleLink(event, detailHref)}>
        <img
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={product.image}
        />
        <div className={`absolute left-4 top-4 rounded-lg px-3 py-1 font-label-md text-label-md shadow-sm ${product.tagClass}`}>
          {product.tag}
        </div>
        <button
          className="absolute bottom-4 right-4 rounded-full bg-white/80 p-2 text-primary backdrop-blur transition-colors hover:bg-vibrant-purple hover:text-white"
          onClick={(event) => {
            event.preventDefault();
            addToCart(product);
          }}
          type="button"
        >
          <span className="material-symbols-outlined">shopping_bag</span>
        </button>
      </a>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="truncate font-headline-md text-sm lg:text-base">{product.title}</h3>
        <p className="font-bold text-vibrant-purple">{product.displayPrice}</p>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-6 w-6 overflow-hidden rounded-full border border-sky-tint bg-surface-container">
            <img alt="" className="h-full w-full object-cover" src={product.image} />
          </div>
          <span className="text-xs text-on-surface-variant">@vibemate</span>
        </div>
        <button
          className="mt-stack-sm w-full rounded-lg bg-vibrant-purple py-2 font-label-md text-on-primary transition-transform active:scale-95"
          onClick={() => addToCart(product)}
          type="button"
        >
          Sikat Sekarang
        </button>
      </div>
    </article>
  );
}

function CartPage({ cart, cartTotal, handleLink, removeFromCart, updateQty }) {
  return (
    <main className="mx-auto max-w-7xl px-container-margin py-stack-lg">
      <div className="mb-stack-md flex flex-col justify-between gap-gutter md:flex-row md:items-end">
        <div>
          <span className="mb-4 inline-flex items-center gap-base rounded-full bg-secondary-fixed px-3 py-1 font-label-md text-label-md text-on-secondary-fixed">
            <span className="material-symbols-outlined text-sm">shopping_cart</span>
            ADD TO CART
          </span>
          <h1 className="font-display-lg text-display-lg text-on-surface">Keranjang Bestie</h1>
          <p className="mt-3 max-w-2xl text-body-lg text-on-surface-variant">
            Semua item thrift cuma satuan. Kalau sudah cocok, jangan kelamaan mikir.
          </p>
        </div>
        <a
          className="inline-flex items-center justify-center gap-base rounded-lg bg-secondary-fixed px-stack-md py-base font-label-md text-on-secondary-fixed hover:bg-secondary-fixed-dim"
          href="/catalog.html"
          onClick={(event) => handleLink(event, '/catalog.html')}
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Lanjut Belanja
        </a>
      </div>

      {cart.length === 0 ? (
        <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-lg text-center">
          <span className="material-symbols-outlined mb-base text-6xl text-primary">shopping_bag</span>
          <h2 className="mb-base font-headline-lg text-headline-lg">Keranjang masih kosong</h2>
          <p className="mx-auto mb-stack-md max-w-md text-body-md text-on-surface-variant">
            Mulai dari katalog dan tambahkan item favorit kamu ke keranjang.
          </p>
          <a
            className="inline-flex rounded-lg bg-primary px-stack-md py-base font-label-md text-on-primary"
            href="/catalog.html"
            onClick={(event) => handleLink(event, '/catalog.html')}
          >
            Buka Katalog
          </a>
        </section>
      ) : (
        <div className="grid grid-cols-1 gap-stack-md lg:grid-cols-12">
          <section className="space-y-gutter lg:col-span-8">
            {cart.map(({ product, qty }) => (
              <article
                className="grid grid-cols-[96px_1fr] gap-gutter rounded-xl border border-outline-variant bg-surface-container-lowest p-gutter shadow-sm md:grid-cols-[140px_1fr_auto]"
                key={product.id}
              >
                <img alt={product.title} className="aspect-square rounded-lg object-cover" src={product.image} />
                <div>
                  <span className="text-[12px] font-label-md uppercase text-outline">{product.category}</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">{product.title}</h2>
                  <p className="mt-1 font-label-md text-primary">{product.displayPrice}</p>
                  <button
                    className="mt-base font-label-md text-error hover:underline"
                    onClick={() => removeFromCart(product.id)}
                    type="button"
                  >
                    Hapus
                  </button>
                </div>
                <div className="col-span-2 flex items-center justify-between gap-base md:col-span-1 md:flex-col md:items-end">
                  <div className="flex items-center rounded-lg border border-outline-variant">
                    <button
                      className="px-3 py-2 text-primary"
                      onClick={() => updateQty(product.id, qty - 1)}
                      type="button"
                    >
                      -
                    </button>
                    <span className="min-w-8 text-center font-label-md">{qty}</span>
                    <button
                      className="px-3 py-2 text-primary"
                      onClick={() => updateQty(product.id, qty + 1)}
                      type="button"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-headline-md text-primary">{money(product.price * qty)}</span>
                </div>
              </article>
            ))}
          </section>
          <aside className="h-fit rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-md shadow-sm lg:col-span-4">
            <h2 className="mb-stack-md font-headline-lg text-headline-lg">Ringkasan</h2>
            <div className="mb-base flex justify-between text-body-md text-on-surface-variant">
              <span>Subtotal</span>
              <span>{money(cartTotal)}</span>
            </div>
            <div className="mb-base flex justify-between text-body-md text-on-surface-variant">
              <span>Pengiriman</span>
              <span>Rp 0</span>
            </div>
            <div className="my-stack-sm h-[1px] bg-outline-variant" />
            <div className="mb-stack-md flex justify-between font-headline-md text-headline-md text-on-surface">
              <span>Total</span>
              <span className="text-primary">{money(cartTotal)}</span>
            </div>
            <button
              className="flex w-full items-center justify-center gap-base rounded-lg bg-primary py-4 font-headline-md text-on-primary transition-all hover:bg-on-primary-fixed-variant active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined">payments</span>
              Checkout
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}

function Footer({ handleLink }) {
  return (
    <footer className="mt-stack-lg w-full bg-surface-container-low">
      <div className="mx-auto max-w-7xl px-container-margin py-stack-md">
        <div className="mb-stack-md grid grid-cols-1 gap-gutter md:grid-cols-4">
          <div className="space-y-base">
            <div className="flex items-center gap-2">
              <Logo />
              <div className="font-headline-md text-headline-md text-vibrant-purple">ThriftVibe</div>
            </div>
            <p className="max-w-xs font-label-md text-label-md text-on-surface-variant">
              Destinasi thrifting online nomor satu buat anak muda yang melek gaya dan peduli lingkungan.
            </p>
          </div>
          <FooterList
            handleLink={handleLink}
            links={[
              ['Catalog', '/catalog.html'],
              ['Eco Mission', '/eco-mission.html'],
              ['Trending', '/trending.html'],
            ]}
            title="Quick Links"
          />
          <FooterList
            links={[
              ['Shipping FAQ', '#'],
              ['Returns Policy', '#'],
              ['Contact Bestie', '#'],
            ]}
            title="Support"
          />
          <FooterList
            links={[
              ['Privacy Policy', '#'],
              ['Terms of Service', '#'],
              ['Sustainability Report', '#'],
            ]}
            title="Legal"
          />
        </div>
        <div className="mb-stack-md h-[2px] w-full bg-sky-tint" />
        <div className="flex flex-col items-center justify-between gap-gutter font-label-md text-label-md text-on-surface-variant md:flex-row">
          <div>&copy; 2024 ThriftVibe. All rights reserved.</div>
          <div className="flex gap-stack-md">
            <a className="cursor-pointer transition-colors hover:text-vibrant-purple">Instagram</a>
            <a className="cursor-pointer transition-colors hover:text-vibrant-purple">TikTok</a>
            <a className="cursor-pointer transition-colors hover:text-vibrant-purple">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ handleLink, links, title }) {
  return (
    <div>
      <h4 className="mb-base font-label-md text-label-md uppercase tracking-wider text-primary">{title}</h4>
      <ul className="space-y-base font-label-md text-label-md text-on-surface-variant">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              className="cursor-pointer transition-colors hover:text-vibrant-purple"
              href={href}
              onClick={href === '#' ? undefined : (event) => handleLink(event, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
