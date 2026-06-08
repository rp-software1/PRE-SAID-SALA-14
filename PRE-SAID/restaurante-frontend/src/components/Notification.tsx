"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type NotificationType = "success" | "error" | "info";

interface Notification {
  id: string;
  message: string;
  type: NotificationType;
}

interface NotificationContextType {
  notify: (message: string, type: NotificationType) => void;
  notifications: Notification[];
  remove: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = useCallback((message: string, type: NotificationType) => {
    const id = Date.now().toString();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 4000);
  }, []);

  const remove = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ notify, notifications, remove }}>
      {children}
      <NotificationContainer notifications={notifications} remove={remove} />
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("useNotification debe usarse dentro de NotificationProvider");
  return context;
}

const typeConfig: Record<NotificationType, { icon: string; accent: string; bg: string; border: string }> = {
  success: {
    icon: "✓",
    accent: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.3)",
  },
  error: {
    icon: "✕",
    accent: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.3)",
  },
  info: {
    icon: "ℹ",
    accent: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.3)",
  },
};

function NotificationContainer({
  notifications,
  remove,
}: {
  notifications: Notification[];
  remove: (id: string) => void;
}) {
  return (
    <div style={{
      position: "fixed", top: "80px", right: "20px",
      zIndex: 9999, display: "flex", flexDirection: "column", gap: "10px",
      minWidth: "300px", maxWidth: "380px",
    }}>
      {notifications.map((n) => {
        const cfg = typeConfig[n.type];
        return (
          <div
            key={n.id}
            className="animate-slide-right"
            role="alert"
            style={{
              display: "flex", alignItems: "flex-start", gap: "12px",
              padding: "14px 16px",
              background: cfg.bg,
              border: `1px solid ${cfg.border}`,
              borderLeft: `3px solid ${cfg.accent}`,
              borderRadius: "10px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {/* Ícono */}
            <div style={{
              width: "22px", height: "22px", borderRadius: "50%",
              background: cfg.accent,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "12px", color: "#fff", fontWeight: 700, flexShrink: 0,
            }}>
              {cfg.icon}
            </div>

            {/* Mensaje */}
            <p style={{
              flex: 1, fontSize: "0.875rem", color: "var(--text-primary)",
              fontWeight: 500, lineHeight: 1.4, margin: 0,
            }}>
              {n.message}
            </p>

            {/* Botón cerrar */}
            <button
              onClick={() => remove(n.id)}
              style={{
                background: "none", border: "none", padding: "0",
                color: "var(--text-muted)", fontSize: "16px", lineHeight: 1,
                cursor: "pointer", flexShrink: 0,
              }}
            >
              ×
            </button>
          </div>
        );
      })}
    </div>
  );
}
