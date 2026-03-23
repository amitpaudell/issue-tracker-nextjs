import { IssueStatusBadge } from '../../../app/components';
import { prisma } from '@/lib/prisma';
import { Heading, Flex, Card, Text } from '@radix-ui/themes';

import { notFound } from 'next/navigation';

import Markdown from 'react-markdown';

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) {
    notFound();
  }

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="4">
        <IssueStatusBadge status={issue.status}></IssueStatusBadge>
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose prose-slate max-w-none" mt="4">
        <Markdown>{issue.description}</Markdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
