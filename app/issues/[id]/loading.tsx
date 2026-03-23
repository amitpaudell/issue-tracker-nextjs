import { Flex, Card } from '@radix-ui/themes';

import { Skeleton } from '../../../app/components';
const loading = () => {
  return (
    <div>
      <Skeleton className="max-w-xl"></Skeleton>
      <Flex gap="4">
        <Skeleton width="5rem"></Skeleton>
        <Skeleton width="8rem"></Skeleton>
      </Flex>
      <Card className="prose prose-slate max-w-none" mt="4">
        <Skeleton count={4}></Skeleton>
      </Card>
    </div>
  );
};

export default loading;
