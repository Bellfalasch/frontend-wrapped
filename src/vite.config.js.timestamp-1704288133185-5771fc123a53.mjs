// src/vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///Users/g022912/code/_play/frontend-wrapped/node_modules/vite/dist/node/index.js";
import { glslify } from "file:///Users/g022912/code/_play/frontend-wrapped/node_modules/vite-plugin-glslify/dist/index.js";
var __vite_injected_original_dirname = "/Users/g022912/code/_play/frontend-wrapped/src";
var root = resolve(__vite_injected_original_dirname, ".");
var vite_config_default = defineConfig({
  base: "/frontend-wrapped",
  plugins: [glslify()],
  root,
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        page1: resolve(root, "page-1", "index.html"),
        page2: resolve(root, "page-2", "index.html"),
        page3: resolve(root, "page-3", "index.html"),
        page4: resolve(root, "page-4", "index.html"),
        page5: resolve(root, "page-5", "index.html"),
        page6: resolve(root, "page-6", "index.html"),
        page7: resolve(root, "page-7", "index.html"),
        theend: resolve(root, "the-end", "index.html")
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3ZpdGUuY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2cwMjI5MTIvY29kZS9fcGxheS9mcm9udGVuZC13cmFwcGVkL3NyY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2cwMjI5MTIvY29kZS9fcGxheS9mcm9udGVuZC13cmFwcGVkL3NyYy92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZzAyMjkxMi9jb2RlL19wbGF5L2Zyb250ZW5kLXdyYXBwZWQvc3JjL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuXG5pbXBvcnQgeyBnbHNsaWZ5IH0gZnJvbSBcInZpdGUtcGx1Z2luLWdsc2xpZnlcIjtcblxuY29uc3Qgcm9vdCA9IHJlc29sdmUoX19kaXJuYW1lLCBcIi5cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdGJhc2U6IFwiL2Zyb250ZW5kLXdyYXBwZWRcIixcblx0cGx1Z2luczogW2dsc2xpZnkoKV0sXG5cdHJvb3Q6IHJvb3QsXG5cdGJ1aWxkOiB7XG5cdFx0cm9sbHVwT3B0aW9uczoge1xuXHRcdFx0aW5wdXQ6IHtcblx0XHRcdFx0bWFpbjogcmVzb2x2ZShyb290LCBcImluZGV4Lmh0bWxcIiksXG5cdFx0XHRcdHBhZ2UxOiByZXNvbHZlKHJvb3QsIFwicGFnZS0xXCIsIFwiaW5kZXguaHRtbFwiKSxcblx0XHRcdFx0cGFnZTI6IHJlc29sdmUocm9vdCwgXCJwYWdlLTJcIiwgXCJpbmRleC5odG1sXCIpLFxuXHRcdFx0XHRwYWdlMzogcmVzb2x2ZShyb290LCBcInBhZ2UtM1wiLCBcImluZGV4Lmh0bWxcIiksXG5cdFx0XHRcdHBhZ2U0OiByZXNvbHZlKHJvb3QsIFwicGFnZS00XCIsIFwiaW5kZXguaHRtbFwiKSxcblx0XHRcdFx0cGFnZTU6IHJlc29sdmUocm9vdCwgXCJwYWdlLTVcIiwgXCJpbmRleC5odG1sXCIpLFxuXHRcdFx0XHRwYWdlNjogcmVzb2x2ZShyb290LCBcInBhZ2UtNlwiLCBcImluZGV4Lmh0bWxcIiksXG5cdFx0XHRcdHBhZ2U3OiByZXNvbHZlKHJvb3QsIFwicGFnZS03XCIsIFwiaW5kZXguaHRtbFwiKSxcblx0XHRcdFx0dGhlZW5kOiByZXNvbHZlKHJvb3QsIFwidGhlLWVuZFwiLCBcImluZGV4Lmh0bWxcIiksXG5cdFx0XHR9LFxuXHRcdFx0b3V0cHV0OiB7XG5cdFx0XHRcdGVudHJ5RmlsZU5hbWVzOiBgW25hbWVdLmpzYCxcblx0XHRcdFx0Y2h1bmtGaWxlTmFtZXM6IGBbbmFtZV0uanNgLFxuXHRcdFx0XHRhc3NldEZpbGVOYW1lczogYFtuYW1lXS5bZXh0XWAsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsU0FBUyxlQUFlO0FBQ3BWLFNBQVMsb0JBQW9CO0FBRTdCLFNBQVMsZUFBZTtBQUh4QixJQUFNLG1DQUFtQztBQUt6QyxJQUFNLE9BQU8sUUFBUSxrQ0FBVyxHQUFHO0FBRW5DLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLE1BQU07QUFBQSxFQUNOLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFBQSxFQUNuQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ04sZUFBZTtBQUFBLE1BQ2QsT0FBTztBQUFBLFFBQ04sTUFBTSxRQUFRLE1BQU0sWUFBWTtBQUFBLFFBQ2hDLE9BQU8sUUFBUSxNQUFNLFVBQVUsWUFBWTtBQUFBLFFBQzNDLE9BQU8sUUFBUSxNQUFNLFVBQVUsWUFBWTtBQUFBLFFBQzNDLE9BQU8sUUFBUSxNQUFNLFVBQVUsWUFBWTtBQUFBLFFBQzNDLE9BQU8sUUFBUSxNQUFNLFVBQVUsWUFBWTtBQUFBLFFBQzNDLE9BQU8sUUFBUSxNQUFNLFVBQVUsWUFBWTtBQUFBLFFBQzNDLE9BQU8sUUFBUSxNQUFNLFVBQVUsWUFBWTtBQUFBLFFBQzNDLE9BQU8sUUFBUSxNQUFNLFVBQVUsWUFBWTtBQUFBLFFBQzNDLFFBQVEsUUFBUSxNQUFNLFdBQVcsWUFBWTtBQUFBLE1BQzlDO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDUCxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNqQjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
