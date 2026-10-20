
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  activeProducts,
  type Product,
} from "@/config/products";

type CartItem = {
  product: Product;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  subtotal: number;
  hydrated: boolean;
  add: (product: Product) => void;
  remove: (id: string) => void;
  change: (id: string, qty: number) => void;
  clear: () => void;
};

const CART_KEY = "kpp-cart";

const Context = createContext<CartCtx | null>(null);

function restoreCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const restored: CartItem[] = [];

    for (const item of parsed) {
      if (
        !item ||
        typeof item !== "object" ||
        !("product" in item) ||
        !item.product ||
        typeof item.product !== "object" ||
        !("id" in item.product) ||
        typeof item.product.id !== "string" ||
        !("qty" in item) ||
        typeof item.qty !== "number" ||
        !Number.isSafeInteger(item.qty) ||
        item.qty < 1
      ) {
        continue;
      }

      const product = activeProducts.find(
        (p) => p.id === item.product.id
      );

      if (product) {
        restored.push({ product, qty: item.qty });
      }
    }

    return restored;
  } catch {
    return [];
  }
}

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedItems = restoreCart();

    // Restore browser-only state after mounting.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(savedItems);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {
      // Browser storage may be unavailable.
    }
  }, [items, hydrated]);

  const value = useMemo<CartCtx>(
    () => ({
      items,
      hydrated,

      count: items.reduce(
        (total, item) => total + item.qty,
        0
      ),

      subtotal: items.reduce(
        (total, item) =>
          total + item.product.price * item.qty,
        0
      ),

      add: (product: Product) => {
        setItems((current) => {
          const existing = current.find(
            (item) => item.product.id === product.id
          );

          if (existing) {
            return current.map((item) =>
              item.product.id === product.id
                ? { ...item, qty: item.qty + 1 }
                : item
            );
          }

          return [...current, { product, qty: 1 }];
        });
      },

      remove: (id: string) => {
        setItems((current) =>
          current.filter((item) => item.product.id !== id)
        );
      },

      change: (id: string, qty: number) => {
        const safeQty = Number.isFinite(qty)
          ? Math.max(0, Math.floor(qty))
          : 0;

        setItems((current) => {
          if (safeQty === 0) {
            return current.filter(
              (item) => item.product.id !== id
            );
          }

          return current.map((item) =>
            item.product.id === id
              ? { ...item, qty: safeQty }
              : item
          );
        });
      },

      clear: () => setItems([]),
    }),
    [items, hydrated]
  );

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export function useCart() {
  const context = useContext(Context);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
