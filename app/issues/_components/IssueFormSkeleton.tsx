import { Box } from '@radix-ui/themes';
import React from 'react';
import { Skeleton } from '../../../app/components';
const IssuseFormSkeleton = () => {
  return (
    <Box>
      <Skeleton className="max-w-xl"></Skeleton>
      <Skeleton height="20rem"></Skeleton>
      <Skeleton width="8rem"></Skeleton>
    </Box>
  );
};

export default IssuseFormSkeleton;
