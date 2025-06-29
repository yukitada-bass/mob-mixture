import hamburgerIcon from "@/assets/hamburger-icon.svg";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Hamburger() {
  return (
    <Sheet>
      <SheetTrigger><img src={hamburgerIcon.src} alt="Menu" /></SheetTrigger>
      <SheetContent>
        <nav>
          <ul>
            <li>
              <a href="/news/">お知らせ</a>
            </li>
            <li>
              <a href="/schedule/">スケジュール</a>
            </li>
            <li>
              <a href="/release/">リリース</a>
            </li>
            <li>
              <a href="/march/">マーチ</a>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
