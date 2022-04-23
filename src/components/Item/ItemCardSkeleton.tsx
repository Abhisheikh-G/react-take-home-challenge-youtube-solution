import { Skeleton, SimpleGrid } from "@chakra-ui/react";
import Header from "components/Header";
import React from "react";

const cols = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  "2xl": 5,
};

const ItemCardSkeleton = () => {
  return (
    <>
      <Header />
      <SimpleGrid
        columns={cols}
        spacing="20px"
        alignItems="center"
        justifyItems="center"
        mb={8}
      >
        {Array.from({ length: 20 }, (v, i) => i).map((val) => (
          <Skeleton h={200} w={215} key={val} borderRadius={10}>
            ItemCardSkeleton
          </Skeleton>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ItemCardSkeleton;
