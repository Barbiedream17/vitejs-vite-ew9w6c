import { Skeleton as MantineSkeleton, SkeletonProps } from '@mantine/core';

export function Skeleton(props: SkeletonProps) {
  return <MantineSkeleton {...props} />;
}