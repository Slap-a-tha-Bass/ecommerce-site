import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} bg-gray-700`}>
      <div className="max-w-7xl mx-auto sm:px-4 lg:px-8 lg:divide-y lg:divide-gray-200">
        <div className="relative h-16 flex justify-between items-center">
          <div className="relative z-10 px-2 flex lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block h-8 w-auto"
                src="/favicon/apple-touch-icon.png"
                alt="Ecommerce"
              />
            </div>
          </div>
          <h2 className="text-white text-3xl ">Ecommerce</h2>
        </div>
      </div>
    </nav>
  );
}
