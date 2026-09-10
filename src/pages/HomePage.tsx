import React, { useEffect } from 'react';
import { HeroVideo } from '../components/hero/HeroVideo';
import { TheAlQasimEdit } from '../components/home/TheAlQasimEdit';
import { ShopByCollection } from '../components/home/ShopByCollection';
import { EditorialCampaign } from '../components/home/EditorialCampaign';
import { FabricDetail } from '../components/home/FabricDetail';
import { ExploreCollection } from '../components/home/ExploreCollection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full">
      {/* 1. Responsive Autoplaying Hero Video with copy */}
      <HeroVideo />

      {/* 2. The Al Qasim Edit (Faithful Editorial Product Showcase from Reference) */}
      <TheAlQasimEdit />

      {/* 3. Shop by Collection (Editorial 3-column / 2-column mobile) */}
      <ShopByCollection />

      {/* 4. Editorial Campaign Feature */}
      <EditorialCampaign />

      {/* 5. Fabric and Detail Craftsmanship */}
      <FabricDetail />

      {/* 6. Explore Collection (Everyday, Occasion, Unstitched) */}
      <ExploreCollection />
    </main>
  );
};
