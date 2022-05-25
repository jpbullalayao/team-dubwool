import React from 'react';

import { Image } from '@professorragna/image';

type Props = {
  src: string;
};

export const Avatar = ({
  src,
}: Props) => (
  <Image
    src={src}
    borderRadius="50px"
    height="100px"
    width="100px"
  />
);
