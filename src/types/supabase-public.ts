export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type PublicDatabase = {
  public: {
    Tables: {
      profile: {
        Row: {
          address: string | null;
          created_at: string;
          id: number;
          isAccepted: boolean | null;
          phone: string | null;
          postcode: string | null;
          user_id: string | null;
        };
        Insert: {
          address?: string | null;
          created_at?: string;
          id?: number;
          isAccepted?: boolean | null;
          phone?: string | null;
          postcode?: string | null;
          user_id?: string | null;
        };
        Update: {
          address?: string | null;
          created_at?: string;
          id?: number;
          isAccepted?: boolean | null;
          phone?: string | null;
          postcode?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "profile_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = PublicDatabase[Extract<keyof PublicDatabase, "public">];

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"]) | { schema: keyof PublicDatabase },
  TableName extends PublicTableNameOrOptions extends { schema: keyof PublicDatabase }
    ? keyof (PublicDatabase[PublicTableNameOrOptions["schema"]]["Tables"] &
        PublicDatabase[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof PublicDatabase }
  ? (PublicDatabase[PublicTableNameOrOptions["schema"]]["Tables"] &
      PublicDatabase[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  ? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof PublicDatabase },
  TableName extends PublicTableNameOrOptions extends { schema: keyof PublicDatabase }
    ? keyof PublicDatabase[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof PublicDatabase }
  ? PublicDatabase[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof PublicDatabase },
  TableName extends PublicTableNameOrOptions extends { schema: keyof PublicDatabase }
    ? keyof PublicDatabase[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof PublicDatabase }
  ? PublicDatabase[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof PublicDatabase },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof PublicDatabase }
    ? keyof PublicDatabase[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof PublicDatabase }
  ? PublicDatabase[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
