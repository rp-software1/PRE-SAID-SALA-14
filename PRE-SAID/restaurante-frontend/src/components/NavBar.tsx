"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",        label: "Dashboard",  icon: "⊞" },
  { href: "/platos",  label: "Platos",     icon: "🍲" },
  { href: "/mesas",   label: "Mesas",      icon: "🪑" },
  { href: "/pedidos", label: "Pedidos",    icon: "📋" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(13,13,13,0.8)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "10px",
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "18px", boxShadow: "0 0 16px rgba(245,158,11,0.35)",
              }}>
                🍽️
              </div>
              <span style={{
                fontWeight: 700, fontSize: "1.1rem",
                background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                letterSpacing: "-0.01em",
              }}>
                RestaurantePRO
              </span>
            </div>
          </Link>

          {/* Links */}
          <div style={{ display: "flex", gap: "4px" }}>
            {navLinks.map(({ href, label, icon }) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href} style={{ textDecoration: "none" }}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    padding: "8px 16px", borderRadius: "8px",
                    fontSize: "0.875rem", fontWeight: 500,
                    transition: "all 0.2s",
                    background: active ? "rgba(245,158,11,0.15)" : "transparent",
                    color: active ? "#fbbf24" : "rgba(255,255,255,0.6)",
                    border: active ? "1px solid rgba(245,158,11,0.3)" : "1px solid transparent",
                  }}>
                    <span style={{ fontSize: "15px" }}>{icon}</span>
                    {label}
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </nav>
  );
}
