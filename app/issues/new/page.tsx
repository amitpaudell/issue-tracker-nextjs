'use client';
import dynamic from 'next/dynamic';
import IssuseFormSkeleton from './loading';

const IssueForm = dynamic(
  () => import('../../../app/issues/_components/IssueForm'),
  {
    ssr: false,
    loading: () => <IssuseFormSkeleton></IssuseFormSkeleton>,
  },
);

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
