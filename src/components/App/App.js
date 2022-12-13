import { BottomBar } from "../BottomBar/BottomBar";
import { Brands } from "../Brands/Brands";
import { Deals } from "../Deals/Deals";
import { Footer } from "../Footer/Footer";
import { Gallery } from "../Gallery/Gallery";
import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import { NewCollection } from "../NewCollection/NewCollection";
import { NewsLetter } from "../NewsLetter/NewsLetter";
import { NewsLetterModal } from "../NewsLetterModal/NewsLetterModal";
import { Topbar } from "../Topbar/Topbar";
import { Banners } from "../Banners/Banners";

import { banners, bannersMobile } from "../../banners";
import { items } from "../../products";

function App() {
  return (
    <div>
      <Topbar />
      <Header />
      <Menu />
      <Banners banners={banners} bannersMobile={bannersMobile} />
      <Deals />
      <Brands />
      <Gallery title="As Mais Pedidas" items={items}/>
      <NewCollection />
      <NewsLetter />
      <Footer />
      <BottomBar />
      <NewsLetterModal />
    </div>
  );
}

export { App };
