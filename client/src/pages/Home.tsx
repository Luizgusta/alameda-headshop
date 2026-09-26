import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  Truck,
  UserRound,
  X,
} from "lucide-react";

const categories = [
  { label: "Sedas & papéis", image: "./images/alameda-category-sedas.jpg", tone: "from-[#6b4f35]" },
  { label: "Acessórios", image: "./images/alameda-category-acessorios.jpg", tone: "from-[#1e312a]" },
  { label: "Tabacos", image: "./images/alameda-category-tabaco.jpg", tone: "from-[#8c5534]" },
];

const products = [
  { name: "Piteira Alameda Large", category: "Acessórios", price: "R$ 8,00", oldPrice: "", image: "./images/produto-seda-acrema.jpg", tag: "Alameda" },
  { name: "Seda Papelito Brown King Size", category: "Sedas", price: "R$ 4,00", oldPrice: "", image: "./images/papelitos.jpg", tag: "Essencial" },
  { name: "Tabaco Santorini 25g", category: "Tabacos", price: "R$ 25,00", oldPrice: "", image: "./images/Tabaco-Santorini-25g.jpg", tag: "Curadoria" },
  { name: "RAW x Matuê", category: "Combos", price: "R$ 49,00", oldPrice: "R$ 9,00", image: "./images/RAW x Matuê.jpg", tag: "Oferta" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState(0);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const addToCart = () => setCart((value) => value + 1);

  return (
    <div className="min-h-screen bg-[#f3f1ea] text-[#1f2b25]">
      <div className="bg-[#1f2b25] px-5 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e6b86b] sm:text-xs">
        Envio discreto para todo o Brasil · Pagamento seguro
      </div>

      <header className="sticky top-0 z-40 border-b border-[#1f2b25]/10 bg-[#f3f1ea]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1320px] items-center justify-between gap-6 px-5 lg:px-10">
          <button className="lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <a href="#top" className="group flex items-center gap-3" aria-label="Alameda Headshop">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1f2b25] text-sm font-black text-[#e6b86b] transition-transform group-hover:rotate-12">a.</span>
            <span className="hidden leading-none sm:block"><strong className="block font-display text-xl tracking-[-0.04em]">alameda</strong><small className="mt-1 block text-[9px] uppercase tracking-[0.28em] text-[#65736a]">headshop</small></span>
          </a>
          <nav className={`${menuOpen ? "absolute left-0 right-0 top-[74px] flex" : "hidden"} flex-col gap-5 border-b border-[#1f2b25]/10 bg-[#f3f1ea] px-5 py-6 text-xs font-bold uppercase tracking-[0.16em] lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0`}>
            <a href="#colecao" className="transition-colors hover:text-[#b1723c]">Coleção</a>
            <a href="#categorias" className="transition-colors hover:text-[#b1723c]">Categorias</a>
            <a href="#alameda" className="transition-colors hover:text-[#b1723c]">Sobre a Alameda</a>
          </nav>
          <div className="flex flex-1 items-center justify-end gap-4 lg:gap-6">
            <label className="hidden max-w-[250px] flex-1 items-center gap-2 border-b border-[#1f2b25]/25 pb-2 text-[#65736a] md:flex">
              <Search size={16} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar na Alameda" className="w-full bg-transparent text-sm outline-none placeholder:text-[#65736a]" />
            </label>
            <button className="hidden text-[#65736a] transition-colors hover:text-[#1f2b25] sm:block" aria-label="Minha conta"><UserRound size={19} strokeWidth={1.7} /></button>
            <button className="relative transition-transform hover:-translate-y-0.5" aria-label="Carrinho"><ShoppingBag size={21} strokeWidth={1.7} /><span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-[#c67945] px-1 text-[9px] font-bold text-white">{cart}</span></button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden bg-[#1f2b25] text-[#f3f1ea]">
          <div className="absolute inset-0 bg-[url('/alameda-headshop/images/alameda-hero.jpg')] bg-cover bg-center opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f2b25] via-[#1f2b25]/80 to-transparent" />
          <div className="relative mx-auto grid min-h-[610px] max-w-[1320px] items-center px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-28">
            <div className="max-w-[650px]">
              <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e6b86b]"><span className="h-px w-10 bg-[#e6b86b]" /> Curadoria para quem tem estilo</div>
              <h1 className="max-w-2xl font-display text-6xl font-medium leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-[92px]">Eleve sua <em className="font-editorial font-normal text-[#e6b86b]">experiência.</em></h1>
              <p className="mt-8 max-w-md text-base leading-7 text-[#d5dbd2] sm:text-lg">Acessórios, tabacos e detalhes escolhidos para deixar cada momento mais seu. Discreto no envio. Próximo no atendimento.</p>
              <div className="mt-10 flex flex-wrap items-center gap-4"><a href="#colecao" className="group inline-flex items-center gap-3 rounded-full bg-[#e6b86b] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#1f2b25] transition-transform hover:-translate-y-1">Explorar coleção <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a><a href="#alameda" className="text-xs font-bold uppercase tracking-[0.15em] text-[#f3f1ea] underline decoration-[#e6b86b] underline-offset-8">Conheça a Alameda</a></div>
            </div>
            <div className="hidden justify-end lg:flex"><div className="mr-10 mt-32 max-w-[190px] border-l border-[#e6b86b]/60 pl-5 text-xs leading-5 text-[#d5dbd2]"><Sparkles size={20} className="mb-4 text-[#e6b86b]" /><strong className="mb-2 block text-[#f3f1ea]">Seu ritual, sua assinatura.</strong>Peças que conversam com o seu jeito de viver.</div></div>
          </div>
        </section>

        <section className="border-b border-[#1f2b25]/10 bg-[#e6b86b] px-5 py-4"><div className="mx-auto flex max-w-[1320px] flex-wrap justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1f2b25]"><span className="flex items-center gap-2"><Truck size={15} /> Envio para todo Brasil</span><span className="flex items-center gap-2"><Check size={15} /> Produtos selecionados</span><span className="flex items-center gap-2"><Heart size={15} /> Atendimento de verdade</span></div></section>

        <section id="categorias" className="mx-auto max-w-[1320px] px-5 py-20 lg:px-10 lg:py-28"><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Explore por categoria</p><h2 className="mt-3 font-display text-4xl tracking-[-0.05em] sm:text-5xl">Tudo para compor <em className="font-editorial font-normal text-[#b1723c]">seu momento.</em></h2></div><a href="#colecao" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#65736a] hover:text-[#b1723c]">Ver tudo <ArrowRight size={15} /></a></div><div className="grid gap-4 md:grid-cols-3">{categories.map((category, index) => <a key={category.label} href="#colecao" className="group relative min-h-[300px] overflow-hidden rounded-[2px] bg-[#1f2b25]"><img src={category.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90" /><div className={`absolute inset-0 bg-gradient-to-t ${category.tone} via-transparent to-transparent`} /><div className="relative flex h-full min-h-[300px] flex-col justify-end p-6 text-white"><span className="mb-3 text-xs text-[#e6b86b]">0{index + 1}</span><h3 className="font-display text-3xl tracking-[-0.04em]">{category.label}</h3><span className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] opacity-0 transition-opacity group-hover:opacity-100">Descobrir <ArrowRight size={14} /></span></div></a>)}</div></section>

        <section id="colecao" className="bg-[#e8e6dd] px-5 py-20 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1320px]"><div className="flex flex-col justify-between gap-8 border-b border-[#1f2b25]/15 pb-8 sm:flex-row sm:items-end"><div><p className="eyebrow">A seleção Alameda</p><h2 className="mt-3 font-display text-4xl tracking-[-0.05em] sm:text-5xl">Favoritos da casa</h2></div><div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.12em]">{["Todos", "Sedas", "Tabacos", "Acessórios", "Combos"].map((item) => <button key={item} onClick={() => setActiveCategory(item)} className={`border-b-2 px-1 pb-2 transition-colors ${activeCategory === item ? "border-[#b1723c] text-[#b1723c]" : "border-transparent text-[#65736a] hover:text-[#1f2b25]"}`}>{item}</button>)}</div></div><div className="mt-10 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">{filteredProducts.map((product) => <article key={product.name} className="group"><div className="relative aspect-[4/4.7] overflow-hidden bg-[#d8d6cd]"><img src={product.image} alt={product.name} className="h-full w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-105" /><span className="absolute left-3 top-3 bg-[#f3f1ea] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#65736a]">{product.tag}</span><button onClick={addToCart} className="absolute bottom-3 left-3 right-3 translate-y-2 bg-[#1f2b25] py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#f3f1ea] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">Adicionar ao carrinho</button></div><div className="mt-4 flex items-start justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9b6b4a]">{product.category}</p><h3 className="mt-1 font-display text-xl tracking-[-0.03em]">{product.name}</h3></div><div className="text-right text-sm font-bold text-[#1f2b25]"><span className={product.oldPrice ? "block text-xs font-normal text-[#65736a] line-through" : "hidden"}>{product.oldPrice}</span>{product.price}</div></div></article>)}</div>{filteredProducts.length === 0 && <p className="py-20 text-center text-[#65736a]">Nenhum produto encontrado para esta busca.</p>}</div></section>

        <section id="alameda" className="mx-auto grid max-w-[1320px] gap-12 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10 lg:py-28"><div className="relative min-h-[390px] overflow-hidden bg-[#1f2b25]"><div className="absolute inset-8 border border-[#e6b86b]/40" /><div className="absolute -right-8 -top-8 h-56 w-56 rounded-full bg-[#b1723c]/50 blur-3xl" /><div className="relative flex min-h-[390px] flex-col justify-between p-10 text-[#f3f1ea]"><span className="font-display text-7xl text-[#e6b86b]">a.</span><p className="max-w-[220px] text-sm leading-6 text-[#d5dbd2]">Mais que uma headshop. Um ponto de encontro para quem vive a cultura.</p></div></div><div className="max-w-xl"><p className="eyebrow">Sobre a Alameda</p><h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.05em] sm:text-6xl">Curadoria boa é aquela que <em className="font-editorial font-normal text-[#b1723c]">faz sentido.</em></h2><p className="mt-7 text-base leading-7 text-[#65736a]">Cada item que chega por aqui passa por um olhar atento: qualidade, personalidade e a vontade de oferecer uma experiência de compra leve, segura e sem complicação.</p><p className="mt-4 text-base leading-7 text-[#65736a]">A gente acredita em atendimento próximo, novidades constantes e envio discreto — do jeito que tem que ser.</p><a href="mailto:contato.alamedaweed@gmail.com" className="mt-8 inline-flex items-center gap-3 border-b border-[#b1723c] pb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1f2b25]">Fale com a gente <ArrowRight size={15} /></a></div></section>
      </main>

      <footer className="bg-[#1f2b25] px-5 py-14 text-[#f3f1ea] lg:px-10"><div className="mx-auto grid max-w-[1320px] gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]"><div><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#e6b86b] text-sm font-black text-[#1f2b25]">a.</span><span className="font-display text-xl">alameda</span></div><p className="mt-6 max-w-xs text-sm leading-6 text-[#aebbb0]">Seu ritual, sua assinatura. Produtos selecionados e envio discreto.</p></div><div><p className="eyebrow text-[#e6b86b]">Navegue</p><div className="mt-5 space-y-3 text-sm text-[#aebbb0]"><a className="block hover:text-white" href="#colecao">Coleção</a><a className="block hover:text-white" href="#categorias">Categorias</a><a className="block hover:text-white" href="#alameda">Sobre a Alameda</a></div></div><div><p className="eyebrow text-[#e6b86b]">Atendimento</p><div className="mt-5 space-y-3 text-sm text-[#aebbb0]"><a className="block hover:text-white" href="tel:+5515996929387">(15) 99692-9387</a><a className="block break-all hover:text-white" href="mailto:contato.alamedaweed@gmail.com">contato.alamedaweed@gmail.com</a><span className="block">Seg — Sex · 9h às 18h</span></div></div><div><p className="eyebrow text-[#e6b86b]">Receba novidades</p><p className="mt-5 text-sm leading-6 text-[#aebbb0]">Lançamentos e achados da Alameda, sem spam.</p><div className="mt-4 flex border-b border-[#aebbb0]/40 pb-2"><input placeholder="Seu melhor e-mail" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#7f8f83]" /><button aria-label="Assinar novidades"><ArrowRight size={16} className="text-[#e6b86b]" /></button></div></div></div><div className="mx-auto mt-14 flex max-w-[1320px] flex-col justify-between gap-3 border-t border-[#aebbb0]/20 pt-6 text-[10px] uppercase tracking-[0.16em] text-[#7f8f83] sm:flex-row"><span>© 2026 Alameda Headshop · CNPJ 42.093.002/0001-12</span><span>Pagamento seguro · Privacidade em primeiro lugar</span></div></footer>
    </div>
  );
}
