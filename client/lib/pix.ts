export type PixKeyType = "aleatoria" | "email" | "cpf_cnpj" | "celular";

export interface PixKey {
  id: string;
  type: PixKeyType;
  value: string;
  createdAt: string; // ISO string
}

const STORAGE_KEY = "pixKeys";

export function loadPixKeys(): PixKey[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as PixKey[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function savePixKeys(keys: PixKey[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(keys));
}

export function addPixKey(key: Omit<PixKey, "id" | "createdAt"> & { id?: string; createdAt?: string }): PixKey[] {
  const keys = loadPixKeys();
  const newKey: PixKey = {
    id: key.id ?? (typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : String(Date.now() + Math.random())),
    createdAt: key.createdAt ?? new Date().toISOString(),
    type: key.type,
    value: key.value.trim(),
  };
  const updated = [newKey, ...keys];
  savePixKeys(updated);
  return updated;
}

export function deletePixKey(id: string): PixKey[] {
  const keys = loadPixKeys().filter((k) => k.id !== id);
  savePixKeys(keys);
  return keys;
}

export function generateRandomPixKey(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  // Fallback simple random string
  return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
}

export function validatePixValue(type: PixKeyType, value: string): boolean {
  const v = value.trim();
  switch (type) {
    case "aleatoria":
      return v.length >= 10; // UUID or random token
    case "email": {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      return re.test(v);
    }
    case "cpf_cnpj": {
      const digits = v.replace(/\D/g, "");
      return digits.length === 11 || digits.length === 14;
    }
    case "celular": {
      const digits = v.replace(/\D/g, "");
      // BR: 10 or 11 digits (without country), allow 12/13 with 55 country code
      return digits.length === 10 || digits.length === 11 || digits.length === 12 || digits.length === 13;
    }
    default:
      return false;
  }
}
