import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "@/index.css";
import App from "@/App.tsx";
import Layout from "@/layout.tsx";
import Blog from "@/pages/blog";
import BlogDetail from "@/blog/blog-detail";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
);
