import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const IssuesAction = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesAction;
