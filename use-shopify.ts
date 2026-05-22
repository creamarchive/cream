import { useQuery } from "@tanstack/react-query";
import client, {
  PRODUCTS_QUERY,
  PRODUCT_BY_HANDLE_QUERY,
  COLLECTIONS_QUERY,
  COLLECTION_BY_HANDLE_QUERY,
  type ShopifyProduct,
  type ShopifyCollection,
} from "@/lib/shopify";

export function useProducts(first = 20) {
  return useQuery<ShopifyProduct[]>({
    queryKey: ["shopify-products", first],
    queryFn: async () => {
      const { data } = await client.request(PRODUCTS_QUERY, {
        variables: { first },
      });
      return (data as any).products.edges.map((e: any) => e.node);
    },
  });
}

export function useProduct(handle: string | undefined) {
  return useQuery<ShopifyProduct | null>({
    queryKey: ["shopify-product", handle],
    enabled: !!handle,
    queryFn: async () => {
      const { data } = await client.request(PRODUCT_BY_HANDLE_QUERY, {
        variables: { handle },
      });
      return (data as any).product ?? null;
    },
  });
}

export function useCollections(first = 20) {
  return useQuery<ShopifyCollection[]>({
    queryKey: ["shopify-collections", first],
    queryFn: async () => {
      const { data } = await client.request(COLLECTIONS_QUERY, {
        variables: { first },
      });
      return (data as any).collections.edges.map((e: any) => e.node);
    },
  });
}

export function useCollection(handle: string | undefined, first = 50) {
  return useQuery<ShopifyCollection | null>({
    queryKey: ["shopify-collection", handle, first],
    enabled: !!handle,
    queryFn: async () => {
      const { data } = await client.request(COLLECTION_BY_HANDLE_QUERY, {
        variables: { handle, first },
      });
      return (data as any).collection ?? null;
    },
  });
}
