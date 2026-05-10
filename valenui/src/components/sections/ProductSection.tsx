import { ProductCard } from '../ui/ProductCard';
import { PRODUCTS } from '../../constants/data';

export function ProductSection() {
  return (
    <section className="py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-purple/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-gray-900/60 border border-gray-800 rounded-full backdrop-blur">
            <span className="text-sm text-gray-400 font-medium">SECTION 3 — PRODUCT ECOSYSTEM</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Product Ecosystem
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A growing ecosystem of intelligent platforms and scalable AI infrastructure developed under Valen Labs.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              tag={product.tag}
              title={product.title}
              status={product.status}
              description={product.description}
              featureBullets={product.featureBullets}
              ctaLabel={product.ctaLabel}
              ctaHref={product.ctaHref}
              icon={product.icon}
              index={index}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
