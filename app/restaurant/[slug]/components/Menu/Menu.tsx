import { Item } from "@prisma/client";
import MenuCard from "../MenuCard/MenuCard";

const Menu = ({ menu }: { menu: Item[] }) => {
  return (
    <div>
      <main className="bg-white mt-5">
        <div>
          <div className="mt-4 pb-1 mb-1">
            <h1 className="font-bold text-4xl">Menu</h1>
          </div>
          <div className="flex flex-wrap justify-between">
            {menu.map((item) => (
              <MenuCard key={item.id.toString()} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
