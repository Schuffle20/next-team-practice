// this utility is to get return label for layout in setting

const ROUTE_LABELS = {
  "/dashboard": "Dashboard",
  "/setting/profile": "Profile Setting",
  "/setting/password": "Password Setting",
  "/setting/appearance": "Appearance Setting",
} as const;
export type UserRoute = keyof typeof ROUTE_LABELS;

export const returnLabel = (path: string) => {
  const label =
    ROUTE_LABELS[path as UserRoute] ??
    "This route is not added in Route_Labels. Please add.";
  return label;
};
