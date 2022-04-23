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
        {Array.from([
          0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ]).map((val) => (
          <Skeleton h={200} w={215} key={val} borderRadius={10}>
            ItemCardSkeleton
          </Skeleton>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ItemCardSkeleton;
