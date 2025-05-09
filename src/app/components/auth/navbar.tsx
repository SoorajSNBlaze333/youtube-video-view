import SearchBar from "../misc/search-bar";
import UserActions from "../misc/user-actions";
import AppActions from "../misc/app-actions";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-2 grid grid-cols-9 bg-white dark:bg-black">
      <AppActions />
      <SearchBar />
      <UserActions />
    </nav>
  );
}
