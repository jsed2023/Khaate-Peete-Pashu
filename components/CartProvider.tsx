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

export type CartItem = {
  product: Product;
  qty: number;
};

type CartContextType = {
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
const CartContext = createContext<CartContextType | null>(null);

function restoreCart(raw: string | null): CartItem[] {
  if (!raw) return [];

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const restored = new Map<string, CartItem>();

    for (const entry of parsed) {
      if (
        !entry ||
        typeof entry !== "object" ||
        !("product" in entry) ||
        !entry.product ||
        typeof entry.product !== "object" ||
        !("id" in entry.product) ||
        typeof entry.product.id !== "string" ||
        !("qty" in entry) ||
        typeof entry.qty !== "number" ||
        !Number.isSafeInteger(entry.qty) ||
        entry.qty < 1
      ) {
        continue;
      }

      const product = activeProducts.find(
        (item) => item.id === entry.product.id
      );

      if (!product) continue;

      const existing = restored.get(product.id);

      restored.set(product.id, {
        product,
        qty: Math.min(
          999,
          (existing?.qty ?? 0) + Math.min(entry.qty, 999)
        ),
      });
    }

    return Array.from(restored.values());
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
    try {
      const restoredItems = restoreCart(
        window.localStorage.getItem(CART_KEY)
      );

      // Restore browser state after mounting to avoid SSR mismatch.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setItems(restoredItems);
    } catch {
      // Continue with an empty cart if storage is unavailable.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {
      // Cart remains usable if browser storage is unavailable.
    }
  }, [items, hydrated]);

  const value = useMemo<CartContextType>(
    () => ({
      items,
      hydrated,

      count: items.reduce((total, item) => total + item.qty, 0),

      subtotal: items.reduce(
        (total, item) => total + item.product.price * item.qty,
        0
      ),

      add: (product) => {
        // Resolve the product from the trusted product catalogue.
        const trustedProduct = activeProducts.find(
          (item) => item.id === product.id
        );

        if (!trustedProduct) return;

        setItems((current) => {
          const existing = current.find(
            (item) => item.product.id === trustedProduct.id
          );

          if (existing) {
            return current.map((item) =>
              item.product.id === trustedProduct.id
                ? { ...item, qty: Math.min(999, item.qty + 1) }
                : item
            );
          }

          return [
            ...current,
            { product: trustedProduct, qty: 1 },
          ];
        });
      },

      remove: (id) => {
        setItems((current) =>
          current.filter((item) => item.product.id !== id)
        );
      },

      change: (id, qty) => {
        const safeQty = Number.isFinite(qty)
          ? Math.min(999, Math.max(0, Math.floor(qty)))
          : 0;

        setItems((current) =>
          safeQty === 0
            ? current.filter((item) => item.product.id !== id)
            : current.map((item) =>
                item.product.id === id
                  ? { ...item, qty: safeQty }
                  : item
              )
        );
      },

      clear: () => setItems([]),
    }),
    [items, hydrated]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}