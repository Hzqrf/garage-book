
import {
  Container,
  Group,
  Text,
  Card,
  SimpleGrid,
  Button,
  Flex,
  ThemeIcon,
  Stack,
} from "@mantine/core";
import {
  TbShoppingCart,
  TbCurrencyDollar,
  TbPackage,
  TbUser,
} from "react-icons/tb";
import { useState } from "react";
// import TableScrollArea from "../components/tableScroll";

export default function Dashboard() {


  const statsData = [
    {
      title: "Total Orders",
      value: "135",
      icon: TbShoppingCart,
      color: "blue",
    },
    {
      title: "Total Sales",
      value: "RM 5543.95",
      icon: TbCurrencyDollar,
      color: "green",
    },
    {
      title: "Available Products",
      value: "82",
      icon: TbPackage,
      color: "orange",
    },
    {
      title: "Total Users",
      value: "264",
      icon: TbUser,
      color: "violet",
    },
  ];

  return (
    <>
    <Text>Dashboard</Text>
    </>
  );
}
