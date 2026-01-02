import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2 mb-4 w-fit hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState({}, '', '/');
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sidebar-primary/20">
                <Heart className="h-5 w-5 text-sidebar-primary" />
              </div>
              <span className="text-xl font-bold">
                Jeevan <span className="text-sidebar-primary">Aahar</span>
              </span>
            </Link>
            <p className="text-sidebar-foreground/70 max-w-md mb-6">
              A Meal. A Smile. A Life. We connect food donors with those in need,
              reducing waste while fighting hunger in our communities.
            </p>
            <div className="flex items-center gap-2 text-sm text-sidebar-foreground/60">
              <Heart className="h-4 w-4 text-sidebar-primary animate-pulse-soft" />
              <span>Made with love for a hunger-free world</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sidebar-primary">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Donate Food", path: "/donate" },
                { name: "Request Food", path: "/requests" },
                { name: "Dashboard", path: "/dashboard" },
                { name: "About Us", path: "/#about" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={(e) => {
                      if (link.path === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        window.history.pushState({}, '', '/');
                      } else if (link.path.startsWith("/#")) {
                        e.preventDefault();
                        const targetId = link.path.substring(2);
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sidebar-primary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-sidebar-foreground/70">
                <Mail className="h-4 w-4 text-sidebar-primary" />
                <span>jeevanahaar@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-sidebar-foreground/70">
                <Phone className="h-4 w-4 text-sidebar-primary" />
                <span>+91 9XXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-sidebar-foreground/70">
                <MapPin className="h-4 w-4 text-sidebar-primary mt-0.5" />
                <span>Kolkata, West Bengal, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-sidebar-border flex flex-col md:flex-row justify-center items-center gap-4">

          <p className="text-sm text-sidebar-foreground/60">
            Together, we can end hunger. 🫶
          </p>
        </div>
      </div>
    </footer>
  );
}
