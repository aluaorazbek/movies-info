import Image from 'next/image';
//movie image in movie info

type Props = {
  imgUrl: string;
};

const Thumb = ({ imgUrl }: Props) => (
  <Image
    placeholder='blur'
    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNsqgcAAYkBA6rFAegAAAAASUVORK5CYII='
    fill
    sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 20vw'
    src={imgUrl}
    alt='thumb'
  />
);

export default Thumb;
