import axios from "axios";

export async function wordpressApi() {
  return axios.create({
    baseURL:
      (typeof window !== "undefined"
        ? process.env.NEXT_PUBLIC_WORDPRESS_API
        : process.env.INNER_WORDPRESS_API) || "https://clientblog.ommnews.in",
    headers: {
      "Content-Type": "application/json",
      // Cookie: `refreshToken=${accessToken}`,
      //   Authorization: `Bearer ${accessToken}`,
    },
  });
}
