export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      order_items_sizing: {
        Row: { id: string; inventory_id: string; item_type: string; order_id: string; selected_size: Database["public"]["Enums"]["size_option"] }
        Insert: { id?: string; inventory_id: string; item_type: string; order_id: string; selected_size: Database["public"]["Enums"]["size_option"] }
        Update: { id?: string; inventory_id?: string; item_type?: string; order_id?: string; selected_size?: Database["public"]["Enums"]["size_option"] }
      }
      orders: {
        Row: { collected_at: string | null; created_at: string; id: string; is_collected: boolean | null; package_id: string; payment_reference: string | null; qr_code_token: string | null; status: Database["public"]["Enums"]["order_status"] | null; total_amount_ttd: number; updated_at: string; user_id: string }
        Insert: { collected_at?: string | null; created_at?: string; id?: string; is_collected?: boolean | null; package_id: string; payment_reference?: string | null; qr_code_token?: string | null; status?: Database["public"]["Enums"]["order_status"] | null; total_amount_ttd: number; updated_at?: string; user_id: string }
        Update: { collected_at?: string | null; created_at?: string; id?: string; is_collected?: boolean | null; package_id?: string; payment_reference?: string | null; qr_code_token?: string | null; status?: Database["public"]["Enums"]["order_status"] | null; total_amount_ttd?: number; updated_at?: string; user_id?: string }
      }
      package_inventory: {
        Row: { id: string; item_type: string; package_id: string; size: Database["public"]["Enums"]["size_option"]; sold_stock: number; total_stock: number }
        Insert: { id?: string; item_type: string; package_id: string; size: Database["public"]["Enums"]["size_option"]; sold_stock?: number; total_stock?: number }
        Update: { id?: string; item_type?: string; package_id?: string; size?: Database["public"]["Enums"]["size_option"]; sold_stock?: number; total_stock?: number }
      }
      packages: {
        Row: { created_at: string; description: string | null; id: string; is_active: boolean | null; name: string; price_ttd: number; slug: string }
        Insert: { created_at?: string; description?: string | null; id?: string; is_active?: boolean | null; name: string; price_ttd: number; slug: string }
        Update: { created_at?: string; description?: string | null; id?: string; is_active?: boolean | null; name?: string; price_ttd?: number; slug?: string }
      }
      profiles: {
        Row: { created_at: string; emergency_contact_name: string | null; emergency_contact_phone: string | null; full_name: string; id: string; phone_number: string; updated_at: string }
        Insert: { created_at?: string; emergency_contact_name?: string | null; emergency_contact_phone?: string | null; full_name: string; id: string; phone_number: string; updated_at?: string }
        Update: { created_at?: string; emergency_contact_name?: string | null; emergency_contact_phone?: string | null; full_name?: string; id?: string; phone_number?: string; updated_at?: string }
      }
    }
    Enums: {
      order_status: "pending" | "paid" | "cancelled" | "collected"
      size_option: "XS" | "S" | "M" | "L" | "XL" | "2XL" | "3XL"
    }
  }
}
