import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("/", "./routes/home.tsx"),
  route("about", "./routes/about.tsx"),
  route("story", "./routes/ourStory.tsx"),
  route("products", "./routes/productOverview.tsx"),
  route("orivault", "./routes/orivault.tsx"),
] satisfies RouteConfig;
