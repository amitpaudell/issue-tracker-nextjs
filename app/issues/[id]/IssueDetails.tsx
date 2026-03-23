import { IssueStatusBadge } from '@/app/components';
import { Issue } from '@/generated/prisma/client';
import { Heading, Flex, Card, Text } from '@radix-ui/themes';
import React from 'react';
import Markdown from 'react-markdown';

interface Props {
  issue: Issue;
}
const IssueDetails = ({ issue }: Props) => {
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

export default IssueDetails;
