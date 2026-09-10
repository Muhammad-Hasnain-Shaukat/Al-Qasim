import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BagPage } from './pages/BagPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { WishlistPage } from './pages/WishlistPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SizeGuidePage } from './pages/SizeGuidePage';
import { DeliveryReturnsPage } from './pages/DeliveryReturnsPage';
import { CareGuidePage } from './pages/CareGuidePage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-ivory text-charcoal-800 font-sans selection:bg-charcoal selection:text-ivory">
            {/* Main Navigation Header */}
            <Header />

            {/* Main Content Area */}
            <div className="flex-1 w-full max-w-full overflow-x-hidden">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<CollectionPage />} />
                <Route path="/collections/:category" element={<CollectionPage />} />
                <Route path="/product/:slug" element={<ProductDetailPage />} />
                <Route path="/bag" element={<BagPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/size-guide" element={<SizeGuidePage />} />
                <Route path="/delivery-returns" element={<DeliveryReturnsPage />} />
                <Route path="/care-guide" element={<CareGuidePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>

            {/* Shopping Bag Drawer */}
            <CartDrawer />

            {/* Main Footer */}
            <Footer />
          </div>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
