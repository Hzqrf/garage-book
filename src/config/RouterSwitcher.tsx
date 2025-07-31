import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
// import { Text } from "@mantine/core";

const RouterSwitcher = () => {
  return (
    <Routes>
      {/* Redirect root (/) to /login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      {/* Other pages */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/order-list" element={<OrderList />} />
        <Route path="/products/product-list" element={<ProductList />} />
        <Route path="/products/product-items" element={<ProductItems />} />
        <Route path="/campaign/referrals" element={<CampaignReferral />} />
        <Route path="/campaign/giveaways" element={<CampaignGiveaways />} />
        <Route path="/application" element={<Application />} /> */}
      </Route>
    </Routes>
  );
};

export default RouterSwitcher;
